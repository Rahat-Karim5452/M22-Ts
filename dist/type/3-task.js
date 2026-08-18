"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product1 = {
    title: "Laptop",
    price: 55000,
};
const product2 = {
    title: "Mouse",
    price: 500,
    inStock: true,
};
function productPrice({ price }) {
    console.log(price);
    //   console.log(title);
}
productPrice(product1);
productPrice(product2);
//# sourceMappingURL=3-task.js.map