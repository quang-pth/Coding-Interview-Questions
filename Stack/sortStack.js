// Just use push, pop, peek method on stack without auxilaru data structure
// Only recursion
// O(n^2) Time | O(n) Space
function sortStack(stack) {
    if (!stack.length) return stack;
      
      const top = stack.pop();
      sortStack(stack);
      insertInSortedOrder(stack, top);
      
      return stack;
  }
  
function insertInSortedOrder(stack, value) {
    if (!stack.length || value >= stack[stack.length - 1]) {
        stack.push(value);
        return;
    }
    
    const top = stack.pop();
    insertInSortedOrder(stack, value);
    stack.push(top);
}
console.log(sortStack([3, 4, 5, 1, 2]));
// Output: 1 2 3 4 5