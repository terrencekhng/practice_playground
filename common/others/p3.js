/**
 * Given a smaller strings and a bigger string b, design an algorithm to find all permutations of the shorter string within the longer one. Print the location of each permutation.
 * @param s
 * @param b
 */
function checkPermutationSubstring(s, b) {
  const length = s.length;
  for (let i = 0; i <= b.length - length; ++i) {
    let substring = b.substring(i, i + length);
    if (isPermutation(substring, s)) {
      console.log(substring, `(${i}, ${i + length - 1})`);
    }
  }
}

function isPermutation(s, target) {
  if (s.length !== target.length) {
    return false;
  }
  if (!s.length && !target.length) {
    return true;
  }
  return s.split('').sort().join('') === target.split('').sort().join('');

}

// const result = isPermutation('bbab', 'abbc');
// console.log(result);

checkPermutationSubstring('abbc', 'cbabadcbbabbcbabaabccbabcabasdafsasgababaababagaaddsb')
