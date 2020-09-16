// https://leetcode.com/problems/search-insert-position

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    const next = nums[i + 1];

    if (current === target) return i;

    if (target > current && target < next) return i + 1;

    if (target < current) return i;
  }

  return nums.length;
};