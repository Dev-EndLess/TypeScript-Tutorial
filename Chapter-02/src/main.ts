/* Type Aliases */

type stringOrNumber = string | number;

type stringOrNumberArray = (string | number)[];

interface Guitarist {
  name?: string;
  active: boolean;
  albums: stringOrNumberArray;
}

/* Literal types */

let myName: "Dave";

let userName: "Dave" | "John" | "Fabri";
userName = "Fabri";

let number
let numbers: 2 | 4 | 6
numbers = 4