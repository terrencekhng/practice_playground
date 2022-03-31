/**
 * Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column are set to 0.
 * @param matrix
 */
function zeroMatrix(matrix) {
  let row = {};
  let col = {};
  for (let i = 0; i < matrix.length; ++i) {
    for (let j = 0; j < matrix[0].length; ++j) {
      if (matrix[i][j] === 0) {
        row[i] = true;
        col[j] = true;
      }
    }
  }

  // nullify rows
  Object.keys(row).forEach(key => {
    for (let i = 0; i < matrix[0].length; ++i) {
      matrix[key][i] = 0;
    }
  })

  // nullify columns
  Object.keys(col).forEach(key => {
    for (let i = 0; i < matrix.length; ++i) {
      matrix[i][key] = 0;
    }
  })
}

let matrix = [
  [1,2,3,4,5],
  [6,7,0,9,10],
  [0,12,13,14,15],
];

console.log('before zero: ', matrix);
zeroMatrix(matrix);
console.log('after zero: ', matrix);
