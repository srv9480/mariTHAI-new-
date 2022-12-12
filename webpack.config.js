
// const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = function(webpackConfig) {
    webpackConfig.babel.plugins.push('transform-runtime');
    webpackConfig.babel.plugins.push(['import', {
      libraryName: 'antd',
      style: 'css'
    },
     {
      "presets": ["@babel/preset-es2015"],
    }
  ]);
    // module.exports = {
    //   plugins: [
    //     new UglifyJSPlugin()
    //   ]
    // }
    return webpackConfig;
  };

