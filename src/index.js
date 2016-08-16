var lodash = require('lodash');

exports.without = function(){
  var output = lodash.without([1, 2, 3], 1);
  return output; //[2,3]
}

