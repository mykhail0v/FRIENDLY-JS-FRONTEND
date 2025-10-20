/* Задача 1

Генератор "слагов"
Представь, что ты работаешь над блогом. У тебя есть массив с названиями будущих статей.

JavaScript

const articleTitles = [
  'The Magic of JavaScript',
  'CSS Grids Explained',
  'Why React is Awesome',
  'Understanding the DOM',
]
Твоя задача — написать функцию generateSlugs(titles), которая принимает этот массив titles и возвращает новый массив, где каждое название преобразовано в "slug".

Что такое "slug"? Это версия названия, пригодная для URL-адреса. Для нашей задачи "slug" — это:

Строка в нижнем регистре.

Все пробелы заменены на дефисы (-).

Например, из 'The Magic of JavaScript' должен получиться 'the-magic-of-javascript'.

Ожидаемый результат вызова твоей функции:

JavaScript

// ['the-magic-of-javascript', 'css-grids-explained', 'why-react-is-awesome', 'understanding-the-dom']

*/

// const articleTitles = [
//   'The Magic of JavaScript',
//   'CSS Grids Explained',
//   'Why React is Awesome',
//   'Understanding the DOM',
// ]

// const generateSlugs = (titles) => {
//     const slugs = []
//     for (let title of titles) {
//         const slug = title
//                         .toLowerCase()
//                         .replace(/\s+/g, '-')
//         slugs.push(slug)
//     } return slugs
// }

// console.log(generateSlugs( articleTitles))

////////////////////////////////////////////////////////////////////

/* Задача 2

Подсчет голосов (или инвентаризация)
Представь, что ты проводишь опрос, и у тебя есть массив с ответами. Твоя задача — посчитать, сколько раз встречается каждый вариант ответа.

JavaScript

const votes = [
  'react',
  'vue',
  'angular',
  'react',
  'react',
  'svelte',
  'vue',
  'react',
  'angular',
]
Напиши функцию tallyVotes(arr), которая принимает такой массив arr и возвращает объект, где:

Ключ — это название фреймворка (например, 'react').

Значение — это сколько раз он встретился в массиве (например, 4).

Ожидаемый результат вызова твоей функции:

JavaScript


{
  react: 4,
  vue: 2,
  angular: 2,
  svelte: 1
}
*/

// const votes = [
//   'react',
//   'vue',
//   'angular',
//   'react',
//   'react',
//   'svelte',
//   'vue',
//   'react',
//   'angular',
// ]

// const tallyVotes = (arr) => {
//    const tallyVotesObj = {}
//    for( let vote of arr) {
//         if (!Object.hasOwn(tallyVotesObj, vote)) {
//             tallyVotesObj[vote] = 1
//         } else {
//             tallyVotesObj[vote] +=1
//         }
//     } return tallyVotesObj
// }

// console.log( tallyVotes(votes))

///////////////////////////////////////////////////////////////////////

/* Задача 3

Группировка данных с API
Представь, что бэкенд присылает тебе "плоский" массив с логами (записями о событиях) за день. Каждый лог — это объект с типом (type) и сообщением (message).

JavaScript

const apiLogs = [
  { type: 'error', message: 'User login failed' },
  { type: 'info', message: 'User viewed page' },
  { type: 'warning', message: 'API response slow' },
  { type: 'error', message: 'Payment failed' },
  { type: 'info', message: 'User logged out' },
  { type: 'error', message: 'Resource not found' },
]
Твоя задача на фронтенде — сгруппировать эти логи по типу, чтобы ты мог удобно их отобразить (например, "Ошибки", "Предупреждения", "Информация").

Напиши функцию groupLogsByType(logs), которая принимает этот "плоский" массив logs и возвращает новый объект, где:

Ключ — это type лога (например, 'error').

Значение — это массив, содержащий все объекты логов этого типа.

Ожидаемый результат вызова твоей функции:

JavaScript

/*
{
  error: [
    { type: 'error', message: 'User login failed' },
    { type: 'error', message: 'Payment failed' },
    { type: 'error', message: 'Resource not found' }
  ],
  info: [
    { type: 'info', message: 'User viewed page' },
    { type: 'info', message: 'User logged out' }
  ],
  warning: [
    { type: 'warning', message: 'API response slow' }
  ]
}
*/

// const apiLogs = [
//   { type: 'error', message: 'User login failed' },
//   { type: 'info', message: 'User viewed page' },
//   { type: 'warning', message: 'API response slow' },
//   { type: 'error', message: 'Payment failed' },
//   { type: 'info', message: 'User logged out' },
//   { type: 'error', message: 'Resource not found' },
// ]

// const groupLogsByType = (logs) => {
//     const result = {}
//     for (const log of logs) {
//         const logType = log.type
//         if (!Object.hasOwn(result, logType)) {
//             result[logType] = []
//         }
        
//             result[logType].push(log)
        
//     } return result
// }

// console.log(groupLogsByType(apiLogs))

//////////////////////////////////////////////////////////////////////////

/* Задача 5

Поиск пользователя по ID

Представь, что у тебя есть массив объектов. Каждый объект — это пользователь.

JavaScript

const users = [
  { id: 101, name: 'Alex', email: 'alex@email.com' },
  { id: 102, name: 'Jane', email: 'jane@email.com' },
  { id: 103, name: 'Chris', email: 'chris@email.com' },
  { id: 104, name: 'Eva', email: 'eva@email.com' },
]
Напиши функцию findUserById(usersArray, idToFind), которая принимает два аргумента:

Массив пользователей (usersArray).

ID пользователя, которого нужно найти (idToFind).

Правила работы функции:

Она должна перебрать массив usersArray.

Как только она находит объект, у которого id совпадает с idToFind, она должна немедленно вернуть этот объект.

Если функция перебрала весь массив, но так и не нашла пользователя с нужным ID, она должна вернуть null.

Примеры вызова:

JavaScript

findUserById(users, 103) 
// Ожидаемый результат: { id: 103, name: 'Chris', email: 'chris@email.com' }

findUserById(users, 999) 
// Ожидаемый результат: null
*/

const users = [
  { id: 101, name: 'Alex', email: 'alex@email.com' },
  { id: 102, name: 'Jane', email: 'jane@email.com' },
  { id: 103, name: 'Chris', email: 'chris@email.com' },
  { id: 104, name: 'Eva', email: 'eva@email.com' },
]

const findUserById = (usersArray, idToFind) => {
    for (const user of usersArray) {
        if (user.id === idToFind) {
        return user
        }

    }
    return null
}

console.log(findUserById(users, 104))






















