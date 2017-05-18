function Vector(x, y) {
  this.x = x;
  this.y = y;
  this.length = function () {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
}

var vector1 = new Vector(3, 4);

console.log(vector1.x);
console.log(vector1.length());
