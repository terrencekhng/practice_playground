/**
 * Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes, write a method to rotate the image by 90 degrees. Can you do this in place?
 * @param matrix
 * @return {boolean}
 */
function rotateMatrix(matrix) {
  const length = matrix.length;
  for (let layer = 0; layer < Math.floor(length / 2); ++layer) {
    let first = layer;
    let last = length - layer - 1;
    for (let i = first; i < last; ++i) {
      let offset = i - first;

      // top to temp
      let temp = matrix[first][i];

      // left to top
      matrix[first][i] = matrix[last - offset][first];

      // bottom to left
      matrix[last - offset][first] = matrix[last][last - offset];

      // right to bottom
      matrix[last][last - offset] = matrix[i][last];

      // temp to right
      matrix[i][last] = temp;
    }
  }
  return true;
}

let matrix = [
  [1,2,3,4,5],
  [6,7,8,9,10],
  [11,12,13,14,15],
  [16,17,18,19,20],
  [21,22,23,24,25],
];

console.log('before rotation: ', matrix);
rotateMatrix(matrix);
console.log('after rotation: ', matrix);

