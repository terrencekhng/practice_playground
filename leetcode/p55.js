/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  if (nums.length === 1) {
    return true;
  }
  let maxIndex = 0;
  for (let i = 0; i < nums.length; ++i) {
    if (i === maxIndex && nums[i] === 0) {
      maxIndex = 0;
      return false;
    }
    if (nums[i] + i > maxIndex) {
     maxIndex = nums[i] + i;
     if (maxIndex >= nums.length - 1) {
       return true;
     }
    }
  }
  return false;
};

let nums = [0,1];
// let nums = [3,2,1,0,4];
// let nums = [2,3,1,1,4];
let result = canJump(nums);
console.log(result);
