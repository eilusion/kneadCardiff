const esbuild = require('esbuild');
const fs = require("fs");
const esbuildConfig = require('./esbuild.config');

esbuild
    .build({
        ...esbuildConfig.default,
        watch: true,
        metafile: true,
        minify: false,
    })
    .then((result) => fs.writeFileSync(
        'dist/bundled/bundle-meta.json',
        JSON.stringify(result.metafile)
    ))
    .catch(() => process.exit(1))
;