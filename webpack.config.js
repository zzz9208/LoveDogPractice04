const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  // 웹팩 설정 내용
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          compress: {
            drop_console: true, // 콘솔 로그 삭제
          },
          output: {
            comments: false, // 주석 삭제
          },
        },
      }),
    ],
  },
};