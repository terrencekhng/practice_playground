/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
  if (isPalindrome(s)) {
    return true;
  }
  for (let i = 0, j = s.length - 1; i <= j; ++i, --j) {
    if (s[i] !== s[j]) {
      return isPalindrome(`${s.substring(i + 1, j + 1)}`) || isPalindrome(`${s.substring(i, j)}`);
    }
  }
  return true;
};

/**
 *
 * @param {string} s
 */
function isPalindrome(s) {
  return s.split('').reverse().join('') === s;
}

let test = 'abccda';
let result = validPalindrome(test);
console.log(result);
