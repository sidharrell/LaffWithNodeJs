function Matrix(columns) {

  // holds the component vectors
  this.columns = columns;

  // scale the matrix by a scalar
  this.scale = function (scalingfactor) {
    var cLen = this.numColumns();
    for (var i = 0; i < cLen; i++) {
      this.columns[i].scale(scalingfactor);
    }
  }

  //  modify the current matrix by adding a second matrix to it.
  this.add = function (matrix) {
    var cLen = this.numColumns();
    if (cLen !== matrix.numColumns()) {
      return "error, cannot add matricies of unequal size";
    }
    for (var i = 0; i < cLen; i++) {
      this.columns[i].add(matrix.columns[i]);
    }

  }

  this.numColumns = function () {
    return this.columns.length;
  }
}

function MatrixFactory() {
  this.createMatrix = function ( columns ) {
    this.matrixClass = Matrix;
    return new this.matrixClass( columns );
  }
  this.copyMatrix = function ( matrix ) {
    this.matrixClass = Matrix;
    return new this.matrixClass( matrix.columns );
  }
  this.transposeMatrix = function (matrix) {
    var vectors = require('./vector.js');
    var vectorfactory = new vectors.VectorFactory();

    var newvectors = [];
    var newcolumns = [];
    var rLen = matrix.columns[0].length();
    for (var i = 0; i < rLen; i++) {
      newcolumns[i] = new Array();
    }
    var cLen = matrix.numColumns();
    for (var i = 0; i < cLen; i++) {
      for (var j = 0; j < rLen; j++) {
        newcolumns[j][i] = matrix.columns[i].elements[j];
      }
    }
    for (var j = 0; j < rLen; j++) {
      newvectors[j] = vectorfactory.createVector(newcolumns[j]);
    }
    return new this.matrixClass( newvectors );
  }
}
module.exports = { MatrixFactory };
