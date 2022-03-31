/**
 * https://leetcode.com/problems/maximum-length-of-a-concatenated-string-with-unique-characters/
 * @param arr
 */
const maxLength = (arr) => {
  return permutation(arr, 0, '');
}

const permutation = (arr, pos, res) => {
  let resSet = new Set(res.split(''));
  if (res.length !== resSet.size) {
    return 0;
  }
  let best = res.length;
  for (let i = pos; i < arr.length; ++i) {
    // console.log(res + arr[i]);
    best = Math.max(best, permutation(arr, i + 1, res + arr[i]));
  }
  return best;
}

/**
 * test cases
 */
const test1 = ["un","iq","ue"];  // expected: 4
const test2 = ["cha","r","act","ers"] // expected: 6
const test3 = ["abcdefghijklmnopqrstuvwxyz"] // expected: 26
const test4 = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p"];
const test5 = ["jnfbyktlrqumowxd","mvhgcpxnjzrdei"];
const test6 = ["yy","bkhwmpbiisbldzknpm"];
const test7 = ["a", "abc", "d", "de", "def"];

// console.log(maxLength(test1));
// console.log(maxLength(test2));
// console.log(maxLength(test3));
// console.log(maxLength(test4));

// console.log(maxLength(test1, test1));
// console.log(maxLength(test2, test2));
// console.log(maxLength(test3, test3));
// console.log(maxLength(test4, test4));
// console.log(maxLength(test5, test5));
// console.log(maxLength(test6, test6));
console.log(maxLength(test7, test7));
// permutation(test4, test4);
