// 1. Printing all elements of an array
function printArrayElements(arr) {
    for (let element of arr) {
        console.log(element);
    }
}

// 2. Calculate sum, find largest and smallest values
function analyzeArray(arr) {
    const sum = arr.reduce((total, current) => total + current, 0);
    
    // Find largest value
    const max = Math.max(...arr);
    
    // Find smallest value
    const min = Math.min(...arr);
    
    return {
        sum: sum,
        largest: max,
        smallest: min
    };
}

// 3. Create a new array with duplicated elements
function duplicateArrayElements(arr) {
    return arr.map(element => element * 2);
}

// Example:
const numbers = [1, 2, 3];

// 1. Print elements
console.log("Printing elements:");
printArrayElements(numbers);

// 2. Analyze array
const analysis = analyzeArray(numbers);
console.log("\nArray Analysis:");
console.log("Sum:", analysis.sum);
console.log("Largest:", analysis.largest);
console.log("Smallest:", analysis.smallest);

// 3. Duplicate elements
const duplicatedArray = duplicateArrayElements(numbers);
console.log("\nDuplicated Array:", duplicatedArray);