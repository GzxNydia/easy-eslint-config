const restrictedGlobals = require('confusing-browser-globals');

module.exports = {
  rules: {
    'no-shadow': 0,
    'no-restricted-globals': ['error'].concat(restrictedGlobals)
  }
};
