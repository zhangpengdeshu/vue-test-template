require('babel-regenerator-runtime'); // add regenerator support for async await
// 加载所有test文件
const testsContext = require.context('./specs', true, /\.spec$/)
testsContext.keys().forEach(testsContext)

// load 所有的资源文件，及src目录下的除了main.js文件的所有文件, 即要覆盖的所有代码
const srcContext = require.context('../../src', true, /^\.\/(?!main(\.js)?$)/)
srcContext.keys().forEach(srcContext)