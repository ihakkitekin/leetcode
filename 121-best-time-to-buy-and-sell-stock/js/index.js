// https://leetcode.com/problems/best-time-to-buy-and-sell-stock

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  debugger;
  var buying;
  var selling;

  var diffs = [];

  for (let i = 0; i < prices.length; i++) {
    const price = prices[i];

    if (price < buying) {
      buying = price;
      selling = undefined;
    } else if (price > selling && price > buying) {
      selling = price;
    }

    if (isUndefined(buying)) {
      buying = price;
    } else if (isUndefined(selling)) {
      selling = price;
    }

    if (selling > buying) {
      diffs.push(selling - buying);
    }
  }

  var res = diffs.reduce(function (a, b) {
    return Math.max(a, b);
  }, []);

  if (Array.isArray(res)) return 0

  return res
};

function isUndefined(n) {
  return typeof n === 'undefined';
}