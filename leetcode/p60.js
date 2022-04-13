/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
  let arr = [];
  for (let i = 1; i <= n; ++i) {
    arr.push(i);
  }

  let result = '';
  let count = 0;

  function permute(prefix, rest) {
    if (count === k) {
      return;
    }
    if (rest.length === 0) {
      count += 1
      if (count === k) {
        result = prefix.join('');
      }
      return;
    }
    for (let i = 0; i < rest.length; ++i) {
      permute([...prefix, rest[i]], [...rest.slice(0, i), ...rest.slice(i + 1)]);
    }
  }

  permute([], arr, count);
  return result;
};

let n = 4;
let k = 9;
let result = getPermutation(n, k);
console.log(result);

