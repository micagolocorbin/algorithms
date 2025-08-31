function twoNumberSumSolution(numsArr: number[], targetSum: number): number[] {
  for (let i = 0; i < numsArr.length - 1; i++) {
    let firstNum = numsArr[i];
    for (let j = i + 1; j < numsArr.length; j++) {
      let secondNum = numsArr[j];
      if (firstNum + secondNum == targetSum) {
        return [firstNum, secondNum];
      }
    }
  }
  return [];
}

function twoNumberSumSolution01(
  numsArr: number[],
  targetSum: number
): number[] {
  const numsObj: { [key: string]: boolean } = {};
  for (let num of numsArr) {
    let potentialMatch = targetSum - num;
    if (potentialMatch.toString() in numsObj) {
      return [potentialMatch, num];
    } else {
      numsObj[num.toString()] = true;
    }
  }
  return [];
}

function twoNumberSumSolution02(
  numsArr: number[],
  targetSum: number
): number[] {
  numsArr.sort((a, b) => a - b);
  let left = 0;
  let right = numsArr.length - 1;
  while (left < right) {
    let currentSum = numsArr[left] + numsArr[right];
    if (currentSum === targetSum) {
      return [numsArr[left], numsArr[right]];
    } else if (currentSum < targetSum) {
      left++;
    } else if (currentSum > targetSum) {
      right--;
    }
  }
  return [];
}

const arr: number[] = [-4, -1, 1, 3, 5, 6, 8, 11];
const target: number = 10;

console.log(twoNumberSumSolution(arr, target));
console.log(twoNumberSumSolution01(arr, target));
console.log(twoNumberSumSolution02(arr, target));
