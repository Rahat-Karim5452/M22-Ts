// function useState(initialValue) {
//   let value = initialValue;

//   function setValue(newValue) {
//     value = newValue;
//   }
//   return [value,setValue]
// }
// const [counter,setCounter] = useState(0);

/*
 *func. k call Korar somoy jei type ta diye dicchi -> useState<T>
 *oi type er man Dite hobe -> (initialValue: T)
 *Porobortite update Korteo same type dite hbe -> (newValue: T)
 */
function useState<T>(initialValue: T): [T, (newValue: T) => void] {
  let value = initialValue;
  function setValue(newValue: T) {
    value = newValue;
  }
  //   return [value];
  return [value, setValue];
}
useState<string>("0");
useState<number>(0);
useState<boolean>(false);
interface User {
  email: string;
  isLoggedIn: boolean;
}
useState<User>({ email: "", isLoggedIn: false });
useState<User | null>(null);
