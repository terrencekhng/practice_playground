/**
 * https://leetcode.com/problems/spiral-matrix/
 * @param matrix
 */
const spiralOrder = (matrix) => {
  let res = [];
  if (matrix.length === 1) {
    return matrix[0];
  }
  if (matrix[0].length === 1) {
    return matrix.flat();
  }
  let tempMatrix = matrix;
  while (tempMatrix.flat().length !== 0) {
    res.push(...walkthrough(tempMatrix))
    tempMatrix = getInnerMatrix(matrix);
  }
  return res;
}

const walkthrough = (matrix) => {
  const rows = matrix.length;
  const columns = matrix[0].length;
  let res = [];
  if (rows === 1) {
    return matrix[0];
  }
  if (columns === 1) {
    return matrix.flat();
  }
  for (let i = 0; i < columns; ++i) {
    res.push(matrix[0][i]);
  }
  for (let i = 1; i < rows - 1; ++i) {
    res.push(matrix[i][columns - 1]);
  }
  for (let i = columns - 1; i >= 0; --i) {
    res.push(matrix[rows - 1][i]);
  }
  for (let i = rows - 2; i >= 1; --i) {
    res.push(matrix[i][0]);
  }
  return res;
}

const getInnerMatrix = (matrix) => {
  let res = [];
  matrix.shift();
  matrix.pop();
  for (let i = 0; i < matrix.length; ++i) {
    matrix[i].shift();
    matrix[i].pop();
  }
  return matrix;
}

/**
 * test cases
 */
const test1 = [[1,2,3,4],[5,6,7,8],[9,10,11,12]];
const test2 = [[1,2,3,4,5]];
const test3 = [[1,2,3,4,5,6],[7,8,9,10,11,12],[13,14,15,16,17,18],[19,20,21,22,23,24],[25,26,27,28,29,30],[31,32,33,34,35,36]];
const test4 = [[7],[9],[6]];
const test5 = [[1,11],[2,12],[3,13],[4,14],[5,15],[6,16],[7,17],[8,18],[9,19],[10,20]];

console.log(spiralOrder(test5));
