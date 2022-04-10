/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
  let results = [];
  nums = nums.sort((a, b) => a - b);
  powerSubset([], nums, {}, results);
  return results;
};

function powerSubset(prefix, rest, hash, results) {
  if (rest.length === 0) {
    if (hash[prefix.join('')]) {
      return;
    } else {
      hash[prefix.join('')] = true;
      results.push(prefix);
    }
    return;
  }
  if (hash[prefix.join('')]) {
    return;
  } else {
    hash[prefix.join('')] = true;
    results.push(prefix);
  }
  for (let i = 0; i < rest.length; ++i) {
    powerSubset([...prefix, rest[i]], rest.slice(i + 1), hash, results);
  }
}

let nums = [4,4,4,1,4];
let results = subsetsWithDup(nums);
console.log(results);
