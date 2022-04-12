/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  for (let i = 0; i < matrix.length; ++i) {
    for (let j = 0; j < matrix[0].length; ++j) {
      if (matrix[i][j] === 0) {
        if (matrix[i][0].toString().indexOf('r') < 0 && matrix[i][0].toString().indexOf('c') < 0) {
          matrix[i][0] = 'r';
        } else if (matrix[i][0].toString().indexOf('c') >= 0 && matrix[i][0].toString().indexOf('r') < 0) {
          matrix[i][0] += 'r';
        }
        if (matrix[0][j].toString().indexOf('c') < 0 && matrix[0][j].toString().indexOf('r') < 0) {
          matrix[0][j] = 'c';
        } else if (matrix[0][j].toString().indexOf('r') >= 0 && matrix[0][j].toString().indexOf('c') < 0) {
          matrix[0][j] += 'c';
        }
      }
    }
  }

  // set columns
  for (let i = 0; i < matrix[0].length; ++i) {
    let containBoth = matrix[0][i].toString().indexOf('c') >= 0 && matrix[0][i].toString().indexOf('r') >= 0;
    let startIndex = containBoth ? 1 : 0;
    if (matrix[0][i].toString().indexOf('c') >= 0) {
      for (let j = startIndex; j < matrix.length; ++j) {
        if (matrix[j][i] !== 'r') {
          matrix[j][i] = 0;
        }
      }
    }
  }

  // set rows
  for (let i = 0; i < matrix.length; ++i) {
    if (matrix[i][0].toString().indexOf('r') >= 0) {
      for (let j = 0; j < matrix[0].length; ++j) {
        matrix[i][j] = 0;
      }
    }
  }
};

// let matrix = [[1,2,3,4],[5,0,7,8],[0,10,11,12],[13,14,15,0]];
// let matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]];
// let matrix = [[0,0,0],[0,1,0],[1,0,0]];
// let matrix = [[1,1,1],[1,0,1],[1,1,1]];
let matrix = [[8,3,6,9,7,8,0,6],[0,3,7,0,0,4,3,8],[5,3,6,7,1,6,2,6],[8,7,2,5,0,6,4,0],[0,2,9,9,3,9,7,3]];
setZeroes(matrix);
console.log(matrix);
