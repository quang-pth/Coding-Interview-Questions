// Graph is represented by an adjacent list
// contains outbound edges [vertex, distanceToThatVertex]
// distance is always a positive integer and directed and no self-loop

// O((v + e) * logv) Time | O(v) Space
function dijkstrasAlgorithm(start, edges) {
    const numberOfVertices = edges.length;
      
      const minDistances = [];
      const initialDistances = [];
      for (let i = 0; i < numberOfVertices; i++) {
          minDistances.push(Infinity);
          initialDistances.push([i, Infinity]);
      }
      
      minDistances[start] = 0;
      
      const minDistancesHeap = new MinHeap(initialDistances);
      minDistancesHeap.update(start, 0);
      
      while (!minDistancesHeap.isEmpty()) {
          const [vertex, currentMinDistance] = minDistancesHeap.remove();
          
          if (currentMinDistance === Infinity) {
              break;
          }
          
          for (const edge of edges[vertex]) {
              const [destination, distanceToDestination] = edge;
              
              const newPathDistance = currentMinDistance + distanceToDestination;
              const currentDestinationDistance = minDistances[destination];
              if (newPathDistance < currentDestinationDistance) {
                  minDistances[destination] = newPathDistance;
                  minDistancesHeap.update(destination, newPathDistance);
              }
          }
      }
      
      return minDistances.map(x => (x === Infinity ? - 1 : x));
  }
  
class MinHeap {
    constructor(array) {
        this.vertexMap = array.reduce((obj, _, i) => {
            obj[i] = i;
            return obj;
        }, {});
        this.heap = this.buildHeap(array);
    }
      
    isEmpty() {
        return this.heap.length === 0;
    }
    
    // O(n) Time | O(1) Space
    buildHeap(array) {
        const firstParentIdx = Math.floor((array.length - 2) / 2);
        for (let currentIdx = firstParentIdx; currentIdx >= 0; currentIdx--) {
            this.siftDown(currentIdx, array.length - 1, array);
        }
        return array;
    }
    
    // O(logn) Time | O(1) Space
    siftDown(currentIdx, endIdx, heap) {
        let childOneIdx = currentIdx * 2 + 1;
        while (childOneIdx <= endIdx) {
            const childTwoIdx = currentIdx * 2 + 2 <= endIdx ? currentIdx * 2 + 2 : -1;
            let idxToSwap;
            if (childTwoIdx !== - 1 && heap[childTwoIdx][1] < heap[childOneIdx][1]) {
                idxToSwap = childTwoIdx;
            } else {
                idxToSwap = childOneIdx;
            }
            if (heap[idxToSwap][1] < heap[currentIdx][1]) {
                this.swap(currentIdx, idxToSwap, heap);
                currentIdx = idxToSwap;
                childOneIdx = currentIdx * 2 + 1;
            } else {
                return;
            }
        }
    }
    
    // O(logn) Time | O(1) Space
    siftUp(currentIdx, heap) {
        let parentIdx = Math.floor((currentIdx - 1) / 2);
        while (currentIdx > 0 && heap[currentIdx][1] < heap[parentIdx][1]) {
            this.swap(currentIdx, parentIdx, heap);
            currentIdx = parentIdx;
            parentIdx = Math.floor((currentIdx - 1) / 2);
        }
    }
    
    // O(logn) Time | O(1) Space
    remove() {
        if (this.isEmpty()) return;
        
        this.swap(0, this.heap.length - 1, this.heap);
        const [vertex, distance] = this.heap.pop();
        delete this.vertexMap[vertex];
        this.siftDown(0, this.heap.length - 1, this.heap);
        return [vertex, distance];
    }
    
    swap(i, j, heap) {
        this.vertexMap[heap[i][0]] = j;
        this.vertexMap[heap[j][0]] = i;
        const temp = heap[j];
        heap[j] = heap[i];
        heap[i] = temp;
    }
    
    // O(logn) Time | O(1) Space
    update(vertex, value) {
        this.heap[this.vertexMap[vertex]] = [vertex, value];
        this.siftUp(this.vertexMap[vertex], this.heap);
    }
}

console.log(dijkstrasAlgorithm(0, 
    [
        [
        [1, 7]
        ],
        [
        [2, 6],
        [3, 20],
        [4, 3]
        ],
        [
        [3, 14]
        ],
        [
        [4, 2]
        ],
        [],
        []
    ]
));
// Output: [ 0, 7, 13, 27, 10, -1 ]
