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

console.log(Grade.U) // 0
console.log(Grade.D) // 20
console.log(Grade.C) // 21