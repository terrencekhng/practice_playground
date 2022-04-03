/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  let difference = Infinity;
  let result = 0;
  let sortedArray = nums.sort((a, b) => a - b);
  for (let i = 0; i < sortedArray.length; ++i) {
    let remain = target - sortedArray[i];
    let remainArray = sortedArray.slice(i + 1);
    let left = 0;
    let right = remainArray.length - 1;
    while (left < right) {
      let sum = remainArray[left] + remainArray[right] + nums[i];
      if (sum > target) {
        right -= 1
      } else if (sum < target) {
        left += 1;
      } else {
        return sum;
      }
      let diff = target - sum;
      if (Math.abs(diff) < difference) {
        result = sum;
        difference = Math.abs(diff);
      }
    }
  }
  return result;
};

let nums = [-1,0,1,1,55];
let target = 3;
let result = threeSumClosest(nums, target);
console.log(result);
