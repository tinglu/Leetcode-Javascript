// Given a positive integer, return its corresponding column title as appear in an Excel sheet.
//
// For example:
//
// 1 -> A
// 2 -> B
// 3 -> C
// ...
// 26 -> Z
// 27 -> AA
// 28 -> AB

/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function (n) {
  var lnum = [];
  var count = 0;
  var remainder, rest;
  var getLnum = function (num) {
    remainder = num / (Math.pow(26, count)) % 26;
    remainder = remainder === 0 ? 26 : remainder;
    rest = num - remainder * (Math.pow(26, count));
    lnum.unshift(String.fromCharCode(remainder + 64));
    if (rest > 0) {
      count++;
      getLnum(rest);
    }
  };
  getLnum(n, n);
  return lnum.join('');
};