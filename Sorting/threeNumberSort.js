// O(n) Time | O(1) Space
// function threeNumberSort(array, order) {
// 	const valueCounts = [0, 0, 0];
	
// 	for (const element of array) {
// 		const orderIdx = order.indexOf(element);
// 		valueCounts[orderIdx] += 1;
// 	}
	
// 	for (let idx = 0; idx < order.length; idx++) {
// 		const value = order[idx];
// 		const count = valueCounts[idx];
		
// 		const numElementBefore = valueCounts.slice(0, idx).reduce((a, b) => a + b, 0);
// 		for (let n = 0; n < count; n++) {
// 			const currentIdx = numElementBefore + n;
// 			array[currentIdx] = value;
// 		}
// 	}
	
// 	return array;
// }

// O(n) Time | O(1) Space
// function threeNumberSort(array, order) {
// 	const firstValue = order[0];
// 	const secondValue = order[1];
	
// 	let firstIdx = 0;
// 	let secondIdx = 0;
// 	let thirdIdx =  array.length - 1;
// 	while (secondIdx <= thirdIdx) {
// 		const value = array[secondIdx];
		
// 		if (value === firstValue) {
// 			swap(array, firstIdx, secondIdx);
// 			firstIdx += 1;
// 			secondIdx += 1;
// 		} else if (value === secondValue) {
// 			secondIdx += 1;
// 		} else {
// 			swap(array, secondIdx, thirdIdx);
// 			thirdIdx -= 1;
// 		}
// 	}
	
// 	return array;
// }

// O(n) Time | O(1) Space - where n is the length of the array
function threeNumberSort(array, order) {
	const firstNumber = order[0];
	const thirdNumber = order[2];
	
	let firstIdx = 0;
	for (let idx = 0; idx < array.length; idx++) {
		const currentNumber = array[idx];
		if (currentNumber === firstNumber) {
			swap(array, idx, firstIdx);
			firstIdx += 1;
		}
	}
	
	let thirdIdx = array.length - 1;
	for (let idx = array.length - 1; idx >= 0; idx--) {
		const currentNumber = array[idx];
		if (currentNumber === thirdNumber) {
			swap(array, idx, thirdIdx);
			thirdIdx -= 1;
		}
	}
	
	return array;
}

function swap(array, i, j) {
	const temp = array[i];
	array[i] = array[j];
	array[j] = temp;
}


console.log(threeNumberSort([1, 0, 0, -1, -1, 0, 1, 1], [0, 1, -1]));
// Output: [
//   0, 0,  0,  1,
//   1, 1, -1, -1
// ]
console.log(threeNumberSort([9, 9, 9, 7, 9, 7, 9, 9, 7, 9],[7, 11, 9]));
// Output: [
//  7, 7, 7, 9, 9,
//   9, 9, 9, 9, 9
// ]
