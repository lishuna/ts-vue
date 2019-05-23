const fs = require('fs');
const path = require('path');

module.exports = {
  publicPath: './',
  outputDir: 'dist',
  //放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
  assetsDir: 'assets',
  configureWebpack: function (config) {
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
    } else {
      // 为开发环境修改配置...
    }
  },
  devServer:{
    host: '0.0.0.0',
    port: 3002,
    hot: true,
    before: function(app, server) {
      app.get('*.json', function(req, res) {
        console.log('----',__dirname,path.resolve(__dirname, './mock/'),req.url,path.resolve(__dirname, './mock', req.url));
        res.json(fs.readFileSync(path.resolve(__dirname,'./mock/',req.url)));
      });
    }
  }
};
