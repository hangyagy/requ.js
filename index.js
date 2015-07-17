var path = require('path');

var requ = function(module) {
  this.root = path.normalize(path.join(__dirname, '..', '..'));
  require(path.join(this.root, module));
};

global.requ = requ;

module.exports = requ;
