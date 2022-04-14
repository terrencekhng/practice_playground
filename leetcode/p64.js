/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  let width = grid[0].length;
  let height = grid.length;

  for (let i = 0; i < height; ++i) {
    for (let j = 0; j < width; ++j) {
      // first row
      if (i === 0) {
        if (j !== 0) {
          grid[i][j] = grid[i][j] + grid[i][j - 1];
        }
        continue;
      }
      // first col
      if (j === 0) {
        grid[i][j] = grid[i][j] + grid[i - 1][j];
        continue;
      }
      // the rest
      grid[i][j] = grid[i][j] + Math.min(grid[i - 1][j], grid[i][j - 1]);
    }
  }
  return grid[height - 1][width - 1];
};

// let grid = [[1,3,1],[1,5,1],[4,2,1]];
// let grid = [[1,2,3],[4,5,6]];
let grid = [[1,2],[1,1]];
let result = minPathSum(grid);
console.log(result);
