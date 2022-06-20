// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/564/
// 6/16/2022
// Runtime: 
// Memory Usage: 

// Not done, give up
var maxProfit = function(prices) {
  let lowest = -1;
  let currLis = [];
  let pricesLis = [];
  let profit = 0;
  for (let i = 0; i < prices.length; i++) {
      pricesLis.push(prices[i]);
      if (lowest === -1) {
          lowest = prices[i];
          currLis.push({index: i, price: prices[i], dif: -1});
      };
      
      if (i < prices.length - 1) {
          let difWithNext = prices[i] - prices[i+1];
          if (difWithNext > 0) {
              lowest = -1;
              profit += 0
          }
      }
      if (lowest > prices[i]) {
          lowest = prices[i];
          currLis = []
          currLis.push({index: i, price: prices[i], dif: -1});
      } else {
          currLis.push({index: i, price: prices[i], dif: prices[i] - lowest});
      }
      
  }
  console.log(currLis);
};

// solution 1 
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/discuss/2124008/Easy-Fast-Simple-91.41-63-ms-42.5-MB
var maxProfit = function(prices) {
    let l = 0, r = 1, sum = 0, max = 0
    
    while (r < prices.length) {
        const remain = prices[r] - prices[l]
        if (prices[r] > prices[l] && max < remain) {
            max = remain
        } else {
            l = r
            sum += max
            max = 0
        }
        r++
    }
    
    sum += max
    
    return sum
};

// sol2
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/discuss/2040292/O(n)timeBEATS-99.97-MEMORYSPEED-0ms-MAY-2022
var maxProfit = function (prices) {
  let profit = 0;

  for (let i = 1; i < prices.length; i++) {
      let prev = prices[i - 1];
      let current = prices[i];

      if (prev < current) {
          profit += current - prev;
      }
  }
  
  return profit;
};