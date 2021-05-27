// O(n) Time | O(n) Space
// function sunsetViews(buildings, direction) {
// 	const buildingsWithSunsetView = [];
// 	let startIdx = direction === "WEST" ? 0 : buildings.length - 1;
// 	const step = direction === "WEST" ? 1 : -1;
	
// 	let idx = startIdx;
// 	let runningMaxHeight = 0;
// 	while (idx >= 0 && idx < buildings.length) {
// 		const buildingHeight = buildings[idx];
		
// 		if (buildingHeight > runningMaxHeight) {
// 			buildingsWithSunsetView.push(idx);
// 			runningMaxHeight = buildingHeight;
// 		}
		
// 		idx += step;
// 	}	
//     return direction === "EAST" ? buildingsWithSunsetView.reverse() : buildingsWithSunsetView; 
// }

// Using-stack Solution
// O(n) Time, O(n) Space
function sunsetViews(buildings, direction) {
    const candidateBuildings = [];
      let startIdx = direction === "EAST" ? 0 : buildings.length - 1;
      const step = direction === "EAST" ? 1 : -1;
      
      let idx = startIdx;
      while (idx >= 0 && idx < buildings.length) {
          const currentBuildingHeight = buildings[idx];
          let lastBuildingHeight = buildings[candidateBuildings[candidateBuildings.length - 1]];
          
          while (candidateBuildings.length && lastBuildingHeight <= currentBuildingHeight) {
              candidateBuildings.pop();
              lastBuildingHeight = buildings[candidateBuildings[candidateBuildings.length - 1]];
          }
          
          candidateBuildings.push(idx);
          idx += step;
      }
      
      return direction === "WEST" ? candidateBuildings.reverse() : candidateBuildings;
  }
  
  
console.log(sunsetViews([3, 5, 4, 4, 3, 1, 3, 2], "EAST"));
// Output: 1 3 6 7
console.log(sunsetViews([3, 5, 4, 4, 3, 1, 3, 2], "WEST"));
// Output: 0 1

