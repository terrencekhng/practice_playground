/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
  let stack = [-1];
  let length = 0;
  let maxLength = 0;
  for (let i = 0; i < s.length; ++i) {
    if (s[i] === '(') {
      stack.push(i);
    } else if (s[i] === ')') {
      stack.pop();
      if (!stack.length) {
        stack.push(i);
      } else {
        let topIndex = stack[stack.length - 1];
        console.log('top index: ', topIndex);
        length = i - topIndex;
      }
    }
    maxLength = Math.max(maxLength, length);
  }
  return maxLength;
};

let length = longestValidParentheses('()(())');
console.log(length);
