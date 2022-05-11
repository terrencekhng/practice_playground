/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
  let result = [];
  const nums = [1,2,3,4,5,6,7,8,9];
  let hash = {};

  function comb(res, candidate, index) {
    if (res.length === k) {
      if (res.reduce((prev, curr) => prev + curr, 0) === n) {
        const temp = res.sort((a, b) => a - b);
        if (!hash[temp.join('')]) {
          hash[temp.join('')] = true;
          result.push(res);
        }
      }
      return;
    }
    for (let i = 0; i < candidate.length; ++i) {
      comb([...res, candidate[i]], [...candidate.slice(0, i), ...candidate.slice(i + 1)], index + 1);
    }
  }

  comb([], nums, 0);

  return result;
};

const k = 4;
const n = 9;
const result = combinationSum3(k, n);
console.log(result);
