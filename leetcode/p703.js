/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {

};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {

};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

let kthLargest = new KthLargest(3, [4, 5, 8, 2]);
let result = [];
result.push(
  kthLargest.add(3),
  kthLargest.add(5),
  kthLargest.add(10),
  kthLargest.add(9),
  kthLargest.add(4)
);
console.log(result);

