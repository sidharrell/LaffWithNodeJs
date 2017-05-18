function Vector(x, y) {
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

var vector1 = new Vector(3, 4);
var vector2 = new Vector(10, 20);


console.log(vector1.x);
console.log(vector1.length());

vector1.add(vector2);

console.log(vector1.x);
