/**
 * Given two sorted arrays, find the number of elements in common. The arrays are the same length and each has all distinct elements.
 * @param arr1
 * @param arr2
 */
function findCommonInTwoArrays(arr1, arr2) {
  let stopAt = 0;
  for (let i = 0; i < arr1.length; ++i) {
    for (let j = stopAt; j < arr2.length; ++j) {
      if (arr1[i] < arr2[j]) {
        stopAt = j;
        break;
      } else if (arr1[i] === arr2[j]) {
        console.log(arr1[i]);
        stopAt = j;
      }
    }
  }
}

findCommonInTwoArrays([13,27,35,40,49,55,59], [17,35,39,40,55,58,60]);
