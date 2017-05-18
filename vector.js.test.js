var vectors = require('./vector.js');

var evaltest = function (obj, test, description) {
  if (test(obj)) {
    console.log(description + ": PASSED")
  } else {
    console.log(description + ": FAILED")
  }
}

var vector1 = new vectors.Vector(3, 4);

var retrieval = function (vector) {
  return (vector.x === 3 && vector.y === 4);
}
evaltest(vector1, retrieval, "element assignment and retrieval");

var lengthtest = function (vector) {
  return vector.length() === 5;
}

evaltest (vector1, lengthtest, "length method test")
var vector2 = new vectors.Vector(10, 20);
