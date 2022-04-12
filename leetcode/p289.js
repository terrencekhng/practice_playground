/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
  for (let i = 0; i < board.length; ++i) {
    for (let j = 0; j < board[0].length; ++j) {
      board[i][j] = getCellState(board, i, j);
    }
  }
  // Transform back
  for (let i = 0; i < board.length; ++i) {
    for (let j = 0; j < board[0].length; ++j) {
      board[i][j] = transformBack(board[i][j]);
    }
  }
};

function getCellState(board, left, right) {
  let surrounding = [];
  if (left === 0) {
    if (left === right) {
      // left upper corner
      surrounding = [
        getRealValue(board, left, right + 1),
        getRealValue(board, left + 1, right),
        getRealValue(board, left + 1, right + 1)
      ];
    }
    else if (right === board[0].length - 1) {
      // right upper corner
      surrounding = [
        getRealValue(board, left, right - 1),
        getRealValue(board, left + 1, right),
        getRealValue(board, left + 1, right - 1)
      ];
    } else {
      // first row
      surrounding = [
        getRealValue(board, left, right - 1),  // left
        getRealValue(board, left, right + 1),  // right
        getRealValue(board, left + 1, right),  // down
        getRealValue(board, left + 1, right - 1), // left diag
        getRealValue(board, left + 1, right + 1), // right diag
      ];
    }
  }
  else if (right === 0) {
    if (left === board.length - 1) {
      // left lower corner
      surrounding = [
        getRealValue(board, left, right + 1),
        getRealValue(board, left - 1, right),
        getRealValue(board, left - 1, right + 1)
      ];
    } else {
      // first column
      surrounding = [
        getRealValue(board, left, right + 1), // right
        getRealValue(board, left - 1, right), // up
        getRealValue(board, left + 1, right), // down
        getRealValue(board, left + 1, right + 1), // down diag
        getRealValue(board, left - 1, right + 1) // up diag
      ];
    }
  }
  else if (right === board[0].length - 1) {
    if (left === board.length - 1) {
      // right lower corner
      surrounding = [
        getRealValue(board, left, right - 1),
        getRealValue(board, left - 1, right),
        getRealValue(board, left - 1, right - 1)
      ];
    } else {
      // last column
      surrounding = [
        getRealValue(board, left, right - 1), // left
        getRealValue(board, left - 1, right), // up
        getRealValue(board, left + 1, right), // down
        getRealValue(board, left + 1, right - 1), // down diag
        getRealValue(board, left - 1, right - 1) // up diag
      ];
    }
  }
  else if (left === board.length - 1) {
    // last row
    surrounding = [
      getRealValue(board, left, right - 1), // left
      getRealValue(board, left, right + 1), // right
      getRealValue(board, left - 1, right), // up
      getRealValue(board, left - 1, right - 1), // left diag
      getRealValue(board, left - 1, right + 1), // right diag
    ];
  } else {
    // other cases
    surrounding = [
      getRealValue(board, left, right + 1), // right
      getRealValue(board, left, right - 1), // left
      getRealValue(board, left + 1, right), // down
      getRealValue(board, left - 1, right), // up
      getRealValue(board, left + 1, right + 1), // down right diag
      getRealValue(board, left + 1, right - 1), // down left diag
      getRealValue(board, left - 1, right + 1), // up right diag
      getRealValue(board, left - 1, right - 1) // up left diag
    ];
  }
  return transformState(board[left][right], getSum(surrounding));
}

function getRealValue(origin, left, right) {
  if (!origin[left] || !origin[left][right]) {
    return 0;
  }
  if (origin[left][right] === -1) {
    return 1;
  }
  if (origin[left][right] === 2) {
    return 0;
  }
  return origin[left][right];
}


/**
 *
 * @param {number[]} arr
 * @return {number} {*}
 */
function getSum(arr) {
  return arr.reduce((prev, curr) => prev + curr, 0);
}

/**
 *
 * @param {number} origin
 * @param {number[]} surroundingSum
 * @return {number|*}
 */
function transformState(origin, surroundingSum) {
  if (origin === 0 && surroundingSum === 3) {
    return 2;
  }
  if (origin === 1) {
    if (surroundingSum > 3 || surroundingSum < 2) {
      return -1;
    }
  }
  return origin;
}

/**
 *
 * @param {number} val
 * @return {number|*}
 */
function transformBack(val) {
  if (val === -1) {
    return 0;
  }
  if (val === 2) {
    return 1;
  }
  return val;
}

// let board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]];
let board = [[1]];
gameOfLife(board);
console.log(board);
