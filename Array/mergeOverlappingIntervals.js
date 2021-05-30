// O(nlogn) Time | O(n) Spaec
// n is the length of the array
function mergeOverlappingIntervals(array) {    
	const sortedIntervals = array.sort((a, b) => a[0] - b[0]);
	const mergedIntervals = [];
	let currentInterval = sortedIntervals[0];
	mergedIntervals.push(currentInterval);

	for (const nextInterval of sortedIntervals) {
		const [_, currentEndInterval] = currentInterval;
		const [nextStartInterval, nextEndInterval] = nextInterval;

		if (currentEndInterval >= nextStartInterval) {
			currentInterval[1] = Math.max(currentEndInterval, nextEndInterval);
		} else {
			mergedIntervals.push(nextInterval);
			currentInterval = nextInterval;
		}
	}

	return mergedIntervals;
}

console.log(mergeOverlappingIntervals([
	[1, 2],
	[3, 5],
	[4, 7],
	[6, 8],
	[9, 10]
]));

