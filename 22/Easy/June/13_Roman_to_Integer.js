// Link: https://leetcode.com/problems/roman-to-integer/
// Date: 6-20-2022
// Runtime: 233 ms, faster than 25.31% of JavaScript online submissions for Roman to Integer
// Memory Usage: 47.1 MB, less than 64.27% of JavaScript online submissions for Roman to Integer.

// my sol
/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function (s) {
  // Define variables
  const lis = Array.from(s);
  let i = 0, j = 1, num = 0;
  const dic = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }
  const plusOne = () => {
    i++;
    j++;
  }
  const plusTwo = () => {
    i += 2;
    j += 2;
  }

  while (i < lis.length) {
    switch (lis[i]) {
      case "I":
        if (lis[j] === "V") {
          num += 4;
          plusTwo();
        } else if (lis[j] === "X") {
          num += 9;
          plusTwo();
        } else {
          num += dic.I;
          plusOne();
        }
        break;
      case "X":
        if (lis[j] === "L") {
          num += 40;
          plusTwo();
        } else if (lis[j] === "C") {
          num += 90;
          plusTwo();
        } else {
          num += dic.X;
          plusOne();
        }
        break;
      case "C":
        if (lis[j] === "D") {
          num += 400;
          plusTwo();
        } else if (lis[j] === "M") {
          num += 900;
          plusTwo();
        } else {
          num += dic.C
          plusOne();
        }
        break;
      case "V":
        num += dic.V;
        plusOne();
        break;
      case "L":
        num += dic.L;
        plusOne();
        break;
      case "D":
        num += dic.D;
        plusOne();
        break;
      case "M":
        num += dic.M;
        plusOne();
        break;
      default:
        break;
    }
  }
  return num;
};

// sol2
// Link: https://leetcode.com/problems/roman-to-integer/discuss/2149143/Javascript-Hashmap-Solution
var romanToInt = function (s) {
  const dict = {
    'I': 1,
    'IV': 4,
    'V': 5,
    'IX': 9,
    'X': 10,
    'XL': 40,
    'L': 50,
    'XC': 90,
    'C': 100,
    'CD': 400,
    'D': 500,
    'CM': 900,
    'M': 1000
  };
  let num = 0;

  while (s.length) {
    if (dict[s.slice(0, 2)]) {
      num += dict[s.slice(0, 2)];
      s = s.slice(2);
    } else {
      num += dict[s.slice(0, 1)];
      s = s.slice(1);
    }
  }

  return num;
};

// sol3
// Link: 




