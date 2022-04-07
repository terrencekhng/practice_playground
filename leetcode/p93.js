/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
  let results = [];
  restoreHelper('', s, 0, 0, results);
  return results;
};

function restoreHelper(currIp, s, pos, counter, results) {
  if (counter > 4 || pos > s.length) {
    return;
  }
  if (counter === 4 && pos === s.length) {
    results.push(currIp);
    return;
  }
  for (let i = 1; i <= 3; ++i) {
    let localIp = s.substring(pos, pos + i);
    if (isValidIpAddress(localIp) && pos + i <= s.length) {
      currIp += localIp;
      // check whether it's the last group, if not, append the dot
      if (pos + i < s.length) {
        currIp += '.';
      }
      counter += 1;
      restoreHelper(currIp, s, pos + i, counter, results);

      // Reach the return case, either (counter > 4 || pos > s.length),
      // or (counter === 4 && pos === s.length)
      // what we should do next is to continue to check the rest string.

      // check whether to remove the dot
      if (pos + i < s.length) {
        currIp = currIp.substring(0, currIp.length - 1);
      }

      // remove the last added string group
      currIp = currIp.substring(0, currIp.length - i);

      counter -= 1;
    }
  }
}

/**
 *
 * @param {string} s
 * @return {boolean}
 */
function isValidIpAddress(s) {
  if (s.length > 4 || s.length === 0) {
    return false;
  }
  if (s.startsWith('0')) {
    return s.length === 1;
  }
  let val = parseInt(s, 10);
  if (val > 255 || val < 0) {
    return false;
  }
  return true;
}

let s = '101023';
let results = restoreIpAddresses(s);
console.log(results);
