// O(n^2) Time | O(1) Space
// function largestRectangleUnderSkyline(buildings) {
//     let maxArea = 0;
      
//     for (let pillarIdx = 0; pillarIdx < buildings.length; pillarIdx++) {
//         const currentHeight = buildings[pillarIdx];
        
//         let furthestLeft = pillarIdx;
//         while (furthestLeft > 0 && buildings[furthestLeft - 1] >= currentHeight) {
//             furthestLeft -= 1;
//         }
        
//         let furthestRight = pillarIdx;
//         while (furthestRight < buildings.length - 1 && buildings[furthestRight + 1] >= currentHeight) {
//             furthestRight += 1;
//         }
        
//         const areaWithCurrentBuilding = (furthestRight - furthestLeft + 1) * currentHeight;
//         maxArea = Math.max(maxArea, areaWithCurrentBuilding);
//     }
    
//     return maxArea;
// }


// O(n) Time | O(n) Space
function largestRectangleUnderSkyline(buildings) {
    let maxArea = 0;
    const pillarIndices = [];
    
    const extendedBuildings = buildings.concat([0]);
    for (let idx = 0; idx < extendedBuildings.length; idx++) {
        const currentBuildingHeight = extendedBuildings[idx];
        while (extendedBuildings.length && currentBuildingHeight <= extendedBuildings[pillarIndices[pillarIndices.length - 1]]) {
            const pillarHeight = extendedBuildings[pillarIndices.pop()];
            const width = pillarIndices.length === 0 ? idx : idx - pillarIndices[pillarIndices.length - 1] - 1;
            maxArea = Math.max(width * pillarHeight, maxArea);
        }
        pillarIndices.push(idx);
    }
    
    return maxArea;
}

console.log(largestRectangleUnderSkyline([1, 3, 3, 2, 4, 1, 5, 3, 2]));
// Output: 9
console.log(largestRectangleUnderSkyline([3, 3, 3, 4, 4, 4, 1, 3, 1, 2, 8, 9, 1]));
// Output: 18
console.log(largestRectangleUnderSkyline([10, 1, 2, 3, 3, 5, 6, 7]));
// Output: 15

