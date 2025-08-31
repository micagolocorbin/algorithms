def two_number_sum_solution(numsArr, targetSum):
    for i in range(len(numsArr) - 1):
        firstNum = numsArr[i]
        for j in range(i + 1, len(numsArr)):
            secondNum = numsArr[j]
            if firstNum + secondNum == targetSum:
                return [firstNum, secondNum]
    return []


def two_number_sum_solution_01(numsArr, targetSum):
    numsDict = {}
    for num in numsArr:
        potentialMatch = targetSum - num
        if potentialMatch in numsDict:
            return [potentialMatch, num]
        else:
            numsDict[num] = True
    return []


def two_number_sum_solution_02(numsArr, targetSum):
    numsArr.sort()
    left = 0
    right = len(numsArr) - 1
    while left < right:
        currentSum = numsArr[left] + numsArr[right]
        if currentSum == targetSum:
            return [numsArr[left], numsArr[right]]
        elif currentSum < targetSum:
            left += 1
        elif currentSum > targetSum:
            right -= 1
    return []


arr = [-4, -1, 1, 3, 5, 6, 8, 11]
target = 10

print(two_number_sum_solution(arr, target))
print(two_number_sum_solution_01(arr, target))
print(two_number_sum_solution_02(arr, target))
