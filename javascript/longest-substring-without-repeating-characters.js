// https://leetcode.com/problems/longest-substring-without-repeating-characters

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let set = new Set();
  let longest = 0;
  
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    
    if(set.has(char)) {
      if(set.size > longest) longest = set.size;
      clearSet(set, char);
    }

    set.add(char);
  }

  if(set.size > longest) longest = set.size;

  return longest;
};

/**
 * @param {Set<string>} set
 * @param {string} val
 * @return {number}
 */
function clearSet(set, val) {
  let arr = Array.from(set);
  
  for (let i = 0; i < arr.length; i++) {
    const v = arr[i];
    set.delete(v);

    if(v === val) break;
  }
}