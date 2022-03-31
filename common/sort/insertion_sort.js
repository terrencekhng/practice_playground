/**
 * Insertion sort
 * @param {number[]} A
 */
function insertion_sort(A) {
  for (let i = 1; i < A.length; ++i) {
    let j = i - 1;
    let temp = A[i];
    while (j >= 0 && A[j] > temp) {
      A[j + 1] = A[j];
      j -= 1;
    }
    A[j + 1] = temp;
    console.log(A);
  }
}

let testArray = [5,4,1,2,6];
insertion_sort(testArray);
console.log(testArray);
