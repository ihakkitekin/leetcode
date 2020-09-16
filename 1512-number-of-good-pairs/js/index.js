// https://leetcode.com/problems/number-of-good-pairs/submissions

/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
  const map = new Map();

  let pairsCount = 0;

  for (let i = 0, len = nums.length; i < len; i++) {
    if (map.has(nums[i])) {
      const count = map.get(nums[i]);
      map.set(nums[i], count + 1);
    } else {
      map.set(nums[i], 1)
    }
  }

  map.forEach(v => {
    pairsCount += combination(v, 2);
  });

  return pairsCount;
};

var factorial = function (num) {
  var res = 1;

  for (let i = 1; i <= num; i++) {
    res = res * i;
  }

  return res;
}

var combination = function (num, comb) {
  if (num > 1) {
    return factorial(num) / (comb * factorial(num - comb))
  }

  return 0;
}