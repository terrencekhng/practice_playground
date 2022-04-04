/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
  let hashTable = {};
  for (let i = 1; i <= 26; ++i) {
    hashTable[String.fromCharCode(64 + i)] = i.toString();
  }
  console.log(hashTable);
};

numDecodings('1');
