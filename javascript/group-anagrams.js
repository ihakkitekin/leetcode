// https://leetcode.com/problems/group-anagrams

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = new Map();

    for (let i = 0; i < strs.length; i++) {
      const key = Array.from(strs[i]).sort().join('');
      
      const group = map.get(key);

      if(group){
        group.push(strs[i]);
      } else {
        map.set(key, [strs[i]]);
      }
    }

    return [...map.values()];
};