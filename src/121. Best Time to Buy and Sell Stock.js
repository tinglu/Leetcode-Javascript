/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  if (prices.length <= 0) return 0;
  var min = prices[0];
  var max = prices[0];
  var result = 0;
  var tmp = 0;
  prices.forEach(function (p, i) {
    if (i > 0) {
      if (p < min && i < prices.length - 1) {
        min = p;
        max = p;
      } else if (p > max) {
        max = p;
      }
      tmp = max - min;
      result = result >= tmp ? result : tmp;
    }
  });
  return result;
};
