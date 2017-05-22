module.exports = {
    Vector: function (elements) {
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
    this.add = function (vector) {
      fLen = this.length();
      if (fLen !== vector.length()) {
        return "error, cannot add vectors of unequal length";
      }
      for (i = 0; i < fLen; i++) {
        this.elements[i] += vector.elements[i];
      }
    }
  }
};
