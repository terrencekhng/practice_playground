/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  let result = [];
  getCombination(candidates, target, result, []);
  return result;
};

function getCombination(nums, target, result, subResult) {
  for (let i = 0; i < nums.length; ++i) {
    let difference = target - nums[i];
    // console.log('difference: ', difference);
    if (difference < 0 && i === nums.length - 1) {
      subResult.pop();
    } else if (difference > 0) {
      subResult.push(nums[i]);
      console.log('>>> ', nums[i], subResult, [...nums.slice(i + 1)], difference);
      // console.log([...nums.slice(0, i), ...nums.slice(i + 1)]);
      getCombination([...nums.slice(i + 1)], difference, result, subResult);
    } else if (difference === 0) {
      subResult.push(nums[i]);
      console.log('== 0', nums[i], subResult);
      result.push(subResult);
      console.log('result: ', result);
      // subResult = [];
      subResult.pop();
      subResult.pop();
    }
  }
}

let testArray = [10,1,2,7,6,1,5];
let target = 8;
let result = combinationSum2(testArray, target);
console.log(result);

