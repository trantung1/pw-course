// 1. Tao object car
const car = {
    make: "toyota",
    model: "corolla",
    year: 2021
}
console.log(car.year)

// 2. Tao object person
const address = { street: "Ngoc Lam", city: "Hanoi", country: "Vietnam" }
const person = { name: "SonTung", address: address}
console.log(person.address.street)

// 3. Tao object student
const grades = { english: 9, math: 0}
const student = {name: "Sontung", grades: grades["math"] = 8}
console.log(student)

// 4. Tao object product
const products = {
    laptop: 999,
    smartphone: 500,
    headphones: 129,
    tablet: 450,
    smartwatch: 299
};

for (let product in products) {
    console.log(`Product: ${product}, Price: $${products[product]}`);
}

// 5. Tao object setting
const settings = {
    volume: 50,
    brightness: 75,
};
console.log('Initial settings:', settings);
// Change volume
settings.volume = 80;
console.log('Updated settings:', settings);

// 6. Tao object bike
const bike = {brand: "Jett"};
bike["color"] = "red";
console.log("bike", bike);

//7. Tao object employee
const employee = {name: "SonTung", age: 27};
delete employee.age
console.log("Employee: ", employee)

//8. Tao object school
// Create a school object with classes and their students
const school = {
    classA: ['An', 'Binh', 'Chau'],
    classB: ['Dao', 'Huong', 'Giang']
};
console.log('School:', school);
console.log('Students in Class A:', school.classA);
console.log('Students in Class B:', school.classB);