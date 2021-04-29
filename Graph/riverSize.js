// O(wh) Time | O(wh) Space
function riverSizes(matrix) {
    const sizes = [];
    const visited = matrix.map(row => row.map(value => false));

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (visited[i][j]) continue;
            traverseNode(i, j, matrix, visited, sizes)
        }
    }
    
    return sizes.sort((a, b) => a - b);
}

function traverseNode(i, j, matrix, visited, sizes) {
    let currentRiverSize = 0;
    const nodeToExplore = [[i, j]];

    while (nodeToExplore.length) {
        const currentNode = nodeToExplore.pop();
        const i = currentNode[0];
        const j = currentNode[1];
        if (visited[i][j]) continue;
        visited[i][j] = true;
        if (matrix[i][j] === 0) continue;
        currentRiverSize++;
        const unvisitedNeighbors = getUnvisistedNeighbors(i, j, matrix, visited);
        for (const neighbor of unvisitedNeighbors) {
            nodeToExplore.push(neighbor)
        }
    }

    if (currentRiverSize > 0) sizes.push(currentRiverSize);
}

function getUnvisistedNeighbors(i, j, matrix, visited) {
    const unvisitedNeigbors = [];

    if (i > 0 && !visited[i - 1][j]) unvisitedNeigbors.push([i - 1, j]);
    if (i < matrix.length - 1 && !visited[i + 1][j]) unvisitedNeigbors.push([i + 1, j]);
    if (j > 0 && !visited[i][j - 1]) unvisitedNeigbors.push([i, j - 1]);
    if (j < matrix[0].length - 1 && !visited[i][j + 1]) unvisitedNeigbors.push([i, j + 1]);

    return unvisitedNeigbors;
}

console.log(riverSizes([
    [1, 0, 0, 1, 0],
    [1, 0, 1, 0, 0],
    [0, 0, 1, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 0],
  ])
);