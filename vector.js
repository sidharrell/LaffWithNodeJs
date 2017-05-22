function Vector(elements) {
  this.elements = elements;
  this.magnitude = function () {
    sum = 0;
    fLen = this.length();
    for (i = 0; i < fLen; i++) {
      sum += this.elements[i] * this.elements[i];
    }
    return Math.sqrt(sum);
  }
  this.length = function () {
    return this.elements.length;
  }
  this.scale = function (scalingfactor) {
    fLen = this.length();
    for (i = 0; i < fLen; i++) {
      this.elements[i] *= scalingfactor;
    }
  }
  this.add = function (vector) {
    fLen = this.length();
    if (fLen !== vector.length()) {
      return "error, cannot add vectors of unequal length";
    }
    for (i = 0; i < fLen; i++) {
      this.elements[i] += vector.elements[i];
    }
  }
  this.axpy = function (vector, scalar) {
    fLen = this.length();
    if (fLen !== vector.length()) {
      return "error, cannot axpy vectors of unequal length";
    }
    for (i = 0; i < fLen; i++) {
      this.elements[i] += vector.elements[i] * scalar;
    }
  }
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
