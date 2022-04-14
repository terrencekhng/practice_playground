/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  let width = obstacleGrid[0].length;
  let height = obstacleGrid.length;

  for (let i = 0; i < height; ++i) {
    for (let j = 0; j < width; ++j) {
      // first row
      if (i === 0) {
        // obstacles
        if (obstacleGrid[i][j] === 1 || obstacleGrid[i][j - 1] === 0) {
          obstacleGrid[i][j] = 0;
        }
        // not obstacles
        else if (obstacleGrid[i][j] !== 1) {
          obstacleGrid[i][j] = 1;
        }
        continue;
      }
      // first col
      if (j === 0) {
        if (obstacleGrid[i][j] === 1 || obstacleGrid[i - 1][j] === 0) {
          obstacleGrid[i][j] = 0;
        }
        // not obstacles
        else if (obstacleGrid[i][j] !== 1) {
          obstacleGrid[i][j] = 1;
        }
        continue;
      }
      // other cells
      // obstacles
      if (obstacleGrid[i][j] === 1) {
        obstacleGrid[i][j] = 0;
      } else if (obstacleGrid[i][j] !== 1) {
        obstacleGrid[i][j] = obstacleGrid[i - 1][j] + obstacleGrid[i][j - 1];
      }
    }
  }
  return obstacleGrid[height - 1][width - 1];
};

let obstacleGrid = [[0,0,0,1,0,0,0],[0,0,1,0,0,0,0],[0,0,0,0,0,0,0]];
let result = uniquePathsWithObstacles(obstacleGrid);
console.log(result);
