/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 
// Runtime: 100 ms, faster than 68.13% of JavaScript online submissions for Two Sum.
// Memory Usage: 42.3 MB, less than 56.34% of JavaScript online submissions for Two Sum.

 
var twoSum = function(nums, target) {
//     O(n*n)

// Faster
    let outputArray = [0, 1]
    let sum = nums[0] + nums[1];
    
    if (nums.length === 2 && sum === target) {
        console.log('nums.length === 2 && sum === target')
        return outputArray;
    }
    else if (nums.length >= 3) {
        for (let i = 1; i < nums.length; i++){
            const first_num = nums[i-1];
            for (let j = i; j < nums.length; j++){
                const sec_num = nums[j];
                // console.log(first_num, sec_num, first_num+sec_num)
                if (target === first_num + sec_num) {
                    outputArray[0] = i-1;
                    outputArray[1] = j;
                    return outputArray;
                };
            }
        }
    }
    return 'No Match'
};
