// ЗАДАЧА 1

// // --- ДАННЫЕ С "API" ---
// // У нас есть массив постов блога,
// // у каждого - вложенный массив тегов 🏷️.
// const blogPosts = [
//   { 
//     id: 101, 
//     title: 'Всё о React', 
//     tags: ['react', 'js', 'frontend', 'ui'], 
//   },
//   { 
//     id: 102, 
//     title: 'Node.js для бэкенда', 
//     tags: ['node', 'js', 'backend'], 
//   },
//   { 
//     id: 103, 
//     title: 'Стилизация в React', 
//     tags: ['react', 'css', 'frontend', 'ui'], 
//   },
// ]

// // --- ЗАДАЧА ---
// // Нам нужно получить **один, "плоский" 🥞 массив**
// // (НЕ Set, а именно массив), который содержит
// // **ВСЕ УНИКАЛЬНЫЕ** теги со *всех* постов.
// //
// // P.S. Порядок тегов в итоговом массиве не важен.
// //
// // ОЖИДАЕМЫЙ РЕЗУЛЬТАТ:
// // [ 'react', 'js', 'frontend', 'ui', 'node', 'backend', 'css' ]
// // (или в другом порядке)

// const allTags = blogPosts
//                     .flatMap(({tags}) => tags)

// const allUniqueTagsSet = new Set(allTags)
// const allUniqueTags = [...allUniqueTagsSet]
                            
// console.log('Уникальные теги:', allUniqueTags)

/////////////////////////////////////////////////

// ЗАДАЧА 2

// // --- ДАННЫЕ С "API" ---
// // Это *объекты* 📦, которые описывают юзеров.
// // (Представь, что они лежат у тебя в React State)
// const userAlice = { id: 1, name: 'Alice' }
// const userBob = { id: 2, name: 'Bob' }
// const userCharlie = { id: 3, name: 'Charlie' }

// // --- ЗАДАЧА ---
// // Нам нужно "связать" ⛓️ *объект* 📦 юзера
// // с его *ролью* (строкой).
// //
// // 1. Создай НОВУЮ `Map` под названием `userRoles`.
// //
// // 2. "Положи" в неё данные:
// //    - Ключ: *объект* 📦 `userAlice` -> Значение: 'Admin'
// //    - Ключ: *объект* 📦 `userBob`   -> Значение: 'Moderator'
// //
// // 3. Используя `userRoles`, получи и выведи в консоль
// //    роль для `userBob`.
// //
// // P.S. Эта задача *нерешаема* 🤯 с помощью обычного
// // объекта `{}`, т.к. `Object` превращает
// // *любой* объект-ключ в строку `'[object Object]'` ☣️.
// // А `Map` 🗺️ - может!

// const userRoles = new Map ()
// userRoles.set(userAlice, 'Admin') 
// userRoles.set(userBob, 'Moderator') 
// userRoles.set(userCharlie, 'Cleaner') 
// const bobRole = userRoles.get(userBob)

// // --- ВЫВОД В КОНСОЛЬ ---
// console.log('Роль Боба:', bobRole) // ОЖИДАЕМЫЙ РЕЗУЛЬТАТ: 'Moderator'

/////////////////////////////////////////////////

// ЗАДАЧА 3

// // --- ДАННЫЕ (из прошлого урока) ---
// // (Мы их тут повторяем, чтобы файл был "самодостаточным" 📦)
// const userAlice = { id: 1, name: 'Alice' }
// const userBob = { id: 2, name: 'Bob' }
// const userCharlie = { id: 3, name: 'Charlie' }

// const userRoles = new Map()
// userRoles.set(userAlice, 'Admin') 
// userRoles.set(userBob, 'Moderator') 
// userRoles.set(userCharlie, 'User')

// // --- ЗАДАЧА ---
// // Используя **`userRoles.forEach()`**, 
// // выведи в консоль **имена** (name) юзеров 
// // и их **роли** (role) в формате:
// // 
// // "Имя: Роль"
// //
// // P.S. Помни про "перевернутый" 🤯 (value, key) 
// // порядок аргументов в .forEach()!
// //
// // ОЖИДАЕМЫЙ РЕЗУЛЬТАТ (в консоли):
// // Alice: Admin
// // Bob: Moderator
// // Charlie: User
// userRoles.forEach((value, {name}) => {
//     console.log(`${name}: ${value}`)
// })

/////////////////////////////////////////////////

// ЗАДАЧА 4

// // --- ДАННЫЕ С "API" ---
// // У нас есть Set 🛡️ с ID юзеров,
// // которые "в сети" (online).
// const onlineUserIds = new Set([10, 15, 20, 25, 30])

// // --- ЗАДАЧА ---
// // Нам нужно получить **НОВЫЙ Set** 🛡️ (НЕ массив!),
// // который содержит *только* "круглые" ID 
// // (т.е. те, что делятся на 10 без остатка).
// //
// // P.S. У `Set` *НЕТ* 🚫 метода `.filter()`!
// // (Это "ловушка" 🪤!)
// //
// // Тебе придется "распознать" 🧩, как:
// // 1. "Превратить" 🪄 Set -> Array
// // 2. "Отфильтровать" ☕ Array
// // 3. "Превратить" 🪄 Array -> Set
// //
// // ОЖИДАЕМЫЙ РЕЗУЛЬТАТ:
// // Set(2) { 20, 30 }

// const filteredIdsArr = [...onlineUserIds].filter((num) => num % 10 === 0)
// const filteredIds = new Set(filteredIdsArr)
// console.log('Отфильтрованный Set:', filteredIds)

/////////////////////////////////////////////////

// ЗАДАЧА 4

// // --- ДАННЫЕ С "API" ---
// // "Плоский" 🥞 список всех товаров.
// const allProducts = [
//   { id: 1, name: 'Ноутбук', category: 'Electronics' },
//   { id: 2, name: 'S.N.U.F.F.', category: 'Books' },
//   { id: 3, name: 'Мышь X-7', category: 'Electronics' },
//   { id: 4, name: 'KGBT+', category: 'Books' },
//   { id: 5, name: 'Наушники H-5', category: 'Electronics' },
// ]

// // --- ЗАДАЧА ---
// // "Сверни" 🗜️ "плоский" 🥞 массив `allProducts`
// // в **НОВЫЙ `Map`** 🗺️ (НЕ `Object` {}!).
// //
// // "Ключами" 🔑 в `Map` должны быть **категории** (строки 📜).
// // "Значениями" 📥 в `Map` должны быть **массивы** 📜 
// // (содержащие *полные объекты* 📦 товаров из этой категории).
// //
// // P.S. Тебе нужно будет "распознать" 🧩, как "проверить" 🕵️‍♂️,
// // есть ли "ключ" 🔑 (категория) уже в `Map`,
// // и (если нет 🚫) — "создать" 🪄 пустой массив `[]`
// // *перед* тем, как "пушить" 📤 в него товар!
// //
// // ОЖИДАЕМЫЙ РЕЗУЛЬТАТ:
// // Map(2) {
// //   'Electronics' => [
// //     { id: 1, name: 'Ноутбук', category: 'Electronics' },
// //     { id: 3, name: 'Мышь X-7', category: 'Electronics' },
// //     { id: 5, name: 'Наушники H-5', category: 'Electronics' }
// //   ],
// //   'Books' => [
// //     { id: 2, name: 'S.N.U.F.F.', category: 'Books' },
// //     { id: 4, name: 'KGBT+', category: 'Books' }
// //   ]
// // }

// const productsByCategory = allProducts.reduce((acc, product) => {
//     const category = product.category
//     if (!acc.has(category)) {
//         acc.set(category, [])
//     }

//     acc.get(category).push(product)
    
//     return acc

// }, new Map ())

// console.log('Сгруппировано в Map:', productsByCategory)

////////////////////////////////////////////////////////////////

// ЗАДАЧА 5

// // --- ДАННЫЕ С "API" ---
// // "Плоский" 🥞 список логов (событий)
// // с твоего "сервера".
// const logEntries = [
//   { level: 'ERROR', msg: 'Failed to connect to DB', ts: 17001 },
//   { level: 'INFO', msg: 'User 1 logged in', ts: 17002 },
//   { level: 'WARN', msg: 'DB connection slow', ts: 17003 },
//   { level: 'INFO', msg: 'User 2 viewed page', ts: 17004 },
//   { level: 'ERROR', msg: 'Payment failed for user 2', ts: 17005 },
// ]

// // --- ЗАДАЧА ---
// // "Сверни" 🜜️ "плоский" 🥞 массив `logEntries`
// // в **НОВЫЙ `Map`** 🗺️ (НЕ `Object` {}!).
// //
// // "Ключами" 🔑 в `Map` должны быть "уровни" 📈 (`level`).
// // "Значениями" 📥 в `Map` должны быть **массивы** 📜 
// // (содержащие *полные объекты* 📦 логов этого "уровня").
// //
// // ОЖИДАЕМЫЙ РЕЗУЛЬТАТ:
// // Map(3) {
// //   'ERROR' => [
// //     { level: 'ERROR', msg: 'Failed to connect to DB', ts: 17001 },
// //     { level: 'ERROR', msg: 'Payment failed for user 2', ts: 17005 }
// //   ],
// //   'INFO' => [
// //     { level: 'INFO', msg: 'User 1 logged in', ts: 17002 },
// //     { level: 'INFO', msg: 'User 2 viewed page', ts: 17004 }
// //   ],
// //   'WARN' => [
// //     { level: 'WARN', msg: 'DB connection slow', ts: 17003 }
// //   ]
// // }

// // Твой "чистый лист" 📄... "Без подсказок" 🥷!
// const logsByLevel = logEntries.reduce((acc, logEntry) => {
//     const level = logEntry.level
//     if(!acc.has(level)) {
//         acc.set(level, [])
//     }
//     acc.get(level).push(logEntry)
//     return acc
// }, new Map()) 
                            

// // --- ВЫВОД В КОНСОЛЬ ---
// console.log('Логи по Уровням:', logsByLevel)

////////////////////////////////////////////////////////////////

// ЗАДАЧА 6

/*
Аналитика корзины
Представь, что ты работаешь над фичей для e-commerce сайта. У тебя есть массив объектов, представляющий корзину пользователя. Каждый объект — это товар.

JavaScript

const cart = [
  { id: 1, name: 'iPhone 15', category: 'Electronics', price: 999, quantity: 1, },
  { id: 2, name: 'Running Shoes', category: 'Sport', price: 120, quantity: 2, },
  { id: 3, name: 'AirPods Pro', category: 'Electronics', price: 249, quantity: 1, },
  { id: 4, name: 'Coffee Maker', category: 'Home', price: 80, quantity: 1, },
  { id: 5, name: 'Samsung TV', category: 'Electronics', price: 1499, quantity: 0, }, // Нет в наличии
]
Твоя задача: Напиши функцию analyzeCart(cart), которая должна вернуть объект со следующей информацией:

totalPrice: Общая стоимость всех товаров в корзине, которые есть в наличии (т.е. quantity > 0). Учитывай и цену, и количество (price * quantity).

electronicsCount: Количество уникальных наименований (name) товаров из категории 'Electronics', которые есть в наличии.
*/

// const cart = [
//   { id: 1, name: 'iPhone 15', category: 'Electronics', price: 999, quantity: 1, },
//   { id: 2, name: 'Running Shoes', category: 'Sport', price: 120, quantity: 2, },
//   { id: 3, name: 'AirPods Pro', category: 'Electronics', price: 249, quantity: 1, },
//   { id: 4, name: 'Coffee Maker', category: 'Home', price: 80, quantity: 1, },
//   { id: 5, name: 'Samsung TV', category: 'Electronics', price: 1499, quantity: 0, }, // Нет в наличии
// ]

// // нуб подход:

// const analyzeCart = (cart) => {
//     const initialReport = {
//     totalPrice: 0,
//     electronicsCount: 0,
//     }
//     const electronicsProducts = cart
//                                 .filter(({category, quantity}) => category === 'Electronics' && quantity > 0)
//                                 .map(({name})=>name)
//     const uniqueElectronicsNames = new Set(electronicsProducts)
//     const result = cart
//                     .filter(({quantity}) => quantity > 0)
//                     .reduce((report, product) => {
//                         return {
//                             ...report,
//                             totalPrice: report.totalPrice + product.quantity * product.price,
//                             electronicsCount: uniqueElectronicsNames.size

//                         }
//                     }, initialReport)
//     return result        
// }

// console.log(analyzeCart(cart))

// // pro подход:

// const analyzeCartV2 = (cart) => {
//     const initialState = {
//         totalPrice: 0,
//         electronicsSet: new Set(),
//     }

// const report = cart.reduce((acc, product) => {
//     if(product.quantity > 0) {
//         acc.totalPrice += product.price * product.quantity
//         if (product.category === 'Electronics') {
//             acc.electronicsSet.add(product.name)
//         }
//     }
//     return acc
// }, initialState)
//     return {
//         totalPrice: report.totalPrice,
//         electronicsCount: report.electronicsSet.size,
//     }
// }

// console.log(analyzeCartV2(cart))

////////////////////////////////////////////////////////////////

// ЗАДАЧА 7

/*
Ты работаешь в админ-панели. У тебя есть массив объектов пользователей, пришедший с сервера.

JavaScript

const users = [
  { id: 101, name: 'Alice', role: 'admin', department: 'HR', age: 28, isActive: true, },
  { id: 102, name: 'Bob', role: 'user', department: 'Engineering', age: 35, isActive: true, },
  { id: 103, name: 'Charlie', role: 'user', department: 'Engineering', age: 42, isActive: false, },
  { id: 104, name: 'David', role: 'admin', department: 'Marketing', age: 30, isActive: true, },
  { id: 105, name: 'Eve', role: 'user', department: 'HR', age: 25, isActive: true, },
  { id: 106, name: 'Frank', role: 'admin', department: 'HR', age: 45, isActive: true, }, // Админ в том же отделе HR
]
Твоя задача: Напиши функцию analyzeUsers(users), которая должна вернуть объект со следующей информацией:

averageAgeActiveUsers: Средний возраст только активных пользователей (isActive: true).

uniqueAdminDepartments: Количество уникальных отделов (department), в которых есть хотя бы один admin
*/

// const users = [
//   { id: 101, name: 'Alice', role: 'admin', department: 'HR', age: 28, isActive: true, },
//   { id: 102, name: 'Bob', role: 'user', department: 'Engineering', age: 35, isActive: true, },
//   { id: 103, name: 'Charlie', role: 'user', department: 'Engineering', age: 42, isActive: false, },
//   { id: 104, name: 'David', role: 'admin', department: 'Marketing', age: 30, isActive: true, },
//   { id: 105, name: 'Eve', role: 'user', department: 'HR', age: 25, isActive: true, },
//   { id: 106, name: 'Frank', role: 'admin', department: 'HR', age: 45, isActive: true, }, // Админ в том же отделе HR
// ]

// // с ошибкой:
// // const analyzeAgeActiveUsers = (users) => {
// //     const initialState = {
// //         sumAgeActiveUsers: 0,
// //         uniqueAdminDepartments: new Set(),
// //     }
// //     const usersIsActive = users.filter(({isActive}) => isActive)
// //     const processedState = usersIsActive                        
// //                         .reduce((acc, user) => {
// //                                 acc.sumAgeActiveUsers += user.age
// //                                 if (user.role === 'admin') {
// //                                     acc.uniqueAdminDepartments.add(user.department)
// //                                 }
// //                                 return acc                                  
                            
// //                         }, initialState)
// //     return {
// //     averageAgeActiveUsers: processedState.sumAgeActiveUsers / usersIsActive.length,
// //     uniqueAdminDepartments: processedState.uniqueAdminDepartments.size,    
// //     }                   
// // }
// // console.log(analyzeAgeActiveUsers(users))

// const analyzeAgeActiveUsers = (users) => {
//         const initialState = {
//             isActiveLenght: 0,
//             sumAgeActiveUsers: 0,
//             uniqueAdminDepartments: new Set(),
//         }
//         const processedState = users.reduce((acc, user) => {
//             if (user.isActive) {
//                 acc.isActiveLenght += 1,
//                 acc.sumAgeActiveUsers += user.age
//             }
//             if(user.role === 'admin') {
//                 acc.uniqueAdminDepartments.add(user.department)
//             } return acc
//         }, initialState)
//     return {
//         averageAgeActiveUsers: processedState.sumAgeActiveUsers / processedState.isActiveLenght,
//         uniqueAdminDepartments: processedState.uniqueAdminDepartments.size,
//     }
// }
// console.log(analyzeAgeActiveUsers(users))

/////////////////////////////////////////////////////////////////

// ЗАДАЧА 8

/*
    Группировка по категориям
Представь, что у тебя есть "плоский" список товаров. Тебе нужно отсортировать их по "полкам" (категориям), чтобы пользователю было удобно их просматривать.

Твоя задача: Напиши функцию groupProductsByCategory(products), которая принимает массив объектов products и возвращает Map, где:

Ключ: Название категории (строка).

Значение: Массив всех товаров из этой категории.

Входные данные:

JavaScript

const products = [
  { id: 1, name: 'Laptop', category: 'Electronics', },
  { id: 2, name: 'T-Shirt', category: 'Apparel', },
  { id: 3, name: 'Headphones', category: 'Electronics', },
  { id: 4, name: 'Sneakers', category: 'Apparel', },
  { id: 5, name: 'Coffee Mug', category: 'Home', },
]
*/

// const products = [
//   { id: 1, name: 'Laptop', category: 'Electronics', },
//   { id: 2, name: 'T-Shirt', category: 'Apparel', },
//   { id: 3, name: 'Headphones', category: 'Electronics', },
//   { id: 4, name: 'Sneakers', category: 'Apparel', },
//   { id: 5, name: 'Coffee Mug', category: 'Home', },
// ]

// const groupProductsByCategory = (products) => {
//     const categoryMap = new Map()
//     products.forEach((product) => {
//         const category = product.category
//         if (categoryMap.has(category)) {
//             const currentProducts = categoryMap.get(category)
//             currentProducts.push(product)
//         } else {
//             categoryMap.set(category, [product])
//         }
//     })
//     return categoryMap
// }

// console.log(groupProductsByCategory(products))

/////////////////////////////////////////////////////////////////

// ЗАДАЧА 9

/*
Группировка постов (Закрепление)
Представь, что ты делаешь секцию "Посты автора" для блога. У тебя есть "плоский" массив постов, пришедший с сервера.

JavaScript

const posts = [
  { id: 'p1', title: 'JavaScript Tips', author: 'Alice', },
  { id: 'p2', title: 'CSS Magic', author: 'Bob', },
  { id: 'p3', title: 'React Hooks', author: 'Alice', },
  { id: 'p4', title: 'Node.js Performance', author: 'Charlie', },
  { id: 'p5', title: 'Advanced CSS', author: 'Bob', },
]
Твоя задача: Напиши функцию groupPostsByAuthor(posts), которая возвращает Map, где:

Ключ: Имя автора (строка).

Значение: Массив названий постов (массив строк), которые написал этот автор.
*/

// const posts = [
//   { id: 'p1', title: 'JavaScript Tips', author: 'Alice', },
//   { id: 'p2', title: 'CSS Magic', author: 'Bob', },
//   { id: 'p3', title: 'React Hooks', author: 'Alice', },
//   { id: 'p4', title: 'Node.js Performance', author: 'Charlie', },
//   { id: 'p5', title: 'Advanced CSS', author: 'Bob', },
// ]

// const groupPostsByAuthor = (posts) => {
//     const authorMap = new Map()
//     posts.forEach((post) => {
//         const author = post.author
//         if(authorMap.has(author)) {
//             const currentPost = authorMap.get(author)
//             currentPost.push(post.title)
//         } else {
//             authorMap.set(author, [post.title])
//         }

//     })
// return authorMap
// }

// console.log(groupPostsByAuthor(posts))

/////////////////////////////////////////////////////////////////

// ЗАДАЧА 10

/*
    Финансовая сводка (Закрепление)
Представь, что ты делаешь PWA (Progressive Web App) для учета личных финансов. У тебя есть массив транзакций.

JavaScript

const transactions = [
  { id: 1, type: 'income', amount: 1500, description: 'Salary', },
  { id: 2, type: 'expense', amount: 100, description: 'Coffee', },
  { id: 3, type: 'expense', amount: 50, description: 'Bus ticket', },
  { id: 4, type: 'income', amount: 200, description: 'Freelance', },
  { id: 5, type: 'expense', amount: 1200, description: 'Rent', },
  { id: 6, type: 'investment', amount: 300, description: 'Stocks', },
  { id: 7, type: 'expense', amount: 40, description: 'Lunch', },
]
Твоя задача: Напиши функцию getTransactionReport(transactions), которая возвращает Map, где:

Ключ: Тип транзакции (строка: 'income', 'expense', 'investment').

Значение: Общая сумма (число) всех транзакций этого типа.
*/

// const transactions = [
//   { id: 1, type: 'income', amount: 1500, description: 'Salary', },
//   { id: 2, type: 'expense', amount: 100, description: 'Coffee', },
//   { id: 3, type: 'expense', amount: 50, description: 'Bus ticket', },
//   { id: 4, type: 'income', amount: 200, description: 'Freelance', },
//   { id: 5, type: 'expense', amount: 1200, description: 'Rent', },
//   { id: 6, type: 'investment', amount: 300, description: 'Stocks', },
//   { id: 7, type: 'expense', amount: 40, description: 'Lunch', },
// ]

// const getTransactionReport = (transactions) => {
//     const typeMap = new Map()
//     transactions.forEach((transaction) => {
//         const type = transaction.type
//         if(typeMap.has(type)) {
//             let currentType = typeMap.get(type)
//             typeMap.set(type, currentType + transaction.amount)
//         } else {
//             typeMap.set(type, transaction.amount)
//         }
//     })
//     return typeMap
// }
// console.log(getTransactionReport(transactions))

/////////////////////////////////////////////////////////////////

// ЗАДАЧА 11

/*
Анализ зарплат

Давай сразу к практике. У нас есть объект salaries (зарплаты) в IT-отделе.

JavaScript

const salaries = {
  john: 500,
  pete: 750,
  mary: 600,
  steve: 1200,
  anna: 2000,
}
Твоя задача: Напиши функцию analyzeSalaries(salaries), которая должна вернуть объект с двумя полями:

total: Общая сумма всех зарплат.

topEarner: Имя (ключ) сотрудника с самой высокой зарплатой.

Если объект salaries пустой, функция должна вернуть { total: 0, topEarner: null }.
*/

//  с плохой оптимизацией:
// const salaries = {
//   john: 500,
//   pete: 750,
//   mary: 600,
//   steve: 1200,
//   anna: 2000,
// }

// const analyzeSalaries = (salaries) => {
//     const entries = Object.entries(salaries)
//         if (entries.length === 0) {
//         return {
//             total: 0,
//             topEarner: null,
//         }}
//     const total = Object.values(salaries).reduce((acc, current) => acc + current, 0)
//     const topEarner = entries.slice().sort((a, b) => b[1] - a[1]).slice(0, 1).flat()
    
//     return {
//         total: total,
//         topEarner: topEarner[0],
//     }
// }

// console.log(analyzeSalaries(salaries))

// норм:

// const salaries = {
//   john: 500,
//   pete: 750,
//   mary: 600,
//   steve: 1200,
//   anna: 2000,
// }

// const analyzeSalaries = (salaries) => {
//     const entries = Object.entries(salaries)
//     if (entries.length === 0) {
//         return {
//             total: 0,
//             topEarner: null,
//         }
//     }
//     const total = Object.values(salaries).reduce((sum, value) => sum + value, 0)
//     const winnerEntry = entries.reduce((acc, current) => {
//         if(current[1] > acc[1]) {
//             return current
//         } else {
//             return acc
//         }
//     })

//     return {
//         total: total,
//         topEarner: winnerEntry[0],
//     }
// }

// console.log(analyzeSalaries(salaries))
// console.log(analyzeSalaries({}))

/////////////////////////////////////////////////////////////////

// ЗАДАЧА 11

/*
Фильтрация объекта (Закрепление)
У тебя есть объект с профилем пользователя, где намешаны разные типы данных.

JavaScript

const userProfile = {
  id: 101,
  username: 'johndoe',
  theme: 'dark',
  showAds: false,
  lastLogin: 1730802154, // timestamp
  email: 'john@example.com',
  level: 15,
}
Твоя задача: Напиши функцию filterProfile(profile), которая возвращает новый объект, содержащий только те пары ключ-значение из profile, у которых значение (value) не является числом (number).
*/

// // норм подход:

// const userProfile = {
//   id: 101,
//   username: 'johndoe',
//   theme: 'dark',
//   showAds: false,
//   lastLogin: 1730802154, // timestamp
//   email: 'john@example.com',
//   level: 15,
// }

// // const filterProfile = (profile) => {
// //     const profileEntries = Object.entries(profile)
// //     const filterProfileEntries = []
// //     for (const entry of profileEntries) {
// //         if (typeof entry[1] !== 'number') {
// //             filterProfileEntries.push(entry)
// //         }
// //     }
// //     const result = Object.fromEntries(filterProfileEntries)
// //     return result
// // }

// // console.log(filterProfile(userProfile))

// // про подход: 

// const filterProfile = (profile) => Object.fromEntries(Object.entries(profile).filter(([_, value]) => typeof value !== 'number'))

// console.log(filterProfile(userProfile))

//  // P.S. Знак '_' — это соглашение в JS, 
//  // "Я знаю, что здесь есть 'key', но он мне не нужен"

/////////////////////////////////////////////////////////////////

// ЗАДАЧА 12

/*
"Царь горы" (Закрепление)
Представь, что ты работаешь над фронтендом. У тебя есть массив объектов, описывающих различные UI-элементы (кнопки, баннеры, инпуты), которые пользователь добавил на страницу.

JavaScript

const uiElements = [
  { id: 'btn-submit', type: 'button', width: 120, height: 30, }, // area: 3600
  { id: 'banner-main', type: 'image', width: 728, height: 90, }, // area: 65520
  { id: 'input-name', type: 'input', width: 250, height: 40, }, // area: 10000
  { id: 'sidebar-ad', type: 'image', width: 300, height: 250, }, // area: 75000
  { id: 'footer-logo', type: 'image', width: 100, height: 100, }, // area: 10000
]
Твоя задача: Напиши функцию findLargestElement(elements), которая должна найти и вернуть id того элемента, у которого самая большая ПЛОЩАДЬ (т.е. width * height).
*/

// нуб-подход с плохой оптимизацией:
const uiElements = [
  { id: 'btn-submit', type: 'button', width: 120, height: 30, }, // area: 3600
  { id: 'banner-main', type: 'image', width: 728, height: 90, }, // area: 65520
  { id: 'input-name', type: 'input', width: 250, height: 40, }, // area: 10000
  { id: 'sidebar-ad', type: 'image', width: 300, height: 250, }, // area: 75000
  { id: 'footer-logo', type: 'image', width: 100, height: 100, }, // area: 10000
]

// const findLargestElement = (elements) => {
//     const LargestElement = elements
//                             .map(({id, width, height}) => [id, width * height])
//                             .reduce((acc, current) => {
//                                 if (current[1] > acc[1]) {
//                                     return current
//                                 } else {
//                                     return acc
//                                 }
//                             })   
//     return LargestElement[0]
// }
// console.log(findLargestElement(uiElements))

// про подход:

const findLargestElement = (elements) => {
    if(elements.lenght === 0) {
        return null
    }
    const winnerObject = elements.reduce((acc, current) => {
        const accArea = acc.width * acc.height
        const currentArea = current.width * current.height
        if (currentArea > accArea) {
            return current
        } else {
            return acc
        }
    })
    return winnerObject.id
}

console.log(findLargestElement(uiElements))

/////////////////////////////////////////////////////////////////

// ЗАДАЧА 13

// Big O - нотация

/*
Задачка 1: Поиск сокровища
JavaScript

const findTreasure = (arr) => {
  const treasure = "💎"
  let steps = 0

  for (let i = 0; i < arr.length; i++) {
    steps++ // Считаем шаг
    if (arr[i] === treasure) {
      console.log(`Нашли за ${steps} шагов!`)
      return true
    }
  }

  console.log(`Не нашли, ${steps} шагов впустую`)
  return false
}

// const items = ["📕", "🔑", "💎", "👑"]
// findTreasure(items) 
Вопрос: Какова сложность findTreasure в худшем случае?

🏋️‍♂️ Задачка 2: Таинственная коробка
JavaScript

const mysteriousBox = (arr) => {
  // Нас волнует только первая и последняя вещь
  const firstItem = arr[0]
  const lastItem = arr[arr.length - 1]

  console.log(`Первая: ${firstItem}, Последняя: ${lastItem}`)
}
Вопрос: Какова сложность mysteriousBox?

🏋️‍♂️ Задачка 3: Построение всех пар
JavaScript

const buildAllPairs = (arr) => {
  const pairs = []

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      // (Пропускаем пару с самим собой, 
      //  но это не меняет общей картины)
      if (i !== j) { 
        pairs.push([arr[i], arr[j]])
      }
    }
  }

  return pairs
}
Вопрос: Какова сложность buildAllPairs?
*/

/*
    ОТВЕТЫ:
1. O(n) - потому что надо перебрать весь массив

2.O(1) - потому что мы берём элементы по конкретному индексу

3. O(n²) - потому что надо перебрать массив на каждый перебираемый элемент массива
*/

/////////////////////////////////////////////////////////////////

// ЗАДАЧА 14

/*
    О - нотация 
    Хитрый механизм
JavaScript

const trickyMechanism = (arr) => {
  const n = arr.length
  let total = 0

  // --- Блок 1: Половина ---
  // Проходим ровно по половине массива
  for (let i = 0; i < n / 2; i++) {
    total += arr[i]
  }

  // --- Блок 2: Деление ---
  // Цикл, который каждый раз делит n пополам,
  // пока не дойдет до 1
  let j = n
  while (j > 1) {
    j = Math.floor(j / 2)
    total += j
  }

  // --- Блок 3: Константа ---
  // Цикл, который всегда делает 100 шагов
  for (let k = 0; k < 100; k++) {
    total += k
  }

  return total
}
Вопрос: Какова общая сложность trickyMechanism?
*/

/*
Ответ:

O(n) - потому что в первом переборе мы проходим n/2 но т.к. отбрасываем константы - "округляем" до n, во втором и третьем переборах сложности (log n) и (100) и они меньше чем n, потому мы их отбрасываем тоже как константы и смотрим сложность по самому большому значению - n, получается O(n)

Блок 1: O(n/2) мы упрощаем до O(n) (отбрасываем константу 1/2).

Блок 2: Это O(log n).

Блок 3: O(100) мы упрощаем до O(1) (это просто константа).

И главное правило: O(n) + O(log n) + O(1) = O(n).

Мы всегда берем самый "тяжелый" (доминирующий) член, а всеми остальными, которые растут медленнее, пренебрегаем.
*/




























