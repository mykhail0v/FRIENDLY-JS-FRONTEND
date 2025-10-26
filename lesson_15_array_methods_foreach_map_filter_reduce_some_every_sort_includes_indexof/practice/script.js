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
const orders = [
  {
    orderId: 101,
    isPremium: true,
    items: [
      { id: 1, name: 'Лэптоп', price: 1200 },
      { id: 2, name: 'Мышь', price: 50 },
    ],
  },
  {
    orderId: 102,
    isPremium: false,
    items: [
      { id: 3, name: 'Футболка', price: 20 },
    ],
  },
  {
    orderId: 103,
    isPremium: true,
    items: [
      { id: 4, name: 'Наушники', price: 150 },
      { id: 5, name: 'Клавиатура', price: 100 },
    ],
  },
  {
    orderId: 104,
    isPremium: false,
    items: [
      { id: 6, name: 'Кружка', price: 15 },
    ],
  },
]

// --- ЗАДАЧА (Уровень "Сложно" 🏋️) ---
//
// У нас есть массив заказов (orders).
// Каждый заказ - это объект с флагом 'isPremium' и *массивом*
// купленных товаров 'items'.
//
// --- ТВОЯ ЗАДАЧA ---
// Получить **один плоский массив** (string[])
// всех **наименований** товаров ('name'),
// которые были куплены **только 'premium'** клиентами.
//
// --- ОЖИДАЕМЫЙ РЕЗУЛЬТАТ ---
// [
//   'Лэптоп',
//   'Мышь',
//   'Наушники',
//   'Клавиатура'
// ]

// const premiumItemNames = orders
//                             .filter(({isPremium}) => isPremium)
//                             .flatMap((order) => {
//                                 return order.items.map((item) => {
//                                     return item.name
//                                 })
//                             })
//   // Твой код здесь 🚀



// Тот же самый код, но без фигурных скобок и слова 'return'

const premiumItemNamesShort = orders
  .filter(({ isPremium }) => isPremium)
  .flatMap((order) =>
    // 1. Внешний (неявный) return для flatMap
    order.items.map((item) =>
      // 2. Внутренний (неявный) return для map
      item.name
    )
  )

console.log(premiumItemNamesShort) // Тот же результат!