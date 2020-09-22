// https://leetcode.com/problems/search-insert-position

func searchInsert(nums []int, target int) int {
  leng := len(nums)

  for i := 0; i < leng; i++ {
    current := nums[i]
    next := -1

    if i != leng-1 {
      next = nums[i+1]
    }

    if current == target {
      return i
    }

    if target > current && target < next {
      return i + 1
    }

    if target < current {
      return i
    }
  }

  return len(nums)
}