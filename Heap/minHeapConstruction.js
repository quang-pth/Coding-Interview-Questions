class MinHeap {
    constructor(array) {
      this.heap = this.buildHeap(array);
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
              
              if (childTwoIdx !== -1 && heap[childTwoIdx] < heap[childOneIdx]) {
                  idxToSwap = childTwoIdx; 
              } else {
                  idxToSwap = childOneIdx;
              }
              
              if (heap[idxToSwap] < heap[currentIdx]) {
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
          while (parentIdx > 0 && heap[currentIdx] < heap[parentIdx]) {
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
      this.swap(0, this.heap.length - 1, this.heap);
          const valueToRemove = this.heap.pop();
          this.siftDown(0, this.heap.length - 1, this.heap);
          return valueToRemove;
    }
  
  // 	O(logn) Time | O(1) Space
    insert(value) {
      this.heap.push(value);
          this.siftUp(this.heap.length - 1, this.heap);
    }
      
      swap(i, j, heap) {
          const temp = heap[i];
          heap[i] = heap[j];
          heap[j] = temp;
      }
}

const minHeap = new MinHeap([48, 12, 24, 7, 8, -5, 24, 391, 24, 56, 2, 6, 8, 41]);
console.log(minHeap);