// Link: https://leetcode.com/problems/excel-sheet-column-title/
// Date: 6/28
// Time Taken: 
// Runtime: 
// Memory Usage: 

// My sol. 
// todo: Some inputs return the correct answer, but still have errors. (Ex. 52, 12345678, etc...)

/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
  const chars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  let digit = 1, num = 0, compareNum = 0, rem = 0, lis = [];
  console.log("======= start", columnNumber)

  if (columnNumber < chars.length + 1) return chars[columnNumber - 1];

  while (rem >= 0) {
    while (true) {
      console.log(digit)
      compareNum += chars.length ** digit;
      console.log("2nd while inside, compareNum: ", compareNum);

      if (columnNumber > compareNum - 1) {
        digit += 1;
      } else {
        digit -= 1;
        console.log("found the digit", digit)
        num = Math.floor(columnNumber / (chars.length ** digit));
        rem = columnNumber % (chars.length ** digit);
        lis.push(chars[num - 1]);
        console.log("=== while 2nd END === ", "digit:", digit, "num:", num, "rem", rem, "chars.length ** digit", chars.length ** digit, "lis: ", lis)

        // initialize variables
        digit = 0;
        compareNum = 0
        break;
      }
    }
    columnNumber = rem;
    if (rem === 0) break;
  }
  return lis.join("")
}

// Sol. 2
// Link: https://leetcode.com/problems/excel-sheet-column-title/discuss/1998050/JavaScript-solution-Ultrafast
var convertToTitle = function (columnNumber) {
  const res = [];

  while (columnNumber-- > 0) {
    // Comment by Masa(myself) here: when an input is 52, i don't think this would work. 
    res.push(String.fromCharCode(65 + (columnNumber % 26)));
    columnNumber = Math.floor(columnNumber / 26);
  }

  return res.reverse().join('');
};

// Sol. 3
// Link: https://leetcode.com/problems/excel-sheet-column-title/discuss/1899705/JavaScript-Solution
var convertToTitle = function (columnNumber) {
  var array = ['Z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y'];
  let result = '';
  if (columnNumber <= 26) {
    result = array[columnNumber % 26];
    return result;
  } else {

    while (columnNumber > 0) {
      let remainder = columnNumber % 26;
      result = array[remainder] + result;
      columnNumber = Math.floor((columnNumber - 1) / 26);
    }
  }
  return result;
};



