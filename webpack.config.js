const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")

module.exports = {
    target: 'node',
    plugins: [
        new NodePolyfillPlugin(),
    ],
    resolve: {
        fallback: {
            "path": require.resolve("path-browserify")
        },
    }
}