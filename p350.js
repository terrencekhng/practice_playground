/**
 * https://leetcode.com/problems/intersection-of-two-arrays-ii/
 * @param nums1
 * @param nums2
 */
const intersect = (nums1, nums2) => {
  const longer = nums1.length > nums2.length ? nums1 : nums2;
  const shorter = nums1.length <= nums2.length ? nums1 : nums2;
  let res = [];
  for (let i = 0; i < shorter.length; ++i) {
    if (longer.indexOf(shorter[i]) > -1) {
      res.push(shorter[i]);
      longer.splice(longer.findIndex(el => el === shorter[i]), 1);
    }
  }
  return res;
}


/**
 * test cases
 */
console.log(intersect([4,9,5], [9,4,9,8,4]));
console.log(intersect([1,2,2,1], [2,2]));
console.log(intersect([1,2], [1,1]));
console.log(intersect([3,1,2], [1,1]));
