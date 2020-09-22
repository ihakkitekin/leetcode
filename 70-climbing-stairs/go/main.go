//https://leetcode.com/problems/climbing-stairs

func climbStairs(n int) int {
  m := make(map[int]int)

  return calculate(n, m)
}

func calculate(n int, m map[int]int) int {
  if n < 2 {
    return 1
  }

  i, ok := m[n]

  if ok {
    return i
  }

  left := calculate(n-1, m)
  right := calculate(n-2, m)

  m[n] = left + right

  return m[n]
}