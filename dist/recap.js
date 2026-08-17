"use strict";
/*
 * 1.Variable (basic types )
 * 2.Array
 * 3.Function
 * 4.Object
 * 5.Some More basic Types
 */
Object.defineProperty(exports, "__esModule", { value: true });
//*1.Variable:
const destination = "Saint Martin";
const helicopter = 33;
//*2.Array:
const countries = ["France", "Bangladesh", "Italy", "Spain"];
//*3.Function:
function buyBook(title, price, discount) {
    if (discount === undefined) {
        discount = 0;
    }
    return `The book ${title} costs ${price - discount}`;
}
//*4.Object:
const tubeLight = {
    brand: "Philips",
    color: "White",
    price: 123.99,
    isAvailable: true,
};
//*5.Union String | number | boolean | null | unkonown
//# sourceMappingURL=recap.js.map