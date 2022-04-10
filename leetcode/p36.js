/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  let vertical = {};
  let horizonal = {};
  for (let i = 0; i < board.length; ++i) {
    horizonal = {};
    vertical = {};
    for (let j = 0; j < board[0].length; ++j) {
      if (horizonal[board[i][j]]) {
        return false;
      }
      if (vertical[board[j][i]]) {
        return false;
      }
      if (board[i][j] !== '.') {
        horizonal[board[i][j]] = true;
      }
      if (board[j][i] !== '.') {
        vertical[board[j][i]] = true;
      }
    }
  }

  for (let i = 0; i < board.length; ++i) {
    for (let j = 0; j < board.length; ++j) {
      if (i % 3 === 0 && j % 3 === 0) {
        let innerHash = {};
        for (let k = 0; k < 3; ++k) {
          for (let l = 0; l < 3; ++l) {
            if (innerHash[board[i + k][j + l]]) {
              return false;
            }
            if (board[i + k][j + l] !== '.') {
              innerHash[board[i + k][j + l]] = true;
            }
          }
        }
      }
    }
  }
  return true;
};

let board = [["5","3",".",".","7",".",".",".","."]
  ,["6",".",".","1","9","5",".",".","."]
  ,[".","9","8",".",".",".",".","6","."]
  ,["8",".",".",".","6",".",".",".","3"]
  ,["4",".",".","8",".","3",".",".","1"]
  ,["7",".",".",".","2",".",".",".","6"]
  ,[".","6",".",".",".",".","2","8","."]
  ,[".",".",".","4","1","9",".",".","5"]
  ,[".",".",".",".","8",".",".","7","9"]];
// let board = [["8","3",".",".","7",".",".",".","."]
//   ,["6",".",".","1","9","5",".",".","."]
//   ,[".","9","8",".",".",".",".","6","."]
//   ,["8",".",".",".","6",".",".",".","3"]
//   ,["4",".",".","8",".","3",".",".","1"]
//   ,["7",".",".",".","2",".",".",".","6"]
//   ,[".","6",".",".",".",".","2","8","."]
//   ,[".",".",".","4","1","9",".",".","5"]
//   ,[".",".",".",".","8",".",".","7","9"]];
let result = isValidSudoku(board);
console.log(result);

