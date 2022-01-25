const shell = require('shelljs');
const chokidar = require('chokidar');

chokidar
    .watch('client/src/**/*.css')
    .on('all', (event, path) => {
        // Mac does not support cp --parents so we use cpio to do the same thing
        if (process.platform === "darwin") {
            shell.exec("find client -name \"*.css\" | cpio -pud --quiet dist");
            shell.exec("find client -name \"*.svg\" | cpio -pud --quiet dist");
            console.log(`${event[0].toLocaleUpperCase()}${event.slice(1)} ${path}`);
        }
        else if (process.platform === "linux") {
            shell.exec("find client -name \"*.css\" | xargs cp --parents -t dist");
            shell.exec("find client -name \"*.svg\" | xargs cp --parents -t dist");
            console.log(`${event[0].toLocaleUpperCase()}${event.slice(1)} ${path}`);
        }
        else {
            console.error("Error copying, not running on linux or darwin, check yoself.")
        }
    });