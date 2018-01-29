/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function (num) {
  // 1. Mathematical method
  // return (Math.log10(num) / Math.log10(4)) % 1 === 0;

  // 2. Bit manipulation method
  // power of four numbers - 1 always exists in odd bits 1, 100, 10000, etc...
  // so use 01010101... (32 bits) to only allow 1 occur in odd bits
  // 01010101... is hexadecimal 0x55555555 -  octal 1431655765
  return num > 0 && (num & (num - 1)) === 0 && ((num & 1431655765) !== 0);
};
// console.log(isPowerOfFour(2));
