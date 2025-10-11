// ВСПОМНИМ ТИПЫ ДАННЫХ

// const name = 'Никтита'
// const age = 24
// const isDeveloper = true
// const power = 999999999999999999999n
// const sign = Symbol()
// const something = undefined
// const data = null

// const user = {
//     login: '123',
//     password: 'qwerty',
// } // object - тип данных, который предназначен для хранения НЕ примитивных сущностей

////////////////////////////////////////////////////

// БАЗОВЫЙ СИНТАКСИС

// const firstEmptyObject = {}
// const secondEmptyObject = new Object()

// const user = { // набор свойств
//     login: 'iamsuperhero', // пара ключ - значение
//     password: 'qwerty',
//     'registration date': '01.01.2024', // Если есть пробел или тире в имени свойства - нужно использовать кавычки, иначе будет ошибка
//     'last-auth': '05.04.2024', // Лучше названия свойств писать Кэмл-кейсом
//      // Значение может быть любым типоп данных
//     age: 33,
//     isAdult: true,
//     job: null,
//     kids: undefined,
//     address: {
//         city: 'Житомир',
//         zipCode: 555444,
//     },
//     sayHi: () => console.log('Привет!'), // такие функции называються МЕТОДАМИ // запятая после последнего свойства называется "висячей"
// }

// console.log(user.login) // Получаем доступ к значению по ключу
// console.log(user['last-auth']) // Этим кодом можно добыть значение по названию любого свойства, а названия, содержащие пробел или дефис - только этим 

// user.sayHi()
// user.sayHi()
// user.sayHi()
// user.sayHi()
// user.sayHi()
// user.sayHi() // def tools будет показывать строку тела функции

// console.log(user.bloblabla) // undefined

/////////////////////////////////////////////////////////////

// const admin = { level: 10, status: 'online'} // объект можен быть записан в одну строку, но не всегда это удобно

/////////////////////////////////////////////////////////////

// ДОБАВЛЕНИЕ/ИЗМЕНЕНИЕ/УДАЛЕНИЕ СВОЙСТВ В ОБЪЕКТ

// const user = {}

// user.name = 'Александр'
// user['is developer'] = true;

// console.log(user)

// user.name = 'Максим'
// user.age = 35

// console.log(user)

// delete user.name
// delete user['is developer']

// console.log(user)

/////////////////////////////////////////////////////////////

// const name = 'Александр'
// const age = 28

// const user = {
//     name: name,
//     age: age,
// }

// console.log(user)

// // если имя свойства объекта совпадает с именеи используемой в значении переменной можно сократить до вида: 

// const name1 = 'Александр'
// const age1 = 28

// const user1 = {name1, age1,}

// console.log(user1)

// // ОСОБЕННОСТИ ИМЁН СВОЙСТВ ОБЪЕКТОВ

// const obj = {
//     123: 'Example',
// }

// console.log(obj['123']) // ключи объектов (имена свойств) - всегда строки

/////////////////////////////////////////////////////////////////

// const obj = {
//     const: 'blabla',
//     let: 'blablabla',
//     for: 'blabla',  // в ключах можно использовать зарезервированные JS слова
// }

// console.log(obj)

// const propName = prompt('Свойство с каким именем добавить в объект?')
// const propValue = prompt(`Какое значение записать в свойство ${propName}?`)

// const obj = {
//     [propName]: propValue, // если мы в ключе хотим использовать какую-то переменную или выражение - обязательно берём его в квадратные скобки
// }

// console.log(obj)

///////////////////////////////////////////////////////////////////

// const obj = {
//     [`bla-bla-${2 * 2}`]: true,
// }

// console.log(obj)

///////////////////////////////////////////////////////////////////

// проверка на наличие свойства по названию

// const user = {
//     name: 'Никита',
//     age: 24,
// }

// console.log ( 'isDeveloper' in user)  //false
// console.log( user.isDeveloper !== undefined) // это нельзя использовать для проверки, т.к. у isDeveloper может быть значение undefined

// СПОСОБЫ ПЕРЕБРАТЬ СВОЙСТВА ОБЪЕКТОВ ЧЕРЕЗ ЦИКЛ

// const user = {
//     name: 'Никита',
//     age: 24,
//     isDeveloper: true,
// }

// for (const propName in user) {
//     console.log(propName) // выводим ключи
// }

// for (const propName in user) {
//     console.log(user[propName]) // выводим значения  // !!!
// }

/////////////////////////////////////////////////////////////////////////

const nums = {
    name: 'Никита',
    '2': 'Второй',
    '1': 'Первый',
    '3': 'Третий',
    age: 28,
}

for (const num in nums) {
    console.log(nums[num])
} // Цикл for in специально создан для перебора ключей объекта

console.log(nums)