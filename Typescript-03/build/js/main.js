"use strict";
// Convert to more or less specific
let a = 'hello';
let b = a; // less specific  
let c = a; // more specific  
let d = 'hello'; // dont work in react
let e = 'dude';
const addOrConcat = (a, b, c) => {
    if (c === 'add') {
        return a + b;
    }
    return '' + a + b;
};
// When we are sure return string
const myVal = addOrConcat(2, 2, 'concat');
// Be careful! TS sees no problem - but a string is returned
const nextVal = addOrConcat(2, 2, 'concat');
//10 as string
10;
// The DOM 
const img = document.querySelector('img');
const myImg = document.getElementById('#img');
const nextImg = document.getElementById('#img');
img.src;
myImg.src;
