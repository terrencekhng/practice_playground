/**
 *
 * @param {number[]} A
 * @param {number} start
 * @param {number} end
 */
function merge_sort(A, start, end) {
  if (start >= end) {
    return;
  }
  let mid = Math.floor((start + end) / 2);
  merge_sort(A, start, mid);
  merge_sort(A, mid + 1, end);
  merge(A, start, mid, end);
}

/**
 *
 * @param {number[]} A
 * @param {number} start
 * @param {number} mid
 * @param {number} end
 */
function merge(A, start, mid, end) {
  let left = [];
  let right = [];
  let leftLength = mid - start + 1;
  let rightLength = end - mid;
  // console.log('left length: ', leftLength);
  // console.log('right length: ', rightLength);
  // console.log(start, mid, end);
  for (let i = 1; i <= leftLength; ++i) {
    left.push(A[start + i - 1]);
  }
  for (let i = 1; i <= rightLength; ++i) {
    right.push(A[mid + i]);
  }
  left.push(Infinity);
  right.push(Infinity);
  // console.log('left: ', left);
  // console.log('right: ', right);
  let i = 0;
  let j = 0;
  for (let k = start; k <= end; ++k) {
    if (left[i] <= right[j]) {
      A[k] = left[i];
      i += 1;
    } else {
      A[k] = right[j];
      j += 1;
    }
  }
}

let array = [5,4,3,2,1,0];
merge_sort(array, 0, array.length - 1);
console.log('result: ', array);
