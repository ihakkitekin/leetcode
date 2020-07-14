// https://leetcode.com/problems/first-missing-positive

/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    const set = new Set(nums);
    let lowest = 1;

    while(true) {
      if(set.has(lowest)) {
        lowest++;
      } else {
        break;
      }  
    }

    return lowest;
};