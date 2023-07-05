"use strict";
console.log('----------------------------');
/* Optional parameters */
const addAll = (a, b, c) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
/* Default parameters value */
const sumAll = (a = 10, b, c = 10) => {
    return a + b + c;
};
console.log(addAll(2, 4, 2));
console.log(sumAll(2, 4));
console.log(sumAll(2, 4, 4));
console.log(sumAll(undefined, 5, 5));
console.log('----------------------------');
/* Rest Parameter */
const total = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
console.log((total(2, 2, 4, 6)));
// Never type
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        //if (i === 100 ) break      /*<--- uncomment and type will be void*/
    }
};
/* CHAT-GPT
Il tipo never in TypeScript rappresenta un punto di codice irraggiungibile o un valore che non si verificherà mai. È utile per segnalare situazioni anomale o per gestire scenari in cui non ci si aspetta un valore di ritorno o un'uscita normale.
*/ 
