/*
Problem statement: Declare a string | number union variable.
Cast it safely to number and add 10.
Then write a double assertion (as unknown as) example and comment why it's risky.
Input: let value: string | number = "100";
Output: 110 (safe cast result); commented risky example, no runtime output required.
*/

let value: string | number = "100";

//todo: Safe type assertion
// let myValue = value as number;
// myValue = myValue + 10;

// console.log(myValue); // 110

//todo: Risky double assertion:
// It bypasses TypeScript's type checking and does not actually
// convert the value at runtime.
let riskyValue = value as unknown as number;
console.log(riskyValue);
