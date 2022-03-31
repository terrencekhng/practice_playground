/**
 * https://leetcode.com/problems/implement-strstr/submissions/
 * @param haystack
 * @param needle
 * @returns {number}
 */
const strStr = (haystack, needle) => {
  let ret = 0;
  if (needle === '') {
    return ret;
  }
  for (let i = 0; i < haystack.length; ++i) {
    ret = i;
    for (let j = i, k = 0; k < needle.length; ++j, ++k) {
      if (haystack[j] !== needle[k]) {
        break;
      } else if (k === needle.length - 1 && haystack[j] === needle[k]) {
        return ret;
      }
    }
  }
  return -1;
}

/**
 * test cases
 */
console.log(strStr('hello', 'll'));
console.log(strStr('aaaaa', 'bba'));
console.log(strStr('', ''));
