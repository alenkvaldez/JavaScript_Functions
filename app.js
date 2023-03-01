console.log("Hello World!\n==========\n");

// Exercise 1 Section

console.log("EXERCISE 1:\n==========\n");

function printOdds(count) {
    if (count < 0) count = count * -1;
    for (let i = 1; i <= count; i++)
        if (i % 2 != 0) {
            console.log(i);
        }
};

// Exercise 2 Section

console.log("EXERCISE 2:\n==========\n");
function checkAge(userName, age) {
    let aboveSixteen = `congrats ${userName}, you can drive!`
    let belowSixteen = `sorry ${userName}, but you need to wait until youre 16. `
    if (age >= 16) {
        console.log(aboveSixteen);
    } else {
        console.log(belowSixteen);
    }
};

// ex 3

function checkQuad(x, y) {
    if (x > 0 && y > 0) {
        return 1;
    } else if (x < 0 && y > 0) {
        return 2;
    } else if (x < 0 && y < 0) {
        return 3;
    } else if (x > 0 && y < 0) {
        return 4;
    } else if (x == 0 && y != 0) {
        return "x axis";
    } else if (x != 0 && y == 0) {
        return "y axis";
    } else {
        return "origin";
    }
}

// ex 4

function isValidTri(a, b, c) {
    return a + b > c || a + c > b || b + c > a;
}

function checkTri(a, b, c) {
    let isValid = isValidTri(a, b, c);
    if (isValid) {
        if (a == b && b == c) {
            return "equilateral";
        } else if (a == b || b == c) {
            return "isoceles";
        }
    } else {
        return "nope";
    }
}

// ex 5

function dataUsage(planLimit, day, usage) {
    let periodLength = 30;
    let currentAvg = usage / day;
    let projectedAvg = planLimit / periodLength;
    let remainingData = planLimit - usage;
    let projectedUsage = remainingDays * currentAvg;
    let statusMsg;

    if (currentAvg > projectedAvg) {
        statusMsg = "exceeding";
    } else if (currentAvg < projectedAvg){
        statusMsg = "under";
    } else {
        statusMsg = "AT";
    }

    console.log(`${day} day(s) used, ${remainingDays} day(s) remaining
    avg projected use: ${projectedAvg.toFixed(2)} GB/day.
    you are ${statusMsg}, avg daily use (${currentAvg.toFixed(2)} GB/day),
    you will end up using ${planLimit - (usage + projectedUsage)}
    GB from your data limit.
    use no more than ${(remainingData /  remainingDays
    ).toFixed(2)} HB / day`);
}
