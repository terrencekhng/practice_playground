/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
  if (!intervals.length) {
    return [newInterval];
  }
  let left = newInterval[0];
  let right = newInterval[1];
  let leftIndex = -1;
  let rightIndex = -1;
  let shouldInsert = false;
  let results = [];
  for (let i = 0; i < intervals.length; ++i) {
    if (left >= intervals[i][0] && left <= intervals[i][1]) {
      shouldInsert = false;
      leftIndex = i;
      break;
    }
    if (left < intervals[i][0]) {
      shouldInsert = true;
      leftIndex = i;
      break;
    }
  }
  if (leftIndex < 0) {
    if (left > intervals[intervals.length - 1][1]) {
      intervals.push([left, left]);
      leftIndex = intervals.length - 1;
    } else {
      intervals.unshift([left, left]);
      leftIndex = 0;
    }
  }
  if (shouldInsert) {
    intervals.splice(leftIndex, 0, [left, left]);
    shouldInsert = false;
  }

  for (let i = 0; i < intervals.length; ++i) {
    if (right >= intervals[i][0] && right <= intervals[i][1]) {
      shouldInsert = false;
      rightIndex = i;
      break;
    }
    if (right < intervals[i][0]) {
      shouldInsert = true;
      rightIndex = i;
      break;
    }
  }
  if (rightIndex < 0) {
    if (right < intervals[0][0]) {
      intervals.unshift([right, right]);
      rightIndex = 0;
    } else {
      intervals.push([right, right]);
      rightIndex = intervals.length - 1;
    }
  }
  if (shouldInsert) {
    intervals.splice(rightIndex, 0, [right, right]);
    shouldInsert = false;
  }

  results = merge(leftIndex, rightIndex, intervals);
  return results;
};

function merge(left, right, intervals) {
  let results = intervals.slice();
  let leftValue = intervals[left][0];
  let rightValue = intervals[right][1];
  let length = right - left + 1;
  results.splice(left, length);
  results.splice(left, 0, [leftValue, rightValue]);
  return results;
}

let intervals = [[1,5]];
let newInterval = [6,8];
// let intervals = [[1,3],[6,9]];
// let newInterval = [5,5.5];
let results = insert(intervals, newInterval);
console.log(results);
