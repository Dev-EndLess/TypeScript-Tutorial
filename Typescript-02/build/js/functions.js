"use strict";
/* Functions */
const add = (a, b) => {
    return a + b;
};
let substract = function (c, d) {
    return c - d;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg("Hello!");
logMsg(add(2, 3));
let multiply = function (c, d) {
    return c * d;
};
let divide = (c, d) => {
    return c / d;
};
logMsg(multiply(4, 2));
logMsg(divide(4, 2));
