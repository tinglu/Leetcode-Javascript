// Given two arrays, write a function to compute their intersection.
//
// Example:
// Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2].
//
// Note:
// Each element in the result must be unique.
// The result can be in any order.

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// var intersection = function (nums1, nums2) {
//   var uniqueNums1 = nums1.filter(function (elem, index, self) {
//     return index == self.indexOf(elem);
//   });
//   var uniqueNums2 = nums2.filter(function (elem, index, self) {
//     return index == self.indexOf(elem);
//   });
//   var intersect = function (longerNums, shorterNums) {
//     var result = [];
//     shorterNums.forEach(function (elem) {
//       if (longerNums.indexOf(elem) > -1) {
//         result.push(elem);
//       }
//     });
//     return result;
//   }
//   if (uniqueNums1.length >= uniqueNums2.length) {
//     return intersect(uniqueNums1, uniqueNums2);
//   } else {
//     return intersect(uniqueNums2, uniqueNums1);
//   }
// };

var intersection = function (nums1, nums2) {
  const set = new Set(nums1)
  return [...new Set(nums2.filter(n => set.has(n)))]
};

// console.log(intersection([1, 2, 3, 4], [2, 3]))