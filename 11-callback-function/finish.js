/** ЗАДАЧА 11 - Колбэк функция
 *
 * 1. Выведите в консоль "Привет, мир!" с задержкой 5 секунд
 *
 * 2. Используйте стрелочную функцию
 */

setTimeout(() => console.log("Hello world"), 5000);

// Variant 2

const helloworld = () => console.log("Hello world!");

setTimeout(helloworld, 5000);
