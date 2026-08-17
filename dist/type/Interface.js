"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mark = {
    id: 101,
    name: "Mark",
    department: "It",
    salary: 5000,
};
const bill = {
    id: 102,
    name: "Bill",
    department: "HR",
};
const team = [
    mark,
    bill,
    {
        id: 103,
        name: "John",
        department: "Finance",
        salary: 6000,
    },
];
function printEmployeeDetails(employee) {
    console.log(`ID: ${employee.id}`);
    console.log(`Name: ${employee.name}`);
    console.log(`Department: ${employee.department}`);
}
printEmployeeDetails({ name: "Alice", id: 104, department: "Marketing" });
function displayEmployeeDetails({ name, id, department }) {
    console.log(`ID: ${id}`);
}
displayEmployeeDetails({ name: "Bob", id: 105, department: "Sales" });
//# sourceMappingURL=Interface.js.map