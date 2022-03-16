// https://leetcode.com/problems/valid-sudoku/submissions/
// Mar 15 2022

// BEFORE Refactoring and deleting console.log()
// Runtime: 408 ms, faster than 5.01% of JavaScript online submissions for Valid Sudoku.
// Memory Usage: 52.3 MB, less than 5.45% of JavaScript online submissions for Valid Sudoku.
// AFTER
// Runtime: 123 ms, faster than 45.38% of JavaScript online submissions for Valid Sudoku.
// Memory Usage: 48.4 MB, less than 12.00% of JavaScript online submissions for Valid Sudoku.
// SLOW!!!!!!!!!! WHY!!!!!!!!!!!!

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let map = [];
    let values = [];
    for(let row = 0; row < 9; row++) {
        for(let col = 0; col < 9; col++) {
            const value = board[row][col];
            let filteredWhere = [];
            if (value !== ".") {
                const where = [row, col];

                // if the current value hasn't been shown yet, just push it into map.
                if (!values.includes(value)) {
                    values.push(value);
                    map.push([value, where]);
                }
                // if teh current value is already shown, let's check if it's in the same row/col and 3*3 box
                else {
                    map.push([value, where]);
                    for (let m = 0; m < map.length; m++) {
                        if (map[m][0] === value) filteredWhere.push(map[m][1])
                    }
                    let anyDupRow = new Map();
                    let anyDupCol = new Map();
                    let box = [0,1,2,3,4,5,6,7,8];
                    if (filteredWhere.length > 1) {
                        // row
                        for(let n = 0; n < filteredWhere.length; n++) {
                            anyDupRow.set(filteredWhere[n][0], 0);
                        }
                        if (anyDupRow.size !== filteredWhere.length) {
                            return false;
                        }
                        
                        // col
                        for(let n = 0; n < filteredWhere.length; n++) {
                            anyDupCol.set(filteredWhere[n][1], 0);
                        }
                        if (anyDupCol.size !== filteredWhere.length) {
                            return false;
                        }

                        // box: I have filteredWhere, so how to use it...
                        for(let bl = 0; bl < filteredWhere.length; bl++) {
                            let ele = filteredWhere[bl];
                            if (0 <= ele[0] && ele[0] <= 2){
                                if(0 <= ele[1] && ele[1] <= 2){
                                    const boxWhere = 0;
                                    if (!box.includes(boxWhere)) return false;
                                    box[boxWhere] = 10;
                                }
                                else if(3 <= ele[1] && ele[1] <= 5){
                                    const boxWhere = 1;
                                    if (!box.includes(boxWhere)) return false;
                                    box[boxWhere] = 10;
                                }
                                else if(6 <= ele[1] && ele[1] <= 8){
                                    const boxWhere = 2;
                                    if (!box.includes(boxWhere)) return false;
                                    box[boxWhere] = 10;
                                }
                            }
                            else if (3 <= ele[0] && ele[0] <= 5){
                                if(0 <= ele[1] && ele[1] <= 2){
                                    const boxWhere = 3;
                                    if (!box.includes(boxWhere)) return false;
                                    box[boxWhere] = 10;
                                }
                                else if(3 <= ele[1] && ele[1] <= 5){
                                    const boxWhere = 4;
                                    if (!box.includes(boxWhere)) return false;
                                    box[boxWhere] = 10;
                                }
                                else if(6 <= ele[1] && ele[1] <= 8){
                                    const boxWhere = 5;
                                    if (!box.includes(boxWhere)) return false;
                                    box[boxWhere] = 10;
                                }
                            }
                            else if (6 <= ele[0] && ele[0] <= 8){
                                if(0 <= ele[1] && ele[1] <= 2){
                                    const boxWhere = 6;
                                    if (!box.includes(boxWhere)) return false;
                                    box[boxWhere] = 10;
                                }
                                else if(3 <= ele[1] && ele[1] <= 5){
                                    const boxWhere = 7;
                                    if (!box.includes(boxWhere)) return false;
                                    box[boxWhere] = 10;
                                }
                                else if(6 <= ele[1] & ele[1] <= 8){
                                    const boxWhere = 8;
                                    if (!box.includes(boxWhere)) return false;
                                    box[boxWhere] = 10;
                                }
                            }
                        }
                        
                    }
                    
                }

            }
        }
    }
    return true;
};
