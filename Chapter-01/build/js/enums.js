"use strict";
/* Enums */
// "Unlike most TypeScript features, Enums are not a type-level addition to 
// JavaScript but something added to the language and runtime."
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 0] = "U";
    Grade[Grade["D"] = 20] = "D";
    Grade[Grade["C"] = 21] = "C";
    Grade[Grade["B"] = 22] = "B";
    Grade[Grade["A"] = 23] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);
console.log(Grade.D);
