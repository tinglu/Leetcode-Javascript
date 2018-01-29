/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    // 1. Mathematical method

    // if (n === null) return false;
    // var log = Math.log2(n);
    // return log === parseInt(log, 10);

    // Slightly faster way:
    // Use mod 1 to check if is int
    // return Math.log2(n) % 1 === 0;

    // 2. Bit manipulation method
    // power of two numbers - 1 could exist in any bit 10, 100, 1000, etc...
    return n > 0 && (n & (n - 1)) === 0;
};
// console.log(isPowerOfTwo(2));
