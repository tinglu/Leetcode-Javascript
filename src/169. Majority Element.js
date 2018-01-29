// Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.
//
// You may assume that the array is non-empty and the majority element always exist in the array.

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  var occurrences = nums.reduce(function (counter, p) {
    counter[p] = counter.hasOwnProperty(p) ? counter[p] + 1 : 1;
    return counter;
  }, {});

  var maxCount = nums.length / 2;
  var maxItem = '';
  for (var o in occurrences) {
    if (occurrences[o] >= maxCount) {
      maxCount = occurrences[o];
      maxItem = o;
      break;
    }
  }

  return parseInt(maxItem);
};