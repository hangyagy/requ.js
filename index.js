var path = require('path');

var requ = function(module) {
  return require(path.join(requ.root, module));
};

requ.root = path.normalize(path.join(__dirname, '..', '..'));

global.requ = requ;

module.exports = requ;
