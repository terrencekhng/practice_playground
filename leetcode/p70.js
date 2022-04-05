/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if (n == 1 || n == 2) {
    return n;
  }
  let dp = new Array(n.length).fill(0);
  dp[1] = 1;
  dp[2] = 2;
  for (let i = 3; i <= n; ++i) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};

let result = climbStairs(44);
console.log(result);
