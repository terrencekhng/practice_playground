/**
 * Assume you have a method isSubString which checks if one word is a substring of another. Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 using only one call to isSubString (e.g., "waterbottle" is a rotation of" erbottlewat").
 * @param s
 */
function isStringRotation(s1, s2) {
  if (s1.length === s2.length) {
    return isSubString(`${s1}${s1}`, s2);
  }
  return false;
}

function isSubString(s1, s2) {
  return s1.indexOf(s2) >= 0;
}

const result = isStringRotation('waterbottle', 'erbottlewat');
console.log(result);
