/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  let hash = {};
  let result = [];
  for (let i = 0; i < nums.length; ++i) {
    if (!hash[nums[i]]) {
      hash[nums[i]] = 1;
    } else {
      hash[nums[i]] += 1;
    }
  }
  let array = [];
  Object.entries(hash).forEach(([key, value]) => {
    array.push([Number(key), value]);
  });
  array.sort((a, b) => b[1] - a[1]);
  for (let i = 0; i < k; ++i) {
    result.push(array[i][0]);
  }
  return result;
};

let nums = [1,1,1,2,2,3];
let k = 2;
let result = topKFrequent(nums, k);
console.log(result);
