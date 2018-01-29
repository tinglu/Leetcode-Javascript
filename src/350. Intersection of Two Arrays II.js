// Given two arrays, write a function to compute their intersection.
//
// Example:
// Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2, 2].
//
// Note:
//   Each element in the result should appear as many times as it shows in both arrays.
//   The result can be in any order.
// Follow up:
//   What if the given array is already sorted? How would you optimize your algorithm?
//   What if nums1's size is small compared to nums2's size? Which algorithm is better?
//   What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// var intersect = function (nums1, nums2) {
//   var obj1 = nums1.reduce(function (counter, p) {
//     counter[p] = counter.hasOwnProperty(p) ? counter[p] + 1 : 1;
//     return counter;
//   }, {});
//
//   var obj2 = nums2.reduce(function (counter, p) {
//     counter[p] = counter.hasOwnProperty(p) ? counter[p] + 1 : 1;
//     return counter;
//   }, {});
//
//   var keys1 = Object.keys(obj1);
//   var keys2 = Object.keys(obj2);
//   var intersectKeys = keys1.filter(function (n) {
//     return keys2.indexOf(n) != -1;
//   });
//
//   return intersectKeys.reduce(function (result, key) {
//     var occurrences = obj1[key] >= obj2[key] ? obj2[key] : obj1[key];
//     for (var i = 0; i < occurrences; i++) {
//       result.push(parseInt(key));
//     }
//     return result;
//   }, []);
// };

var intersect = function (nums1, nums2) {
  // track how often each number occurs in first list
  var store = nums1.reduce(function (map, n) {
    map[n] = (map[n] + 1) || 1;

    return map;
  }, {});

  // filter out numbers from second list based on
  // how often they occurred in the first list
  return nums2.filter(function (n) {
    if (store[n]) {
      store[n]--;
      return true;
    } else {
      return false;
    }
  });
};

console.log(intersect([1, 2, 2], [2, 2]))
// console.log(intersect([1, 2, 2, 4, 5, 3, 5], [2, 2, 5, 5]))