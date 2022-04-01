/**
 * https://leetcode.com/problems/group-anagrams/
 * @param strs
 */
const groupAnagrams = (strs) => {
  const hashMap = {};
  for (let i = 0; i < strs.length; ++i) {
    let sortedAnagram = sortAnagrams(strs[i]);
    if (hashMap[sortedAnagram] === undefined) {
      hashMap[sortedAnagram] = [strs[i]];
    } else {
      hashMap[sortedAnagram] = [...hashMap[sortedAnagram], strs[i]];
    }
  }
  const res = hashMap2Array(hashMap);
  return res;
}

const sortAnagrams = (str) => {
  return str.split('').sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0)).join('');
}

const hashMap2Array = (hashmap) => {
  let res = [];
  for (const key in hashmap) {
    res.push(hashmap[key]);
  }
  
  return res;
}

/**
 * test cases
 */
// ["eat","tea","tan","ate","nat","bat"]
// expected: [["bat"],["nat","tan"],["ate","eat","tea"]]
const test1 = ["eat","tea","tan","ate","nat","bat"];
const test2 = [''];
const test3 = ['a'];
console.log(groupAnagrams(test1));
console.log(groupAnagrams(test2));
console.log(groupAnagrams(test3));
