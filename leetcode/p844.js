/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
  s = processString(s);
  t = processString(t);
  console.log(s, t);
  return s === t;
};

/**
 *
 * @param {string} s
 */
function processString(s) {
  let first = 0;
  let second = 1;
  while (second <= s.length - 1) {
    if (s[second] === '#' && second - first === 1) {
      s = s.substring(2);
    } else if (s[second] === '#') {
      s = `${s.substring(first, second - 1)}${s.substring(second + 1)}`;
      second = first + 1;
    } else {
      second += 1;
    }
  }
  return s.replace('#', '');
}

const s = 'y#fo##f';
const t = 'y#f#o##f';
const result = backspaceCompare(s, t);
console.log(result);
