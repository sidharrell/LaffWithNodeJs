module.exports = {
    Vector: function (x, y) {
    this.x = x;
    this.y = y;
    this.length = function () {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    this.add = function (vector) {
      this.x += vector.x;
      this.y += vector.y;
    }
  }
};
