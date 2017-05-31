function Matrix(columns) {

  // holds the component vectors
  this.columns = columns;

  // scale the matrix by a scalar
  this.scale = function (scalingfactor) {
    cLen = this.numColumns();
    for (i = 0; i < cLen; i++) {
      this.columns[i].scale(scalingfactor);
    }
  }

  //  modify the current matrix by adding a second matrix to it.
  this.add = function (matrix) {
    cLen = this.numColumns();
    if (cLen !== matrix.numColumns()) {
      return "error, cannot add matricies of unequal size";
    }
    for (i = 0; i < cLen; i++) {
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
}
module.exports = { MatrixFactory };
