/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  if (n === 1) {
    return [[1]];
  }
  let layer = Math.ceil(n / 2);
  let num = 0;
  let result = new Array(n);
  for (let i = 0; i < n; ++i) {
    result[i] = new Array(n).fill(0);
  }

  for (let i = 0, count = n - 1; i < layer; ++i, --count) {
    // deal with the middle one in odd length matrix
    if (i === count) {
      result[i][count] = result[i][count - 1] + 1;
    }
    // first row
    for (let j = i; j < count; ++j) {
      num += 1;
      result[i][j] = num;
    }
    // last col
    for (let j = i; j < count; ++j) {
      num += 1;
      result[j][n - i - 1] = num;
    }
    // last row
    for (let j = n - i - 1; j > i; --j) {
      num += 1;
      result[n - i - 1][j] = num;
    }
    // first col
    for (let j = n - i - 1; j > i; --j) {
      num += 1;
      result[j][i] = num;
    }
  }
  return result;
};

let n = 9;
const result = generateMatrix(n);
console.log(result);
