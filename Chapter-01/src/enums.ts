"use strict";
/* Enums */ 
// "Unlike most TypeScript features, Enums are not a type-level addition to 
// JavaScript but something added to the language and runtime."

enum Grade {
  U,
  D = 20,
  C,
  B,
  A,
}

console.log(Grade.U)
console.log(Grade.D)