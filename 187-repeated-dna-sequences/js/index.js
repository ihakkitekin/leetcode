// https://leetcode.com/problems/repeated-dna-sequences

/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
  if (s == null || s.length < 10) return [];

  const set = new Set();
  const result = new Set();

  let current = "";

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    
    current += char;
    
    if(current.length > 10) current = current.slice(1);
    
    if(current.length == 10) {
      if(set.has(current)) {
        result.add(current);
      } else {
        set.add(current);
      }
    }
  }

  return Array.from(result);
};
