// Feel free to add new properties and methods to the class.
class MinMaxStack {
	constructor() {
        this.minMaxStack = [];
		this.stack = [];
	}
    // O(1) Time | O(1) Space
    peek() {
        return this.stack[this.stack.length - 1];
    }

    // O(1) Time | O(1) Space
    pop() {
        this.minMaxStack.pop();
        return this.stack.pop();
    }

    // O(1) Time | O(1) Space
    push(number) {
		 const newMinMax = {"min": number, "max": number};
         
         if (this.minMaxStack.length) {
             const lastMinMax = this.minMaxStack[this.minMaxStack.length - 1];
             newMinMax.min = Math.min(newMinMax.min, lastMinMax.min);
             newMinMax.max = Math.max(newMinMax.max, lastMinMax.max);
         }

         this.minMaxStack.push(newMinMax);
         this.stack.push(number);

    }   

    // O(1) Time | O(1) Space
    getMin() {
        return this.minMaxStack[this.minMaxStack.length - 1].min;
    }

    // O(1) Time | O(1) Space
    getMax() {
        return this.minMaxStack[this.minMaxStack.length - 1].max;
    }
}




