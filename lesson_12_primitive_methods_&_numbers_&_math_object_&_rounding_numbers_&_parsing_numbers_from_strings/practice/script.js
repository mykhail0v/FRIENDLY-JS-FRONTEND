/*
Задача 1: Мастер округления
У тебя есть число 13.45678.

Округли его до ближайшего целого.

Округли его до ближайшего целого в меньшую сторону.

Округли его до ближайшего целого в большую сторону.

Оставь от него только два знака после запятой (результат должен быть строкой).
*/

// let number = 13.45678;

// // Твой код здесь
// let rounded = Math.round(number);
// let floored = Math.floor(number);
// let ceiled = Math.ceil(number);
// let fixed = number.toFixed(2);

// console.log(rounded);  // Ожидаемый результат: 13
// console.log(floored);  // Ожидаемый результат: 13
// console.log(ceiled);   // Ожидаемый результат: 14
// console.log(fixed);    // Ожидаемый результат: "13.46"

//////////////////////////////////////

/*
Задача 2: Чистый парсинг

Есть строки, в которых указана цена товара, но с лишними символами. Нужно извлечь из них числовое значение.
*/

// let price1 = "150.75грн";
// let price2 = "100$";
// let price3 = "Скидка 25%";

// // Твой код здесь
// let parsedPrice1 = parseFloat(price1); // Должно получиться число 150.75
// let parsedPrice2 = parseInt(price2); // Должно получиться число 100
// let parsedPrice3 = parseInt(price3.match(/\d+/)); // Должно получиться число 25

// console.log(parsedPrice1, parsedPrice2, parsedPrice3);

/*
Генератор случайных скидок

Напиши код, который генерирует случайное целое число (размер скидки в процентах) в диапазоне от 5 до 25 (включительно).
*/

let minDiscount = 5;
let maxDiscount = 25;
let randomDiscount = getRandomIntInclusive(minDiscount, maxDiscount);

console.log(`Ваша случайная скидка: ${randomDiscount}%`)

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // Максимум и минимум включаются
}
