/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (!s) {
        return 0;
    }
    
    let max = 1;
    let curStr = '';
    
    for (let i = 0; i < s.length - 1; ++i) {
        curStr = s[i];
        let j = i + 1;
        while (curStr.indexOf(s[j]) < 0 && j < s.length) {
            curStr += s[j];
            max = Math.max(curStr.length, max);
            j += 1;
        }
        curStr = '';
    }
    console.log(max);
    return max;
};
