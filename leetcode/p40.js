/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  let comb = [];
  let results = [];
  let counter = {};
  for (let i = 0; i < candidates.length; ++i) {
    if (!counter[candidates[i]]) {
      counter[candidates[i]] = 1;
    } else {
      counter[candidates[i]] += 1;
    }
  }
  let counterList = [];
  Object.entries(counter).forEach(([a, b]) => {
    counterList.push([Number(a), b]);
  });

  const backtrack = function(remain, curr, counter) {
    if (remain <= 0) {
      if (remain === 0) {
        // Important, must push a copied array, not the reference to the array
        results.push(comb.slice());
      }
      return;
    }

    for (let nextCurr = curr; nextCurr < counter.length; ++nextCurr) {
      let entry = counter[nextCurr];
      let candidate = entry[0];
      let freq = entry[1];

      if (freq < 0) {
        continue;
      }

      // add new element to the current combination
      // console.log('result: ', results);
      comb.push(candidate);
      counter[nextCurr] = [candidate, freq - 1];

      // continue the exploration with the updated combination
      backtrack(remain - candidate, nextCurr, counter);

      // backtrack the changes, so that we can try another candidates
      counter[nextCurr] = [candidate, freq];
      comb.pop();
    }
  }

  backtrack(target, 0, counterList);
  return results;
};


let testArray = [10,1,2,7,6,1,5];
let target = 8;
let result = combinationSum2(testArray, target);
console.log(result);

