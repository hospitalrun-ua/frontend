const multipleEntry = require('react-app-rewire-multiple-entry')([{
  entry: 'src/admin-app.js',
  template: 'public/index.html',
  outPath: '/admin.html'
}]);

module.exports = {
  webpack(config) {
    multipleEntry.addMultiEntry(config);
    return config;
  },
  devServer(configFn) {
    return function () {
      const config = configFn();
      config.historyApiFallback.rewrites = [
        { from: /^\/$/, to: '/index.html' },
        { from: /^\/admin/, to: '/admin.html' },
      ];
      return config;
    };
  }
}
