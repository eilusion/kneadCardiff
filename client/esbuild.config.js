const svgrPlugin = require('esbuild-plugin-svgr');

module.exports.default = {
    entryPoints: ['dist/client/src/index.js'],
    bundle: true,
    outfile: 'dist/bundled/bundle.js',
    loader: {
        ".jpeg":"dataurl",
        ".png":"dataurl",
    },
    minify: true,
    sourcemap: true,
    plugins: [
        svgrPlugin(),
    ],
};