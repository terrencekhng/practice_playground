/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
  let G = new Array(n + 1).fill(0);
  G[0] = 1;
  G[1] = 1;

  for (let i = 2; i <= n; ++i) {
    for (let j = 0; j < i; ++j) {
      G[i] += G[j] * G[i - j - 1];
    }
  }
  return G[n];
};

let n = 7;
let result = numTrees(n);
console.log(result);
