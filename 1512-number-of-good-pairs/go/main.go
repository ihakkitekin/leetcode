// https://leetcode.com/problems/number-of-good-pairs/submissions

/* 
	Ayni algoritma Javascriptte calisiyor bunda neden calismiyor bulamadim
*/
func numIdenticalPairs(nums []int) int {
	pairsCount := 0
	_map := make(map[int]int)
	
	for i := 0; i < len(nums); i++ {	
		if val, ok := _map[nums[i]]; ok {
      _map[nums[i]] = val + 1
    } else {
      _map[nums[i]] = 1
    }
	}

	for _, v := range _map { 
    pairsCount += combination(v, 2)
	}

	return pairsCount
}

func factorial(num int) int {
	res := 1

	for i := 1; i <= num; i++ {
		res = res * i
	}

	return res
}

func combination(num int, comb int) int {
	if num > 1 {
		return factorial(num) / (comb * factorial(num - comb))
	}

	return 0
}