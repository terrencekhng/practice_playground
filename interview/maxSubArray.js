/*
* 最大连续子数组
* Maximum consecutive sub-array
*
* Follow-up:
* 结果子数组中至少包含一个正整数
*/

function maxSubArray(nums) {
  let result = {
    array: [],
    max: null,
  }
  result = walk(nums, 1, result);
  return result;
}

function walk(nums, len, result) {
  if (len === nums.length) {
    return result;
  }
  for (let i = 0; i < len; ++i) {
    let sum = nums.slice(i, i + len).reduce((prev, curr) => prev + curr, 0);
    if (sum > result.max && nums.slice(i, i + len).some(el => el >= 0)) {
      result.max = sum;
      result.array = nums.slice(i, i + len);
    }
  }
  return walk(nums, len + 1, result);
}

let nums = [1,-2,-5,-7,-8,-10];
console.log(maxSubArray(nums));
