const height = 179;
const heightMod = 179 % 100;
const perfectWeight = (heightMod*9)/10;
const maxWeight = heightMod;
const minWeight = (heightMod*8)/10;

console.log(
    "Can nang ly tuong: " + perfectWeight +
    " Kg - Can nang toi da: " + maxWeight +
    " Kg - Can nang toi thieu: " + minWeight
);