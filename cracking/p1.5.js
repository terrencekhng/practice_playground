/**
 * There are three types of edits that can be performed on strings: insert a character, remove a character, or replace a character. Given two strings, write a function to check if they are one edit (or zero edits) away.
 * @param s
 * @param b
 * @return {boolean}
 */
function oneWay(s, b) {
  if (s === b) {
    return true;
  }
  let sourceHash = {};
  let remain = '';
  for (let i = 0; i < s.length; ++i) {
    if (s.length < b.length) {
      sourceHash[s[i]] = true;
      remain = b;
    } else {
      sourceHash[b[i]] = true;
      remain = s;
    }
  }
  let edits = 0;
  for (let i = 0; i < remain.length; ++i) {
    if (edits > 1) {
      return false;
    }
    if (!sourceHash[remain[i]]) {
      edits += 1;
    }
  }
  return true;
}

const result = oneWay('pale', 'bale');
console.log(result);
