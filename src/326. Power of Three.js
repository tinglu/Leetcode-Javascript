// Given an integer, write a function to determine if it is a power of three.
//
// Follow up:
// Could you do it without using any loop / recursion?

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  // 1. Mathematical method

  // if (n === null) return false;
  // var log = Math.log10(n) / Math.log10(3);
  // return log === parseInt(log, 10);

  // Slightly faster way:
  // Use mod 1 to check if is int
  return (Math.log10(n) / Math.log10(3)) % 1 === 0;
};
