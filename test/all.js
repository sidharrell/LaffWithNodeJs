// using assert passed to the test function that just logs failures
exports['test that logs all failures'] = function(assert) {
  var vectors = require('../vector.js');
  var testelements = [3, 4];
  var vectorfactory = new vectors.VectorFactory();
  var vector = vectorfactory.createVector( testelements );
  //var vector = new vectors.Vector(testelements);
  assert.equal(vector.elements[0], 3, 'test x assignment and retrieval');
  assert.equal(vector.elements[1], 4, 'test y assignment and retrieval');
  assert.equal(vector.length(), 2, 'test length method');
  assert.equal(vector.magnitude(), 5, 'test magnitude method');
  var testelements2 = [10, 20]
  var vector2 = vectorfactory.createVector( testelements2 );
  vector.add(vector2);
  assert.equal(vector.elements[0], 13, 'test x after addition method');
  assert.equal(vector.elements[1], 24, 'test y after addition method')
  vector.scale(10);
  assert.equal(vector.elements[0], 130, 'test x after scaling method');
  assert.equal(vector.elements[1], 240, 'test y after scaling method');
  vectorcopy = vectorfactory.copyVector( vector );
  assert.equal(vectorcopy.elements[0], 130, 'test x after copy method');
  assert.equal(vectorcopy.elements[1], 240, 'test y after copy method');
}

if (module == require.main) require('test').run(exports)
