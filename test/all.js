// using assert passed to the test function that just logs failures
exports['test that logs all failures'] = function(assert) {
  var vectors = require('../vector.js');
  var vector = new vectors.Vector(3, 4);
  assert.equal(vector.x, 3, 'test x assignment and retrieval');
  assert.equal(vector.y, 4, 'test y assignment and retrieval');
  assert.equal(vector.length(), 5, 'test length method');
  var vector2 = new vectors.Vector(10, 20);
  vector.add(vector2);
  assert.equal(vector.x, 13, 'test x after addition method');
  assert.equal(vector.y, 24, 'test y after addition method')
}

if (module == require.main) require('test').run(exports)
