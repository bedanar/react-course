const webpack = require('webpack')
const [clientWebpackConfig, serverWebpackConfig] = require('../webpack.config')
const nodemon = require('nodemon')
const path = require('path')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const express = require('express')

const hmrServer = express()
const clinetCompiler = webpack(clientWebpackConfig)

hmrServer.use(webpackDevMiddleware(clinetCompiler, {
    publicPath: clientWebpackConfig.output.publicPath,
    serverSideRender: true,
    // compress: true,
    // watchOptions: {
    //     ignore: /dist/,
    // },
    writeToDisk: true,
    stats: 'errors-only'
}))

hmrServer.use(webpackHotMiddleware(clinetCompiler, {
    path: '/static/__webpack_hmr'
}))
hmrServer.listen(8081,  () => {
    console.log('HMR Server successfully started')
})

const compiler = webpack(serverWebpackConfig)

compiler.run((err) => {
    if (err) {
        console.log('Compilation error', err)
    }
    compiler.watch({}, err => {
        if (err) {
            console.log('Compilation failed', err)
        }
        console.log('Compilation succeded')
    })
    nodemon({
        script: path.resolve(__dirname, '../dist/server/server.js'),
        watch: [
            path.resolve(__dirname, '../dist/server'),
            path.resolve(__dirname, '../dist/client')
        ]
    })
})
