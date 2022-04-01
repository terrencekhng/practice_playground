/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    let prev = -1;
    for (let i = nums.length - 1, j = i - 1; i > 0; --i, --j) {
        if (nums[i] > nums[j]) {
            prev = j;
            break;
        }
    }
    let sortedArray = nums.slice(prev + 1).sort((a, b) => a - b);
    if (prev >= 0) {
        let nextLarge = findNextLarge(nums[prev], sortedArray);
        let temp = nums[prev];
        nums[prev] = nextLarge.val;
        sortedArray[nextLarge.index] = temp;
    }
    for (let i = prev + 1, j = 0; i < nums.length; ++i, ++j) {
        nums[i] = sortedArray[j];
    }
};

function findNextLarge(val, nums) {
    let currentLarge = Infinity;
    let index = 0;
    for (let i = 0; i < nums.length; ++i) {
        if (nums[i] < currentLarge && nums[i] > val) {
            currentLarge = nums[i];
            index = i;
        }
    }
    return {
        val: currentLarge,
        index
    };
}
