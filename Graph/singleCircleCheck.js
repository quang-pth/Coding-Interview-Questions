// O(d) Time | O(1) Space
function hasSingleCycle(array) {
	let numsOfVisited = 0;
	let currentIdx = 0;

	while (numsOfVisited < array.length) {
		if (numsOfVisited > 0 && currentIdx === 0) return false;
		numsOfVisited++;
		currentIdx = getNextIdx(currentIdx, array);
	}

	return currentIdx === 0;
}

function getNextIdx(currentIdx, array) {
	const steps = array[currentIdx];
	const nextIdx = (currentIdx + steps) % array.length;

	return nextIdx >= 0 ? nextIdx : array.length + nextIdx;
}



console.log(hasSingleCycle([2, 3, 1, -4, -4, 2]));
console.log(hasSingleCycle([1, 1, 1, 1, 2]));


