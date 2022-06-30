// Link: https://leetcode.com/problems/check-if-matrix-is-x-matrix/
// Date: 6/26
// Time Taken: 20m
// Runtime: 88 ms, faster than 100.00% of JavaScript online submissions for Check if Matrix Is X-Matrix.
// Memory Usage: 44.7 MB, less than 100.00% of JavaScript online submissions for Check if Matrix Is X-Matrix.
// * I feel like not so many solutions are written in JS. Yup, there were only three JS solutions available I could see. 

// My sol.
/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var checkXMatrix = function (grid) {
  let row = 0, col = 0, len = grid.length, lastInd = len - 1;
  while (row <= lastInd && col <= lastInd) {
    if (row === col || row + col === lastInd) {
      if (grid[row][col] === 0) return false;
    } else {
      if (grid[row][col] !== 0) return false;
    }
    col++;
    if (col > lastInd) {
      col = 0;
      row++;
    }
  }
  return true;
};

// Sol. 2
// Link: 


// Sol. 3
// Link: 




