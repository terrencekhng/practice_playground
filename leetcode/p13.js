/**
 * https://leetcode.com/problems/roman-to-integer/
 *
 */
const map = {
  'I': 1,
  'V': 5,
  'X': 10,
  'L': 50,
  'C': 100,
  'D': 500,
  'M': 1000
};

const tens = ['I', 'X', 'C'];

const romanToInt = (s) => {
  let res = 0;
  let canMinus = false;
  for (let i = s.length - 1; i >= 0; --i) {
    if (canMinus && tens.includes(s[i]) && map[s[i]] < map[s[i+1]]) {
      res -= map[s[i]];
    } else {
      res += map[s[i]];
    }
    if (s[i] !== 'I') {
      canMinus = true;
    } else {
      canMinus = false;
    }
  }
  return res;
}

/**
 * test cases
 */
console.log('result >>>', romanToInt('MCMXCIV'));
console.log('result >>>', romanToInt('LVIII'));
