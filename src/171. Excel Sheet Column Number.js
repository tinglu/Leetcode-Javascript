// Related to question [Excel Sheet Column Title](https://leetcode.com/problems/excel-sheet-column-title/)
//
// Given a column title as appear in an Excel sheet, return its corresponding column number.
//
// For example:
//
// A -> 1
// B -> 2
// C -> 3
// ...
// Z -> 26
// AA -> 27
// AB -> 28

/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function (s) {
  var arr = s.split('');
  var len = arr.length;
  var col = 0;
  for (var i = len - 1; i >= 0; i--) {
    var factor = len - i - 1;
    var lnum = arr[i].charCodeAt(0) - 64;
    col += Math.pow(26, factor) * lnum;
  }
  return col;
};