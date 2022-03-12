
// March 11 2022
// https://leetcode.com/problems/intersection-of-two-arrays-ii/submissions/
// Runtime: 108 ms
// Memory Usage: 43.8 MB

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    // easiest but slowest way (I guess so. The easiest code is most often the slowest code.)
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);
    // console.log(nums1, nums2)
    let i = 0;
    let j = 0;
    let intersection = [];
    while (true) {
        // console.log(`i => ${i}, j => ${j}`)
        // console.log(`nums1[i] => ${nums1[i]}, nums2[2] => ${nums2[j]}`)
        if (i >= nums1.length || j >= nums2.length) break;
        if (nums1[i] === nums2[j]){
            // console.log(`nums1[i] === nums2[j] => ${nums1[i] === nums2[j]}`)
            intersection.push(nums1[i])
            // console.log(intersection)
            i++;
            j++;
        } else if (nums1[i] > nums2[j]){
            j++;
        } else {
            i++;
        }
    }

    return intersection;
};
// sort. if a value in nums1 is greater than a value compared in nums2 => doesn't exist in nums1

// FROM OTHERS
// Solution 1
// https://leetcode.com/problems/intersection-of-two-arrays-ii/discuss/310695/JavaScript-Solution-beat-99.64-Speed-and-95-Memory-Easy-Understanding
var intersect = function(nums1, nums2) {
    let a1 = nums1.sort((a,b)=> a-b);
    let a2 = nums2.sort((a,b)=> a-b);
    let result = [];
    while(a1.length && a2.length){
        if(a1[0] === a2[0]){
            result.push(a1.shift());
            a2.shift();
        } 
        else if(a1[0] > a2[0]){
            a2.shift();
        }else{
            a1.shift();
        }
    }
    return result
};

// Solution 2
// https://leetcode.com/problems/intersection-of-two-arrays-ii/discuss/1171477/JavaScript-Solution-using-an-Object
// I like below most
const intersect = (n1, n2) => {
  const seen = {};
  const res = [];
  for (let n of n1) {
    if (!seen[n]) seen[n] = 0;
    seen[n]++;
  }
  console.log(seen, res)
  for (let n of n2) {
    if (seen[n] > 0) {
      res.push(n);
      seen[n]--;
    }
  }
  return res;
};
