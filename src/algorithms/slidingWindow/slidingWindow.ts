const largestSumOfSubArray = (arr: number[], target: number): number => {
  let largestSum = 0;
  let currentSum = 0;

  for (let i = 0; i < target; i++) {
    currentSum += arr[i];
  }

  for (let i = target; i < arr.length; i++) {
    currentSum = currentSum - arr[i - target] + arr[i];
    largestSum = Math.max(currentSum, largestSum);
  }
  return largestSum;
};

console.log(largestSumOfSubArray([1, 2, 3, 7, 4, 1], 3));
