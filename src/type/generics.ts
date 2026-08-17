// interface Response {
//   data: any;
// data: string | number | boolean | null | undefined | object;
//   status: number;
// }

/*
 *Generic Interface: allows to write reusable code that can work
 * with different types while still keeping type safety.
 */
interface Response<T> {
  data: T;
  status: number;
}
const tranSactionRespose: Response<string> = {
  data: "Transaction Successful",
  status: 200,
};
const tranSactionStatus: Response<boolean> = {
  data: true,
  status: 401,
};
const tranSactionAmount: Response<number> = {
  data: 215,
  status: 401,
};

//function er Moddhe ]
function getlength<T>(array: T[]): number {
  return array.length;
}
getlength([" ", "something"]);
