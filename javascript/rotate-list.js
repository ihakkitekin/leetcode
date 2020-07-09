// https://leetcode.com/problems/rotate-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
  if(head == null || head.next == null) return head;

  let current = head;
  let prev = null;

  let len = 0;

  while(true){
    if(current === null) break;

    len++;
    current = current.next;
  }

  len = k % len;
  current = head;

  for (let i = 0; i < len; i++) {
    while (true) {
      if(current.next == null) {
        current.next = head;
        head = current;

        if(prev != null) {
          prev.next = null;
        }

        break;
      }

      prev = current;
      current = current.next;
    }
  }
    
  return current;
};
