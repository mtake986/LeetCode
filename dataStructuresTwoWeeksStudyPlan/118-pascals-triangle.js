// https://leetcode.com/problems/pascals-triangle/submissions/
// Mar 13 2022
// Runtime: 90 ms, faster than 40.02% of JavaScript online submissions for Pascal's Triangle.
// Memory Usage: 42.3 MB, less than 19.46% of JavaScript online submissions for Pascal's Triangle.

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if (numRows === 1) return [[1]];
    if (numRows === 2) return [[1], [1,1]];

    const output = [[1], [1,1]];
    // let i = 1;
    while (true) {
        let insertArrayModel = [1];
        // let insertArrayModel = [1, 1]; does this cause a slow performance??
        for(let i = 1; i < output.length;i++) {
            let sum = output[output.length-1][i-1] + output[output.length-1][i];
//             console.log(`sum=>${sum}`)
            insertArrayModel.push(sum)
        }
        insertArrayModel.push(1);
        output.push(insertArrayModel);
        
        if (output.length === numRows) {
            return output;
        }
    }
};

// FROM OTHERS 
// solution 1
// https://leetcode.com/problems/pascals-triangle/discuss/375650/JavaScript%3A-intuitive-simple-solution-99.49-faster(40ms)-100-space-easy-to-understand
var generate = function(numRows) {
    const pascal = []
    
    for (let i = 0; i < numRows; i++){
      // create a new arr in pascal array, and add 1 as the first item
      pascal[i] = []
      pascal[i][0] = 1
      
      for (let j = 1; j < i; j++){
        // this loop will only run after the second loop of i for one time on each loop. right after -> [[1],[1,1]]
        // in the children arr, the value of j indexed item is = prev array's left item[j-1] + right item[j]
        pascal[i][j] = pascal[i-1][j-1] + pascal[i-1][j]
      }
      // finish the loop with adding 1 in the end for every child array
      pascal[i][i] = 1
    }
  return pascal
};

// solution 2
// https://leetcode.com/problems/pascals-triangle/discuss/247967/JavaScript-solution
var generate = function(numRows) {
    if (numRows === 0) {
        return [];
    }
    const result = [];
    for (let i = 0; i < numRows; i++) {
        let currRow = [];
        for (let j = 0; j <= i; j++) {
            if (j === 0 || j === i){
                currRow.push(1);
            } else {
                currRow.push(result[i - 1][j - 1] + result[i - 1][j]);
            }
        }
        result.push(currRow);
    }
    return result;
};

// solution 3
// https://leetcode.com/problems/pascals-triangle/discuss/1323261/Javascript-Solution-60ms-Runtime-beats-99.34-of-javascript-submissions
var generate = function(numRows) {
    const res = [];
    let prevRow;
    
    for (let i = 1; i <= numRows; i++) {
        const row = new Array(i).fill(1);

        if (prevRow) {
            for (let j = 1; j < prevRow.length; j++) {
                const cs = prevRow[j] + prevRow[j - 1];
                row[j] = cs;
            }
        }
        
        res.push(row);
        prevRow = row;
    }
    
    return res;
};
