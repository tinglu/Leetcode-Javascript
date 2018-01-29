// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:
// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// Only considered starting from the first element
// var twoSum = function(nums, target) {
//     let indices = []
//     for (const [idx, num] of nums.entries()) {
//         let remaining = target - num
//         if (remaining === 0 && indices.length === 1 || remaining > 0 && indices.length === 0) {
//             target = remaining
//             indices.push(idx)
//         }
//     }
//     return indices
// }

// 3969 ms too slow
// var twoSum = function(nums, target) {
//     let twoSum1 = function (nums, target, diff) {
//         let indices = []
//         for (const [idx, num] of nums.entries()) {
//             const l = indices.length
//             if (l === 2) {
//                 break
//             }
//             let remaining = target - num
//             if (l === 1 && remaining === 0 || l === 0) {
//                 target = remaining
//                 indices.push(idx + diff)
//             }
//         }
//         if (indices.length === 2) {
//             return indices
//         } else {
//             return false
//         }
//     }
//     let indices = []
//     const count = nums.length
//     for (let i = 0; i < count; i++) {
//         indices = twoSum1(nums, target, i)
//         if (indices && indices.length === 2) {
//             return indices
//         } else {
//             nums = nums.slice(1)
//         }
//     }
//     return indices
// }

// 323 ms
var twoSum = function (nums, target) {
  for (const [idx, num] of nums.entries()) {
    const nextIdx = nums.indexOf(target - num)
    if (nextIdx > -1 && nextIdx !== idx) {
      return [idx, nextIdx]
    }
  }
  return false
}

// console.log(twoSum([2, 7, 11, 15], 9))
// console.log(twoSum([2, 7, 11, 15], 13))
// console.log(twoSum([3,2,4], 6))
// console.log(twoSum([0,4,3,0], 0))
// console.log(twoSum([0,4,3,-1], -1))
// console.log(twoSum([0,4,3,-1], 0))
// console.log(twoSum([-1,-2,-3,-4,-5], -8))