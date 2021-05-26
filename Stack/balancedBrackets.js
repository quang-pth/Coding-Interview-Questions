// O(n) Time | O(n) Space
function balancedBrackets(string) {
    const openingBrackets = "({[";
    const closingBrackets = ")}]";
    const matchingBrackets = {")" : "(", "}" : "{", "]" : "["};
    const stack = [];
    
    for (const char of string) {
        if (openingBrackets.includes(char)) {
            stack.push(char);
        } else if (closingBrackets.includes(char)) {
            if (!stack.length) {
                return false;
            } 
            
            if (matchingBrackets[char] === stack[stack.length - 1]) {
                stack.pop();
            } else {
                return false;
            }
        }
    }
    
    return stack.length === 0;
}


console.log(balancedBrackets("([])(){}(())()()"));
// true
console.log(balancedBrackets("(((((({{{{{[[[[[([)])]]]]]}}}}}))))))"));
// false
console.log(balancedBrackets("(agwgg)([ghhheah%&@Q])"));
// true