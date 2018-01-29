// Given a roman numeral, convert it to an integer.
//
// Input is guaranteed to be within the range from 1 to 3999.

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  if (s === null) return 0;
  var romanTable = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  };

  var len = s.length;
  var sum = 0;
  var prev = 0;
  for (var i = len - 1; i >= 0; i--) {
    var curr = romanTable[s[i]];
    if (i === len - 1) {
      sum += curr;
    } else {
      if (curr < prev) {
        sum -= curr;
      } else {
        sum += curr;
      }
    }
    prev = curr;
  }
  return sum;
};