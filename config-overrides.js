module.exports = function override(config) {
  config.entry = ["babel-polyfill", "whatwg-fetch", "./src/index.js"];
  config.resolve = {
    extensions: ['.js', '.jsx'],
  };
  return config;
};
