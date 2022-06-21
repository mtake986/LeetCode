// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/submissions/
// Mar 12 2022
// Runtime: 145 ms, faster than 28.48% of JavaScript online submissions for Best Time to Buy and Sell Stock.
// Memory Usage: 51.8 MB, less than 38.17% of JavaScript online submissions for Best Time to Buy and Sell Stock.

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let lowest = prices[0];
    let currentDif = 0
    let i = 0;
    while (true) {
        if (1 === prices.length) break;
        if (i === 0) {
            i++;
            continue;
        };
        
        if (i === prices.length - 1 && prices[i] < lowest) {
            break;
        }
        
        // console.log(`i => ${i}, currentDif => ${currentDif}, lowest=> ${lowest}, prices[i] => ${prices[i]}`)


        if (prices[i] < lowest) {
            lowest = prices[i]
            // currentDif = 0;
        } else if (prices[i] > lowest) {
            let dif = prices[i] - lowest;
            currentDif = (dif > currentDif) ? dif : currentDif;
        }
        
        i++;
        // console.log(currentDif)
        
        if (i === prices.length) {
            break;
        }
    }
    return (currentDif !== 0) ? currentDif : 0;
};

// pseudo code
// I need to get find the loweset value in an array and the biggest value after the day of the lowest. 
// if the next calue is lower, update lowestPrice



// don't think too complicated!! Make it simple!!

// FROM OTHERS
// Solution 1
var maxProfit = function(prices) {
    let maxProf = 0, curr = prices[0];
    
    for(let x of prices) {
        if(curr < x) maxProf = Math.max(maxProf, x - curr);
        else curr = x;
    }
    return maxProf;
};

// Solution 2
var maxProfit = function(prices) {
    let profit = 0;
    let min = prices[0];
    
    for(let i = 1; i < prices.length; ++i) { 
        if(min > prices[i]) {
            min = prices[i];
        } else if(prices[i] - min > profit) {
            profit = prices[i] - min;
        }
    }
    
    return profit;
};
