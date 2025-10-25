// ДЕСТРУКТУРИЗАЦИЯ ЗНАЧЕНИЙ ИЗ МАССИВОВ

// const data = ['Nikita', 24]

// const name = data[0]
// const age = data[1]

// console.log('name:', name)
// console.log('age:', age)

//////////////

// можно так: 

// const data = ['Nikita', 24]

// const [name, age] = data // ПОРЯДОК КРАЙНЕ ВАЖЕН

// console.log('name:', name)
// console.log('age:', age)

///////////////////////////////////////////////////////

// forEach ПЕРЕБОР МАССИВА

const letters = ['А', 'Б', 'В', 'Г', 'Д', 'Е']

// for (let i = 0; i < letters.length; i++) {
//     console.log(letters[i])
// } 

// то же:

// letters.forEach((letter, index, array) => { // все эти сущности опциональны, необязательно использовать их все сразу
//     console.log('letter:', letter)
//     console.log('index:', index)
//     console.log('array:', array)
// })

///////////////////////////////////////////////////////////////////

//  ПОИСК ИНДЕКСА ЭЛЕМЕНТА В МАССИВЕ

// const prices = [100, 200, 444, 555, 777, 444]

// console.log(prices.indexOf(444)) // -1 когда нет эл-та

// console.log(
//     'Существует ли 111 в prices:',
//     prices.indexOf(111) !== -1 // не стандартная проверка
// )

///////////////////

// const prices = [100, 200, 444, 555, 777, 444]

// console.log(prices.indexOf(444)) // 2
// console.log(prices.indexOf(444, 3)) // 5 // вторым значением - с индекса какого элемента начинать поиск

// console.log(prices.lastIndexOf(444)) // 5 // производит поиск с конца
// console.log(prices.lastIndexOf(444, 3)) // 2

////////////////////////

// если элемент - объект, indexOf использовать не получиться.

// findIndex

// const users = [
//     {
//         name: 'Александр',
//         age: 28,
//     },
//     {
//         name: 'Алексей',
//         age: 14,
//     },
//     {
//         name: 'Никита',
//         age: 24,
//     },
// ]

// console.log(
//     users.findIndex((user) => {
//         if (user.name === 'Алексей') {
//             return true
//         }
//     })
// ) // 1

// можно сократить:

// console.log(
//     users.findIndex((user) => user.name === 'Алексей')
// )

// // множно и с деструктуризацией:

// console.log(
//     users.findIndex(({name}) => name === 'Алексей') // такой подход ухудшает читаемость, лучше использовать предыдущий способ
// )

// findLastIndex - ищет с конца

///////////////////////////////////////////////////////////////////

//  ПРОВЕРКА НАЛИЧИЯ ЭЛЕМЕНТОВ В МАССИВЕ

// const prices = [100, 200, 444, 555, 777, 444]

// console.log(prices.includes(444)) // true
// console.log(prices.includes(200, 4)) // false

///////////////////

// ПРОВЕРКА НАЛИЧИЯ СЛОЖНЫХ ЭЛЕМЕНТОВ В МАССИВЕ

// const users = [
//     {
//         name: 'Александр',
//         age: 28,
//     },
//     {
//         name: 'Алексей',
//         age: 14,
//     },
//     {
//         name: 'Никита',
//         age: 24,
//     },
// ]

// // применить includes не получиться, т.к. объект сравнивается по ссылкам

// // some

// console.log(
//     users.some((user) => user.name === 'Алексей') // true
// )

 ////////////////////////////////////////////////////////////////

 // ПРОВЕРКА НА СООТВЕТСТВИЕ ВСЕХ ЭЛЕМЕТОВ МАССИВА ОПРЕДЕЛЁННОМУ УСЛОВИЮ

// every

// const users = [
//     {
//         name: 'Александр',
//         age: 28,
//     },
//     {
//         name: 'Алексей',
//         age: 14,
//     },
//     {
//         name: 'Никита',
//         age: 24,
//     },
// ]

// console.log(
//     users.every((user) => user.age >= 18) // false
// )

////////////////////////////////////////////////////////////////////

// ФИЛЬТРАЦИЯ МАССИВА

// filter

// const users = [
//     {
//         name: 'Александр',
//         age: 28,
//     },
//     {
//         name: 'Алексей',
//         age: 14,
//     },
//     {
//         name: 'Никита', // если мы будем искать Никиту через find - получим только первое вхождение
//         age: 24,
//     },
//         {
//         name: 'Никита',
//         age: 62,
//     },
// ]

// console.log(
//     users.filter((user) => user.name === 'Никита')
// )

/////////////////////

// const users = [
//     {
//         name: 'Александр',
//         age: 28,
//         city: 'Kiev'
//     },
//     {
//         name: 'Алексей',
//         age: 14,
//         city: 'Odesa',
//     },
//     {
//         name: 'Никита', 
//         age: 24,
//         city: 'Odesa',
//     },
//         {
//         name: 'Никита',
//         age: 62,
//         city: 'Kiev',
//     },
// ]

// const filteredUsers = users.filter(({city, age}) => { // здесь деструктуризация полей будет не лишней
//     return city === 'Kiev' && age < 45
// })

// console.log(filteredUsers)

///////////////////////////////////////////////////////////////////////////////////////

// ПРЕОБРАЗОВАНИЕ МАССИВА

// MAP

// const users = [
//     {
//         name: 'Александр',
//         age: 28,
//         city: 'Kiev'
//     },
//     {
//         name: 'Алексей',
//         age: 14,
//         city: 'Odesa',
//     },
//     {
//         name: 'Никита', 
//         age: 24,
//         city: 'Odesa',
//     },
//         {
//         name: 'Никита',
//         age: 62,
//         city: 'Kiev',
//     },
// ]

// const usersFormatted = users.map((user) => {
//     return `${user.name}, ${user.age} лет, живёт в г. ${user.city}` // map НЕ МУТИРУЕТ исходный массив
// })

// console.log(usersFormatted)
// console.log(users) // если хотим мутировать - объявлять массив через let и переприсвоить 

/////////////////////////////////////////////////////////////////////////////////////////

// ПЕРЕБОР МАССИВА С НАКОПЛЕНИЕМ

// reduce

// const users = [
//     {
//         name: 'Александр',
//         age: 28,
//         city: 'Kiev'
//     },
//     {
//         name: 'Алексей',
//         age: 14,
//         city: 'Odesa',
//     },
//     {
//         name: 'Никита', 
//         age: 24,
//         city: 'Odesa',
//     },
//         {
//         name: 'Никита',
//         age: 62,
//         city: 'Kiev',
//     },
// ]

// // задача: найти средний возраст пользователей

// // let ageSum = 0

// // for (let i = 0; i < users.length; i++) {
// //     ageSum += users[i].age
// // } 

// // можно решить через reduce:

// const ageSum = users.reduce((sum, {age}) => {
//     console.log('age:', age)
//     return  sum + age
// }, 0)

// // можно сократить:

// // const ageSum = users.reduce((sum, {age}) => sum + age, 0) // второе значение (0) - это начальное значения accumulate 

// console.log(
//     'Средний возраст пользователей:',
//     ageSum / users.length
// )

// // Перебрать элементы в обратном порядке:

// // reduceRight

// const ageSumRight = users.reduceRight((sum, {age}) => {
//     console.log('age:', age)
//     return  sum + age
// }, 0)

////////////////////////////////////////////////////////////////////////////////

// ПЕРЕВОРАЧИВАНИЕ МАССИВА

// reverse

const users = [
    {
        name: 'Александр',
        age: 28,
        city: 'Kiev'
    },
    {
        name: 'Алексей',
        age: 14,
        city: 'Odesa',
    },
    {
        name: 'Никита', 
        age: 24,
        city: 'Odesa',
    },
        {
        name: 'Никита',
        age: 62,
        city: 'Kiev',
    },
]

// const reversedUsers = users.reverse() // метод reverse МУТИРУЕТ исходную сущность в отличие от всех вышеупомянутых методов

// console.log(
//     'Maссив в обратном порядке:',
//     reversedUsers
// )

// /////////////////

// // если мы не хотим мутировать исходный массив, можно поступить так:

// const reversedUsers = [...users].reverse()

// console.log('users:',users)
// console.log('reversedUsers:', reversedUsers)

//////////////////////////////////////////////////////////////////

// СОРТИРОВКА МАССИВОВ

// sort

// const names = ['Василий', 'Александр', 'Максим', 'Андрей'] // метод sort МУТИРУЕТ исходную сущность

// const sortedNames = [...names].sort() // копируем

// console.log(
//     'Отсортированные имена:',
//     sortedNames
// ) // в алфавитном порядке

// // с числами сложнее:

// const numbers = [8, 4, 500]

// const sortedNumbers = [...numbers].sort((a, b) => a - b) // comparator - функция сравнения

// console.log(
//     'Отсортированные числа:',
//     sortedNumbers
// )






























