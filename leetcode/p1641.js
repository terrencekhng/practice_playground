/**
 * @param {number} n
 * @return {number}
 */
var countVowelStrings = function(n) {
  let count = 0;

  function comb(n, combination, next) {
    if (n === 0) {
      count += 1;
      return;
    }

    // Terminator for the last element in the combination array
    if (next > 4) {
      return;
    }

    combination.push(next);
    comb(n - 1, combination, next);
    combination.pop();
    comb(n, combination, next + 1);
  }

  comb(n, [], 0);
  return count;
};

const n = 4;
const result = countVowelStrings(n);
console.log(result);
