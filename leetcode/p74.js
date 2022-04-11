/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  if (matrix.length === 1) {
    return binarySearch(matrix[0], 0, matrix[0].length, target);
  }
  let index = null;
  for (let i = 0, j = 1; j < matrix.length; ++i, ++j) {
    if (matrix[i][0] <= target && matrix[j][0] > target) {
      index = i;
      break;
    }
    index = j;
  }
  return binarySearch(matrix[index], 0, matrix[index].length, target);
};

function binarySearch(nums, left, right, target) {
  console.log(left, right);
  if (left === right) {
    return false;
  }
  let mid = Math.floor((left + right) / 2);
  if (nums[mid] === target) {
    return true;
  } else if (nums[mid] > target) {
    return binarySearch(nums, left, mid, target);
  } else if (nums[mid] < target) {
    return binarySearch(nums, mid + 1, right, target);
  }
}

let matrix = [[1,3,5]];
let target = 4;
let result = searchMatrix(matrix, target);
console.log(result);
