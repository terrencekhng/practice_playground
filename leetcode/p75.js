/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  let left = 0;
  let right = nums.length - 1;
  let mid = left;

  while (mid <= right) {
    if (nums[mid] === 1) {
      mid += 1;
    } else if (nums[mid] === 0) {
      [nums[left], nums[mid]] = [nums[mid], nums[left]];
      left += 1;
      mid += 1;
    } else if (nums[mid] === 2) {
      [nums[mid], nums[right]] = [nums[right], nums[mid]];
      right -= 1;
    }
  }
};

let nums = [2,0,2,1,1,0];
sortColors(nums);
console.log(nums);
