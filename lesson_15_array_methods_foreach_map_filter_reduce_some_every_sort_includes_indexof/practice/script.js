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
const apiResponse = [
  { id: 1, name: 'Ноутбук', category: 'Electronics', price: 1200, inStock: true, },
  { id: 2, name: 'Футболка', category: 'Apparel', price: 25, inStock: true, },
  { id: 3, name: 'Смартфон', category: 'Electronics', price: 800, inStock: false, }, // не в наличии
  { id: 4, name: 'Наушники', category: 'Electronics', price: 150, inStock: true, },
  { id: 5, name: 'Книга', category: 'Books', price: 30, inStock: true, },
  { id: 6, name: 'Клавиатура', category: 'Electronics', price: 100, inStock: true, },
  { id: 7, name: 'Мышь', category: 'Electronics', price: 50, inStock: true, },
  { id: 8, name: 'Джинсы', category: 'Apparel', price: 70, inStock: true, },
  { id: 9, name: 'Комикс', category: 'Books', price: 15, inStock: false, }, // не в наличии
]

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

const categoryValue = apiResponse.reduce((acc, item) => {
    const key = item.category
    if (item.inStock) {
        if(!acc[key]) {
            acc[key] = item.price
         
        } else {
            acc[key] = acc[key] + item.price
        }
        // --- Сокращенный вариант (часто встречается): ---
        // "Возьми acc[key]. Если его нет (on undefined), возьми 0. 
        //  И к этому результату прибавь item.price"
        //acc[key] = (acc[key] || 0) + item.price
    }
  return acc
}, {})


console.log(categoryValue)


