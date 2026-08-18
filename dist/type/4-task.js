"use strict";
/* Problem statement: Create a type alias PaymentMethod = "cash" | "card" | "mobile".
Comment why interface can't express this. Create an Order interface using PaymentMethod.
Input: let method: PaymentMethod = "card";
Output: Order object like { id: 1, method: "card" }, type-checked successfully.*/
Object.defineProperty(exports, "__esModule", { value: true });
let method = "card";
const order1 = {
    id: 1,
    method: method,
};
console.log(order1);
//# sourceMappingURL=4-task.js.map