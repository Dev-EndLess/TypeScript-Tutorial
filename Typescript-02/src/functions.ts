/* Functions */

const add = (a: number, b: number): number => {
  return a + b;
};

let substract = function (c: number, d: number): number {
  return c - d;
};

const logMsg = (message: any): void => {
  console.log(message);
};

logMsg("Hello!");
logMsg(add(2, 3));

// type mathFunction = (a: number, b: number) => number
interface mathFunction {(a: number, b: number): number}

let multiply: mathFunction = function (c,d) {
  return c * d
}

let divide: mathFunction = (c,d) => {
  return c / d
}

logMsg(multiply(4,2))
logMsg(divide(4,2))

