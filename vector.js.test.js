var vectors = require('./vector.js');

var vector1 = new vectors.Vector(3, 4);
var vector2 = new vectors.Vector(10, 20);

if (vector1.x === 3 && vector1.y === 4) {
  console.log("element assignment and retrieval: PASSED");
} else {
  console.log("element assignment and retrieval: FAILED");
}

if (vector1.length() === 4) {
  console.log("length method: PASSED");
} else {
  console.log("length method: FAILED");
}

vector1.add(vector2);

console.log(vector1.x);
var evaltest = function (test, description) {
  if (test()) {
    console.log(description + ": PASSED")
  } else {
    console.log(description + ": FAILED")
  }
}

var retrieval = function () {
  return vector1.x === 3 && vector1.y === 4;
}

evaltest(retrieval, "element assignment and retrieval");
