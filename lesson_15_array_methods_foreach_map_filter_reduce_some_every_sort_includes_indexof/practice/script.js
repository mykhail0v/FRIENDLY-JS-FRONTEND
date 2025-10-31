// ЗАДАЧА 1

// --- ДАННЫЕ С "API" ---
// (Это наш 'сырой' ответ от сервера)
// const apiResponse = [
//   { id: 1, name: 'Ноутбук', category: 'Electronics', price: 1200, inStock: true, },
//   { id: 2, name: 'Футболка', category: 'Apparel', price: 25, inStock: true, },
//   { id: 3, name: 'Смартфон', category: 'Electronics', price: 800, inStock: false, }, // Нет в наличии
//   { id: 4, name: 'Наушники', category: 'Electronics', price: 150, inStock: true, },
//   { id: 5, name: 'Книга', category: 'Books', price: 30, inStock: true, },
//   { id: 6, name: 'Клавиатура', category: 'Electronics', price: 100, inStock: true, },
//   { id: 7, name: 'Мышь', category: 'Electronics', price: 50, inStock: true, },
// ]

// // --- ТВОЯ ЗАДАЧА ---
// // Нам нужно рассчитать общую стоимость акционных товаров для виджета "Итог".
// // Условия акции:
// // 1. Категория товара "Electronics".
// // 2. Товар должен быть в наличии (inStock: true).
// // 3. На все акционные товары действует скидка 10% (умножить цену на 0.9).

// // Попробуй решить это ОДНОЙ цепочкой (chaining) методов.
// // Тебе понадобятся .filter(), .map() и .reduce()

// const finalPrice = apiResponse
//                     .filter((apiResponse) => apiResponse.category === 'Electronics' && apiResponse.inStock)
//                     .map(({price}) => price * 0.9)
//                     .reduce((sum, price) => price + sum, 0)


// console.log(`Общая стоимость акционных товаров: ${finalPrice}`)

//////////////////////////////////////////////////////////////

// ЗАДАЧА 2

// --- ДАННЫЕ С "API" ---
// const apiResponse = [
//   { id: 1, name: 'Ноутбук', category: 'Electronics', price: 1200, inStock: true, },
//   { id: 2, name: 'Футболка', category: 'Apparel', price: 25, inStock: true, },
//   { id: 3, name: 'Смартфон', category: 'Electronics', price: 800, inStock: false, },
//   { id: 4, name: 'Наушники', category: 'Electronics', price: 150, inStock: true, },
//   { id: 5, name: 'Книга', category: 'Books', price: 30, inStock: true, },
//   { id: 6, name: 'Клавиатура', category: 'Electronics', price: 100, inStock: true, },
//   { id: 7, name: 'Мышь', category: 'Electronics', price: 50, inStock: true, },
// ]

// --- ТВОЯ ЗАДАЧА ---
// "Нормализовать" массив `apiResponse` в объект.
// Ключами объекта должны стать `id` товаров,
// а значениями — сами объекты товаров.

// Используй .reduce()
// Не забудь, что начальное значение для reduce теперь будет {} (пустой объект)

// const productsMap = apiResponse.reduce((acc, item) => {
//     const key = item.id
//     acc[key] = {...item} 
//   return acc
// }, {})
// console.log(productsMap)

////////////////////////////////////////////////////////////////

// ЗАДАЧА 3

// --- ДАННЫЕ С "API" ---
// const apiResponse = [
//   { id: 1, name: 'Ноутбук', category: 'Electronics', price: 1200, inStock: true, },
//   { id: 2, name: 'Футболка', category: 'Apparel', price: 25, inStock: true, },
//   { id: 3, name: 'Смартфон', category: 'Electronics', price: 800, inStock: false, },
//   { id: 4, name: 'Наушники', category: 'Electronics', price: 150, inStock: true, },
//   { id: 5, name: 'Книга', category: 'Books', price: 30, inStock: true, },
//   { id: 6, name: 'Клавиатура', category: 'Electronics', price: 100, inStock: true, },
//   { id: 7, name: 'Мышь', category: 'Electronics', price: 50, inStock: true, },
// ]

// // --- ТВОЯ ЗАДАЧА ---
// // Собрать массив ИМЕН для виджета "Топ-3 самых дорогих товара".
// //
// // Условия:
// // 1. Категория "Electronics".
// // 2. Есть в наличии (inStock: true).
// // 3. Отсортировать по ЦЕНЕ (от большей к меньшей).
// // 4. Взять только первые 3 товара из отсортированного списка.
// // 5. Получить из них массив только с ИМЕНАМИ.
// //
// // Порядок методов будет иметь решающее значение!

// const top3ProductNames = apiResponse
//   .filter((item) => item.category === 'Electronics' && item.inStock)
//   .sort((a, b) => b.price - a.price)
//   .slice(0, 3)
//   .map((product) => product.name)

// console.log(top3ProductNames)

////////////////////////////////////////////////////////////////

// ЗАДАЧА 4

// --- ДАННЫЕ С "API" ---
// const apiResponse = [
//   { id: 1, name: 'Ноутбук', category: 'Electronics', price: 1200, inStock: true, },
//   { id: 2, name: 'Футболка', category: 'Apparel', price: 25, inStock: true, },
//   { id: 3, name: 'Смартфон', category: 'Electronics', price: 800, inStock: false, }, // не в наличии
//   { id: 4, name: 'Наушники', category: 'Electronics', price: 150, inStock: true, },
//   { id: 5, name: 'Книга', category: 'Books', price: 30, inStock: true, },
//   { id: 6, name: 'Клавиатура', category: 'Electronics', price: 100, inStock: true, },
//   { id: 7, name: 'Мышь', category: 'Electronics', price: 50, inStock: true, },
//   { id: 8, name: 'Джинсы', category: 'Apparel', price: 70, inStock: true, },
//   { id: 9, name: 'Комикс', category: 'Books', price: 15, inStock: false, }, // не в наличии
// ]

// --- ТВОЯ ЗАДАЧА ---
// Рассчитать ОБЩУЮ СУММУ всех товаров, которые
// есть В НАЛИЧИИ, сгруппированную ПО КАТЕГОРИЯМ.
//
// Это очень частая задача для всяких "дашбордов" (админок),
// чтобы показать, товаров какой категории у нас на складе больше всего.

// Используй .reduce().
//
// Совет Сеньора: 💡
// 1. Аккумулятор (acc) будет объектом: {}
// 2. Тебе нужно проверять `item.inStock` (можно сделать `if`... или... ?)
// 3. Тебе нужно проверять, есть ли `item.category` уже в `acc`.
//    (Подсказка: `if (acc[item.category]) { ... } else { ... }`)

// const categoryValue = apiResponse.reduce((acc, item) => {
//     const key = item.category
//     if (item.inStock) {
//         if(!acc[key]) {
//             acc[key] = item.price
         
//         } else {
//             acc[key] = acc[key] + item.price
//         }
//         // --- Сокращенный вариант (часто встречается): ---
//         // "Возьми acc[key]. Если его нет (on undefined), возьми 0. 
//         //  И к этому результату прибавь item.price"
//         //acc[key] = (acc[key] || 0) + item.price
//     }
//   return acc
// }, {})


// console.log(categoryValue)

/////////////////////////////////////////////////////////////////////

// ЗАДАЧА 5

// --- ДАННЫЕ С "API" ---
// const users = [
//   { id: 101, name: 'Alice', status: 'active', age: 25, },
//   { id: 102, name: 'Bob', status: 'inactive', age: 30, },
//   { id: 103, name: 'Charlie', status: 'active', age: 66, },
//   { id: 104, name: 'David', status: 'pending', age: 42, },
//   { id: 105, name: 'Eve', status: 'active', age: 19, },
// ]

// // --- ТВОЯ ЗАДАЧА ---
// // Получить массив ИМЕН (string[])
// // только тех пользователей, у которых status === 'active'.
// //
// // Используй связку .filter().map()

// const activeUserNames = users
//                             .filter(({status}) => status === 'active')
//                             .map(({name}) => name)

// console.log(activeUserNames)


///////////////////////////////////////////////////////////////

// ЗАДАЧА 6

// Используя тот же массив users, как бы ты проверил, есть ли в списке хотя бы один пользователь младше 20 лет (т.е. age < 20)?

// const hasUnder20YearsOld = users.some(({age}) => age < 20)

// console.log(hasUnder20YearsOld)

////////////////////////////////////////////////////////////////

// ЗАДАЧА 7

// Используя тот же массив users, как бы ты посчитал общий возраст (просто сумму) всех active пользователей?

// const sumAges = users
//                     .filter(({status}) => status === 'active')
//                     .reduce((sum, {age}) => sum + age, 0)

// console.log(sumAges)

////////////////////////////////////////////////////////////////

// ЗАДАЧА 8

// Получить НОВЫЙ массив пользователей, отсортированный по возрасту (age)
// от младшего к старшему (по возрастанию).
//
// Подсказка 1: .sort() МУТИРУЕТ (изменяет) исходный массив.
// Чтобы получить новый, сначала скопируй 'users' (например, c помощью .slice()).
//
// Подсказка 2: Для сортировки чисел не забудь про (a, b) => a - b

// const sortedUsersByAge = users
//                             .slice()
//                             .sort((a, b) => a.age - b.age)

// console.log('Сортировка по возрасту (по возрастанию):', sortedUsersByAge)

////////////////////////////////////////////////////////////////

// ЗАДАЧА 9

// Проверить, что **ВСЕ** (every) 'active' пользователи
// являются совершеннолетними (age >= 18).
//
// Ожидаемый результат: true
// (Alice, 25; Charlie, 19; Eve, 22 - все 'active' и все >= 18)

// Подсказка: .every()

// const allActiveUsersAreAdults = users
//                                     .filter(({status}) => status === 'active')
//                                     .every(({age}) => age >= 18)


// console.log('Все активные пользователи >= 18?', allActiveUsersAreAdults)

///////////////////////////////////////////////////////////////////////

// ЗАДАЧА 10

// --- ДАННЫЕ С "API" ---
// const orders = [
//   {
//     orderId: 101,
//     isPremium: true,
//     items: [
//       { id: 1, name: 'Лэптоп', price: 1200 },
//       { id: 2, name: 'Мышь', price: 50 },
//     ],
//   },
//   {
//     orderId: 102,
//     isPremium: false,
//     items: [
//       { id: 3, name: 'Футболка', price: 20 },
//     ],
//   },
//   {
//     orderId: 103,
//     isPremium: true,
//     items: [
//       { id: 4, name: 'Наушники', price: 150 },
//       { id: 5, name: 'Клавиатура', price: 100 },
//     ],
//   },
//   {
//     orderId: 104,
//     isPremium: false,
//     items: [
//       { id: 6, name: 'Кружка', price: 15 },
//     ],
//   },
// ]

// // --- ЗАДАЧА (Уровень "Сложно" 🏋️) ---
// //
// // У нас есть массив заказов (orders).
// // Каждый заказ - это объект с флагом 'isPremium' и *массивом*
// // купленных товаров 'items'.
// //
// // --- ТВОЯ ЗАДАЧA ---
// // Получить **один плоский массив** (string[])
// // всех **наименований** товаров ('name'),
// // которые были куплены **только 'premium'** клиентами.
// //
// // --- ОЖИДАЕМЫЙ РЕЗУЛЬТАТ ---
// // [
// //   'Лэптоп',
// //   'Мышь',
// //   'Наушники',
// //   'Клавиатура'
// // ]

// // const premiumItemNames = orders
// //                             .filter(({isPremium}) => isPremium)
// //                             .flatMap((order) => {
// //                                 return order.items.map((item) => {
// //                                     return item.name
// //                                 })
// //                             })
// //   // Твой код здесь 🚀



// // Тот же самый код, но без фигурных скобок и слова 'return'

// const premiumItemNamesShort = orders
//   .filter(({ isPremium }) => isPremium)
//   .flatMap((order) =>
//     // 1. Внешний (неявный) return для flatMap
//     order.items.map((item) =>
//       // 2. Внутренний (неявный) return для map
//       item.name
//     )
//   )

// console.log(premiumItemNamesShort) // Тот же результат!

///////////////////////////////////////////////////////////////////////

// ЗАДАЧА 11

// --- ДАННЫЕ С "API" ---
// const blogPosts = [
//   {
//     id: 1,
//     title: 'Всё о React Hooks',
//     tags: ['JS', 'React', 'Frontend'],
//   },
//   {
//     id: 2,
//     title: 'CSS-in-JS: За и Против',
//     tags: ['CSS', 'JS', 'Styled-Components'],
//   },
//   {
//     id: 3,
//     title: 'Оптимизация Webpack',
//     tags: ['JS', 'Webpack', 'Performance'],
//   },
// ]

// // ---(map + flat) ---
// // Используя .map(), получи массив, в котором лежат *только* массивы тегов.
// // Ожидаемый результат: [ ['JS', 'React', 'Frontend'], ['CSS', 'JS', ...], ... ]
// const allTagsNested = blogPosts.map(({tags}) => tags)
//   // Твой код для .map() здесь
// console.log('1. Вложенные теги:', allTagsNested)

// // Теперь "расплющи" этот массив 'allTagsNested' с помощью .flat()
// // Ожидаемый результат: ['JS', 'React', 'Frontend', 'CSS', 'JS', ...]
// const allTagsFlat = allTagsNested.flat()
// console.log('2. Плоский список тегов:', allTagsFlat)

// ///////////////////

// // --- (flatMap) ---
// // .flatMap() - это .map() + .flat() в одном флаконе.
// // Перепиши ЗАДАЧУ 1, используя ТОЛЬКО .flatMap(),
// // чтобы сразу получить плоский список тегов.
// const allTagsFlatMap = blogPosts.flatMap(({tags}) => tags)
//   // Твой код для .flatMap() здесь
// console.log('3. Плоский список (через flatMap):', allTagsFlatMap)

// //////////////////

// // --- (Бонус 🏋️) ---
// // В списке 'allTagsFlatMap' куча дубликатов ('JS' повторяется 3 раза).
// // Как, используя этот массив, получить НОВЫЙ массив
// // **только уникальных** тегов?
// //
// // Ожидаемый результат:
// // [ 'JS', 'React', 'Frontend', 'CSS', 'Styled-Components', 'Webpack', 'Performance' ]
// const uniqueTags = allTagsFlatMap
//                             .filter((tag, i, arr) => {
//                                 return arr.indexOf(tag) === i
//                             }) // Твой код здесь
// console.log('4. Уникальные теги:', uniqueTags)

///////////////////////////////////////////////////////////////////////

// ЗАДАЧА 12

// const apiProducts = [
//   { id: 1, name: 'Лэптоп', price: 1200, stock: 15 },
//   { id: 2, name: 'Мышь', price: 50, stock: 150 },
//   { id: 3, name: 'Клавиатура', price: 100, stock: 80 },
//   { id: 4, name: 'Наушники', price: 150, stock: 120 },
//   { id: 5, name: 'Монитор', price: 400, stock: 45 },
// ]

// --- ЗАДАЧА (Уровень "Босс" 🐲) ---
//
// Используя .reduce(), "сверни" массив 'apiProducts' в ОДИН ОБЪЕКТ,
// который будет содержать 2 метрики:
// 1. totalItems: Общее кол-во всех товаров на складе (сумма 'stock')
// 2. totalStockValue: Общая стоимость всех товаров на складе (сумма 'price * stock')
//
// --- ОЖИДАЕМЫЙ РЕЗУЛЬТАТ ---
// {
//   totalItems: 560,       // (15 + 150 + 80 + 120 + 45)
//   totalStockValue: 69500 // (1200*15 + 50*150 + 100*80 + 150*120 + 400*45)
// }

// --- НАЧАЛЬНОЕ ЗНАЧЕНИЕ для reduce ---
// В этот раз аккумулятор - это не 0 и не {}.
// Это "шаблон" нашего будущего отчета.

    // 'report' - это твой аккумулятор (с { totalItems: 0, ... })
    // 'product' - это { id: 1, name: 'Лэптоп', ... }
    //
    // Твоя задача: на каждой итерации ВЕРНУТЬ НОВЫЙ ОБЪЕКТ 'report',
    // в котором 'totalItems' и 'totalStockValue'
    // будут обновлены данными из 'product'.
    //
    // P.S. Помни про иммутабельность! (т.е. ...spread) 🤓
// const initialReport = {
//   totalItems: 0,
//   totalStockValue: 0,
// }

// // --- ТВОЙ КОД ---
// const stockReport = apiProducts.reduce(
// (report, product) => {
//     return {
//         ...report,
//         totalItems: report.totalItems + product.stock,
//         totalStockValue: report.totalStockValue + (product.price * product.stock),
//     }
//     //  report.totalItems += product.stock
//     //  report.totalStockValue += product.price * product.stock
//     //  return report
// },
//   initialReport,
// )

// console.log('Сводный отчет по складу:', stockReport)

///////////////////////////////////////////////////////////////////////

// ЗАДАЧА 13

// --- ДАННЫЕ С "API" (Отделы компании) ---
// У нас есть иерархия: Отдел -> Сотрудники
// const departments = [
//   {
//     name: 'Engineering',
//     employees: [
//       { id: 101, name: 'Alice Johnson', level: 'Senior', onVacation: false },
//       { id: 102, name: 'Bob Smith', level: 'Mid', onVacation: true },
//     ],
//   },
//   {
//     name: 'Marketing',
//     employees: [
//       { id: 201, name: 'Charlie Brown', level: 'Junior', onVacation: false },
//       { id: 202, name: 'David Lee', level: 'Senior', onVacation: false },
//     ],
//   },
//   {
//     name: 'Sales',
//     employees: [
//       { id: 301, name: 'Eve Davis', level: 'Mid', onVacation: true },
//     ],
//   },
// ]

// --- (Без подсказок) ---
//
// Получи **один "плоский" массив** (string[]), содержащий
// **только ИМЕНА** всех сотрудников уровня **'Senior'**.
//
// --- ОЖИДАЕМЫЙ РЕЗУЛЬТАТ ---
// [ 'Alice Johnson', 'David Lee' ]

// const seniorEmployeeNames = departments
//                                     .flatMap((departments) => departments.employees)
//                                     .filter(({level}) => level === 'Senior')
//                                     .map(({name}) => name)
// console.log('Имена Сеньоров:', seniorEmployeeNames)


///////////////////////////////////////////////////////////////////////

// ЗАДАЧА 13

// --- ДАННЫЕ С "API" (Студенты) ---
// const students = [
//   { id: 1, name: 'Alice', age: 21, gpa: 3.8, isActive: true },
//   { id: 2, name: 'Bob', age: 23, gpa: 3.2, isActive: false },
//   { id: 3, name: 'Charlie', age: 20, gpa: 3.9, isActive: true },
//   { id: 4, name: 'David', age: 22, gpa: 3.5, isActive: true },
//   { id: 5, name: 'Eve', age: 23, gpa: 4.0, isActive: false },
// ]

// --- (Без подсказок) ---
//
// "Сверни" массив 'students' в **один объект-отчет** 'studentReport'.
//
// Отчет должен содержать 2 метрики **только по АКТИВНЫМ** (isActive: true) студентам:
// 1. totalActive: Общее число активных студентов.
// 2. honorRoll: Число активных студентов "с отличием" (gpa >= 3.8).
//
// --- ОЖИДАЕМЫЙ РЕЗУЛЬТАТ ---
// { totalActive: 3, honorRoll: 2 }
// (Alice, Charlie, David - активные. Из них Alice и Charlie - "с отличием")

// способ "в лоб":

// const initialReport = {
//     totalActive: 0,
//     honorRoll: 0,
// }

// const mutInitialReport = {...initialReport}

// console.log(mutInitialReport)

// const studentReport = students
//                             .filter(({isActive}) => isActive)
//                             .reduce((report, student, i) => {
//                                 report.totalActive += 1
//                                 return report
//                             }, mutInitialReport)
// const studentReport2 = students
//                             .filter(({isActive, gpa}) => isActive && gpa >= 3.8)
//                             .reduce((report, student, i) => {
//                                 report.honorRoll += 1
//                                 return report
//                             }, mutInitialReport)
                            
// console.log('Отчет по студентам:', mutInitialReport)

/////////////////

// способ pro:

// const initialReport = {
//   totalActive: 0,
//   honorRoll: 0,
// }

// const studentReport = students.reduce((report, student) => {
//     if(!student.isActive) {
//         return report
//     }
//     const isHonorRoll = student.gpa >= 3.8
//     return {
//         ...report,
//         totalActive: report.totalActive + 1,
//         honorRoll: isHonorRoll ? report.honorRoll + 1 : report.honorRoll
//     }
// }, initialReport)

// console.log('Отчет по студентам:', studentReport)

///////////////////////////////////////////////////////////////////////

// ЗАДАЧА 14

// --- ДАННЫЕ С "API" (Пользователи и их девайсы) ---
// const users = [
//   {
//     name: 'Alice',
//     devices: [
//       { type: 'phone', os: 'iOS' },
//       { type: 'laptop', os: 'Windows' },
//     ],
//   },
//   {
//     name: 'Bob',
//     devices: [
//       { type: 'phone', os: 'Android' },
//       { type: 'laptop', os: 'macOS' },
//       { type: 'tablet', os: 'Android' },
//     ],
//   },
//   {
//     name: 'Charlie',
//     devices: [
//       { type: 'phone', os: 'iOS' },
//       { type: 'laptop', os: 'Windows' },
//     ],
//   },
// ]

// // --- ЗАДАЧА 3 (Без подсказок) ---
// //
// // Получи **один "плоский" массив** (string[]), содержащий
// // **только УНИКАЛЬНЫЕ** операционные системы (os)
// // со всех девайсов всех пользователей.
// //
// // Порядок в итоговом массиве не важен.
// //
// // --- ОЖИДАЕМЫЙ РЕЗУЛЬТАТ ---
// // [ 'iOS', 'Windows', 'Android', 'macOS' ]
// // (или в другом порядке)

// const uniqueOSList = users
//                         .flatMap(({devices}) => devices)
//                         .map(({os}) => os)
//                         .filter((os, i, arr) => {
//                                 return arr.indexOf(os) === i
//                             })

// console.log('Уникальные ОС:', uniqueOSList)

///////////////////////////////////////////////////////////////////////

// ЗАДАЧА 15

// --- ДАННЫЕ С "API" (Список транзакций) ---
// const transactions = [
//   { id: 101, type: 'income', category: 'Salary', amount: 3000 },
//   { id: 102, type: 'expense', category: 'Food', amount: 250 },
//   { id: 103, type: 'expense', category: 'Rent', amount: 1200 },
//   { id: 104, type: 'income', category: 'Freelance', amount: 500 },
//   { id: 105, type: 'expense', category: 'Food', amount: 150 },
//   { id: 106, type: 'expense', category: 'Utilities', amount: 200 },
// ]

// --- (Без подсказок) ---
//
// "Сверни" массив 'transactions' в **один объект-отчет** 'financialReport'.
//
// Отчет должен содержать 2 метрики:
// 1. totalBalance: Итоговый баланс (income - expense).
// 2. totalExpenses: Общая сумма *только* расходов (expense).
//
// --- ОЖИДАЕМЫЙ РЕЗУЛЬТАТ ---
// { totalBalance: 1700, totalExpenses: 1800 }
//
// (Income: 3000 + 500 = 3500)
// (Expense: 250 + 1200 + 150 + 200 = 1800)
// (Balance: 3500 - 1800 = 1700)

// нуб подход:

// const initialReport = {
//   totalBalance: 0,
//   totalExpenses: 0,
// }
// let expenseSum = 0
// let incomeSum = 0

// const financialReport = transactions
//                                 .reduce((report, transaction) => {
//     // --- 🪲 Ловушка (Side Effect) ---
//     // Ты "обманываешь" reduce.
//     // Вместо того, чтобы использовать "report" (аккумулятор),
//     // ты меняешь ВНЕШНИЕ переменные (incomeSum, expenseSum).
//     // Это называется "побочный эффект" (side effect) ☣️
//     // и считается "грязным" кодом, т.к. reduce должен
//     // зависеть *только* от аккумулятора.
//                                     if (transaction.type === 'income') {
//                                         incomeSum += transaction.amount
//                                     }
//                                     if (transaction.type === 'expense') {
//                                         expenseSum += transaction.amount
//                                     }
//         // --- Неэффективность ---
//     // Здесь ты *каждый раз* пересчитываешь ВСЁ с нуля,
//     // используя ВНЕШНИЕ переменные.
//     // А аккумулятор "report" ты, по сути, игнорируешь.
//                                     return {
//                                         ...report, // Этот ...spread, по сути, бесполезен
//                                         totalBalance: incomeSum - expenseSum,
//                                         totalExpenses: expenseSum,                                  
//                                     }
//                                 }, initialReport)

// console.log('Финансовый отчет:', financialReport)

// pro подход:

// const transactions = [
//   { id: 101, type: 'income', category: 'Salary', amount: 3000 },
//   { id: 102, type: 'expense', category: 'Food', amount: 250 },
//   { id: 103, type: 'expense', category: 'Rent', amount: 1200 },
//   { id: 104, type: 'income', category: 'Freelance', amount: 500 },
//   { id: 105, type: 'expense', category: 'Food', amount: 150 },
//   { id: 106, type: 'expense', category: 'Utilities', amount: 200 },
// ]

// const initialReport = {
//   totalBalance: 0,
//   totalExpenses: 0,
// }

// const proReport = transactions.reduce((report, transaction) => {
//     if (transaction.type === 'income') {
//         return{
//             ...report,
//             totalBalance: report.totalBalance + transaction.amount,
//         }
//     }
//       if (transaction.type === 'expense') {
//     return {
//       ...report,
//       totalBalance: report.totalBalance - transaction.amount,
//       totalExpenses: report.totalExpenses + transaction.amount,
//     }
//   }

//   return report
// }, initialReport)

// console.log('Pro Отчет:', proReport)

///////////////////////////////////////////////////////////////////////

// ЗАДАЧА 16

// --- ДАННЫЕ С "API" (Проекты и их задачи) ---

// У нас есть массив проектов.
// У каждого проекта есть вложенный массив задач.
// const projects = [
//   {
//     projectId: 'P-1',
//     name: 'Релиз "Omega"',
//     tasks: [
//       { id: 't-101', title: 'Спроектировать API', status: 'completed', priority: 'High' },
//       { id: 't-102', title: 'Написать тесты', status: 'in-progress', priority: 'Medium' },
//       { id: 't-103', title: 'Развернуть на Staging', status: 'in-progress', priority: 'High' },
//     ],
//   },
//   {
//     projectId: 'P-2',
//     name: 'Маркетинговая кампания',
//     tasks: [
//       { id: 't-201', title: 'Подготовить баннеры', status: 'completed', priority: 'Medium' },
//       { id: 't-202', title: 'Запустить A/B тест', status: 'new', priority: 'High' },
//     ],
//   },
//   {
//     projectId: 'P-3',
//     name: 'Внутренний аудит',
//     tasks: [
//       { id: 't-301', title: 'Собрать метрики', status: 'in-progress', priority: 'High' },
//       { id: 't-302', title: 'Подготовить отчет', status: 'new', priority: 'Low' },
//     ],
//   },
// ]

// // --- ЗАДАЧА (Без подсказок) ---
// //
// // Получи **один "плоский" массив** (string[]), содержащий
// // **только `title`** тех задач, которые:
// // 1. **НЕ** `completed`
// // 2. И имеют `priority` **'High'**
// //
// // --- ОЖИДАЕМЫЙ РЕЗУЛЬТАТ ---
// // [ 'Развернуть на Staging', 'Запустить A/B тест', 'Собрать метрики' ]

// const highPriorityTasks = projects
//                                 .flatMap(({tasks}) => tasks)
//                                 .filter(({status, priority}) => status !== 'completed' && priority === 'High')
//                                 .map(({title}) => title)

// console.log(highPriorityTasks)

///////////////////////////////////////////////////////////////////////

// ЗАДАЧА 17

// --- ДАННЫЕ С "API" (Корзина покупок) ---

// У нас есть "плоский" массив товаров в корзине.
// У каждого есть цена, кол-во и флаг "налогооблагаемый".
// const cart = [
//   {
//     id: 1,
//     name: 'Ноутбук',
//     price: 1500,
//     quantity: 1,
//     taxable: true, // Облагается налогом (5%)
//   },
//   {
//     id: 2,
//     name: 'Подарочная карта',
//     price: 50,
//     quantity: 2,
//     taxable: false, // НЕ облагается налогом
//   },
//   {
//     id: 3,
//     name: 'Наушники',
//     price: 200,
//     quantity: 1,
//     taxable: true, // Облагается налогом (5%)
//   },
//   {
//     id: 4,
//     name: 'ПО (Подписка)',
//     price: 25,
//     quantity: 4,
//     taxable: false, // НЕ облагается налогом
//   },
// ]

// // --- ЗАДАЧА (Без подсказок) ---
// //
// // "Сверни" массив 'cart' в **один объект-отчет** 'cartSummary'.
// // Налог (Tax) составляет 5% (0.05) и берется *только*
// // с 'taxable: true' товаров.
// //
// // --- ОЖИДАЕМЫЙ РЕЗУЛЬТАТ ---
// // {
// //   totalPrice: 1900, // (1500*1) + (50*2) + (200*1) + (25*4) = 1500 + 100 + 200 + 100
// //   totalTax: 85,     // (1500*1)*0.05 + (200*1)*0.05 = 75 + 10
// // }

// const initialReport = {
//     totalPrice: 0,
//     totalTax: 0,
// }

// // const reportByCart = cart
// //                         .reduce((report, product) => {
// //                                 if (product.taxable) {
// //                                     return {
// //                                         ...report,
// //                                         totalTax: report.totalTax + product.price * product.quantity * 0.05,
// //                                         totalPrice: report.totalPrice + product.price * product.quantity

// //                                     }
// //                                 } else
// //                                 return {
// //                                     ...report,
// //                                     totalPrice: report.totalPrice + product.price * product.quantity
// //                                 }
// //                         }, initialReport)

// // console.log(reportByCart)

// // --- 🤓 ОПЫТ СЕНЬОРА: "PRO" РЕФАКТОРИНГ (DRY) ---
// // Принцип "Don't Repeat Yourself" (Не повторяйся)
// // Код выше - идеален. Но его можно сделать "суше",
// // убрав if/else и повторение 'totalPrice'

// const proReport = cart.reduce((report, product) => {
//     const itemTotal = product.price * product.quantity
//     const itemTax = product.taxable ? itemTotal * 0.05 : 0
//     return {
//         totalPrice: report.totalPrice + itemTotal,
//         totalTax: report.totalTax + itemTax
//     }
// }, initialReport)

// console.log(proReport)

///////////////////////////////////////////////////////////////////////

// ЗАДАЧА 18

// --- ДАННЫЕ (Массив авторов) ---
// const authors = [
//   {
//     name: 'Артур Конан Дойл',
//     books: [
//       { title: 'Этюд в багровых тонах', year: 1887 },
//       { title: 'Собака Баскервилей', year: 1901 },
//     ],
//   },
//   {
//     name: 'Джордж Оруэлл',
//     books: [
//       { title: '1984', year: 1949 },
//       { title: 'Скотный двор', year: 1945 },
//     ],
//   },
//   {
//     name: 'Айзек Азимов',
//     books: [
//       { title: 'Основание', year: 1951 },
//       { title: 'Я, Робот', year: 1950 },
//     ],
//   },
//   {
//     name: 'Виктор Пелевин',
//     books: [
//       { title: 'Generation П', year: 1999 },
//       { title: 'S.N.U.F.F.', year: 2011 },
//       { title: 'KGBT+', year: 2022 },
//     ],
//   },
// ]

// // --- ЗАДАЧА ---
// //
// // Получи "плоский" массив (string[]), содержащий
// // **только `title`** тех книг, которые были опубликованы
// // в 21-м веке (т.е. `year > 2000`).
// //
// // --- ОЖИДАЕМЫЙ РЕЗУЛЬТАТ ---
// // [
// //   'S.N.U.F.F.',
// //   'KGBT+',
// // ]

// const books20thCentury = authors
//                             .flatMap(({books}) => books)
//                             .filter(({year}) => year > 2000)
//                             .map(({title}) => title)

// console.log(books20thCentury)

///////////////////////////////////////////////////////////////////////

// ЗАДАЧА 18

// --- ДАННЫЕ (Массив отправок на проверку) ---
// const submissions = [
//   { student: 'Алиса', score: 92, status: 'graded' },
//   { student: 'Борис', score: 78, status: 'graded' },
//   { student: 'Вера', score: 85, status: 'pending' },
//   { student: 'Григорий', score: 100, status: 'graded' },
//   { student: 'Дарья', score: 0, status: 'pending' },
//   { student: 'Евгений', score: 95, status: 'graded' },
// ]

// --- ЗАДАЧА ---
//
// "Сверни" массив 'submissions' в **один объект-отчет**.
// Отчет должен содержать 3 метрики:
// 1. `gradedCount`: Общее кол-во 'graded' работ.
// 2. `pendingCount`: Общее кол-во 'pending' работ.
// 3. `totalScoreGraded`: Сумма *только* 'graded' работ.
//
// --- ОЖИДАЕМЫЙ РЕЗУЛЬТАТ ---
// {
//   gradedCount: 4,
//   pendingCount: 2,
//   totalScoreGraded: 365, // 92 + 78 + 100 + 95
// }

// --- 👨‍💻 ТВОЕ РЕШЕНИЕ ---

// const initialReport = {
//     gradedCount: 0,
//     pendingCount: 0,
//     totalScoreGraded: 0,
// }

// const submissionsReport = submissions
//                                 .reduce((report, submission) => {
//                                     if(submission.status === 'graded') {
//                                         return {
//                                             ...report,
//                                             gradedCount: report.gradedCount + 1,
//                                             totalScoreGraded: report.totalScoreGraded + submission.score

//                                         }
                                    
//                                     }
//                                     if(submission.status === 'pending') {
//                                         return {
//                                             ...report,
//                                             pendingCount: report.pendingCount + 1
//                                         }
//                                     }
//                                     return report
//                                 }, initialReport)
// console.log(submissionsReport)

///////////////////////////////////////////////////////////////////////

// ЗАДАЧА 19

// // --- ДАННЫЕ (Массив товаров) ---
// const products = [
//   { id: 'p1', name: 'Мышь X-7', sales: 150 },
//   { id: 'p2', name: 'Клавиатура K-120', sales: 120 },
//   { id: 'p3', name: 'Монитор S-24', sales: 350 },
//   { id: 'p4', name: 'Наушники H-5', sales: 210 },
//   { id: 'p5', name: 'Веб-камера C-920', sales: 85 },
// ]

// // --- ЗАДАЧА ---
// //
// // Получи массив, содержащий `name` (string[])
// // **трех** (Top 3) самых продаваемых товаров,
// // отсортированный по убыванию продаж.
// //
// // --- ОЖИДАЕМЫЙ РЕЗУЛЬТАТ ---
// // [
// //   'Монитор S-24',
// //   'Наушники H-5',
// //   'Мышь X-7',
// // ]

// const top3Products = products
//                             .slice()
//                             .sort((a, b) => b.sales - a.sales)
//                             .slice(0, 3)
//                             .map(({name}) => name)


// console.log(top3Products)

///////////////////////////////////////////////////////////////////////

// ЗАДАЧА 20

// --- ДАННЫЕ (Список студентов) ---
// const roster = [
//   { id: 101, name: 'Анна', age: 20, hasPaid: true },
//   { id: 102, name: 'Борис', age: 22, hasPaid: false },
//   { id: 103, name: 'Виктор', age: 19, hasPaid: true },
//   { id: 104, name: 'Галина', age: 17, hasPaid: true }, // 17 лет
//   { id: 105, name: 'Дмитрий', age: 21, hasPaid: true },
//   { id: 106, name: 'Ева', age: 20, hasPaid: false },
// ]

// // --- ЗАДАЧА ---
// //
// // Используя массив `roster`, получи **три**
// // отдельные переменные (константы):
// //
// // 1. `isEverybodyPaid`: (boolean)
// //    Проверка, что **ВСЕ** студенты оплатили.
// //
// // 2. `isAnybodyUnderage`: (boolean)
// //    Проверка, что есть **ХОТЯ БЫ ОДИН** студент
// //    младше 18 лет (age < 18).
// //
// // 3. `overdueStudentNames`: (string[])
// //    Массив **имен** тех студентов,
// //    кто **НЕ** оплатил (`hasPaid: false`).
// //
// // --- ОЖИДАЕМЫЙ РЕЗУЛЬТАТ ---
// // isEverybodyPaid: false
// // isAnybodyUnderage: true
// // overdueStudentNames: [ 'Борис', 'Ева' ]

// // --- 👨‍💻 ТВОЕ РЕШЕНИЕ ---

// const  isEverybodyPaid = roster
//                             .every(({hasPaid}) => hasPaid)

// const isAnybodyUnderage = roster
//                             .some(({age}) => age < 18)

// const overdueStudentNames = roster
//                                 .filter(({hasPaid}) => !hasPaid)
//                                 .map(({name}) => name)

// console.log(overdueStudentNames)
// console.log(isAnybodyUnderage)
// console.log(isEverybodyPaid)

///////////////////////////////////////////////////////////////////////

// ЗАДАЧА 21

// --- "Сырые" данные ---
// Список событий, время в 24-часовом формате
// const schedule = [
//   { time: '14:30', event: 'Встреча с командой' },
//   { time: '09:00', event: 'Утренний Scrum' },
//   { time: '17:00', event: 'Ревью кода' },
//   { time: '14:00', event: 'Обед' },
//   { time: '18:30', event: 'Завершение работы' },
// ]

// // --- Сортировка по времени ---
// // Получи НОВЫЙ массив, отсортированный по времени (time)
// // от самого раннего к самому позднему.
// //
// // ОЖИДАЕМЫЙ РЕЗУЛЬТАТ 1:
// // [
// //   { time: '09:00', event: 'Утренний Scrum' },
// //   { time: '14:00', event: 'Обед' },
// //   { time: '14:30', event: 'Встреча с командой' },
// //   { time: '17:00', event: 'Ревью кода' },
// //   { time: '18:30', event: 'Завершение работы' }
// // ]

// // ХАРДКОР СПОСОБ:
// // const sortedByTime = schedule
// //                             .map((item) => {
// //                                 return {
// //                                     ...item,
// //                                     time: +item.time.replace(':', '')
// //                                 }
// //                             })
// //                             .slice()
// //                             .sort((a, b) => a.time - b.time)
// //                             .map((item) => {
// //                                 const charToAdd = ':'
// //                                 const indexFromEnd = 2
// //                                 const timeToString = item.time.toString()
// //                                 const newTime = timeToString.slice(0, -indexFromEnd) + charToAdd + timeToString.slice(-indexFromEnd)
// //                                 return { 
// //                                     ...item,
// //                                     time: newTime.padStart(5, '0')
// //                                 }
// //                             })
// // console.log(sortedByTime)
// // console.log(schedule)

// // PRO СПОСОБ:

// const sortedByTime = schedule
//                         .slice()
//                         .sort((a, b) => a.time.localeCompare(b.time))

// console.log(sortedByTime)

///////////////////////////////////////////////////////////////////////

// ЗАДАЧА 22

// --- "Сырые" данные ---
// const allowedGuests = [
//   'alice@google.com',
//   'charlie@microsoft.com',
//   'david@amazon.com',
// ]

// // --- ЗАДАЧА 1: Проверка гостя (includes) ---
// // У нас есть email 'eve@apple.com'.
// // Напиши код, который проверит, есть ли этот email
// // в списке 'allowedGuests'.
// //
// // ОЖИДАЕМЫЙ РЕЗУЛЬТАТ 1:
// // false
// const emailToCheck = 'eve@apple.com'
// const isGuestAllowed = allowedGuests
//                                 .includes(emailToCheck)
                            
// console.log(isGuestAllowed)

///////////////////////////////////////////////////////////////////////

// ЗАДАЧА 23

// --- Фильтрация по списку (filter + includes) ---
// Нам нужен НОВЫЙ массив 'priorityUsers', который будет
// содержать *только* тех юзеров (объекты) из 'allUsers',
// чьи email'ы ЕСТЬ в списке 'allowedGuests'.
// const allowedGuests = [
//   'alice@google.com',
//   'charlie@microsoft.com',
//   'david@amazon.com',
// ]

// const allUsers = [
//   { id: 1, email: 'bob@facebook.com', name: 'Боб' },
//   { id: 2, email: 'eve@apple.com', name: 'Ева' },
//   { id: 3, email: 'david@amazon.com', name: 'Давид' },
//   { id: 4, email: 'charlie@microsoft.com', name: 'Чарли' },
// ]

// // ОЖИДАЕМЫЙ РЕЗУЛЬТАТ 2:
// // [
// //   { id: 3, email: 'david@amazon.com', name: 'Давид' },
// //   { id: 4, email: 'charlie@microsoft.com', name: 'Чарли' }
// // ]
// const priorityUsers = allUsers
//                         .filter(({email}) => {
//                             return allowedGuests.includes(email)
//                         })

// // --- Вывод ---
// // console.log('--- Проверка гостя ---')
// // console.log(isGuestAllowed)

// console.log('--- Приоритетные юзеры ---')
// console.log(priorityUsers)

///////////////////////////////////////////////////////////////////////

// ЗАДАЧА 24

// --- ДАННЫНЫЕ С "API" ---
// Список имен пользователей, которых нужно отсортировать.
// const userNames = [
//   'Яковлев',
//   'Андреев',
//   'Григорьев',
//   'Борисов',
//   'Яковлев', // <-- дубликат!
//   'Алексеев',
// ]

// // --- ЗАДАЧА 1 ---
// // Получи НОВЫЙ массив `sortedNames`, в котором имена
// // отсортированы по алфавиту (от 'А' до 'Я').
// // 
// // ВАЖНО:
// // 1. Оригинальный массив `userNames` не должен измениться!
// // 2. Используй "правильный" метод для сортировки строк.
// //
// // ОЖИДАЕМЫЙ РЕЗУЛЬТАТ:
// // [ 'Алексеев', 'Андреев', 'Борисов', 'Григорьев', 'Яковлев', 'Яковлев' ]

// const sortedNames = userNames
//                         .slice()
//                         .sort((a, b) => a.localeCompare(b))

// console.log(sortedNames)

// // --- ЗАДАЧА 2 (Бонус 🏋️) ---
// // Используя `sortedNames` (уже отсортированный массив),
// // получи НОВЫЙ массив `uniqueSortedNames`, в котором
// // НЕТ дубликатов.
// //
// // ОЖИДАЕМЫЙ РЕЗУЛЬТАТ:
// // [ 'Алексеев', 'Андреев', 'Борисов', 'Григорьев', 'Яковлев' ]

// const uniqueSortedNames = sortedNames
//                                 .filter((name, i) => {                                    
//                                      return sortedNames.indexOf(name) === i
//                                 })

// console.log(uniqueSortedNames)                   

///////////////////////////////////////////////////////////////////////

// ЗАДАЧА 25

// --- ДАННЫНЫЕ С "API" ---

// "Белый список" 🕵️‍♂️ ID пользователей, 
// у которых есть "Премиум" подписка.
const premiumUserIds = ['id-b7x', 'id-f2p', 'id-k9q']

// Общий список *всех* пользователей, зашедших на сайт.
const allUsers = [
  { id: 'id-a1v', name: 'Игорь', country: 'UA' },
  { id: 'id-f2p', name: 'Ольга', country: 'PL' },
  { id: 'id-z4m', name: 'Максим', country: 'UA' },
  { id: 'id-k9q', name: 'Анна', country: 'DE' },
  { id: 'id-b7x', name: 'Дмитрий', country: 'UA' },
]

// --- ЗАДАЧКА ---
// Нам нужно получить НОВЫЙ массив `priorityUsers`,
// который содержит *только* тех пользователей (объекты)
// из `allUsers`, чьи `id` *включены* (includes) 
// в "белый список" `premiumUserIds`.
//
// ОЖИДАЕМЫЙ РЕЗУЛЬТАТ:
// [
//   { id: 'id-f2p', name: 'Ольга', country: 'PL' },
//   { id: 'id-k9q', name: 'Анна', country: 'DE' },
//   { id: 'id-b7x', name: 'Дмитрий', country: 'UA' }
// ]

const priorityUsers = allUsers
                            .filter(({id}) => premiumUserIds.includes(id))

// --- ВЫВОД В КОНСОЛЬ ---
console.log('Приоритетные пользователи:', priorityUsers)




