//1. Tinh tong 1->100
let sum = 0; 
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log('Sum from 1 to 100:', sum); 

//2. Bang cuu chuong
for (let i = 2; i <= 9; i++) {
    console.log(`Bang cuu chuong ${i}:`);
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
    console.log(''); 
}

//3. 1->99
let numbers = [];
for (let i = 1; i < 100; i += 2) {
    numbers.push(i);
}
console.log('numbers from 1 to 99:', numbers);

//4. print email
const username = 'user';
for (let i = 1; i <= 10; i++) {
    const email = `${username}-${i}@example.com`; 
    console.log(email);
}

//5. print profit
const profit = [
    { month: 1, total: 150 },
    { month: 2, total: 100 },
    { month: 3, total: 200 },
    { month: 4, total: 250 },
    { month: 5, total: 300 },
    { month: 6, total: 400 },
    { month: 7, total: 350 },
    { month: 8, total: 450 },
    { month: 9, total: 500 },
    { month: 10, total: 600 },
    { month: 11, total: 700 },
    { month: 12, total: 800 }
];
let totalProfit = 0;
for (let i = 0; i < profit.length; i++) {
    totalProfit += profit[i].total;
}
console.log('Total profit for the year:', totalProfit);