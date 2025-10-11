'use strict'

/* Задача 1
Калькулятор возраста:

Создай переменные birthYear (год рождения) и currentYear (текущий год).

Вычисли возраст пользователя и сохрани его в переменной age.

Выведи результат в консоль в формате: "Вам N лет".


*/

// const birthYear = 2000
// const currentYear = 2025

// const age = currentYear - birthYear

// console.log(`Вам ${age} лет `)

////////////////////////////////////////////////////

/* Задача 2
Конвертер валют:

Создай переменную dollars и присвой ей какое-нибудь значение.

Создай переменную exchangeRate с текущим курсом доллара к твоей местной валюте.

Посчитай, сколько это будет в местной валюте, и выведи результат в консоль.
*/

// const dollars = 10
// const exchangeRate = 41.35
// const uah = dollars * exchangeRate

// console.log(uah)

/////////////////////////////////////////////////////

/* Задача 3
Информация о пользователе:

Создай переменные для имени (firstName), фамилии (lastName), возраста (age) и статуса "женат/замужем" (isMarried, булево значение).

Выведи в консоль строку, объединяющую всю эту информацию. Например: "Имя: Иван, Фамилия: Петров, Возраст: 28, Состоит в браке: да".
*/

// const firstName = 'Никита'
// const lastName = 'Михайлов'
// const age = '24'
// const isMarried = true

// const userIsMarried = isMarried === true ? 'да' : 'нет'

// console.log(`
//     Имя: ${firstName}, 
//     Фамилия: ${lastName},
//     Возраст: ${age},
//     Состоит в браке: ${userIsMarried}
    
// `)

////////////////////////////////////////////////////////////////////

/* Задача 4
Проверка доступа:

Создай переменную userAge.

Напиши условие, которое проверяет возраст. Если пользователю 18 или больше, выведи "Доступ разрешен". В противном случае — "Доступ запрещен".

Попробуй решить эту задачу и с помощью if/else, и с помощью тернарного оператора.
*/

// const userAge = 18
// if (userAge >= 18) {
//     console.log('Доступ разрешен')
// } else {
//     console.log('Доступ запрещён')
// }

// const message = userAge >= 18 ? 'Доступ разрешен' : 'Доступ запрещён'

// console.log(message)

//////////////////////////////////////////////////////////////////////

/* Задача 5
Светофор:

Создай переменную lightColor со значениями "зеленый", "желтый" или "красный".

Напиши if/else if/else конструкцию, которая будет выводить в консоль действие для водителя: "Идти", "Ждать" или "Стоять".
*/

// const lightColor = 'красный'

// if (lightColor === 'зелёный') {
//     console.log('Идти')
// } else if (lightColor === 'жёлтый'){
//     console.log('Ждать')
// } else if (lightColor === 'красный'){
//     console.log('Стоять')
// }

////////////////////////////////////////////

/* Задача 6
Какое число больше?

Создай две переменные, num1 и num2.

Используя тернарный оператор, найди большее из двух чисел и выведи его в консоль.
*/

// const num1 = 10
// const num2 = 12

// const largerNum = num1 > num2 ? num1 : num2

// console.log(largerNum)

////////////////////////////////////////////////

/* Задача 7

Четные числа:

Используя цикл for, выведи все четные числа от 2 до 20.

*/

// for (let i = 1; i <= 20; i++) {
//     if (i % 2 === 0) {
//         console.log(i)

//     }
// }

///////////////////////////////////////////////

/* Задача 8

Сумма чисел:

Напиши программу, которая запрашивает у пользователя числа, пока он не введет 0. После этого выведи сумму всех введенных чисел. Используй цикл do...while.

*/
// let usersNumber
// let count = 0

// do {
//     usersNumber = prompt(`Введите любое число для сумирования. Для остановки суммирования введите 0`)
//     count += Number(usersNumber)
// }
// while (usersNumber != 0)

// console.log('Сумма введённых чисел:', count)

// сделал с подсказской

//////////////////////////////////////////////

/* Задача 9

Обратный отсчет:

Используя цикл while, выведи в консоль числа от 10 до 1.

*/

// let count = 10;

// while (count > 0) {
//     console.log(count)
//     count --
// }

//////////////////////////////////////////////

/* Задача 10

Функция-калькулятор:

Напиши функцию calculate, которая принимает три аргумента: num1, num2 и operator (строка: "+", "-", "*", "/").

Функция должна возвращать результат соответствующей арифметической операции.

*/

// function calculate(num1, num2, operator) {
//     let result
//     if (operator === '+') {
//         result = num1 + num2
//     } else if (operator === '-'){
//         result = num1 - num2
//     } else if (operator === '*'){
//         result = num1 * num2
//     } else if (operator === '/'){
//         result = num1 / num2
//     }

//     return result
// }

// console.log(calculate(2, 2, '/'))

////////////////////////////////////////////////

/* Задача 11
    
Проверка на совершеннолетие (стрелочная функция):

Напиши стрелочную функцию isAdult, которая принимает возраст и возвращает true, если возраст 18 или больше, и false в противном случае.

*/

// const isAdult = (age) => {
//     if(age >= 18) return true
//     else return false
// }

// console.log(isAdult(17))

/////////////////////////////

// const isAdult = (age) => age >= 18 ? true : false


// console.log(isAdult(19))

//////////////////////////////////////////////

/* Задача 12
    
Приветствие:

Напиши функцию greet, которая принимает имя в качестве аргумента. Если имя передано, она должна возвращать "Привет, {имя}!", а если аргумент пустой — "Привет, гость!".

*/

// function greet(name = 'гость') {
//     return `Привет, ${name}!`
// }

// console.log(greet('Nikita'))

/////////////////////////////////////////////////

/* Задача 13
    
Информация о книге:

Создай объект book со свойствами title, author, year и pages.

Напиши функцию printBookInfo, которая принимает объект книги и выводит всю информацию о ней в консоль.

*/

// book = {
//     title: 'Анна Каренина',
//     author: 'Лев Толстой',
//     year: '1878',
//     pages: '861',
// }

// function printBookInfo(obj) {
//     console.log(`
//         Название: ${obj.title}
//         Автор: ${obj.author}
//         Год: ${obj.year}
//         Количество страниц: ${obj.pages}
//     `)
// }

// printBookInfo(book)

/////////////////////////////////////

/* Задача 14
    
Копирование и изменение:

Создай объект user с полями name и age.

Сделай полную копию этого объекта в новую переменную userCopy.

Измени возраст в userCopy. Убедись, что оригинальный объект user не изменился.

*/

// const user = {
//     age: 11,
//     name: 'Nikita',
// }

// const userCopy = Object.assign({}, user)

// userCopy.age = 33

// console.log(user)
// console.log(userCopy)

//////////////////////////////////////////

/* Задача 15
    
Перебор свойств:

Создай объект с произвольным набором свойств.

Напиши функцию, которая перебирает все свойства объекта с помощью цикла for...in и выводит их в формате "ключ: значение".

*/

// book = {
//     title: 'Анна Каренина',
//     author: 'Лев Толстой',
//     year: '1878',
//     pages: '861',
// }

// function objectIteration(obj) {
//     for (propName in obj) {
//         console.log(`${propName}: ${obj[propName]}`)
//     }
// }

// objectIteration(book)

/////////////////////////////////////////////////

/* Задача 16
    
Деструктуризация:

Создай объект person со свойствами firstName, lastName, age и city.

Используя деструктуризацию, извлеки firstName и age в отдельные переменные.

*/

// const person = {
//     firstName: 'Никита',
//     lastName: 'Михайлов',
//     age: 24,
//     city: 'Одесса',
// }

// const {firstName, age} = person

// console.log(firstName, age)

//////////////////////////////////////////////

/* Задача 17: Расширенный калькулятор
Напиши функцию advancedCalculator, которая принимает один аргумент — объект с такой структурой:

{
  num1: 5,
  num2: 10,
  operator: '*'
}
Функция должна выполнять арифметическую операцию, указанную в свойстве operator, над числами num1 и num2.

Усложнение:

Используй деструктуризацию прямо в параметрах функции, чтобы сразу получить num1, num2 и operator в переменные.

Добавь проверку на деление на ноль. Если num2 равно 0 и operator — это '/', функция должна возвращать строку "Ошибка: деление на ноль!".

Если в operator передано что-то, кроме '+', '-', '*' или '/', функция должна возвращать строку "Неизвестный оператор".
*/

// const advancedCalculator = ({num1, num2, operator}) => {
//     if(!'+-*/'.includes(operator)) return('Неизвестный оператор')
//     switch (operator) {
//         case '+':
//             return num1 + num2;
//         case '-':
//             return num1 - num2;
//         case '*':
//             return num1 * num2;
//         case '/':
//             if (num2 === 0) return('Ошибка, на 0 делить нельзя!')
//             return num1 / num2;
//     }
// }

// console.log(advancedCalculator({ num1: 1, num2: 2, operator: '+' })) 
// console.log(advancedCalculator({ num1: 10, num2: 0, operator: '/' })) 
// console.log(advancedCalculator({ num1: 5, num2: 5, operator: '%' }))

////////////////////////////////////////////////////////////////////////////

/* Задача 18: Управление профилем пользователя

Создай объект userProfile со свойствами name, age, email и isAdmin (булево значение).

Напиши стрелочную функцию updateProfile, которая принимает два аргумента:

Объект профиля (profile).

Объект с обновлениями (updates).

Функция должна:

Создать полную копию исходного объекта profile, чтобы не изменять его.

Перебрать все свойства из объекта updates с помощью цикла for...in.

Для каждого свойства в updates проверить, существует ли такое же свойство в скопированном профиле.

Если свойство существует, обновить его значение в копии.

Вернуть новый, обновленный объект.


*/

// const userProfile = { 
//     name: 'Иван', 
//     age: 30, 
//     email: 'ivan@example.com', 
//     isAdmin: false,
// }

// const updates = { 
//     age: 31, 
//     isAdmin: true, 
// }

// const updateProfiles = (profile, updates) => {
//     const profileCopy = Object.assign({}, profile)

//     for (const update in updates) {
//         if (update in profileCopy) {
//             profileCopy[update] = updates[update]
//         }

//     }

//     return profileCopy
// }

// console.log(updateProfiles(userProfile, updates))
// console.log(userProfile)

// или:

// const updateProfiles = (profile, updates) => {
//      const profileCopy = {...profile, ...updates}
//      return profileCopy
// }

// console.log(updateProfiles(userProfile, updates))

/* Задача 19: Генератор отчетов
Напиши функцию createReport, которая принимает объект с данными о продажах. Структура объекта может быть произвольной, например:

const salesData = {
  manager: 'Анна',
  totalSales: 1500,
  region: 'Центр',
  productsSold: 45
};
Функция должна перебрать все свойства объекта и вернуть отформатированную многострочную строку-отчет.

Усложнение:

Используй цикл for...in для перебора свойств.

Внутри цикла используй if/else или тернарный оператор, чтобы по-разному форматировать разные ключи. Например:

Если ключ — 'manager', строка должна быть "Главный по продажам: [значение]".

Если ключ — 'totalSales', строка должна быть "Сумма продаж: [значение] $".

Для всех остальных ключей — стандартный формат "[ключ]: [значение]".

Собери все строки в одну и верни ее.

*/

// const salesData = {
//   manager: 'Анна',
//   totalSales: 1500,
//   region: 'Центр',
//   productsSold: 45
// };

// const createReport = (object) => {
//     let reportString = '';
//     for (const key in object) {
//         let line
//         if (key === 'manager') {
//             line = `Главный по продажам: ${object[key]}`
//         } else if (key === 'totalSales') {
//             line = `Сумма продаж: ${object[key]}`
//         } else {
//             line = `${key}: ${object[key]}`
//         }
//         reportString += line + '\n'
//     }
//     return reportString
// }

// console.log(createReport(salesData))

//////////////////////////////////////////////////////////////

/*
Задача 20: Вложенная деструктуризация
Создай сложный объект, описывающий заказ в интернет-магазине:

JavaScript

const order = {
  id: 'A-123',
  details: {
    productName: 'Ноутбук',
    price: 1200,
    quantity: 1
  },
  customer: {
    name: 'Петр',
    contact: {
      email: 'petr@example.com',
      phone: '123-456-789'
    }
  },
  shipping: {
    address: 'ул. Главная, 10',
    method: 'Курьерская доставка'
  }
};
Напиши функцию getShippingInfo, которая принимает этот объект заказа.

Задача:

Используя вложенную деструктуризацию, извлеки из объекта order только productName, customer.name и shipping.address в переменные.

Функция должна вернуть строку формата: "Привет, [имя клиента]! Ваш заказ '[название продукта]' будет доставлен по адресу: [адрес доставки]."
*/

// const order = {
//   id: 'A-123',
//   details: {
//     productName: 'Ноутбук',
//     price: 1200,
//     quantity: 1
//   },
//   customer: {
//     name: 'Петр',
//     contact: {
//       email: 'petr@example.com',
//       phone: '123-456-789'
//     }
//   },
//   shipping: {
//     address: 'ул. Главная, 10',
//     method: 'Курьерская доставка'
//   }
// }

// const getShippingInfo = (order) => {
//     const {details: {productName}, customer: {name: customerName}, shipping: {address: shippingAddress}} = order
//     return `Привет, ${customerName}! Ваш заказ "${productName}" будет доставлен по адресу: ${shippingAddress}.`
// }

// console.log(getShippingInfo(order))

//////////////////////////////////////////////////////////

/*
Задача 21: Динамическое создание объекта
Напиши функцию createObjectFromInput, которая ничего не принимает в качестве аргументов.

Задача:

Создай внутри функции пустой объект.

Используя цикл do...while, запрашивай у пользователя ввод данных в формате "ключ:значение". Например, "имя:Никита".

Продолжай запрашивать ввод, пока пользователь не нажмет "Отмена" или не введет пустую строку.

Каждую введенную строку нужно "распарсить": найти, где находится двоеточие, отделить ключ от значения и добавить эту пару в созданный объект.

После завершения цикла функция должна вернуть созданный объект.

Подсказка: для разделения строки по символу можно использовать метод .split(':'), который ты, возможно, еще не проходил, но можешь найти информацию о нем. Это будет полезным упражнением. Если не хочешь пока забегать вперед, можешь использовать for и искать индекс двоеточия.
*/

// const createObjectFromInput = () => {
//     const object = {}
//     let usersData
//     do {
//         usersData = prompt('Введите свои данные в формате "ключ:значение". Например, "имя:Никита"')
//         if(usersData) {
//              let [key, value] = usersData.split(':').map(item => item.trim());
//             object[key] = value
//         }
//     } while(usersData)
//     return object
// }

// const finalObject = createObjectFromInput()
// console.log('Итоговый объект:', finalObject)

// вот как можно решить с нарезской строк (решение Gemini): 

// const createObjectFromInputWithFor = () => {
//     const object = {};
//     let usersData;
//     do {
//         usersData = prompt('Введите свои данные в формате "ключ:значение".');
//         if (usersData) {
//             let colonIndex = -1; // Изначально считаем, что двоеточия нет

//             // 1. Ищем индекс первого двоеточия в строке
//             for (let i = 0; i < usersData.length; i++) {
//                 if (usersData[i] === ':') {
//                     colonIndex = i; // Сохраняем индекс
//                     break;          // Выходим из цикла, так как нам нужно только первое
//                 }
//             }

//             // 2. Если двоеточие было найдено (индекс изменился)
//             if (colonIndex !== -1) {
//                 // 3. "Нарезаем" строку на ключ и значение, используя найденный индекс
//                 const key = usersData.slice(0, colonIndex).trim();
//                 const value = usersData.slice(colonIndex + 1).trim();

//                 // Добавляем в объект, только если ключ не пустой
//                 if (key) {
//                     object[key] = value;
//                 }
//             }
//         }
//     } while (usersData);
//     return object;
// };

// const finalObject = createObjectFromInputWithFor();
// console.log('Итоговый объект:', finalObject);

//////////////////////////////////////////////////////////////////

/*
Задача 22: Анализатор объекта
Цель: Попрактиковаться в работе с объектами, циклами и условиями.

Напиши функцию analyzeObject(obj). Эта функция должна принимать объект и возвращать новый объект с двумя свойствами:

stringCount: количество свойств, значения которых являются строками.

numberSum: сумма всех числовых значений в объекте.

Функция должна игнорировать свойства с другими типами данных.

JavaScript

// Пример объекта для теста
const testData = {
  name: "John Doe",
  age: 30,
  city: "New York",
  hasCar: true,
  salary: 5000,
  bonus: 1500.50,
  position: "Developer"
};

// Ожидаемый результат вызова функции:
// { stringCount: 3, numberSum: 6530.5 }
*/

// const employee= {
//   name: "John Doe",
//   age: 30,
//   city: "New York",
//   hasCar: true,
//   salary: 5000,
//   bonus: 1500.50,
//   position: "Developer"
// }

// const analyzeObject = (obj) => {
//     let stringCount = 0
//     let numberSum = 0
//     for (const key in obj) {
//         if (typeof obj[key] === 'string') {
//             stringCount += 1
//         }
//         if (typeof obj[key] === 'number') {
//             numberSum += obj[key]
//         }
//     }

//     return {stringCount, numberSum}
// }

// console.log(analyzeObject(employee))

///////////////////////////////////////////////////

/* Задача 23

Анализ строки
Напиши стрелочную функцию analyzeString(str), которая принимает строку и возвращает объект с информацией о ней.

Требования:

Функция должна вернуть объект с тремя свойствами: length (длина строки), firstChar (первый символ) и lastChar (последний символ).

Для извлечения свойств из итогового объекта в коде проверки используй деструктуризацию.

JavaScript

// Пример использования:
const result = analyzeString("JavaScript");
const { length, firstChar, lastChar } = result;

console.log(length);      // Ожидаемый результат: 10
console.log(firstChar);   // Ожидаемый результат: "J"
console.log(lastChar);    // Ожидаемый результат: "t"
*/

// const analyzeString = (str) => {
//     const length = str.length
//     let firstChar
//     let lastChar  
//     for(let i = 0; i <str.length; i++ ) {
//         if (i === 0) {
//             firstChar = str[i]
//         }
//         if (i === str.length - 1) {
//             lastChar = str[i]
//         }
//     } return { length, firstChar, lastChar}
// }

// const result = analyzeString("JavaScript");
// const { length, firstChar, lastChar } = result;

// console.log(length);      // Ожидаемый результат: 10
// console.log(firstChar);   // Ожидаемый результат: "J"
// console.log(lastChar);    // Ожидаемый результат: "t"

// or 

// const analyzeString = () => {
//     return {
//         length: str.length,
//         firstChar: str[0],
//         lastChar: str[lenght - 1]
//     }
// }

// // or

// const analyzeStringConcise = (str) => ({
//   length: str.length,
//   firstChar: str[0],
//   lastChar: str.at(-1) // .at(-1) - это более современный способ получить последний элемент
// });

/////////////////////////////////////////////////////////

/* Задача 24

Проверка доступа
Напиши функцию checkAccess(age, hasLicense), которая определяет, может ли человек водить машину.

Требования:

Функция принимает возраст (age) и наличие прав (hasLicense, булево значение).

Используй логические операторы (&&, ||) и тернарный оператор для определения результата.

Функция должна возвращать строку: "Доступ разрешен" или "Доступ запрещен".

Условие: возраст должен быть 18 лет или больше, и права должны быть (hasLicense === true).

JavaScript

// Пример использования:
console.log(checkAccess(20, true));  // Ожидаемый результат: "Доступ разрешен"
console.log(checkAccess(17, true));  // Ожидаемый результат: "Доступ запрещен"
console.log(checkAccess(25, false)); // Ожидаемый результат: "Доступ запрещен"
*/

// const checkAccess = (age, hasLicense) => age >= 18 && hasLicense ? 'Доступ разрешен' : 'Доступ запрещен'

// console.log(checkAccess(20, true));  
// console.log(checkAccess(17, true));  
// console.log(checkAccess(25, false));

//////////////////////////////////////////////////////////////////////

/* Задача 25

Объединение объектов
Напиши функцию mergeUsers(user, defaults), которая объединяет два объекта.

Требования:

Функция принимает два объекта: user (с основными данными) и defaults (со значениями по умолчанию).

Нужно создать новый объект, который будет содержать все свойства из defaults, перезаписанные свойствами из user, если они совпадают.

Используй оператор ... (spread) для копирования и объединения.
*/

const mergeUsers = (user, defaults) => {
    const newObject = {...user, ...defaults}
    return newObject
}

const mainUser = {
  name: "Alice",
  email: "alice@example.com"
};

const defaultSettings = {
  theme: "light",
  email: "default@example.com", // это свойство должно быть перезаписано
  notifications: true
};

const mergedUser = mergeUsers(mainUser, defaultSettings);
console.log(mergedUser);
