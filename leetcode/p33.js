/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let leftEndIndex = 0;
    let rightStartIndex = 0;
    for (let i = 0, j = i + 1; i < nums.length - 1; ++i, ++j) {
        if (nums[j] < nums[i]) {
            rightStartIndex = j;
            leftEndIndex = i;
        }
    }
    if (leftEndIndex === rightStartIndex && leftEndIndex === 0) {
        return nums.indexOf(target);
    } else {
        // binary search
        let left = binarySearch(nums, 0, leftEndIndex, target);
        let right = binarySearch(nums, rightStartIndex, nums.length - 1, target);
        if (left === right && left === -1) {
            return -1;
        }
        return left >= 0 ? left : right;
    }
};

function binarySearch(nums, left, right, target) {
    let mid = Math.floor((left + right) / 2);
    if (target === nums[mid]) {
        return mid;
    }
    if (left === right) {
        return -1;
    } else if (target > nums[mid]) {
            return binarySearch(nums, mid + 1, right, target);
        } else {
            return binarySearch(nums, left, mid, target);
        }
}
