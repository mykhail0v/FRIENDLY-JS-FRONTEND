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

// --- ДАННЫЕ С "API" ---
// "Плоский" 🥞 список логов (событий)
// с твоего "сервера".
const logEntries = [
  { level: 'ERROR', msg: 'Failed to connect to DB', ts: 17001 },
  { level: 'INFO', msg: 'User 1 logged in', ts: 17002 },
  { level: 'WARN', msg: 'DB connection slow', ts: 17003 },
  { level: 'INFO', msg: 'User 2 viewed page', ts: 17004 },
  { level: 'ERROR', msg: 'Payment failed for user 2', ts: 17005 },
]

// --- ЗАДАЧА ---
// "Сверни" 🜜️ "плоский" 🥞 массив `logEntries`
// в **НОВЫЙ `Map`** 🗺️ (НЕ `Object` {}!).
//
// "Ключами" 🔑 в `Map` должны быть "уровни" 📈 (`level`).
// "Значениями" 📥 в `Map` должны быть **массивы** 📜 
// (содержащие *полные объекты* 📦 логов этого "уровня").
//
// ОЖИДАЕМЫЙ РЕЗУЛЬТАТ:
// Map(3) {
//   'ERROR' => [
//     { level: 'ERROR', msg: 'Failed to connect to DB', ts: 17001 },
//     { level: 'ERROR', msg: 'Payment failed for user 2', ts: 17005 }
//   ],
//   'INFO' => [
//     { level: 'INFO', msg: 'User 1 logged in', ts: 17002 },
//     { level: 'INFO', msg: 'User 2 viewed page', ts: 17004 }
//   ],
//   'WARN' => [
//     { level: 'WARN', msg: 'DB connection slow', ts: 17003 }
//   ]
// }

// Твой "чистый лист" 📄... "Без подсказок" 🥷!
const logsByLevel = logEntries.reduce((acc, logEntry) => {
    const level = logEntry.level
    if(!acc.has(level)) {
        acc.set(level, [])
    }
    acc.get(level).push(logEntry)
    return acc
}, new Map()) 
                            

// --- ВЫВОД В КОНСОЛЬ ---
console.log('Логи по Уровням:', logsByLevel)



















