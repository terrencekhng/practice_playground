/**
 * Example: Print all positive integer solutions to the equation a^3 + b^3 = c^3 + d^3 where a, b, c, and d are integers between 1 and 1000.
 */
function findSolution() {
  const n = 1000;
  let result = {};
  for (let i = 1; i <= n; ++i) {
    for (let j = 1; j <= n; ++j) {
      let key = (Math.pow(i, 3) + Math.pow(j, 3));
      if (result[key]) {
        result[key].push([i, j]);
      } else {
        result[key] = [[i, j]];
      }
    }
  }

  Object.values(result).forEach(res => {
    console.log(res);
  })
}

findSolution();
