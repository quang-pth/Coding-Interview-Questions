// O(d * (n + b)) Time | O(n + b) Space - where d is the max number of digits,
// n is the length of the input array and b is the base of the numbering system used
function radixSort(array) {
    if (array.length === 0) return array;
	
	const maxNumber = Math.max(...array);
	let digit = 0;
	while (Math.floor(maxNumber / (10 ** digit)) > 0) {
        countingSort(array, digit);
		digit += 1;
	}
	
	return array;
}

// This solution would not work with input contains negative number
function countingSort(array, digit) {
    const sortedArray = new Array(array.length).fill(0);
	const countsArray = new Array(10).fill(0);
	const digitColumn = 10 ** digit;
	
	for (const number of array) {
		const countIdx = Math.floor(number / digitColumn) % 10;
		countsArray[countIdx] += 1;
	}
	// 	Modify counts array to get the furthest right positions
	for (let idx = 1; idx < countsArray.length; idx++) {
		countsArray[idx] += countsArray[idx - 1];
	}
	// 	Sort array base on digit
	for (let idx = array.length - 1; idx >= 0; idx--) {
		const countIdx = Math.floor(array[idx] / digitColumn) % 10;
		countsArray[countIdx] -= 1;
		const sortedIdx = countsArray[countIdx];
		sortedArray[sortedIdx] = array[idx];
	}
	// 	Replace original array in place
	for (let idx = 0; idx < array.length; idx++) {
		array[idx] = sortedArray[idx];
	}
}


console.log(radixSort([8762, 654, 3008, 345, 87, 65, 234, 12, 2]));
// Output: [2, 12, 65, 87, 234, 345, 654, 3008, 8762]
console.log(radixSort([9, 109, 908, 876, 1099, 190, 290, 999, 9999]))
// Output: [9, 109, 190, 290, 876, 908, 999, 1099, 9999]
