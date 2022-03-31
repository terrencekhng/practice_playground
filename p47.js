/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  let result = [];
  let record = {};
  permute([], nums, record, result);
  return result;
};

function permute(prefix, rest, record, result) {
  if (!rest.length) {
    if (!record[prefix + rest]) {
      record[prefix + rest] = true;
      result.push([...prefix, ...rest]);
    }
    return;
  }
  for (let i = 1; i <= rest.length; ++i) {
    permute(
      [...prefix, ...rest.slice(i - 1, i)],
      [...rest.slice(0, i - 1), ...rest.slice(i)],
      record,
      result
    );
  }
}

let result = permuteUnique([1,1,3]);
console.log(result);
