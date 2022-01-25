const shell = require('shelljs');
const chokidar = require('chokidar');

chokidar
    .watch('client/src/**/*.css')
    .on('all', (event, path) => {
        console.log(`${event[0].toLocaleUpperCase()}${event.slice(1)} ${path}`);
        if (process.platform === "darwin") {
            shell.exec("cd client && find . --name\"*.css\" | cpio -pu  --make-directories ../dist");
            // shell.exec("find client -name \"*.svg\" | xargs rsync -Rr dist");
        }
        else if (process.platform === "linux") {
            shell.exec("find client -name \"*.css\" | xargs cp --parents -t dist");
            shell.exec("find client -name \"*.svg\" | xargs cp --parents -t dist");
        } else {
            console.error("You're not using linux or mac!")
        }
        console.log(process.platform)
    });