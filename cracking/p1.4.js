function palindromePermutation(s) {
  const tempStr = removeWhiteSpaces(s.toLowerCase());
  permute('', tempStr);
}

function isPalindrome(s) {
  return s.split('').reverse().join('') === s;
}

function removeWhiteSpaces(s) {
  let result = '';
  for (let i = 0; i < s.length; ++i) {
    if (s[i] !== ' ') {
      result += s[i];
    }
  }
  return result;
}

let result = [];
function permute(prefix, rest) {
  if (!rest.length) {
    if (isPalindrome(`${prefix}${rest}`)) {
      // console.log(prefix, rest);
      result.push(`${prefix}${rest}`);
    }
    return;
  }
  for (let i = 0; i < rest.length; ++i) {
    permute(`${prefix}${rest[i]}`, `${rest.substring(0, i)}${rest.substring(i + 1)}`);
  }
}

// isPalindrome('taco cat');
// palindromePermutation('Tact Coa');
palindromePermutation('abcba');
console.log(result, result.length);

/*------------------------OPTIMIZATIONS------------------------*/

