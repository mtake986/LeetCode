/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    if (m === 0){
        for(let i=0; i<n; i++) {
            nums1[i+nums1.length-n] = nums2[i]
        }
        nums1[0] = nums2[0]
    } else if (n === 0) {
        nums1 = nums1
    } else {
        
        for(let i = 0; i < n; i++){
            if (nums1[-m+i] > nums2[i]) {
                // let insertIndex = noZeroNums.indexOf(i)
                // noZeroNums.splice(insertIndex, 0, nums2[i])
                console.log('Need to swap!!')
                nums1[i+nums1.length-n] = nums2[i]
            } else {
                // No need to compare to the last value anymore due to nums2 is sorted, so just merge and break this for loop.
                nums1[i+nums1.length-n] = nums2[i]
            }
            console.log(nums1)
        }
        nums1.sort((a, b) => a - b);
    }
};
// i know it's slow but i didn't come up with an opyimal solution.

var merge = function(nums1, m, nums2, n) {
    nums1.splice(m, nums1.length - m);
    
    var i = 0;
    var j = 0;
    
    while (j < nums2.length) {
        if (nums1[i] === undefined || nums1[i] > nums2[j]) {
            nums1.splice(i, 0, nums2[j]);
            j++;
            i++;
        } else {
            i++;
        }
    }
};
