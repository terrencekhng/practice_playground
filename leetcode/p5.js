/**
 * https://leetcode.com/problems/longest-palindromic-substring/
 * @param s
 */
const longestPalindrome = (s) => {

}

const isPalindrome = (s) => {
  if (s.split('').reverse().join('') === s) {
    return true;
  }
  return false;
}

/**
 * test cases
 */
const test1 = 'babad';
const test2 = 'cbbd';
const test3 = 'ac';
console.log(isPalindrome('abba'));
console.log(isPalindrome(''));
