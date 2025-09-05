package main

import (
	"fmt"
	"math"
	"slices"
)

func main() {
	sliceToSort := []int{1, 2, 3, 5, 6, 8, 9}
	sliceToSort01 := []int{-7, -5, -4, 3, 6, 8, 9}

	fmt.Println(sortedSquaredArray(sliceToSort))
	fmt.Println(sortedSquaredArray(sliceToSort01))

	fmt.Println(sortedSquaredArray01(sliceToSort))
	fmt.Println(sortedSquaredArray01(sliceToSort01))
}

func sortedSquaredArray(slice []int) []int {
	sortedSquares := make([]int, len(slice))

	for i, val := range slice {
		sortedSquares[i] = val * val
	}

	slices.Sort(sortedSquares)
	return sortedSquares
}

func sortedSquaredArray01(slice []int) []int {
	sortedSquares := make([]int, len(slice))
	leftIdx := 0
	rightIdx := len(slice) - 1

	for idx := len(slice) - 1; idx >= 0; idx-- {
		leftValue := slice[leftIdx]
		rightValue := slice[rightIdx]

		if math.Abs(float64(leftValue)) > math.Abs(float64(rightValue)) {
			sortedSquares[idx] = leftValue * leftValue
			leftIdx++
		} else {
			sortedSquares[idx] = rightValue * rightValue
			rightIdx--
		}
	}
	return sortedSquares
}
