// 1. BMI function
function calculateBMI(weight, height) {
    const bmi = weight / (height * height);
    
    if (bmi < 18.5) {
        return `BMI: ${bmi} - Thieu can`;
    } else if (bmi < 25) {
        return `BMI: ${bmi} - Binh thuong`;
    } else if (bmi < 30) {
        return `BMI: ${bmi} - thua can`;
    } else {
        return `BMI: ${bmi} - beo phi`;
    }
}
console.log(calculateBMI(70, 1.75));
console.log(calculateBMI(45, 1.70));
console.log(calculateBMI(90, 1.75));  
console.log(calculateBMI(100, 1.70)); 

// 2. Temperature converter function
function convertTemperature(value, type) {
    if (type.toUpperCase() === 'C') {
        const tempf = (value * 9/5) + 32;
        return `${value}°C = ${tempf}°F`;
    } else if (type.toUpperCase() === 'F') {
        const tempc = (value - 32) * 5/9;
        return `${value}°F = ${tempc}°C`;
    } else {
        return 'Invalid temperature type.';
    }
}
console.log(convertTemperature(25, 'C'));
console.log(convertTemperature(79, 'F'));  

// 3. Function tinh tong phan tu trong mang
function calculateSum(arr) {
    let sum = 0; 
    for (let i = 0; i < arr.length; i++) { 
        sum += arr[i]; 
    }
    return sum;
}
const numberArray = [1, 2, 3, 4, 5];
console.log('Tong cac phan tu trong mang', calculateSum(numberArray)); 

// 4. Function tim so nguyen to
function timSoNguyenTo(arr) {
    let soNguyenTo = [];
    
    for (let i = 0; i < arr.length; i++) { 
        let num = arr[i];
        let laSoNguyenTo = true;
        
        if (num <= 1) {
            laSoNguyenTo = false; 
        } else {
            for (let j = 2; j < num; j++) {
                if (num % j === 0) {
                    laSoNguyenTo = false; 
                    break; 
                }
            }
        }

        if (laSoNguyenTo) {
            soNguyenTo.push(num);
        }
    }
    
    return soNguyenTo;
}
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log('So nguyen to:', timSoNguyenTo(numbers));

// 5. Function cap nhat email
const users = [
    { name: 'tung', email: 'tung@gmail.com' },
    { name: 'phong', email: 'phong@gmail.com' },
    { name: 'trang', email: 'trang@gmail.com' }
];

function updateEmail(name, newEmail) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].name === name) {
            users[i].email = newEmail; 
            return;
        }
    }
}
console.log('Before update:', users);
updateEmail('tung', 'sontung24@gmail.com');
updateEmail('trang', 'nguyentrang26@gmail.com');
console.log('After update:', users);

//6. funtion tinh diem trung binh
function calculateAverageScore(students) {
    let totalScore = 0; 
    for (let i = 0; i < students.length; i++) {
        totalScore += students[i].score;
    }
    let averageScore = totalScore / students.length;
    return averageScore; 
}
const studentScores = [
    { name: "Tung", score: 8 },
    { name: "Phong", score: 9 },
    { name: "Trang", score: 7 }
];
console.log('Average score:', calculateAverageScore(studentScores));

// 7. Function kiem tra gia san pham
function checkProductPrice(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].price <= 0) {
            return false;
        }
    }
    return true;
}
const shoppingCart = [
    { name: "product 1", price: 100 },
    { name: "product 2", price: 50 },
    { name: "product 3", price: 20 }
];
console.log('All product has price > 0: ', checkProductPrice(shoppingCart));

// 8. Function check gio mo cua
function isStoreOpen(hours) {
    if (hours >= 9 && hours < 21) {
        console.log('The store is open.');
    } else {
        console.log('The store is closed.');
    }
}
isStoreOpen(10);
isStoreOpen(21); 

// 9. Function tinh gia ve
function ticketPrice(age) {
    if (age < 5) {
        console.log('Ticket price: Free'); 
    } 
    if (age >= 18) {
        console.log('Ticket price: 100000'); 
    }
    if (age >= 6 && age <= 17) {
        console.log('Ticket price: 50000'); 
    }
}
ticketPrice(4); 
ticketPrice(15); 
ticketPrice(18);

// 10. Function in ra ten thang
function printMonthName(monthNumber) {
    switch (monthNumber) {
        case 1:
            console.log('January');
            break;
        case 2:
            console.log('February');
            break;
        case 3:
            console.log('March');
            break;
        case 4:
            console.log('April');
            break;
        case 5:
            console.log('May');
            break;
        case 6:
            console.log('June');
            break;
        case 7:
            console.log('July');
            break;
        case 8:
            console.log('August');
            break;
        case 9:
            console.log('September');
            break;
        case 10:
            console.log('October');
            break;
        case 11:
            console.log('November');
            break;
        case 12:
            console.log('December');
            break;
        default:
            console.log('Invalid month number. Please enter a number between 1 and 12.');
    }
}
printMonthName(1);  
printMonthName(5);

// 11. Function phan loai hoc sinh
function classifyScore(score) {
    if (score >= 8) {
        console.log('Gioi'); 
    } else if (score >= 6.5) {
        console.log('Kha'); 
    } else if (score >= 5) {
        console.log('Trung binh'); 
    } else {
        console.log('Yeu'); 
    }
}
classifyScore(9); 
classifyScore(7);   

// 12. Function du bao thoi tiet
function reportWeather(temperature) {
    console.log(`Temperature: ${temperature}°C`);
    if (temperature >= 30) {
        console.log('Weather: Hot'); 
    } else if (temperature >= 20) {
        console.log('Weather: Cool'); 
    } else {
        console.log('Weather: Cold');
    }
}
reportWeather(35);
reportWeather(25); 