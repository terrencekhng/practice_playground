/**
 * Example: Given an array of distinct integer values, count the number of pairs of integers that have difference k. For example, given the array {1, 7, 5, 9, 2, 12, 3} and the difference k = 2,there are four pairs with difference2: (1, 3), (3, 5), (5, 7), (7, 9).
 * @param array
 * @param k
 * @return {undefined}
 */
function findPairsWithKDifference(array, k) {
  if (array.length > 0) {
    for (let i = 0; i < array.length; ++i) {
      let key = array[i] + k;
      if (array.indexOf(key) > 0) {
        // todo
        console.log(`(${array[i]}, ${key}) `);
      }
    }
  }
  return undefined;
}

findPairsWithKDifference([1,7,5,9,2,12,3, 3], 2);
