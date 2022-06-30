// Link: https://leetcode.com/problems/implement-strstr/
// Date: 6/30
// Time Taken: 20m
// Runtime: 82 ms, faster than 56.75% of JavaScript online submissions for Implement strStr().
// Memory Usage: 41.9 MB, less than 71.90% of JavaScript online submissions for Implement strStr().

// My sol.
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (needle === "") return 0;

  let h = 0;
  const H_LEN = haystack.length, N_LEN = needle.length;

  while (h < H_LEN) {

    if (haystack[h] === needle[0]) {
      const slice = (haystack.slice(h, h + N_LEN))
      if (slice.length === N_LEN && slice === needle) {
        return h;
      }
    }

    h++;
  }
  return -1;
};

// What should we return when needle is an empty string? This is a great question to ask during an interview.

// Sol. 2
// Link: https://leetcode.com/problems/implement-strstr/discuss/2219060/Javascript-or-string-solution
// what is smart is the condition in for loop. 
var strStr = function(haystack, needle) {
    
  if(needle === '')
      return 0;
  
  for(let i=0; i<haystack.length + 1 - needle.length; i++) {
      for(let j=0; j<needle.length; j++) {
          if(haystack.charAt(i + j) != needle.charAt(j))
              break;
          
          if(j === needle.length - 1)
              return i;
      }
  }
  
  return -1;
};

// Sol. 3
// Link: 




