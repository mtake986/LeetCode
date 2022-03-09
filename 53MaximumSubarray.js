/**
 * @param {number[]} nums
 * @return {number}
 */

// https://leetcode.com/problems/maximum-subarray/
// Test cases are fine, but failed running when submitting. 
// O(n!) 
// Mar 9 2022
var maxSubArray = function(nums) {
    let maxNum = nums[0]
    const arrayLen = nums.length
    let sumOfSubarray = 0;
    let lenOfSubarray = 1;
    let maxSumSubarray = []
    while (lenOfSubarray <= arrayLen) {
        let startIndex = 0
        while (startIndex + lenOfSubarray <= arrayLen) {
            const subarray = nums.slice(startIndex, startIndex+lenOfSubarray)
            sumOfSubarray = subarray.reduce(((total, num) => total + num), 0)
            if (maxNum < sumOfSubarray) {
                maxNum = sumOfSubarray;
                maxSumSubarray = subarray
            }
            startIndex++;
        }

        lenOfSubarray++;
    }
    return maxNum
};

