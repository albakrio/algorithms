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

function equals(arr1: number[], arr2: number[]): boolean {
	return arr1.length === arr2.length && arr1.every((val, i) => val === arr2[i]);
}

function findAllAnagrams(original: string, check: string): number[] {
	const originalLen: number = original.length;
	const checkLen: number = check.length;
	if (originalLen < checkLen) return [];

	const res: number[] = [];
	const checkCounter: number[] = Array(26).fill(0);
	const window: number[] = Array(26).fill(0);
	const a: number = 'a'.charCodeAt(0); // ascii value of 'a'

	for (let i = 0; i < checkLen; i++) {
		checkCounter[check.charCodeAt(i) - a]++;
		window[original.charCodeAt(i) - a]++;
	}

	if (equals(window, checkCounter)) res.push(0);

	for (let i = checkLen; i < originalLen; i++) {
		window[original.charCodeAt(i - checkLen) - a]--;
		window[original.charCodeAt(i) - a]++;

		if (equals(window, checkCounter)) res.push(i - checkLen + 1);
	}

	return res;
}

const result: number[] = findAllAnagrams('cbaebabacd', 'abc');
console.log(result);

function subarraySumLongest(nums: number[], target: number): number {
	let windowSum = 0;
	let length = 0;
	let left = 0;

	for (let right = 0; right < nums.length; ++right) {
		windowSum = windowSum + nums[right];

		while (windowSum > target) {
			windowSum = windowSum - nums[left];
			++left;
		}

		length = Math.max(length, right - left + 1);
	}

	return length;
}
