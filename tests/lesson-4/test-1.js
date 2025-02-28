const departurePlanet = "Earth";
const mission = "Explore the K12 Universe";
const crew = [
    "Alex",
    "Mario",
    "MoneyMaker",
    "TomDwan",
    "MTP"
];

function launchShip(crewMembers) {
    let crewList = "";
    for (let i = 0; i < crewMembers.length; i++) {
        if (i > 0) {
            crewList += ", ";
        }
        crewList += crewMembers[i];
    }
    return `Chuẩn bị khởi động! Phi hành đoàn gồm: ${crewList} sẽ đồng hành cùng bạn trong chuyến phiêu lưu ${mission}!`;
}

const launchMessage = launchShip(crew);
console.log(launchMessage);

//2. Distance Calculation Function
function calculateDistance(speed, time) {
    const distance = speed * time;
    return distance;
}
const spaceshipSpeed = 1000; 
const travelTime = 24; 
const travelDistance = calculateDistance(spaceshipSpeed, travelTime);
console.log(`Speed: ${spaceshipSpeed} km/h`);
console.log(`Travel Time: ${travelTime} hours`);
console.log(`Total Distance Traveled: ${travelDistance} kilometers`);

//3. Hexadecimal Time Conversion Function
function convertTimeToHex(time) {
    const hexTime = time.toString(16);
    return hexTime;
}
const planetTime = 120; 
const hexadecimalTime = convertTimeToHex(planetTime);
console.log(`Decimal Time: ${planetTime} seconds`);
console.log(`Hexadecimal Time: ${hexadecimalTime}`);

//4. Code Decryption Function
function decryptCode(code) {
    let decryptedPassword = "";
    for (let i = 0; i < code.length; i++) {
        let char = code[i];
        if (char >= 'A' && char <= 'Z') {
            decryptedPassword += char.toLowerCase();
        } else if (char >= 'a' && char <= 'z') {
            decryptedPassword += char.toUpperCase();
        } else {
            decryptedPassword += char;
        }
    }
    return decryptedPassword;
}
const originalCode = "K12 Challenge";
const decryptedCode = decryptCode(originalCode);
console.log(`Original Code: ${originalCode}`);
console.log(`Decrypted Code: ${decryptedCode}`);

//5. Return to Earth Function
function returnToEarth() {
    console.log("Chuẩn bị trở về Trái Đất!");
}
returnToEarth();