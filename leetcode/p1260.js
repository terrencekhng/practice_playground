/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function(grid, k) {
  let width = grid[0].length;
  let height = grid.length;
  let total = width * height;
  let realK = k % total;
  let results = [];

  for (let i = 0; i < height; ++i) {
    let list = [];
    results.push(list);
    for (let j = 0; j < width; ++j) {
      let index = (i * width + j - realK + total) % total;
      list.push(grid[Math.floor(index / width)][index % width]);
    }
  }
  return results;
};

let grid = [[1],[2],[3],[4],[7],[6],[5]];
let k = 23;
let results = shiftGrid(grid, k);
console.log(results);
