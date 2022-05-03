const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,

  pluginOptions: {
    vuetify: {
      // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
    },
  },
  devServer: {
    host: '0.0.0.0',
    proxy: {
      '^/graphql': {
        target: 'http://localhost:8888',
        changeOrigin: true,
        pathRewrite: {
          '^/graphql': '/graphql',
        },
      },
    },
  },
});
