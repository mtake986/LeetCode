// link https://leetcode.com/problems/palindrome-number/submissions/
// Date 6-19-2022
// Runtime: 265 ms, faster than 49.18% of JavaScript online submissions for Palindrome Number.
// Memory: 51.3 MB, less than 42.71% of JavaScript online submissions for Palindrome Number.


/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  const lis = x.toString().split("");
  const len = lis.length
  const half = (len - (len % 2)) / 2;
  let tf = true;

  if (len === 1) return tf;

  for (let i = 0; i < half; i++) {
    if (lis[i] !== lis[(len - 1) - i]) return !tf;
  }
  return tf;

};



// sol2
// https://leetcode.com/problems/palindrome-number/discuss/2160134/Only-3-easy-lines-of-code-oror-C%2B%2B-oror-C-oror-C-oror-Java-oror-Python-oror-JavaScript-oror-TypeScript
var isPalindrome = function(x) {
  var rev = 0, xCopy = x; // creating variables for reversed integer and a copy for x
  while (xCopy > 0) { 
    rev = rev * 10 + xCopy % 10; 
    xCopy = Math.floor(xCopy/10); 
  } // I did xCopy > 0 instead of xCopy != 0 so that it excludes negative integers
  return (rev == x && xCopy > -1); // Returns true only when rev is equal to x AND xCopy isn't negative
};

// sol3
// https://leetcode.com/problems/palindrome-number/discuss/2152200/JS-easy-two-pointer
var isPalindrome = function(x) {
    
  x = x.toString().split('');
  let first = 0, last = x.length-1;
  
  while(first <= last){
      if(x[first] === x[last]){
          first++;
          last--;
      } else return false;        
  }
  return true;
  
};





