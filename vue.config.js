const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    allowedHosts: 'all',
  },
  chainWebpack: (config) => {
    config.module
      .rule('images')
      .use('file-loader')
      .loader('image-webpack-loader');
  },
});
