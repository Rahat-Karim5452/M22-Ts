/*
 * 1.Variable (basic types )
 * 2.Array
 * 3.Function
 * 4.Object
 * 5.Some More basic Types
 */

//*1.Variable:
const destination: string = "Saint Martin";
const helicopter: number = 33;

//*2.Array:
const countries: string[] = ["France", "Bangladesh", "Italy", "Spain"];

//*3.Function:
function buyBook(title: string, price: number, discount?: number): string {
  if (discount === undefined) {
    discount = 0;
  }
  return `The book ${title} costs ${price - discount}`;
}
//*4.Object:
const tubeLight: {
  brand: string;
  color: string;
  price: number;
  isAvailable: boolean;
} = {
  brand: "Philips",
  color: "White",
  price: 123.99,
  isAvailable: true,
};

//*5.Union String | number | boolean | null | unkonown
