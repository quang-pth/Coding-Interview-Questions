// Average: O(n^2) Time | O(d) Space
// Worst: O(n^2) Time | O(n) Space
// where n is the length of each array and d is the depth of the BST that they represent
// function sameBsts(arrayOne, arrayTwo) {
// 	return areSameBsts(arrayOne, arrayTwo, 0, 0, -Infinity, Infinity);
// }

// function areSameBsts(arrayOne, arrayTwo, rootIdxOne, rootIdxTwo, minVal, maxVal) {
// 	if (rootIdxOne === -1 || rootIdxTwo === -1) return rootIdxOne === rootIdxTwo;
// 	if (arrayOne[rootIdxOne] !== arrayTwo[rootIdxTwo]) return false;
	
// 	const leftRootIdxOne = getSmallerIdx(arrayOne, rootIdxOne, minVal);
// 	const leftRootIdxTwo = getSmallerIdx(arrayTwo, rootIdxTwo, minVal);
// 	const rightRootIdxOne = getBiggerOrEqual(arrayOne, rootIdxOne, maxVal);
// 	const rightRootIdxTwo = getBiggerOrEqual(arrayTwo, rootIdxTwo, maxVal);
	
// 	const currentValue = arrayOne[rootIdxOne];
// 	const leftAreSame = areSameBsts(arrayOne, arrayTwo, leftRootIdxOne, leftRootIdxTwo, minVal, currentValue);
// 	const rightAreSame= areSameBsts(arrayOne, arrayTwo, rightRootIdxOne, rightRootIdxTwo, currentValue, maxVal);
	
// 	return leftAreSame && rightAreSame;
// }

// function getSmallerIdx(array, rootIdx, minVal) {
// 	for (let idx = rootIdx + 1; idx < array.length; idx++) {
// 		if (array[idx] < array[rootIdx] && array[idx] >= minVal) return idx;
// 	}
// 	return -1;
// }

// function getBiggerOrEqual(array, rootIdx, maxVal) {
// 	for (let idx = rootIdx + 1; idx < array.length; idx++) {
// 		if (array[idx] >= array[rootIdx] && array[idx] < maxVal) return idx;
// 	}
// 	return -1;
// }

// O(n^2) Time | O(n^2) Space - where n is the length of each array
function sameBsts(arrayOne, arrayTwo) {
	if (arrayOne.length !== arrayTwo.length) return false;
	if (arrayOne.length === 0 && arrayTwo.length === 0) return true;
	if (arrayOne[0] !== arrayTwo[0]) return false;
	
	const leftOne = getSmaller(arrayOne);
	const rightOne = getBiggerOrEqual(arrayOne);
	const leftTwo = getSmaller(arrayTwo);
	const rightTwo = getBiggerOrEqual(arrayTwo);

	return sameBsts(leftOne, leftTwo) && sameBsts(rightOne, rightTwo);
}

function getSmaller(array) {
	const smaller = [];
	for (let idx = 1; idx < array.length; idx++) {
		if (array[idx] < array[0]) smaller.push(array[idx]);
	}
	return smaller;
}

function getBiggerOrEqual(array) {
	const biggerOrEqual = [];
	for (let idx = 1; idx < array.length; idx++) {
		if (array[idx] >= array[0]) biggerOrEqual.push(array[idx]);
	}
	return biggerOrEqual;
}

console.log(sameBsts([10, 15, 8, 12, 94, 81, 5, 2, 11],  [10, 8, 5, 15, 2, 12, 11, 94, 81]));
// Output: true
console.log(sameBsts([10, 15, 8, 12, 94, 81, 5, 2, 10], [10, 8, 5, 15, 2, 10, 12, 94, 81]));
// Output: false