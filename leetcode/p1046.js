/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
  if (stones.length === 2) {
    return Math.abs(stones[1] - stones[0]);
  }
  if (stones.length === 1) {
    return stones[0];
  }
  let sortedStones = stones.sort((a, b) => b - a);
  let difference = Math.abs(sortedStones[0] - sortedStones[1]);
  sortedStones = sortedStones.slice(2);
  if (difference !== 0) {
    sortedStones.push(difference);
  }
  return lastStoneWeight(sortedStones);
};

let stones = [2,2];
let result = lastStoneWeight(stones);
console.log(result);
