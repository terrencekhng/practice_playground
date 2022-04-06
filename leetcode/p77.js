/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  let results = [];
  let arr = [];
  for (let i = 1; i <= n; ++i) {
    arr.push(i);
  }
  combineHelper([], arr, k, results);
  return results;
};

function combineHelper(comb, nums, counter, results) {
  if (comb.length === counter) {
    results.push(comb.slice());
    return;
  }
  for (let i = 0; i < nums.length; ++i) {
    combineHelper([...comb, nums[i]], nums.slice(i + 1), counter, results);
  }
}

let n = 1;
let k = 1;
let results = combine(n, k);
console.log(results);
