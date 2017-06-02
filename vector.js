function Vector(elements) {

  // holds the component values
  this.elements = elements;

  // compute the "length" or Euclidean length
  this.magnitude = function () {
    sum = 0;
    fLen = this.length();
    for (i = 0; i < fLen; i++) {
      sum += this.elements[i] * this.elements[i];
    }
    return Math.sqrt(sum);
  }

  // return the size of the vector. The number of component values.
  this.length = function () {
    return this.elements.length;
  }

  // scale the vector by a scalar
  this.scale = function (scalingfactor) {
    fLen = this.length();
    for (var i = 0; i < fLen; i++) {
      this.elements[i] *= scalingfactor;
    }
  }

  //  modify the current vector by adding a second vector to it.
  this.add = function (vector) {
    fLen = this.length();
    if (fLen !== vector.length()) {
      return "error, cannot add vectors of unequal length";
    }
    for (var i = 0; i < fLen; i++) {
      this.elements[i] += vector.elements[i];
    }
  }

  // add a vector that has been scaled by a scalar to the current vector
  this.axpy = function (vector, scalar) {
    fLen = this.length();
    if (fLen !== vector.length()) {
      return "error, cannot axpy vectors of unequal length";
    }
    for (var i = 0; i < fLen; i++) {
      this.elements[i] += vector.elements[i] * scalar;
    }
  }

  // compute the dot product of the current vector with a second vector
  this.dot = function (vector) {
    fLen = this.length();
    if (fLen !== vector.length()) {
      return "error, cannot dot vectors of unequal length";
    }
    sum = 0;
    for (i = 0; i < fLen; i++) {
      sum += vector.elements[i] * this.elements[i];
    }
    return sum;
  }
}

function VectorFactory() {
  this.createVector = function ( elements ) {
    this.vectorClass = Vector;
    return new this.vectorClass( elements );
  }
  this.copyVector = function ( vector ) {
    this.vectorClass = Vector;
    return new this.vectorClass( vector.elements );
  }
}
module.exports = { VectorFactory };
