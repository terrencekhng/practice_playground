/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  let first = 0;
  let last = numbers.length - 1;
  while (first <= last) {
    if (numbers[first] + numbers[last] < target) {
      first += 1;
    } else if (numbers[first] + numbers[last] > target) {
      last -= 1;
    } else {
      return [first + 1, last + 1];
    }
  }
};

let numbers = [2,3,4];
let target = 6;
let result = twoSum(numbers, target);
console.log(result);
