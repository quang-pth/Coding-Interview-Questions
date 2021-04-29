// O(v + e) Time | O(v) Space
// function cycleInGraph(edges) {
// 	const numberOfNodes = edges.length;
//     const visited = new Array(edges.length).fill(false);
//     const currentlyInStack = new Array(edges.length).fill(false);

//     for (let node = 0; node < numberOfNodes; node++) {
//         if (visited[node]) continue;

//         const containsCircle = isCircle(edges, node, visited, currentlyInStack);
//         if (containsCircle) {
//             return true;
//         }
//     }

//     return false;
// }

// function isCircle(edges, currentNode, visited, currentlyInStack) {
//     visited[currentNode] = true;
//     currentlyInStack[currentNode] = true;

//     const neighbors = edges[currentNode];
//     for (let neighbor of neighbors) {
//         if (!visited[neighbor]) {
//             const containsCircle = isCircle(edges, neighbor, visited, currentlyInStack);
//             if (containsCircle) {
//                 return true;
//             }
//         }
//         // whether is back edge
//         else if (currentlyInStack[currentlyInStack]) {
//             return true;
//         }
//     }

//     currentlyInStack[currentNode] = false;
//     return false;
	
// }


const [WHITE, GREY, BLACK] = [0, 1, 2];
// O(v + e) Time | O(v) Space
function cycleInGraph(edges) {
    const numberOfNodes = edges.length;
    const colors = new Array(numberOfNodes).fill(WHITE);

    for (let node = 0; node < numberOfNodes; node++) {
        if (colors[node] !== WHITE) continue;

        const containsCircle = traverseAndColorNode(edges, node, colors);
        if (containsCircle) return true;
    }

    return false;
}

function traverseAndColorNode(edges, currentNode, colors) {
    colors[currentNode] = GREY;

    const neighbors = edges[currentNode];
    for (let neighbor of neighbors) {
        const neighborColor = colors[neighbor];

        if (neighborColor === GREY) return true;
        if (neighborColor === BLACK) continue;

        const containsCircle = traverseAndColorNode(edges, neighbor, colors);
        if (containsCircle) return true;
    }

    colors[currentNode] = BLACK;
    return false;
}

console.log(cycleInGraph([
    
    [1],
    [2, 3, 4, 5, 6, 7],
    [],
    [2, 7],
    [5],
    [],
    [4],
    []
])

);