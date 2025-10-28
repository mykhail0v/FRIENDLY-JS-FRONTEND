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

// // --- ТВОЯ ЗАДАЧА ---
// // Рассчитать ОБЩУЮ СУММУ всех товаров, которые
// // есть В НАЛИЧИИ, сгруппированную ПО КАТЕГОРИЯМ.
// //
// // Это очень частая задача для всяких "дашбордов" (админок),
// // чтобы показать, товаров какой категории у нас на складе больше всего.

// // Используй .reduce().
// //
// // Совет Сеньора: 💡
// // 1. Аккумулятор (acc) будет объектом: {}
// // 2. Тебе нужно проверять `item.inStock` (можно сделать `if`... или... ?)
// // 3. Тебе нужно проверять, есть ли `item.category` уже в `acc`.
// //    (Подсказка: `if (acc[item.category]) { ... } else { ... }`)

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

const transactions = [
  { id: 101, type: 'income', category: 'Salary', amount: 3000 },
  { id: 102, type: 'expense', category: 'Food', amount: 250 },
  { id: 103, type: 'expense', category: 'Rent', amount: 1200 },
  { id: 104, type: 'income', category: 'Freelance', amount: 500 },
  { id: 105, type: 'expense', category: 'Food', amount: 150 },
  { id: 106, type: 'expense', category: 'Utilities', amount: 200 },
]

const initialReport = {
  totalBalance: 0,
  totalExpenses: 0,
}

const proReport = transactions.reduce((report, transaction) => {
    if (transaction.type === 'income') {
        return{
            ...report,
            totalBalance: report.totalBalance + transaction.amount,
        }
    }
      if (transaction.type === 'expense') {
    return {
      ...report,
      totalBalance: report.totalBalance - transaction.amount,
      totalExpenses: report.totalExpenses + transaction.amount,
    }
  }

  return report
}, initialReport)

console.log('Pro Отчет:', proReport)