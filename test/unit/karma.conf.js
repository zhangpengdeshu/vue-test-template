const webpackConfig = require('../../build/webpack.test.conf');

module.exports = function(config) {
    config.set({
      // 设置默认打开的浏览器
      browsers: ['ChromeHeadless'],
      frameworks: ['mocha', 'sinon-chai'],
      // 设置测试覆盖率输出插件
      reporters: ['spec', 'coverage'],
      // 测试入口文件
      files: ['./index.js'],
      // 用webpack解析，同时显示测试文件路径
      preprocessors: {
          './index.js': ['webpack', 'sourcemap'],
      },
      // 是否打印webpack打包信息
      webpackMiddleware: {
        noInfo: true
      },
      // webpack 配置用来解析js文件和vue文件，如果有css请自行配置css-loader
      webpack: webpackConfig,
      // karma-coverage配置，配置测试覆盖率的输出目录及格式
      coverageReporter: {
        dir: './coverage',
        reporters: [
          { type: 'lcov', subdir: '.'},
          { type: 'text-summary'},
        ]
      },
      colors: true,
      autoWatch: false,
      //  设置运行完成是否自动退出
      singleRun: false,
      client: {
        mocha: {
          timeout: 4000
        }
      }
    })
  }
