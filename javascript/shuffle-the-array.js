// https://leetcode.com/problems/shuffle-the-array

// Solved by jeodis

/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
  const res = [];

  for (let i = 0; i < n; i++) {
    res[i * 2] = nums[i];
    res[i * 2 + 1] = nums[n + i];
  }

  return res;
};