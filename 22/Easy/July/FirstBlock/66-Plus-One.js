// Link: https://leetcode.com/problems/plus-one/
// Date: /2
// Time Taken: 25m
// Runtime: 86 ms, faster than 49.29% of JavaScript online submissions for Plus One.
// Memory Usage: 42.2 MB, less than 28.78% of JavaScript online submissions for Plus One.

// My sol.
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let i = 1, d;
  const LEN = digits.length;

  while (LEN - i >= 0) {
    if (digits[LEN - i] + 1 === 10) {
      digits[LEN - i] = 0;
      if (LEN - i === 0)
        digits.splice(0, 0, 1)

    } else {
      digits[LEN - i] += 1
      break;
    }
    i++;
  }
  return digits

};

// Sol. 2
// Link: https://leetcode.com/problems/plus-one/discuss/2204760/EASY-83-faster-than-other-submission-memory-a-bit-worse-or-Typescriptjs
// function plusOne(digits: number[]): number[] {
//   let isTen: boolean = true;
//   let lastIdx: number = digits.length - 1;
//   const tempRes: number[] = digits;
//   while (isTen){
//       if (tempRes[lastIdx] + 1 === 10){
//           if (lastIdx === 0){  
//     // if the last digit in the array, have the addition equal to ten, the array will add 1 in the first index 
//               tempRes[lastIdx] = 0;
//               tempRes.unshift(1); // adding 1 to the first index
//               isTen = false;
//               continue;
//           }
//           tempRes[lastIdx] = 0; 
//     // so if the adding between the current index in the array is equal to 10 the loop will always looping
//       }else{
//           tempRes[lastIdx] += 1;
//           isTen = false;
//     // but if the adding is not equal to 10, the loop will break, by using the condition isTen.
//       }
//       lastIdx -= 1; // so we will iterate till the first index if the adding is always equal to 10
//   }
//   return tempRes;
// };

// Sol. 3
// Link: https://leetcode.com/problems/plus-one/discuss/2189410/Javascript-Summing-up-elements-individually

/**
 * @param {number[]} digits
 * @return {number[]}
 * S: O(1) / T: O(N)
 */
var plusOne = function (digits) {
  let hasPlusOne = 0;

  for (let i = digits.length - 1; i >= 0; i--) {
    const number = digits[i];

    if (digits[i] < 9) {
      digits[i] = number + 1;

      return digits;
    } else {
      digits[i] = 0;
      hasPlusOne = true;
    }
  }

  if (hasPlusOne) {
    if (digits[0] === 0) {
      digits[0] = 0;

      return [1, ...digits];
    } else {
      digits[0] = digits[0] + 1;
    }

  }

  return digits;
};

