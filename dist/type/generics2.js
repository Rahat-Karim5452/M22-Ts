"use strict";
// function useState(initialValue) {
//   let value = initialValue;
Object.defineProperty(exports, "__esModule", { value: true });
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
function useState(initialValue) {
    let value = initialValue;
    function setValue(newValue) {
        value = newValue;
    }
    //   return [value];
    return [value, setValue];
}
useState("0");
useState(0);
useState(false);
useState({ email: "", isLoggedIn: false });
useState(null);
//# sourceMappingURL=generics2.js.map