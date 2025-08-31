function twoNumberSumSolution(numsArr, targetSum) {
    for (var i = 0; i < numsArr.length - 1; i++) {
        var firstNum = numsArr[i];
        for (var j = i + 1; j < numsArr.length; j++) {
            var secondNum = numsArr[j];
            if (firstNum + secondNum == targetSum) {
                return [firstNum, secondNum];
            }
        }
    }
    return [];
}
function twoNumberSumSolution01(numsArr, targetSum) {
    var numsObj = {};
    for (var _i = 0, numsArr_1 = numsArr; _i < numsArr_1.length; _i++) {
        var num = numsArr_1[_i];
        var potentialMatch = targetSum - num;
        if (potentialMatch.toString() in numsObj) {
            return [potentialMatch, num];
        }
        else {
            numsObj[num.toString()] = true;
        }
    }
    return [];
}
function twoNumberSumSolution02(numsArr, targetSum) {
    numsArr.sort(function (a, b) { return a - b; });
    var left = 0;
    var right = numsArr.length - 1;
    while (left < right) {
        var currentSum = numsArr[left] + numsArr[right];
        if (currentSum === targetSum) {
            return [numsArr[left], numsArr[right]];
        }
        else if (currentSum < targetSum) {
            left++;
        }
        else if (currentSum > targetSum) {
            right--;
        }
    }
    return [];
}
var arr = [-4, -1, 1, 3, 5, 6, 8, 11];
var target = 10;
console.log(twoNumberSumSolution(arr, target));
console.log(twoNumberSumSolution01(arr, target));
console.log(twoNumberSumSolution02(arr, target));
