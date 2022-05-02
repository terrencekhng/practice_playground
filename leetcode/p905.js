/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
  let even = [];
  let odd = [];
  nums.forEach((num, index) => {
    if (num % 2 === 0) {
      even.push(num);
    } else {
      odd.push(num);
    }
  });
  return [...even, ...odd];
};

let nums = [3,1,2,4];
const result = sortArrayByParity(nums);
console.log(result);
