// 1. Find first and last position of a given value in an array
function findFirstAndLastPosition(arr, value) {
    // Variables to store first and last positions
    let firstPosition = -1;
    let lastPosition = -1;

    // Loop through the entire array
    for (let i = 0; i < arr.length; i++) {
        // If current element matches the value
        if (arr[i] === value) {
            // If this is the first time finding the value
            if (firstPosition === -1) {
                firstPosition = i;
            }
            // Always update last position when finding the value
            lastPosition = i;
        }
    }

    // Print the results
    console.log(`First position: ${firstPosition}`);
    console.log(`Last position: ${lastPosition}`);

    // Return an object with the positions
    return { firstPosition, lastPosition };
}

// 2. Create an array with characters in reverse order
function reverseStringToArray(str) {
    // Create an array to store reversed characters
    const reversedArray = [];

    // Loop through the string from end to beginning
    for (let i = str.length - 1; i >= 0; i--) {
        // Add each character to the array
        reversedArray.push(str[i]);
    }

    // Return the reversed array
    return reversedArray;
}

// 3. Filter out unique elements in an array
function findUniqueElements(arr) {
    // Create an array to store unique elements
    const uniqueElements = [];

    // Loop through the array
    for (let i = 0; i < arr.length; i++) {
        // Flag to check if current element is unique
        let isUnique = true;

        // Compare current element with all other elements
        for (let j = 0; j < arr.length; j++) {
            // Skip comparing element with itself
            if (i !== j && arr[i] === arr[j]) {
                // If found in another position, it's not unique
                isUnique = false;
                break;
            }
        }

        // If unique, add to unique elements array
        if (isUnique) {
            uniqueElements.push(arr[i]);
        }
    }

    // Return unique elements
    return uniqueElements;
}

// Test the functions
console.log("1. First and Last Position:");
const testArray1 = [1, 2, 3, 4, 3, 55, 23];
findFirstAndLastPosition(testArray1, 3);

console.log("\n2. Reverse String to Array:");
const testString = "Playwright";
console.log(reverseStringToArray(testString));

console.log("\n3. Unique Elements:");
const testArray2 = [1, 2, 3, 1, 2, 4, 5];
console.log(findUniqueElements(testArray2));