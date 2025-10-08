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

/* Задача 1: Расширенный калькулятор
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

/* Задача 2: Управление профилем пользователя

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

/* Задача 3: Генератор отчетов
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

const salesData = {
  manager: 'Анна',
  totalSales: 1500,
  region: 'Центр',
  productsSold: 45
};

const createReport = (object) => {
    let reportString = '';
    for (const key in object) {
        let line
        if (key === 'manager') {
            line = `Главный по продажам: ${object[key]}`
        } else if (key === 'totalSales') {
            line = `Сумма продаж: ${object[key]}`
        } else {
            line = `${key}: ${object[key]}`
        }
        reportString += line + '\n'
    }
    return reportString
}

console.log(createReport(salesData))