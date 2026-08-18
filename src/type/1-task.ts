/*
Problem statement: Declare a variable of type unknown holding a string.
Use it to assert it as a string and get its length.
Repeat using angle-bracket syntax <string>.
Input: let val: unknown = "Hello TypeScript";
Output: 16 (length), printed twice — once via as string, once via <string>.
*/

//!1.Solution: via as string
let value: unknown = "Hello TypeScript";
let myValue = value as string; // !type assertion
let length = myValue.length;
console.log("Using Type Assertion: ", length);

//!2.Solution: via <string>
let myValue2 = <string>value; //!Angle Bracket type assertion
let length2 = myValue2.length;
console.log("Using Angle Bracket type Assertion: ", length2);
