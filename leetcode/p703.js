/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
  this.array = nums.sort((a, b) => a - b);
  this.k = k;
};

/**
 * This method can be optimized to use binary heap
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
  if (!this.array.length) {
    this.array.push(val);
  }
  for (let i = 0; i < this.array.length; ++i) {
    if (val < this.array[i]) {
      this.array.splice(i, 0, val);
      break;
    }
    if (i === this.array.length - 1) {
      this.array.push(val);
      break;
    }
  }
  return this.array[this.array.length - this.k];
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

let kthLargest = new KthLargest(1, []);
let result = [];
result.push(
  kthLargest.add(3),
  kthLargest.add(5),
  kthLargest.add(10),
  kthLargest.add(9),
  kthLargest.add(4)
);
console.log(result);

