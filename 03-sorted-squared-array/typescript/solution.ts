function sortedSquaredArray(array: number[]): number[] {
  const sortedSquares: number[] = array.map((_val, _idx) => {
    return 0;
  });

  for (let i = 0; i < array.length; i++) {
    let num: number = array[i];
    sortedSquares[i] = num * num;
  }
  sortedSquares.sort((a, b) => a - b);
  return sortedSquares;
}

function sortedSquaredArray01(array: number[]): number[] {
  const sortedSquares: number[] = array.map((_val, _idx) => {
    return 0;
  });
  let leftIdx = 0;
  let rightIdx = array.length - 1;

  for (let i = array.length - 1; i >= 0; i--) {
    let leftValue = array[leftIdx];
    let rightValue = array[rightIdx];

    if (Math.abs(leftValue) > Math.abs(rightValue)) {
      sortedSquares[i] = leftValue * leftValue;
      leftIdx++;
    } else {
      sortedSquares[i] = rightValue * rightValue;
      rightIdx--;
    }
  }
  return sortedSquares;
}

const arrayToSort = [1, 2, 3, 5, 6, 8, 9];
const arrayToSort01 = [-7, -5, -4, 3, 6, 8, 9];

console.log(sortedSquaredArray(arrayToSort));
console.log(sortedSquaredArray(arrayToSort01));

console.log(sortedSquaredArray01(arrayToSort));
console.log(sortedSquaredArray01(arrayToSort01));
