// Link: https://leetcode.com/problems/longest-common-prefix/
// Date: 6/21
// Time: 1.5 hour
// Runtime: 108 ms, faster than 23.60% of JavaScript online submissions for Longest Common Prefix.
// Memory Usage: 44.2 MB, less than 17.09% of JavaScript online submissions for Longest Common Prefix.

// My sol.
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let i = 0, j = 1, lcps = "";
  while (i < strs.length) {
    if (i === 0) {
      lcps = strs[i]
      i++;
      continue;
    }

    // compare current and lcps
    const curr = strs[i]
    if (curr === "") lcps = "";

    const shorterStr = (curr.length < lcps.length) ? curr : lcps;

    while (j <= shorterStr.length) {
      if (curr.slice(0, j) !== lcps.slice(0, j)) {
        lcps = lcps.slice(0, j - 1);
        break;
      }
      if (j === shorterStr.length) {
        lcps = shorterStr;
      }
      j++;
    }

    // if lcps = "" again, then break
    if (lcps === "") break;

    i++;
    j = 1;
  }
  return lcps;
};

// Sol. 2
// Link: https://zyrastory.com/en/coding-en/leetcode-en/leetcode-14-longest-common-prefix-solution-and-explanation-en/#javascript-solution
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  for (var i = 0; i < strs[0].length; i++) {
    var tmpChar = strs[0][i];
    for (var j = 0; j < strs.length; j++) {
      if (strs[j].length == i || strs[j][i] != tmpChar) {
        return strs[0].substring(0, i);
      }
    }
  }
  return strs[0];
};

// Sol. 3
// Link: 

