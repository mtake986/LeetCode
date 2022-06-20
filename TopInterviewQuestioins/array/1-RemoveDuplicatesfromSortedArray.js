// https://leetcode.com/explore/featured/card/top-interview-questions-easy/92/array/727/
// 6/15/2022
// Runtime: 
// Memory Usage: 

// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively. It does not matter what you leave beyond the returned k (hence they are underscores).

/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function(nums) {
  let returnLis = [];
  let countDup = 0;
  for (let i = 0; i < nums.length; i++) {
      if (!(returnLis.includes(nums[i]))) {
          returnLis.push(nums[i]);
          continue;
      }
      countDup += 1;
  }
  return returnLis;
};









