// https://leetcode.com/problems/add-two-numbers/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    
    
    const reverseLinkedList = function(linkedlist) {
        var node = linkedlist;
        var previous = null;

        while(node) {
            // save next or you lose it!!!
            var save = node.next;
            // reverse pointer
            node.next = previous;
            // increment previous to current node
            previous = node;
            // increment node to next node or null at end of list
            node = save;
        }
        return previous;   // Change the list head !!!
    }
    let reversedL1 = reverseLinkedList(l1);
    let reversedL2 = reverseLinkedList(l2);
    console.log(reversedL1, reversedL2)
};

// Idk how this happen
// Your input [2,4,3,1], [5,6,4,8]
// stdout [1,3,4,2], [8,4,6,5]
// Output undefined
// Expected [7,0,8,9]
