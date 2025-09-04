function validateSubsequence(array: number[], sequence: number[]): boolean {
  let arrIdx = 0;
  let seqIdx = 0;

  while (arrIdx < array.length && seqIdx < sequence.length) {
    if (array[arrIdx] === sequence[seqIdx]) {
      seqIdx++;
    }
    arrIdx++;
  }
  return seqIdx === sequence.length;
}

function validateSubsequence01(array: number[], sequence: number[]): boolean {
  let seqIdx = 0;

  for (let num of array) {
    if (seqIdx === sequence.length) {
      break;
    }
    if (sequence[seqIdx] === num) {
      seqIdx++;
    }
  }
  return seqIdx === sequence.length;
}

const originalArray = [5, 1, 22, 25, 6, -1, 8, 10];
const potentialSubsequence = [1, 6, -1, 10];

console.log(validateSubsequence(originalArray, potentialSubsequence));
console.log(validateSubsequence01(originalArray, potentialSubsequence));
