// Link: https://leetcode.com/problems/add-two-numbers/solutions/3077723/only-4-lines-of-code-high-level-solution-explained-all-coding-steps/
// Date: Sep. 8, 23
// Time Taken: 47 mins
// Runtime: 
// Memory Usage:

// My sol.
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

// function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {

//     const new1 = new ListNode();
//     let array1: number[] = [], array2: number[] = [], num1: string = "", num2: string = "";
//     const rev = (li: ListNode | null, array: number[], num: string) => {
//         if (li?.val) {
//             let currNode = li.val;
//             rev(li.next, array, num)
//             console.log(`currNode: ${currNode}, li: ${li}, array: ${array}, num: ${num}`)
//             array.push(currNode)
//         }
//     }
//     rev(l1, array1, num1)
//     rev(l2, array2, num2)
//     console.log(array1, array2, num1, num2)

//     return
// };

// Sol. 2
// Link:

// function addTwoNumbers(l1: ListNode | null, l2: ListNode | null, carry: number = 0): ListNode | null {
//     if(!l1 && !l2 && !carry) return null;

//     var total : number = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + (carry || 0);
//     carry = parseInt(total / 10 + '');
//     return new ListNode(total % 10, addTwoNumbers(l1?.next, l2?.next, carry));
// };

// Sol. 3
// Link:

// How to run a js file
// node Filename.js
