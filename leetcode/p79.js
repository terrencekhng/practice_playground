/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  let width = board[0].length;
  let height = board.length;
  let matrix = [];
  for (let i = 0; i < height; ++i) {
    matrix[i] = new Array(width);
    matrix[i].fill(false);
  }

  for (let i = 0; i < height; ++i) {
    for (let j = 0; j < width; ++j) {
      const result = backtrack(board, matrix, i, j, 0, word);
      if (result) {
        return true;
      }
    }
  }
  return false;
};

function backtrack(board, matrix, left, right, pos, word) {
  if (word[pos] !== board[left][right]) {
    return false;
  }
  if (matrix[left][right]) {
    return false;
  }
  if (pos === word.length - 1) {
    return true;
  }
  let result = false;
  matrix[left][right] = true;
  if (!result && right + 1 < board[0].length) {
    result = result || backtrack(board, matrix, left, right + 1, pos + 1, word);
  }
  if (!result && right - 1 >= 0) {
    result = result || backtrack(board, matrix, left, right - 1, pos + 1, word);
  }
  if (!result && left + 1 < board.length) {
    result = result || backtrack(board, matrix, left + 1, right, pos + 1, word);
  }
  if (!result && left - 1 >= 0) {
    result = result || backtrack(board, matrix, left - 1, right, pos + 1, word);
  }
  matrix[left][right] = false;
  return result;
}


let board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]];
let result = exist(board, 'ABCCED');
console.log(result);
