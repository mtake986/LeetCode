// Link: https://leetcode.com/problems/sqrtx/
// Date: 7/6
// Time Taken: 30m 
// Runtime: 122 ms, faster than 42.16% of JavaScript online submissions for Sqrt(x).
// Memory Usage: 43.7 MB, less than 62.88% of JavaScript online submissions for Sqrt(x).

// My sol.
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  // binary search
  let i = 1, prev, max, j = 0;
  if (x === 0 || x === 1) return x;

  while (true) {
    if (i ** 2 === x) return i
    else if (i ** 2 > x) {
      if ((i - prev) === 1) return prev;

      max = i
      i = i - (i - prev) / 2;
    } else {
      prev = i
      i *= 2;
      if (i > max) i = max
    }
  }
};


// Sol. 2
// Link: https://leetcode.com/problems/sqrtx/discuss/2206405/JS-solution-Binary-Search-O(log-n)-clean-code!
var mySqrt = function (x) {
  let left = 0;
  let right = x;
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    if (mid * mid === x) return mid;
    if (mid * mid > x) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return right;
};

// Sol. 3
// Link: 

