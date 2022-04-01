/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let length = matrix[0].length;

    for (let layer = 0; layer < Math.floor(length / 2); ++layer) {
        let first = layer;
        let last = length - layer - 1;
        for (let i = first; i < last; ++i) {
            let offset = i - first;

            let temp = matrix[first][i];

            // left to top
            matrix[first][i] = matrix[last - offset][first];

            // bottom to left
            matrix[last - offset][first] = matrix[last][last - offset];

            // right to bottom
            matrix[last][last - offset] = matrix[i][last];

            // top to right
            matrix[i][last] = temp;
        }
    }
};

// test cases
let matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
