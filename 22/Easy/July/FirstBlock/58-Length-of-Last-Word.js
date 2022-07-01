// Link: https://leetcode.com/problems/length-of-last-word/
// Date: 7/1 
// Time Taken: 20m
// Runtime: 116 ms, faster than 8.15% of JavaScript online submissions for Length of Last Word.
// Memory Usage: 42.3 MB, less than 18.85% of JavaScript online submissions for Length of Last Word. 

// My sol.
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let i = 1, ret = [];
  const str = s.trimEnd(), LEN = str.length;
  const lis = Array.from(str)

  while (true) {
    if (lis[LEN - i] === " " || LEN < i) break
    ret.splice(0, 0, lis[LEN - i])
    i++;
  }
  return ret.length
};

// Sol. 2
// Link: https://leetcode.com/problems/length-of-last-word/discuss/2222680/Javascript-faster-than-99.42-solution
// ! See below, he only defined len instead of declaring a lis. This's because no need to store elements, just need a length
var lengthOfLastWord = function (s) {
  let len = 0;
  for (let i = s.length - 1; i > -1; i--) {
    if (s[i] != ' ') {
      len++;
    } else if (len > 0) {
      return len;
    }
  }
  return len;
};

// Sol. 3
// Link: https://leetcode.com/problems/length-of-last-word/discuss/2176986/Length-of-Last-word-2-line-solution
var lengthOfLastWord = function (s) {
  let arr = s.trim().split(" ");
  return arr[arr.length - 1].length;

};

  // 98% lesser space 22% faster



