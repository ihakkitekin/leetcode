// https://leetcode.com/problems/container-with-most-water

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let area = 0, start = 0, end = height.length - 1;

  while (start < end) {
    let x = end - start;
    let y1 = height[start];
    let y2 = height[end];

    if(y1 < y2) {
      area = Math.max(area, x * y1);
      start++;
    } else {
      area = Math.max(area, x * y2);
      end--;
    }
  }

  return area;
};

