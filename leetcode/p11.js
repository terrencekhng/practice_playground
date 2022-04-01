/**
 * https://leetcode.com/problems/container-with-most-water/
 * @param height
 */
const maxArea = (height) => {
    if (Array.isArray(height)) {
        let l = 0, r = height.length - 1;
        let maxarea = height[l] * height[r];
        while (l < r) {
            maxarea = Math.max(maxarea, Math.min(height[l], height[r]) * (r - l));
            if (height[l] < height[r]) {
                l += 1;
            } else {
                r -= 1;
            }
        }
        return maxarea;
    }
}

const test1 = [1,8,6,2,5,4,8,3,7];
const test2 = [4,3,2,1,4];
console.log(maxArea(test1));
console.log(maxArea(test2));
