// https://leetcode.com/problems/remove-duplicates-from-sorted-list

func deleteDuplicates(head *ListNode) *ListNode {
  if head == nil || head.Next == nil {
    return head
  }

  current := head

  for head.Next != nil && current.Next != nil {
    if current.Val == current.Next.Val {
      current.Next = current.Next.Next
    } else {
      current = current.Next
    }
  }

  return head
}