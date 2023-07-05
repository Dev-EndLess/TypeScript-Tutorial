"use strict";
/* Arrays */
let stringArr = ['one', 'hey', 'Fabri'];
let guitars = ['Ibanez', 'ESP', 5150];
let mixedData = ['EVH', 1984, true];
stringArr[0] = 'John';
stringArr.push('hey');
guitars[0] = 1984;
guitars.unshift('Jim');
let test = [];
let bands = [];
bands.push('Van Halen', 'Dime Bag');
stringArr[0] = 'EndLess';
mixedData.push('Eddie');
mixedData.push(true);
console.log(bands);
/* Object */
let myObj = {};
myObj = [];
console.log(typeof myObj);
const obj01 = {
    prop1: 'Fabri',
    prop2: 35,
    prop3: true
};
obj01.prop1 = 'Endless';
obj01.prop2 = 25;
obj01.prop3 = false;
let evh = {
    name: 'Eddie',
    active: false,
    albums: [1984, 1987, 'OU812', 'Random']
};
let dbd = {
    name: 'Dime',
    active: false,
    albums: [1992, 1996, 'CowboysFH', 'Pantera']
};
let jp = {
    name: 'Jimmy',
    albums: ['I', 'II', 'IV']
};
let unknow = {
    active: true,
    albums: ['I', 'II', 'IV']
};
const greatGuitarist = (guitarist) => {
    if (guitarist.name) {
        return `Hello ${guitarist.name}`;
    }
    return 'Hello!';
};
console.log(greatGuitarist(dbd));
console.log(greatGuitarist(unknow));
