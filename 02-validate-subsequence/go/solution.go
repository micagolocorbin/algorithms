package main

import "fmt"

func main() {
	originalSlice := []int{5, 1, 22, 25, 6, -1, 8, 10}
	potentialSubsequence := []int{1, 6, -1, 10}

	fmt.Println(validateSubsequence(originalSlice, potentialSubsequence))
	fmt.Println(validateSubsequence01(originalSlice, potentialSubsequence))
}

func validateSubsequence(slice, sequence []int) bool {
	var sliceIdx, seqIdx int

	for sliceIdx < len(slice) && seqIdx < len(sequence) {
		if slice[sliceIdx] == sequence[seqIdx] {
			seqIdx++
		}
		sliceIdx++
	}
	return seqIdx == len(sequence)
}

func validateSubsequence01(slice, sequence []int) bool {
	var seqIdx int

	for _, num := range slice {
		if seqIdx == len(sequence) {
			break
		}
		if sequence[seqIdx] == num {
			seqIdx++
		}
	}
	return seqIdx == len(sequence)
}
