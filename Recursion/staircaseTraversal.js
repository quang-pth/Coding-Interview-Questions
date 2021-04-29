// O(k^n) Time | O(n) Space
// k: max steps, n: height
// function staircaseTraversal(height, maxSteps) {
// 	return staircaseTraversalHelper(height, maxSteps);
// }
// function staircaseTraversalHelper(currentHeight, maxSteps) {
// 	if (currentHeight <= 1) return 1;
// 	let ways = 0;
// 	for (let i = 1; i < Math.min(maxSteps, currentHeight) + 1; i++) {
// 		ways += staircaseTraversalHelper(currentHeight - i, maxSteps);
// 	}
// 	return ways;

// }

// O(k*n) Time | O(n) Space
// function staircaseTraversal(height, maxSteps) {
// 	return numberOfWaysToTop(height, maxSteps, {0: 1, 1: 1});
// }
// function numberOfWaysToTop(currentHeight, maxSteps, memoize) {
// 	if (currentHeight in memoize) {
// 		return memoize[currentHeight];
// 	}
// 	let numberOfWays = 0;
// 	for (let i = 1; i < Math.min(currentHeight, maxSteps) + 1; i++) {
// 		numberOfWays += numberOfWaysToTop(currentHeight - i, maxSteps, memoize);
// 	}
// 	memoize[currentHeight] = numberOfWays;
// 	return numberOfWays;
// }

// O(k*n) Time | O(n) Space
// function staircaseTraversal(height, maxSteps) {
// 	const waysToTop = new Array(height + 1).fill(0);
// 	waysToTop[0] = 1;
// 	waysToTop[1] = 1;
// 	for (let currentHeight = 2; currentHeight < height + 1; currentHeight++) {
// 		let step = 1;
// 		while (step <= maxSteps && step <= currentHeight) {
// 			waysToTop[currentHeight] += waysToTop[currentHeight - step];
// 			step++;
// 		}
// 	}
// 	return waysToTop[height];
// }

// O(n) Time | O(n) Space
function staircaseTraversal(height, maxSteps) {
	let currentNumberOfWays = 0;
	const waysToTop = [1];
	for (let currentHeight = 1; currentHeight < height + 1; currentHeight++) {
		const startOfWindow = currentHeight - maxSteps - 1;
		const endOfWindow = currentHeight - 1;
		if (startOfWindow >= 0) {
			currentNumberOfWays -= waysToTop[startOfWindow];
		}
		currentNumberOfWays += waysToTop[endOfWindow];
		waysToTop.push(currentNumberOfWays);
	}
	return currentNumberOfWays;
}

console.log(staircaseTraversal(4, 1));
// console.log(staircaseTraversal(4, 3));
// console.log(staircaseTraversal(15, 5));
// console.log(staircaseTraversal(4, 4));
console.log(staircaseTraversal(4, 2));