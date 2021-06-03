class Node {
	constructor(row, col, value) {
		this.id = row + "-" + col;
		this.row = row;
		this.col = col;
		this.value = value;
		this.distanceFromStart = Infinity;
		this.estimatedDistanceToEnd = Infinity;
	}
}
// O(w*h*log(w*h)) Time | O(w*h) Space
// where w is the width of the graph and h is the height of the graph
function aStarAlgorithm(startRow, startCol, endRow, endCol, graph) {
  const nodes = initializeGraph(graph);
	const startNode = nodes[startRow][startCol];
	const endNode = nodes[endRow][endCol];
	startNode.distanceFromStart = 0;
	startNode.estimatedDistanceToEnd = calculateManhattanDistance(startNode, endNode);
	
	const nodesToVisit = new MinHeap([startNode]);
	
	while (!nodesToVisit.isEmpty()) {
		const currentMinDistanceNode = nodesToVisit.remove();
		
		if (currentMinDistanceNode === endNode) break;
		
		const neighbors = getNeighborNodes(currentMinDistanceNode, nodes);
		for (const neighbor of neighbors) {
			if (neighbor.value === 1) continue;
			
			const tentativeDistanceToNeighbor = currentMinDistanceNode.distanceFromStart + 1;
			if (tentativeDistanceToNeighbor >= neighbor.distanceFromStart) continue;
			
			neighbor.cameFrom = currentMinDistanceNode;
			neighbor.distanceFromStart = tentativeDistanceToNeighbor;
			neighbor.estimatedDistanceToEnd = tentativeDistanceToNeighbor + calculateManhattanDistance(neighbor, endNode);
			
			if (!nodesToVisit.containsNode(neighbor)) {
				nodesToVisit.insert(neighbor);
			} else {
				nodesToVisit.update(neighbor);
			}
		}
	}
	
	return reconstructPath(endNode);
}

function initializeGraph(graph) {
	const nodes = [];
	for (const [i, row] of graph.entries()) {
		nodes.push([]);
		for (const [j, value] of row.entries()) {
			const node = new Node(i, j, value);
			nodes[i].push(node);
		}
	}
	
	return nodes;
}


function calculateManhattanDistance(currentNode, endNode) {
	const currentRow = currentNode.row;
	const currentCol = currentNode.col;
	const endRow = endNode.row;
	const endCol = endNode.col;
	
	return Math.abs(currentRow - endRow) + Math.abs(currentCol - endCol);
}

function getNeighborNodes(node, nodes) {
	const neighbors = [];
	
	const numRows = nodes.length;
	const numCols = nodes[0].length;
	
	const row = node.row;
	const col = node.col;
	
	if (row < numRows - 1) {
		neighbors.push(nodes[row + 1][col]);
	}
	
	if (row > 0) {
		neighbors.push(nodes[row - 1][col]);
	}
	
	if (col < numCols - 1) {
		neighbors.push(nodes[row][col + 1]);
	}
	
	if (col > 0) {
		neighbors.push(nodes[row][col - 1]);
	}
	
	return neighbors;
}

function reconstructPath(endNode) {
	if (endNode.cameFrom == null) {
		return [];
	}
	
	let currentNode = endNode;
	const path = [];
	
	while (currentNode != null) {
		path.push([currentNode.row, currentNode.col]);
		currentNode = currentNode.cameFrom;
	}
	
	path.reverse();
	return path;
}

class MinHeap {
	constructor(array) {
		this.nodePositionsInHeap = array.reduce((obj, node, i) => {
			obj[node.id] = i;
			return obj;
		}, {})
		this.heap = this.buildHeap(array);
	}
	
	isEmpty() {
		return this.heap.length === 0;
	}
      
  // 	O(n) Time | O(1) Space
	buildHeap(array) {
			const firstParentIdx = Math.floor((array.length - 1) / 2);
				for (let currentIdx = firstParentIdx; currentIdx >= 0; currentIdx--) {
						this.siftDown(currentIdx, array.length - 1, array);
				}
			return array;
	}
  
  // 	O(logn) Time | O(1) Space
	siftDown(currentIdx, endIdx, heap) {
		let childOneIdx = currentIdx * 2 + 1;
		while (childOneIdx <= endIdx) {
				const childTwoIdx = childOneIdx + 1 <= endIdx ? childOneIdx + 1 : -1;
				let idxToSwap = null;

				if (childTwoIdx !== -1 && heap[childTwoIdx].estimatedDistanceToEnd < heap[childOneIdx].estimatedDistanceToEnd) {
						idxToSwap = childTwoIdx; 
				} else {
						idxToSwap = childOneIdx;
				}

				if (heap[idxToSwap].estimatedDistanceToEnd < heap[currentIdx].estimatedDistanceToEnd) {
						this.swap(currentIdx, idxToSwap, heap);
						currentIdx = idxToSwap;
						childOneIdx = currentIdx * 2 + 1;
				} else {
						break;
				}

			}
	}

// 	O(logn) Time | O(1) Space
	siftUp(currentIdx, heap) {
		let parentIdx = Math.floor((currentIdx - 1) / 2);
				while (parentIdx > 0 && heap[currentIdx].estimatedDistanceToEnd < heap[parentIdx].estimatedDistanceToEnd) {
						this.swap(currentIdx, parentIdx, heap);
						currentIdx = parentIdx;
						parentIdx = Math.floor((currentIdx - 1) / 2);
				}
	}
  
	peek() {
		return this.heap[0];
	}

// 	O(logn) Time | O(1) Space
	remove() {
		if (this.isEmpty()) return;

		this.swap(0, this.heap.length - 1, this.heap);
		const node = this.heap.pop();
		delete this.nodePositionsInHeap[node.id];
		this.siftDown(0, this.heap.length - 1, this.heap);
		return node;
	}

// 	O(logn) Time | O(1) Space
	insert(node) {
		this.heap.push(node);
		this.nodePositionsInHeap[node.id] = this.heap.length - 1;
		this.siftUp(this.heap.length - 1, this.heap);
	}

	swap(i, j, heap) {
		this.nodePositionsInHeap[this.heap[i].id] = j;
		this.nodePositionsInHeap[this.heap[j].id] = i;
		const temp = heap[i];
		heap[i] = heap[j];
		heap[j] = temp;
	}
	
	containsNode(node) {
		return node.id in this.nodePositionsInHeap;
	}
	
	update(node) {
		this.siftUp(this.nodePositionsInHeap[node.id], this.heap);
	}
	
}

console.log(aStarAlgorithm(0, 1, 4, 3, [
    [0, 0, 0, 0, 0],
    [0, 1, 1, 1, 0],
    [0, 0, 0, 0, 0],
    [1, 0, 1, 1, 1],
    [0, 0, 0, 0, 0]
  ]))
// Shortest path from the begin to the end node: [
//   [ 0, 1 ], [ 0, 0 ],
//   [ 1, 0 ], [ 2, 0 ],
//   [ 2, 1 ], [ 3, 1 ],
//   [ 4, 1 ], [ 4, 2 ],
//   [ 4, 3 ]
// ]
