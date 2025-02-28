// Sample object 
const student = {
    name: "Alex", 
    age: 10, 
    salary: 20
};

// 1. Print out name and value of each property in an object
function printObjectProperties(obj) {
    // Get all keys of the object
    const keys = Object.keys(obj);
    
    // Use a traditional for loop to iterate through keys
    for (let i = 0; i < keys.length; i++) {
        // Get the current key
        const key = keys[i];
        
        // Print the key and its value
        console.log(key + "=" + obj[key]);
    }
}

// 2. Calculate sum of numeric values in an object
function sumNumericProperties(obj) {
    // Initialize sum to 0
    let sum = 0;
    
    // Get all keys of the object
    const keys = Object.keys(obj);
    
    // Use a traditional for loop to iterate through keys
    for (let i = 0; i < keys.length; i++) {
        // Get the current key
        const key = keys[i];
        
        // Check if the value is a number
        if (typeof obj[key] === 'number') {
            // Add the number to the sum
            sum = sum + obj[key];
        }
    }
    
    // Return the total sum
    return sum;
}

// 3. Create an array of object property names
function getObjectPropertyNames(obj) {
    // Get all keys of the object
    const keys = Object.keys(obj);
    
    // Return the array of keys
    return keys;
}

// Demonstrate the functions
console.log("1. Printing Object Properties:");
printObjectProperties(student);

console.log("\n2. Sum of Numeric Properties:");
console.log(sumNumericProperties(student));

console.log("\n3. Object Property Names:");
console.log(getObjectPropertyNames(student));