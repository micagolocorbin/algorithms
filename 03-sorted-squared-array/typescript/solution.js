function sortedSquaredArray(array) {
    var sortedSquares = array.map(function (_val, _idx) {
        return 0;
    });
    for (var i = 0; i < array.length; i++) {
        var num = array[i];
        sortedSquares[i] = num * num;
    }
    sortedSquares.sort(function (a, b) { return a - b; });
    return sortedSquares;
}
function sortedSquaredArray01(array) {
    var sortedSquares = array.map(function (_val, _idx) {
        return 0;
    });
    var leftIdx = 0;
    var rightIdx = array.length - 1;
    for (var i = array.length - 1; i >= 0; i--) {
        var leftValue = array[leftIdx];
        var rightValue = array[rightIdx];
        if (Math.abs(leftValue) > Math.abs(rightValue)) {
            sortedSquares[i] = leftValue * leftValue;
            leftIdx++;
        }
        else {
            sortedSquares[i] = rightValue * rightValue;
            rightIdx--;
        }
    }
    return sortedSquares;
}
var arrayToSort = [1, 2, 3, 5, 6, 8, 9];
var arrayToSort01 = [-7, -5, -4, 3, 6, 8, 9];
console.log(sortedSquaredArray(arrayToSort));
console.log(sortedSquaredArray(arrayToSort01));
console.log(sortedSquaredArray01(arrayToSort));
console.log(sortedSquaredArray01(arrayToSort01));
