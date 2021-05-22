// O(n^2) Time | O(1) Space
// function validStartingCity(distances, fuel, mpg) {
// 	const numberOfCities = distances.length;
// 	for (let startCityIdx = 0; startCityIdx < numberOfCities; startCityIdx++) {
// 		let milesRemaining = 0;
		
// 		for (let currentCityIdx = startCityIdx; currentCityIdx < startCityIdx + numberOfCities; currentCityIdx++) {
// 			if (milesRemaining < 0) continue;
// 			const currentCityIdxRotated = currentCityIdx % numberOfCities;
// 			const fuelFromCurrentCity = fuel[currentCityIdxRotated];
// 			const distanceToNextCity = distances[currentCityIdxRotated];
// 			milesRemaining += mpg * fuelFromCurrentCity - distanceToNextCity;
// 		}
		
// 		if (milesRemaining >= 0) return startCityIdx;
// 	};

// 	return -1;
// }

// O(n) Time | O(1) Space
function validStartingCity(distances, fuel, mpg) {
	const numberOfCities = distances.length;
	let milesRemaining = 0;
	
	let milesRemainingOfStartingCityCandidate = 0;
	let indexOfStartingCityCandidate = 0;
	
	for (let cityIdx = 1; cityIdx < numberOfCities; cityIdx++) {
		const fuelFromPrevCity = fuel[cityIdx - 1];
		const distanceFromPrevCity = distances[cityIdx - 1];
		milesRemaining += mpg * fuelFromPrevCity - distanceFromPrevCity;
		
		if (milesRemaining < milesRemainingOfStartingCityCandidate) {
			milesRemainingOfStartingCityCandidate = milesRemaining;
			indexOfStartingCityCandidate = cityIdx;
		}
	}
	
	return indexOfStartingCityCandidate;
}

console.log(validStartingCity([5, 25, 15, 10, 15], [1, 2, 1, 0, 3], 10));
// Output: 4