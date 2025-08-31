package main

import (
	"fmt"
	"slices"
)

func main() {
	slice := []int{-4, -1, 1, 3, 5, 6, 8, 11}
	target := 10

	fmt.Println(twoNumberSumSolution(slice, target))
	fmt.Println(twoNumberSumSolution01(slice, target))
	fmt.Println(twoNumberSumSolution02(slice, target))
}

func twoNumberSumSolution(numsSlice []int, targetSum int) []int {
	for i := 0; i < len(numsSlice)-1; i++ {
		firstNum := numsSlice[i]
		for j := i + 1; j < len(numsSlice); j++ {
			secondNum := numsSlice[j]
			if firstNum+secondNum == targetSum {
				return []int{firstNum, secondNum}
			}
		}
	}
	return []int{}
}

func twoNumberSumSolution01(numsSlice []int, targetSum int) []int {
	numsMap := make(map[int]bool)
	for _, num := range numsSlice {
		potentialMatch := targetSum - num
		_, ok := numsMap[potentialMatch]
		if ok {
			return []int{potentialMatch, num}
		} else {
			numsMap[num] = true
		}
	}
	return []int{}
}

func twoNumberSumSolution02(numsSlice []int, targetSum int) []int {
	slices.Sort(numsSlice)
	left := 0
	right := len(numsSlice) - 1
	for left < right {
		currentSum := numsSlice[left] + numsSlice[right]
		if currentSum == targetSum {
			return []int{numsSlice[left], numsSlice[right]}
		} else if currentSum < targetSum {
			left += 1
		} else if currentSum > targetSum {
			right -= 1
		}
	}
	return []int{}
}
