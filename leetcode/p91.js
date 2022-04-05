/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
  let arr = s.split('').map(Number);
  // return recurse(arr, 0);

  let dp = new Array(s.length).fill(-1);
  function memoized(arr, i) {
    if (arr[i] === 0) {
      return 0;
    }
    if (i === arr.length) {
      return 1;
    }
    if (dp[i] !== -1) {
      return dp[i];
    }
    let res = memoized(arr, i + 1);
    if (i + 1 < arr.length) {
      const num = parseInt(`${arr[i]}${arr[i + 1]}`);
      if (num <= 26) {
        res += memoized(arr, i + 2);
      }
    }

    return dp[i] = res;
  }
  return memoized(arr, 0);
};

function recurse(arr, i) {
  if (arr[i] === 0) {
    return 0;
  }
  if (i === arr.length) {
    return 1;
  }
  let res = recurse(arr, i + 1);
  if (i + 1 < arr.length) {
    const num = parseInt(`${arr[i]}${arr[i + 1]}`);
    if (num <= 26) {
      res += recurse(arr, i + 2);
    }
  }
  return res;
}



let result = numDecodings("111111111111111111111111111111111111111111111");
console.log(result);
