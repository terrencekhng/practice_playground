/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  let results = [];
  let record = {};
  let sortedNums = nums.sort((a, b) => a - b);
  for (let i = 0; i < sortedNums.length; ++i) {
    // For contiguous keys, use hashtable to skip
    if (record[sortedNums[i]]) {
      continue;
    }
    record[sortedNums[i]] = true;
    let remain = 0 - sortedNums[i];
    let remainArray = sortedNums.slice(i + 1);
    let left = 0;
    let right = remainArray.length - 1;
    let lastLeft = undefined;
    let lastRight = undefined;
    while (left < right) {
      // Check if the next left is the same, if yes, then skip and continue
      if (lastLeft === remainArray[left]) {
        left += 1;
        continue;
      }
      // Check if the before right is the same, if yes, then skip and continue
      if (lastRight === remainArray[right]) {
        right -= 1;
        continue;
      }
      // Repeat the 2-sum algorithm, with the updated last left/right value
      if (remainArray[left] + remainArray[right] > remain) {
        lastRight = remainArray[right];
        right -= 1;
      } else if (remainArray[left] + remainArray[right] < remain) {
        lastLeft = remainArray[left];
        left += 1;
      } else {
        results.push([nums[i], remainArray[left], remainArray[right]]);
        lastRight = remainArray[right];
        lastLeft = remainArray[left];
        right -= 1;
        left += 1;
      }
    }
  }
  return results;
};

let nums = [-1,0,1,2,-1,-4];
let results = threeSum(nums);
console.log(results);
