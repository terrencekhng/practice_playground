/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prefix = '';
    let currentPrefix = '';
    let shouldContinue = true;
    
    for (let i = 0; i < strs[0].length; ++i) {
        currentPrefix = strs[0][i];
        for (let j = 1; j < strs.length; ++j) {
            if (!strs[j] || strs[j][i] !== currentPrefix) {
                shouldContinue = false;
                break;
            }
        }
        if (shouldContinue) {
            prefix += currentPrefix;        
        }
    
    }
    console.log(prefix);
    return prefix;
};
