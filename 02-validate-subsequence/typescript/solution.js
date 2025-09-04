function validateSubsequence(array, sequence) {
    var arrIdx = 0;
    var seqIdx = 0;
    while (arrIdx < array.length && seqIdx < sequence.length) {
        if (array[arrIdx] === sequence[seqIdx]) {
            seqIdx++;
        }
        arrIdx++;
    }
    return seqIdx === sequence.length;
}
function validateSubsequence01(array, sequence) {
    var seqIdx = 0;
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var num = array_1[_i];
        if (seqIdx === sequence.length) {
            break;
        }
        if (sequence[seqIdx] === num) {
            seqIdx++;
        }
    }
    return seqIdx === sequence.length;
}
var originalArray = [5, 1, 22, 25, 6, -1, 8, 10];
var potentialSubsequence = [1, 6, -1, 10];
console.log(validateSubsequence(originalArray, potentialSubsequence));
console.log(validateSubsequence01(originalArray, potentialSubsequence));
