/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
  // let result = [];
  // const nums = [1,2,3,4,5,6,7,8,9];
  // let hash = {};
  //
  // function comb(res, candidate, index) {
  //   if (res.length === k) {
  //     if (res.reduce((prev, curr) => prev + curr, 0) === n) {
  //       const temp = res.sort((a, b) => a - b);
  //       if (!hash[temp.join('')]) {
  //         hash[temp.join('')] = true;
  //         result.push(res);
  //       }
  //     }
  //     return;
  //   }
  //   for (let i = 0; i < candidate.length; ++i) {
  //     comb([...res, candidate[i]], [...candidate.slice(0, i), ...candidate.slice(i + 1)], index + 1);
  //   }
  // }
  //
  // comb([], nums, 0);
  //
  // return result;

  let result = [];

  /**
   *
   * @param {number} k
   * @param {number[]} combination
   * @param {number} num
   */
  function combinationSumHelper(k, combination, num) {
    if (k === 0) {
      if (sum(combination) === n) {
        result.push(combination.slice());
      }
      return;
    }

    if (num > 9) {
      return;
    }

    combination.push(num);
    combinationSumHelper(k - 1, combination, num + 1);
    combination.pop();
    combinationSumHelper(k, combination, num + 1);
  }

  combinationSumHelper(k, [], 1);

  return result;
};

/**
 *
 * @param {number[]} combination
 */
function sum(combination) {
  return combination.reduce((prev, curr) => prev + curr, 0);
}



const k = 3;
const n = 9;
const result = combinationSum3(k, n);
console.log(result);
