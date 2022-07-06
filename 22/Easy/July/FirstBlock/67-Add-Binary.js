// Link: https://leetcode.com/problems/add-binary/
// Date: 7/4
// Time Taken: 2h
// Runtime: 66 ms, faster than 94.95% of JavaScript online submissions for Add Binary.
// Memory Usage: 43 MB, less than 64.47% of JavaScript online submissions for Add Binary.

// My 1st sol. 
// doesn't work when inputs are too large
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  // sol. 1: turn a and b into int and see them as a decimal, 
  const intA = parseInt(a), intB = parseInt(b);
  let lis = Array.from((intA + intB).toString()), lstInd = lis.length - 1, addOne = 0;

  while (lstInd >= 0) {
    if (parseInt(lis[lstInd]) + addOne >= 2) {
      lis[lstInd] = (parseInt(lis[lstInd]) + addOne - 2).toString();
      addOne = 1;
      if (lstInd === 0) {
        lis.splice(0, 0, "1")
      }
    } else {
      lis[lstInd] = (parseInt(lis[lstInd]) + addOne).toString()
      addOne = 0;
    }
    lstInd--;
  }
  return lis.join("")

  // error: when inputs are below: "10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101", "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011"

  // I think I can't use the code above, because when inputs are too large and tried to turn them into an integer, it doesn't work. Thus, I need to keep inputs as a string. 

};

// Thus, I re-coded and below is my 2nd sol. 
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  // sol. 1: turn a and b into int and see them as a decimal, 
  // const intA = parseInt(a), 
  //       intB = parseInt(b);
  let lisA = Array.from(a),
    lisB = Array.from(b),
    shortLis = (lisA.length <= lisB.length) ? lisA : lisB,
    longLis = (shortLis === lisA) ? lisB : lisA,
    shortLisNum,
    longLisNum,
    shortLastInd = shortLis.length - 1,
    longLastInd = longLis.length - 1,
    plus = 0,
    tempSum;

  while (longLastInd >= 0) {
    shortLisNum = shortLis[shortLastInd];
    longLisNum = longLis[longLastInd];

    if (shortLisNum) {
      tempSum = parseInt(shortLisNum) + parseInt(longLisNum) + plus;
      if (tempSum >= 2) {
        plus = 1
        longLis[longLastInd] = (tempSum - 2).toString();
        if (longLastInd === 0) {
          longLis.splice(0, 0, "1")
        }
      } else {
        plus = 0
        longLis[longLastInd] = tempSum.toString();
      }
    } else {
      tempSum = parseInt(longLisNum) + plus;
      if (tempSum >= 2) {
        plus = 1
        longLis[longLastInd] = (tempSum - 2).toString();
        if (longLastInd === 0) {
          longLis.splice(0, 0, "1")
        }
      } else {
        plus = 0
        longLis[longLastInd] = tempSum.toString();
        break
      }
    }

    shortLastInd--;
    longLastInd--;
  }
  return longLis.join("")

};




// Sol. 2
// Link: 


// Sol. 3
// Link: 




