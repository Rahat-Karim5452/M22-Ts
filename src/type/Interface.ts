interface Employee {
  id: number;
  name: string;
  department: string;
  salary?: number;
}
const mark: Employee = {
  id: 101,
  name: "Mark",
  department: "It",
  salary: 5000,
};
const bill: Employee = {
  id: 102,
  name: "Bill",
  department: "HR",
};

const team: Employee[] = [
  mark,
  bill,
  {
    id: 103,
    name: "John",
    department: "Finance",
    salary: 6000,
  },
];

function printEmployeeDetails(employee: Employee): void {
  console.log(`ID: ${employee.id}`);
  console.log(`Name: ${employee.name}`);
  console.log(`Department: ${employee.department}`);
}
printEmployeeDetails({ name: "Alice", id: 104, department: "Marketing" });

function displayEmployeeDetails({ name, id, department }: Employee): void {
  console.log(`ID: ${id}`);
}
displayEmployeeDetails({ name: "Bob", id: 105, department: "Sales" });
