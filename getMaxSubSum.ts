const getMaxSubSum = (arr) => {
  let resultArray = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0 && arr[i + 1] > 0) {
      resultArray += arr[i] + arr[i + 1];
    }
  }
  return resultArray;
};
console.log(getMaxSubSum([-1, 2, 3, -9]));
// == 5
console.log(getMaxSubSum([2, -1, 2, 3, -9]));
// ) == 6
console.log(getMaxSubSum([-1, 2, 3, -9, 11]));
// == 11
console.log(getMaxSubSum([-2, -1, 1, 2]));
// == 3
console.log(getMaxSubSum([100, -9, 2, -3, 5]));
// == 100
// getMaxSubSum([1, 2, 3]) == 6 (берём все)
const arr = [1, 2, 3, 4, 5];
