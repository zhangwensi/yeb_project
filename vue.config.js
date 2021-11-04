'use-strict'
const path = require('path')

function resolve(dir) {
    return path.join(__dirname,dir)
}

const title = process.env.VUE_APP_TITLE || '在线办公系统'

const port = process.env.port || process.env.npm_config_port || 8080

module.exports={
    publicPath : process.env.NODE_ENV === 'production' ? '/':'/',
  outputDir : 'dist',
  assetsDir : 'static',
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false,
  //本项目中使用mock 暂不使用代理转发
  // devServer:{
  //   host:'0.0.0.0',
  //   port: port,
  //   open: false,
  //   proxy: {
  //     [process.env.VUE_APP_BASE_API]: {
  //       target: `http://139.196.178.250:3019`,
  //       changeOrigin: true,
  //       pathRewrite: {
  //         ['^' + process.env.VUE_APP_BASE_API]: ''
  //       }
  //     }
  //   },
  //   disableHostCheck: true,
  // },
  configureWebpack: {
    name: title,
    resolve: {
      alias: {
        '@': resolve('src'),
        'excel': path.resolve(__dirname, '../src/excel')
      }
    }
  },
  chainWebpack(config) {
    config.plugins.delete('preload') // TODO: need test
    config.plugins.delete('prefetch') // TODO: need test

    // set svg-sprite-loader
    config.module
      .rule('svg')
      .exclude.add(resolve('src/assets/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/assets/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()

    config
      .when(process.env.NODE_ENV !== 'development',
        config => {
          config
            .plugin('ScriptExtHtmlWebpackPlugin')
            .after('html')
            .use('script-ext-html-webpack-plugin', [{
            // `runtime` must same as runtimeChunk name. default is `runtime`
              inline: /runtime\..*\.js$/
            }])
            .end()
          config
            .optimization.splitChunks({
              chunks: 'all',
              cacheGroups: {
                libs: {
                  name: 'chunk-libs',
                  test: /[\\/]node_modules[\\/]/,
                  priority: 10,
                  chunks: 'initial' // only package third parties that are initially dependent
                },
                elementUI: {
                  name: 'chunk-elementUI', // split elementUI into a single package
                  priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
                  test: /[\\/]node_modules[\\/]_?element-ui(.*)/ // in order to adapt to cnpm
                },
                commons: {
                  name: 'chunk-commons',
                  test: resolve('src/components'), // can customize your rules
                  minChunks: 3, //  minimum common number
                  priority: 5,
                  reuseExistingChunk: true
                }
              }
            })
        config.optimization.runtimeChunk('single'),
        {
          from: path.resolve(__dirname, './public/robots.txt'), //防爬虫文件
          to: './' //到根目录下
        }
      }
    )
  }
}
