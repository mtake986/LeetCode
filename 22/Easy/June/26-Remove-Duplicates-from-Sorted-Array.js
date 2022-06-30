// Link: https://leetcode.com/problems/remove-duplicates-from-sorted-array/
// Date: 6-25
// Time: 30m
// Runtime: 162 ms, faster than 24.13% of JavaScript online submissions for Remove Duplicates from Sorted Array.
// Memory Usage: 44.6 MB, less than 69.69% of JavaScript online submissions for Remove Duplicates from Sorted Array.

// My sol.
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let i = 0;

  while (i + 1 <= nums.length) {
    if (nums[i] !== nums[i + 1]) {
      i++;
      continue
    }
    nums.splice(i, 1);
  }
  return nums.length
};

// memo
// Callback Functions
// In JavaScript, a callback function is a function that is passed into another function as an argument. This function can then be invoked during the execution of that higher order function (that it is an argument of).
// CODE EXAMPLE
// const isEven = (n) => {
//   return n % 2 == 0;
// }

// let printMsg = (evenFunc, num) => {
//   const isNumEven = evenFunc(num);
//   console.log(`The number ${num} is an even number: ${isNumEven}.`)
// }

// // Pass in isEven as the callback function
// printMsg(isEven, 4); 
// // Prints: The number 4 is an even number: True.

//     In mathematics and computer science, a higher-order function is a function that does at least one of the following: takes one or more functions as arguments, returns a function as its result. All other functions are first-order functions. In mathematics higher-order functions are also termed operators or functionals.

// Sol. 2
// Link: https://leetcode.com/problems/remove-duplicates-from-sorted-array/discuss/2176469/JavaScript-Two-pointers
// O(n) time | O(1) space
var removeDuplicates = function (arr) {
  let n = arr.length;
  let fast = 1;
  let slow = 1;
  while (fast < n) {
    if (arr[fast] == arr[fast - 1]) {
      fast++;
      continue;
    }
    arr[slow] = arr[fast];
    slow++;
    fast++;
  }
  return slow;
};

// Sol. 3
// Link: 






