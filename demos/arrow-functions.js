"use strict";

// before
function multiply(a, b) {
    return a + b;
}

console.log(multiply(5, 5));

// after
let multiply = (a, b) => a * b;
console.log(multiply(5, 5));

// (a, b) => a * b;
