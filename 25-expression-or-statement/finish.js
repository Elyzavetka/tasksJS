/** ЗАДАЧА 25 - Выражение или инструкция
 *
 * Определите тип каждой конструкции JavaScript:
 *  - выражение (expression)
 *  - инструкция (statement)
 *  - выражение-инструкция (expression statement)
 */

15; // expression

// statement
const myObject = {
  x: 10,
  y: true,
};

myObject.z = "abc"; // expression

delete myObject.x; // statement

let newVariable; // statement

newVariable = 30 + 5; // expression

console.log(newVariable); // statement

if (newVariable > 10) {
  console.log(`${newVariable} больше 10`); // statement
}
