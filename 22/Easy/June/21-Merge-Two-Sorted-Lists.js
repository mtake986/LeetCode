// Link: https://leetcode.com/problems/merge-two-sorted-lists/
// Date: 6-24-2022
// Time: 1h
// Runtime: --
// Memory Usage: --

// My sol.
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  //     the easiest way to do this is to combine the two lists by a built-in function (I believe there is one) and use sort((a, b) => a - b). I dont think this is the best way. I dont really know how to implement a linked list so another way to solve this. 
  // Well, above doesnt work because I need to keep the list as a linked list. 

  let i = 0, curr = 0, nextLis = [], insertVal = 0, store = [], nextVal = 0;

  while (true) {
    console.log("----- start: ", i, "list1: ", list1, "list2: ", list2, "-----")
    curr = list2.val;
    nextLis = list2.next;
    nextVal = list2.next.val;
    insertVal = list1.val;

    if (insertVal) {
      console.log(curr, nextVal)
      if (insertVal <= nextVal) {
        store = nextLis;
        curr.next.val = insertVal;
        curr.next.val.next = nextLis;
        curr = curr.next.val;
        insertVal = list1.next.val; // next value
        // nextVal remains the same value
      } else {
        // when list2.val is smaller
        // insertVal remains the same
        // Need to change curr, nextVal
        curr.next.val = nextVal;
        curr = curr.next.val;
        curr.next = curr.next.val.next;
      }
    }
    i += 1;
    if (i > 10) {
      break;
    }
  }
};

// Sol. 2
// Link: https://leetcode.com/problems/merge-two-sorted-lists/discuss/2174248/Easy-to-understand-or-JavaScript
var mergeTwoLists = function (list1, list2) {
  // Create a temporary (seed) node whose next will point to the head of the resultant linked list
  const seed = new ListNode();
  let cur = seed;

  // while both list1 and list2 not null
  while (list1 && list2) {
    if (list1.val <= list2.val) {
      cur.next = list1;
      list1 = list1.next;
    } else {
      cur.next = list2;
      list2 = list2.next;
    }
    // based on above condition will take a node from either list1 or list2 in one iteration and move next
    cur = cur.next;
  }

  // if there are any left over nodes to be covered in either list1 or list2 simply point the cur.next to remaining list
  if (list1) cur.next = list1;
  if (list2) cur.next = list2;

  // remember that seed.next contains the head of merged linked list
  return seed.next;
};

// Sol. 3
// Link: https://leetcode.com/problems/merge-two-sorted-lists/discuss/2167530/Clean-JavaScript-solution-%3A-using-recursion
var mergeTwoLists = function(list1, list2) {
  if(!list1) return list2;
  if(!list2) return list1;

  if(list1.val < list2.val) {
      list1.next = mergeTwoLists(list1.next, list2);
      return list1;
  } else {
      list2.next = mergeTwoLists(list1, list2.next);
      return list2;
  }
};




