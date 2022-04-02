/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  let currentReachIndex = 0;
  let maxReachIndex = 0;
  let totalJump = 0;
  for (let i = 0; i < nums.length - 1; ++i) {
    maxReachIndex = Math.max(maxReachIndex, i + nums[i]);
    if (i === currentReachIndex) {
      totalJump += 1;
      currentReachIndex = maxReachIndex;
    }
  }

  return totalJump;
};

let testArray = [2,3,1,1,4];
let result = jump(testArray);
console.log(result);
