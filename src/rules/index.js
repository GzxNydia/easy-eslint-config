module.exports = {
  extends: [
    './best-practices.js',
    './errors.js',
    './es6.js',
    './node.js',
    './strict.js',
    './style.js',
    './variables.js'
  ].map(require.resolve)
};
