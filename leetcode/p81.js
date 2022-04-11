/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
  let pivot = 0;
  for (let i = 0, j = 1; j < nums.length; ++i, ++j) {
    if (nums[i] > nums[j]) {
      pivot = i;
      break;
    }
  }
  return binarySearch(nums, 0, pivot + 1, target) || binarySearch(nums, pivot + 1, nums.length, target);
};

function binarySearch(nums, left, right, target) {
  if (left === right) {
    return false;
  }
  let mid = Math.floor((left + right) / 2);
  if (nums[mid] === target) {
    return true;
  } else if (nums[mid] > target) {
    return binarySearch(nums, left, mid, target);
  } else if (nums[mid] < target) {
    return binarySearch(nums, mid + 1, right, target);
  }
}

let nums = [3,1];
let target = 3;
let result = search(nums, target);
console.log(result);
