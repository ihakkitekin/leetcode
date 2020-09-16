// https://leetcode.com/problems/time-based-key-value-store/


// This solution is technically correct, 
// but since I was too lazy to use binary search 
// or any other fast searching algorithm, Leetcode timeouts

var TimeMap = function () {
  this.map = {};
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function (key, value, timestamp) {
  const innerMap = this.map[key];

  if (innerMap) {
    innerMap[timestamp] = value;
  } else {
    const innerMap = {};
    innerMap[timestamp] = value;

    this.map[key] = innerMap;
  }
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function (key, timestamp) {
  const innerMap = this.map[key];

  if (!innerMap) return '';


  let max;

  for (const timestamp_prev in innerMap) {
    if (timestamp_prev <= timestamp) {
      max = timestamp_prev;
    } else {
      break;
    }
  }

  if (!max) return '';

  return innerMap[max];
};