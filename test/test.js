var assert = require('assert');
var mainModule = require('../src/index');

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});
describe('without', function(){
  it('should contain 2,3', function(){
    arrResult = mainModule.without();
    assert.equal(2, arrResult.length);
    assert.equal(2, arrResult[0]);
    assert.equal(3, arrResult[1]);
  });
});
