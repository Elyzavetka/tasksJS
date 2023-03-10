/** ЗАДАЧА 38 - Тернарный оператор
 *
 * 1. Перепишите инструкцию "if .. else" без использования "else"
 *
 * 2. Перепишите содержимое функции, используя тернарный оператор
 *
 * 3. Замените обычную функцию на стрелочную функцию
 */

//Task 1
//function isArrayEmpty(inputArray) {
//if (inputArray.length > 0) {
//   return "Массив не пустой";
//}
// return "Массив пустой";
//}

//Task 2
//function isArrayEmpty(inputArray) {
//  return inputArray.length > 0 ? "Array is not empty" : "Array is empty";
//}

//Task 3 expliced return
//const isArrayEmpty = (inputArray) => {
//  return inputArray.length > 0 ? "Array is not empty" : "Array is empty";
//}

//Task3 impliced return
const isArrayEmpty = (inputArray) =>
  inputArray.length > 0 ? "Array is not empty" : "Array is empty";

console.log(isArrayEmpty([1, 3]));
console.log(isArrayEmpty([]));
