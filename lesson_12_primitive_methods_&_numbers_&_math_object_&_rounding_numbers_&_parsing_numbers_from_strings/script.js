//примитивные типы данных
// const name = 'Alex' //String
// const age = 28 //Number
// const isDeveloper = true //Boolean
// const pover = 9999999999n //BigInt
// const sign = Symbol() //Symbol
// const something = undefined //undefined

// //специальные типы данных
// const user = {
//     login: '123',
//     password: 'qwerty',
// } //Object

/////////////////////////////////////////////

// const user = {
//     name: 'Никита',
//     age: 28,
//     logInfo() {
//         console.log(`
//             Имя: ${this.name}
//             Возраст: ${this.age}   
//         `)
//     },
//     getIsAdult() {
//         return this.age >= 18  // метод
//     },
// }

// user.logInfo()
// console.log('Взрослый?', user.getIsAdult()) // вызываем метод из объекта

/////////////////////////////////////////

// У СТРОКИ ИЛИ ЧИСЛА ЕСТЬ ТАК ЖЕ СВОИ МЕТОДЫ

// const price = 99.99
// const roundedPrice = price.toFixed(0) // метод округления (в параметрах число - сколько цифр отсавить справа от точки)

// console.log(`Округлённая цена:`, roundedPrice)

/////////////////////////////////////////////////

// ОКРУГЛЕНИЕ ЧИСЛА toFixed

// const price = 99.555

// console.log(
//     `Округление до 0 знаков после запятой:`,
//     price.toFixed()
// )

// console.log(
//     `Округление до 1 знаков после запятой:`,
//     price.toFixed(1)
// )

// console.log(
//     `Округление до 2 знаков после запятой:`,
//     price.toFixed(2)
// )

// console.log( (5.111).toFixed(2)) // 5.11
// console.log( 5..toFixed(2)) // 5.00

// // ОКРУГЛЕНИЕ toPrecision

// const num = 100.055

// console.log( num.toPrecision(4)) // в аргументах 4 цифры от начала числа
// console.log( num.toFixed(4)) // в аргументах 4 цифры после запятой

///////////////////////////////////////

// toString

// const num = 100
// const numAsString = num.toString()

// console.log('Число:', num)
// console.log('Число в виде строки:', numAsString)

// console.log(typeof num)
// console.log(typeof numAsString)

// console.log(
//     `Число ${num} в двоичной системе счисления:`,
//     num.toString(2)
// )

/////////////////////////////////////////////

// MATH

// cлучайное число

// console.log(Math)

// console.log('Случайное число:', Math.random())


// // // Получение случайного целого числа в заданном интервале, включительно
// // function getRandomIntInclusive(min, max) {
// //   min = Math.ceil(min);
// //   max = Math.floor(max);
// //   return Math.floor(Math.random() * (max - min + 1) + min); // Максимум и минимум включаются
// // }

// // console.log(getRandomIntInclusive(1, 5))

// // абсолютное число

// console.log( Math.abs(-1)) // abs отбрасывает минус
// console.log( Math.abs(2))
// console.log( Math.abs(100))
// console.log( Math.abs(-1000))

// // возведение в степень

// console.log(Math.pow(2, 10))
// // то же что и 
// console.log(2 ** 10)

// КВАДРАТНЫЙ И КУБИЧЕСКИЙ КОРЕНЬ

// console.log( Math.sqrt(16))
// console.log( Math.sqrt(49))
// console.log( Math.sqrt(256))

// console.log( Math.cbrt(9))
// console.log( Math.cbrt(125))
// console.log( Math.cbrt(1000))

// MIN MAX

// console.log( Math.min(1, 2, 3, -5, 10, 1111, 100))
// console.log( Math.max(1, 2, 3, -5, 10, 1111, 100))

// что бы вычислить min max в массиве, нужно работать через spread:

// const nums = [1, 2, 3, -5, 10, 1111, 100]
// console.log( Math.min(...nums))

// ОКРУГЛЕНИЕ ЧИСЛА В MATH

// //round округляет число до ближайшего целого по стандарту
// console.log( Math.round(3.49))
// console.log( Math.round(3.5))
// console.log( Math.round(3.51))

// console.log( Math.round(-3.49))
// console.log( Math.round(-3.5))
// console.log( Math.round(-3.51))

// // floor округляет вниз до ближайдего целого
// console.log( Math.floor(3.49))
// console.log( Math.floor(3.5))
// console.log( Math.floor(3.51))

// console.log( Math.floor(-3.49))
// console.log( Math.floor(-3.5))
// console.log( Math.floor(-3.51))

// // ceil округляет вверх до ближайдего целого
// console.log( Math.ceil(3.49))
// console.log( Math.ceil(3.5))
// console.log( Math.ceil(3.51))

// console.log( Math.ceil(-3.49))
// console.log( Math.ceil(-3.5))
// console.log( Math.ceil(-3.51))

// // trunc округляет до целого в меньшую сторону без учёта знака числа
// console.log( Math.trunc(3.49))
// console.log( Math.trunc(3.5))
// console.log( Math.trunc(3.51))

// console.log( Math.trunc(-3.49))
// console.log( Math.trunc(-3.5))
// console.log( Math.trunc(-3.51))

//////////////////////////////////////////////////////////////////////

// ПАРСИНГ СТРОКИ И ПОЛУЧЕНИЕ ЧИСЛА

// const numberAsString = '100.5px' // если перед числом без пробела будет буквенный символ - применяют регулярные выражения

// console.log( Number(numberAsString)) // NaN
// console.log( +numberAsString) // NaN

// console.log( parseInt(numberAsString)) //100 // вторым арг. можно указать систему исчесления
// console.log( parseFloat(numberAsString))


