// O(nlog(n)) Time | O(nlog(n)) Space
// function mergeSort(array) {
// 	if (array.length === 1) return array;
	
// 	const middleIdx = Math.floor(array.length / 2);
// 	const leftHalfArr = array.slice(0, middleIdx);
// 	const rightHalfArr = array.slice(middleIdx);
	
// 	return mergeSortedArray(mergeSort(leftHalfArr), mergeSort(rightHalfArr));
// }

// function mergeSortedArray(leftHalf, rightHalf) {
// 	const sortedArray = new Array(leftHalf.length + rightHalf.length).fill(null);
// 	let currentIdx = 0;
// 	let leftIdx = 0;
// 	let rightIdx = 0;
	
// 	while (leftIdx < leftHalf.length && rightIdx < rightHalf.length) {
// 		if (leftHalf[leftIdx] <= rightHalf[rightIdx]) {
// 			sortedArray[currentIdx] = leftHalf[leftIdx];
// 			leftIdx += 1;
// 		} else {
// 			sortedArray[currentIdx] = rightHalf[rightIdx];
// 			rightIdx += 1;
// 		}
// 		currentIdx += 1;
// 	}
	
// 	while (leftIdx < leftHalf.length) {
// 		sortedArray[currentIdx] = leftHalf[leftIdx];
// 		leftIdx += 1;
// 		currentIdx += 1;
// 	}
		
// 	while (rightIdx < rightHalf.length) {
// 		sortedArray[currentIdx] = rightHalf[rightIdx];
// 		rightIdx += 1;
// 		currentIdx += 1;
// 	}
	
// 	return sortedArray;
// }


// O(nlog(n)) Time | O(n) Space
function mergeSort(array) {
	if (array.length <= 1) return array;

  const auxilaryArray = array.slice();
	mergeSortHelper(array, 0, array.length - 1, auxilaryArray);
	return array;
}

function mergeSortHelper(mainArray, startIdx, endIdx, auxilaryArray) {
	if (startIdx === endIdx) return;
	
	const middleIdx = Math.floor((startIdx + endIdx) / 2);
	mergeSortHelper(auxilaryArray, startIdx, middleIdx, mainArray);
	mergeSortHelper(auxilaryArray, middleIdx + 1, endIdx, mainArray);
	mergeSortedArray(mainArray, startIdx, middleIdx, endIdx, auxilaryArray);

}

function mergeSortedArray(mainArray, startIdx, middleIdx, endIdx, auxilaryArray) {
	let currentIdx = startIdx;
	let leftIdx = startIdx;
	let rightIdx = middleIdx + 1;
	
	while (leftIdx <= middleIdx && rightIdx <= endIdx) {
		if (auxilaryArray[leftIdx] <= auxilaryArray[rightIdx]) {
			mainArray[currentIdx] = auxilaryArray[leftIdx];
			leftIdx += 1;
		} else {
			mainArray[currentIdx] = auxilaryArray[rightIdx];
			rightIdx += 1;
		}
		currentIdx += 1;
	}
	
	while (leftIdx <= middleIdx) {
		mainArray[currentIdx] = auxilaryArray[leftIdx];
		leftIdx += 1;
		currentIdx += 1;
	}
	
	while (rightIdx <= endIdx) {
		mainArray[currentIdx] = auxilaryArray[rightIdx];
		rightIdx += 1;
		currentIdx += 1;	
	}
	
}

console.log(mergeSort([8, 5, 2, 9, 5, 6, 3]));
// Output: [2, 3, 5, 5, 6, 8, 9]



