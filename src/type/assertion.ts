let value: unknown;
// value.toUpperCase();
// value.toFixed(2);

//* as number or boolean or string
let myValue = value as string;
const upper = myValue.toUpperCase();

let yourValue = value as number;
const fixed = yourValue.toFixed(2);

let data: unknown;
interface User {
  name: string;
  email: string;
}
const userData = data as User;
userData.email;

//as const
//!man change hobe na ar.
const kamruzzaman: User = {
  name: "kamri",
  email: "@sime",
} as const;
