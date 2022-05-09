/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if (!digits.length) {
    return [];
  }
  const mapping = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  };

  let result = [];
  let string = '';
  function comb(prev, index) {
    if (index === digits.length) {
      result.push(prev.slice());
      return;
    }
    for (const digit of mapping[digits[index]]) {
      comb(`${prev}${digit}`, index + 1);
    }
  }
  comb('', 0);
  return result;
};

const digits = '232';
const result = letterCombinations(digits);
console.log(result);
