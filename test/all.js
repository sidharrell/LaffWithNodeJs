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
  var testelements3 = [-1, 2, 1];
  var testelements4 = [-2, 3, -3];
  var vector3 = vectorfactory.createVector( testelements3 );
  var vector4 = vectorfactory.createVector( testelements4 );
  vector4.axpy( vector3, 2 );
  assert.equal(vector4.elements[0], -4, 'test x after axpy method');
  assert.equal(vector4.elements[1], 7, 'test y after axpy method');
  assert.equal(vector4.elements[2], -1, 'test z after axpy method');
  var testelements5 = [2, -1, 4];
  var testelements6 = [1, -2, -1];
  var vector5 = vectorfactory.createVector( testelements5 );
  var vector6 = vectorfactory.createVector( testelements6 );
  assert.equal(vector5.dot(vector6), 0, 'test dot method');

  var matrix = require('../matrix.js');
  var testelements = [1, 2, 3, 4];
  var testelements2 = [5, 6, 7, 8];
  var vector1 = vectorfactory.createVector( testelements );
  var vector2 = vectorfactory.createVector( testelements2 );
  var matrixfactory = new matrix.MatrixFactory();
  var matrix1 = matrixfactory.createMatrix( [ vector1, vector2 ]);
  //console.log( matrix1.columns );
  assert.equal(matrix1.columns[0].elements[0], 1, 'test (0,0) assignment and retrieval');
  assert.equal(matrix1.columns[0].elements[1], 2, 'test (0,1) assignment and retrieval');
  assert.equal(matrix1.columns[0].elements[2], 3, 'test (0,2) assignment and retrieval');
  assert.equal(matrix1.columns[0].elements[3], 4, 'test (0,3) assignment and retrieval');
  assert.equal(matrix1.columns[1].elements[0], 5, 'test (1,0) assignment and retrieval');
  assert.equal(matrix1.columns[1].elements[1], 6, 'test (1,1) assignment and retrieval');
  assert.equal(matrix1.columns[1].elements[2], 7, 'test (1,2) assignment and retrieval');
  assert.equal(matrix1.columns[1].elements[3], 8, 'test (1,3) assignment and retrieval');
}

if (module == require.main) require('test').run(exports)
