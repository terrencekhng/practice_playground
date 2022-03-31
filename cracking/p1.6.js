/**
 * Implement a method to perform basic string compression using the counts of repeated characters. For example, the string aabcccccaaa would become a2blc5a3. If the "compressed" string would not become smaller than the original string, your method should return the original string. You can assume the string has only uppercase and lowercase letters (a - z).
 * @param s
 * @return {string|*}
 */
function stringCompression(s) {
  let current = s[0];
  let count = 1;
  let compressed = '';
  let index = 1;

  while (index <= s.length) {
    if (compressed.length >= s.length) {
      return s;
    }
    if (s[index] === current) {
      count += 1;
      index += 1;
    } else if (s[index] !== current) {
      compressed += `${current}${count}`;
      count = 1;
      current = s[index];
      index += 1;
    }
  }

  return compressed;
}

const result = stringCompression('aabcccccaaa');
console.log(result);
