// https://leetcode.com/problems/valid-parentheses/submissions/
// 6/17/2022
// Runtime: 108 ms, faster than 20.78% of JavaScript online submissions for Valid Parentheses.
// Memory Usage: 42.3 MB, less than 43.23% of JavaScript online submissions for Valid Parentheses.

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    if (s.length % 2 === 1) return false;

    let stack = [];

    for (let i = 0; i < s.length; i++) {
        const p = s[i];
        const lastIndex = stack.length - 1;
        if (p === ")") {
            if (stack[lastIndex] === "(") stack.pop();
            else return false;
        }
        else if (p === "]") {
            if (stack[lastIndex] === "[") stack.pop();
            else return false;
        }
        else if (p === "}") {
            if (stack[lastIndex] === "{") stack.pop();
            else return false;
        } else {
            stack.push(p);
        }

    }
    if (stack.length !== 0) return false;
    return true;
};


// ======== sol2 ==========
// https://leetcode.com/problems/valid-parentheses/discuss/2123237/JavaScript-efficient-solution-%2B-Meme
var isValid = function (s) {
    const stack = [];

    for (let i = 0; i < s.length; i += 1) {
        const prev = stack[stack.length - 1];
        const curr = s[i];

        if (prev &&
            (prev === '(' && curr === ')') ||
            (prev === '{' && curr === '}') ||
            (prev === '[' && curr === ']')) {
            stack.pop();
            continue;
        }

        stack.push(curr);
    }

    return stack.length === 0;
};

// Not this 
// ====
// if(stack.length === 0) return true;
// return false;
// ====

// Write a condition like below
// ====
// return stack.length === 0;
// ====










