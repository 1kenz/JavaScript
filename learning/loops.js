// TODO: while loop
var number = 1;

while (number <= 10) {
    console.log(number);
    number = number + 1;
}

// ! be carefull for infinite loops
// ! Math.ceil() - round up
// ! Math.random() - random number generate

// TODO: for loop
for (var i = 1; i <= 6; i++) {
    console.log(i);
}

// TODO: nested loop
function createNumber(limit = 49) {
    return Math.ceil(Math.random() * limit);
}
for (var i = 1; i <= 8; i++) {
    console.log(i + '. Kolon');
    for (var j = 1; j <= 6; j++) {
        console.log(createNumber());
    }
}
