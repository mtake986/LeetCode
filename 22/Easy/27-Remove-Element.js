// Link: https://leetcode.com/problems/remove-element/
// Date: 6/25
// Time: 20m
// Runtime: 93 ms, faster than 37.75% of JavaScript online submissions for Remove Element.
// Memory Usage: 42.2 MB, less than 32.60% of JavaScript online submissions for Remove Element.

// My sol.
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  // sol 1
  // if (nums.length === 0) return nums;
  // let i = 0;

  // while (i <= nums.length - 1) {
  //   console.log("=== start === ", i, nums)
  //   if (nums[i] === val) {
  //     nums.splice(i, 1);
  //     continue;
  //   }
  //   i++;
  // }

  // sol 2
  while (true) {
    // time 97ms
    // if (nums.includes(val)) {
    //     nums.splice(nums.indexOf(val), 1)
    //     continue
    // }
    // break

    // runtime 61ms
    if (!nums.includes(val)) break;
    nums.splice(nums.indexOf(val), 1)
    continue
  }
};

// Sol. 2
// Link: 


// Sol. 3
// Link: 




