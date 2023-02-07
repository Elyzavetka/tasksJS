/** ЗАДАЧА 4 - Объединение строк
 *
 * 1. Объявите три переменные с значениями:
 *  - ваше имя
 *  - ваша фамилия
 *  - ваша профессия
 *
 * 2. Создайте еще одну переменную. Ее значение должно быть, например
 * "Меня зовут <Имя> <Фамилия> и я <Профессия>"
 *
 * 3. Выведите значение последней переменной в консоль
 */
const myName = "Liza";
const mySurname = "Tarasova";
const myProfession = "web developer";

// Option 1
const mySentence =
  "My name is " + myName + " " + mySurname + ". I am " + myProfession + ".";
console.log(mySentence);

// Option 2

const mySentence2 = `My name is ${myName} ${mySurname}. I am ${myProfession}.`;
console.log(mySentence2);
