const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: './', // 设置公共路径
  devServer: {
    client: {
      overlay: {
        errors: false,
        warnings: false
      }
    },
    historyApiFallback: true // 开启路由回退
  }
});