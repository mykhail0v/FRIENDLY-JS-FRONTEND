// ЗАДАЧА 1

/*
Задача 1: Класс UserCard и парсинг JSON
Цель: Создать "чертеж" (класс) для карточки пользователя и научиться создавать экземпляры этих карточек из JSON-данных.

Входные данные: Представь, что ты получил с сервера вот такой ответ в виде строки JSON:

JavaScript

const userDataJSON = `{
  "id": "1",
  "name": "Иван Петров",
  "email": "ivan.petrov@example.com",
  "avatar": "img/avatars/1.png",
  "status": "online"
}`
Твоя задача:

Парсинг (Тема 16): Преобразовать строку userDataJSON в JavaScript-объект.

Класс (Тема 17): Создать класс UserCard.

constructor(data): Конструктор должен принимать один аргумент — объект с данными пользователя (тот, что ты получил после парсинга).

Свойства: Внутри конструктора он должен "раскидать" данные по свойствам экземпляра: this.id, this.name, this.email, this.avatar, this.status.

Метод render(): Добавить метод render(), который возвращает строку с HTML-разметкой. Разметка может быть такой (используй интерполяцию строк!):

HTML

<div class="user-card" data-id="${this.id}">
  <img src="${this.avatar}" alt="${this.name}">
  <h3>${this.name}</h3>
  <p>${this.email}</p>
  <span>Статус: ${this.status}</span>
</div>
Использование:

Создать экземпляр класса: const ivanCard = new UserCard(parsedData) (где parsedData — это результат из шага 1).

Вывести в консоль результат работы его метода render(): console.log(ivanCard.render()).
*/

// const userDataJSON = `{
//   "id": "1",
//   "name": "Иван Петров",
//   "email": "ivan.petrov@example.com",
//   "avatar": "img/avatars/1.png",
//   "status": "online"
// }`

// const parsedData = JSON.parse(userDataJSON)

// class UserCard {
//     constructor(userData) {
//         this.id = userData.id
//         this.name = userData.name
//         this.email = userData.email
//         this.avatar = userData.avatar
//         this.status = userData.status
//     }

//     render() {
//         return `<div class="user-card" data-id="${this.id}">
//             <img src="${this.avatar}" alt="${this.name}">
//             <h3>${this.name}</h3>
//             <p>${this.email}</p>
//             <span>Статус: ${this.status}</span>
//         </div>`
//     }
// }

// const ivanCard = new UserCard(parsedData)

// console.log(ivanCard.render())

///////////

// ЗАДАЧА 2

/*
Наследование для AdminCard (ТВОЙ ХОД!) ---

Цель: Создать класс AdminCard, который наследуется от UserCard.

1.  Распарси 'adminDataJSON'.
2.  Создай класс 'AdminCard', который наследует (extends) 'UserCard'.
3.  В 'constructor(data)':
    * Вызови родительский конструктор 'super(data)'.
    * Добавь новое свойство 'this.role = data.role'.
4.  Переопредели (override) метод 'render()':
    * Он должен возвращать похожий HTML, 
        но с добавлением роли (например, '<h3>${this.name} [${this.role}]</h3>').
5.  Создай экземпляр 'elenaAdminCard' и выведи 
    результат 'elenaAdminCard.render()' в консоль.

*/

// const adminDataJSON = `{
//   "id": "2",
//   "name": "Елена Сидорова",
//   "email": "elena.sidorova@example.com",
//   "avatar": "img/avatars/2.png",
//   "status": "offline",
//   "role": "Moderator"
// }`

// const parseAdminData = JSON.parse(adminDataJSON)

// class AdminCard extends UserCard {
//     constructor(userData) {
//         super(userData)
//         this.role = userData.role
//     }

//     render() {
//         return `<div class="user-card" data-id="${this.id}">
//             <img src="${this.avatar}" alt="${this.name}">
//             <h3>${this.name} [${this.role}]</h3>
//             <p>${this.email}</p>
//             <span>Статус: ${this.status}</span>
//         </div>`
//     }
// }

// const elenaAdminCard = new AdminCard(parseAdminData)

// console.log(elenaAdminCard.render())

////////////////////////////////////////////////////////////////////////////

// ЗАДАЧА 3

/*
⚡️ ЗАДАЧИ НА ЗАКРЕПЛЕНИЕ (БЕЗ ПОДСКАЗОК) ⚡️

Темы:
16. JSON
17. Классы, конструкторы, наследование,
    переопределение методов, геттеры/сеттеры.

Сценарий: Мы делаем бэкенд для небольшого интернет-магазина.
Нам нужно создать "чертежи" для товаров.
*/

// --- ВХОДНЫЕ ДАННЫЕ (JSON с бэка) ---

// const productDataJSON = `{
//   "id": "p1",
//   "name": "Футболка 'Basic'",
//   "price": 1500
// }`

// // Товар с новой фичей - у него есть скидка
// const discountedProductDataJSON = `{
//   "id": "p2",
//   "name": "Джинсы 'Slim Fit'",
//   "price": 4000,
//   "discountPercent": 20
// }`

/*
1.  Распарси 'productDataJSON'.
2.  Создай класс 'Product'.
3.  Конструктор должен принимать объект с данными 
    и сохранять 'id', 'name' и 'price' в 'this'.
4.  Добавь метод 'getPriceDisplay()', который 
    *возвращает* строку с ценой, например: "1500 руб."
5.  Создай экземпляр 'tShirt' (футболка) 
    и выведи в консоль результат 'tShirt.getPriceDisplay()'.
*/

// const parseProductData = JSON.parse(productDataJSON)

// class Product {
//     constructor(data) {
//         this.id = data.id
//         this.name = data.name
//         this.price = data.price
//     }

//     getPriceDisplay() {
//         return `${this.price} руб.`
//     }
// }

// const tShirt = new Product(parseProductData)

// console.log(tShirt.getPriceDisplay())

// /*
// 1.  Распарси 'discountedProductDataJSON'.
// 2.  Создай класс 'DiscountedProduct', который
//     наследуется (extends) от 'Product'.
// 3.  Конструктор:
//     * Должен вызывать 'super()' с данными.
//     * Должен сохранять 'discountPercent' в 'this'.
// 4.  Переопредели (override) метод 'getPriceDisplay()'.
//     * Он должен рассчитать новую цену с учетом скидки.
//     * *Вернуть* строку, показывающую
//       новую и старую цену, например:
//       "3200 руб. (старая цена: 4000 руб.)"
//     * (Подсказка: для округления можно
//       использовать 'Math.round()' или 'toFixed(0)')
// 5.  Создай экземпляр 'jeans' (джинсы)
//     и выведи в консоль результат 'jeans.getPriceDisplay()'.
// */

// const parseDiscountedProduct = JSON.parse(discountedProductDataJSON)

// class DiscountedProduct extends Product {
//     constructor(data) {
//         super(data)
//         this.discountPercent = data.discountPercent
//     }

//     getPriceDisplay() {
//         return `${this.price - (this.price * (this.discountPercent / 100))} руб. (старая цена: ${this.price} руб.)`
//     }
// }

// const jeans = new DiscountedProduct(parseDiscountedProduct)

// console.log(jeans.getPriceDisplay())

//////////////////////////////////////////////////////////////////////////////////////

// ЗАДАЧА 4

// /*
// ⚡️ Геттеры и Сеттеры (Тема 17) ⚡️

// Сценарий: Наш 'Product' уязвим! Любой код может
// напрямую изменить цену и поставить ее, например, в -500.
// Это сломает нам всю логику магазина.
// */

// // --- ВХОДНЫЕ ДАННЫЕ (для 'Product') ---
// const productDataJSON = `{
//   "id": "p1",
//   "name": "Футболка 'Basic'",
//   "price": 1500
// }`

// /*
// Цель: "Защитить" свойство 'price' от неверных данных,
// используя геттеры и сеттеры.

// Что нужно сделать (модифицируй класс Product ниже):

// 1.  **"Спрятать" свойство:**
//     * В 'constructor', переименуй 'this.price'
//         во "внутреннее" свойство 'this._price'.
//         (Знак '_' - это соглашение "не трогай напрямую").

// 2.  **Добавить СЕТТЕР 'price':**
//     * Создай метод 'set price(newValue) { ... }'.
//     * Он будет "перехватывать" попытки присвоить
//         значение, (напр. 'product.price = 1000').
//     * Внутри сеттера:
//         * Добавь проверку: 'if (newValue < 0)'.
//         * Если цена отрицательная: выведи в консоль
//             ошибку (напр. "Ошибка: Цена не может быть < 0")
//             и *прерви* выполнение (просто 'return').
//         * Если цена 'ok' (>= 0): присвой ее "внутреннему"
//             свойству: 'this._price = newValue'.

// 3.  **Добавить ГЕТТЕР 'price':**
//     * Создай метод 'get price() { ... }'.
//     * Он будет "перехватывать" попытки прочитать
//         значение (напр. 'console.log(product.price)').
//     * Он должен просто *возвращать* "внутреннее"
//         свойство: 'return this._price'.

// 4.  **Поправить 'constructor':**
//     * После того как ты "спрятал" 'this._price' (Шаг 1),
//         убедись, что в *конце* конструктора ты присваиваешь
//         начальное значение через СЕТТЕР:
//         'this.price = data.price' (а *не* 'this._price = data.price').
//     * Это нужно, чтобы даже начальная цена (из JSON)
//         прошла через твою проверку в сеттере!

// 5.  **Проверить 'getPriceDisplay()':**
//     * Убедись, что он по-прежнему использует 'this.price'
//         (теперь он будет вызывать твой ГЕТТЕР).

// 6.  **Тестирование:**
//     * В блоке "ТЕСТИРОВАНИЕ" внизу, раскомментируй
//         строки, чтобы проверить, что твой сеттер
//         правильно блокирует отрицательную цену
//         и пропускает корректную.
// */

// // --- РАБОЧАЯ ОБЛАСТЬ ---
// // (Модифицируй этот класс, следуя ТЗ)

// class Product {
//   constructor(data) {
//     this.id = data.id
//     this.name = data.name
//     this.price = data.price
//   }

//   getPriceDisplay() {
//     return `${this.price} руб.`
//   }

//   set price(newValue) {
//     if (newValue < 0) {
//         console.log("Ошибка: Цена не может быть < 0")
//         return
//     }
//     this._price = newValue
//   }

//   get price() {
//     return this._price
//   }
// }

// // --- ТЕСТИРОВАНИЕ ---
// // (Этот блок не трогай, он для проверки)

// console.log("--- ЗАДАЧА 3: Геттеры и Сеттеры ---")
// const parseProductData = JSON.parse(productDataJSON)
// const tShirt = new Product(parseProductData)

// console.log(`Начальная цена: ${tShirt.price}`) // Сработает ГЕТТЕР

// // 👇 Раскомментируй для Шага 6
// console.log("\nПопытка установить цену -500...")
// tShirt.price = -500
// console.log(`Цена после попытки сломать: ${tShirt.price}`)

// // 👇 Раскомментируй для Шага 6
// console.log("\nПопытка установить цену 2000...")
// tShirt.price = 2000
// console.log(`Цена после обновления: ${tShirt.price}`)

//////////////////////////////////////////////////////////////////////////////////////////////

// ЗАДАЧА 5

/*
--- Закрепление Get/Set (Чистый лист) ---

Сценарий:
Мы делаем класс 'UserProfile' для хранения данных 
пользователя.

--- 📝 ТЗ (Техническое Задание) ---

1.  **Класс 'UserProfile':**
    * Должен иметь `constructor(data)`, который 
        принимает объект (например, `{ name: "Анна", level: 5 }`).

2.  **Свойство 'name':**
    * 'name' — это обычное, публичное свойство.
    * Устанавливается в конструкторе: `this.name = data.name`.

3.  **Свойство 'level' (Защищенное):**
    * Мы хотим "защитить" 'level', чтобы он не мог
        быть ниже 1.
    * Для этого мы будем использовать 
        внутреннее свойство `this._level`.

4.  **Сеттер `set level(newValue)`:**
    * Должен проверять 'newValue'.
    * Если 'newValue < 1', он должен
        вывести в консоль ошибку
        (напр., "Ошибка: Уровень не может быть < 1")
        и *ничего не делать* (выйти).
    * Если 'newValue >= 1', он должен
        сохранить значение: `this._level = newValue`.
    * (Подсказка: не забудь про `Number.isInteger()`,
        уровень не должен быть дробным).

5.  **Геттер `get level()`:**
    * Должен возвращать `this._level`.

6.  **Конструктор (Важно!):**
    * Конструктор должен устанавливать 'name' напрямую.
    * Конструктор должен устанавливать 'level'
        **через СЕТТЕР** (`this.level = data.level`),
        чтобы начальное значение *сразу*
        прошло валидацию.
*/

// --- 💻 РАБОЧАЯ ОБЛАСТЬ ---
// (Твой код)

// class UserProfile {
//     constructor(data) {
//         this.name = data.name
//         this.level = data.level
//     }

//     set level(newValue) {
//         if (newValue < 1) {
//             console.log("Ошибка: Уровень не может быть < 1")
//             return
//         }
//         if (!Number.isInteger(newValue)) {
//             console.log("Ошибка: Уровень не может быть дробным чисом")
//             return
//         }

//         this._level = newValue
//     }

//     get level () {
//         return this._level
//     }
// }

// // --- Данные с "API" для 'UserProfile' ---

// const validUserJSON = `{ "name": "Анна", "level": 5 }`

// const invalidLevelUserJSON = `{ "name": "Игорь", "level": -2 }`

// const fractionalLevelUserJSON = `{ "name": "Светлана", "level": 3.5 }`

// const parseValidUser = JSON.parse(validUserJSON)
// const parseInvalidLevelUser = JSON.parse(invalidLevelUserJSON)
// const parseFractionalLevelUser = JSON.parse(fractionalLevelUserJSON)

// const userAnna = new UserProfile(parseValidUser)
// userAnna.level = 6
// const userIgor = new UserProfile(parseInvalidLevelUser)
// const userSvetlana = new UserProfile(parseFractionalLevelUser)

// console.log(userAnna.level)

///////////////////////////////////////////////////////////////

// ЗАДАЧА 6

/*
Методы Массивов (Чистый лист) ---

Сценарий:
Мы работаем с корзиной интернет-магазина.
У нас есть массив 'cartItems' (смотри ниже).

--- 📝 ТЗ (Техническое Задание) ---

1.  **Класс 'Cart':**
    * `constructor(items)`: Принимает массив 'cartItems'.
    * `getTotalPrice()`: 
        * Должен использовать `reduce()`.
        * Должен вернуть *общую* стоимость корзины
          (сумма всех `price * quantity`).
    * `getElectronics()`:
        * Должен использовать `filter()`.
        * Должен вернуть *новый массив* только с теми 
          товарами, у которых `category === 'electronics'`.
    * `getItemNames()`:
        * Должен использовать `map()`.
        * Должен вернуть *новый массив*
          (состоящий *только* из *названий* товаров).
    * `hasBooks()`:
        * Должен использовать `some()`.
        * Должен вернуть `true`, если в корзине 
          есть *хотя бы один* товар с
          `category === 'books'`, иначе `false`.
*/

// --- 💾 ДАННЫЕ (Входной массив) ---

const cartItems = [
  {
    id: 1,
    name: "Смартфон",
    price: 20000,
    quantity: 1,
    category: "electronics",
  },
  { id: 2, name: "Книга 'JS'", price: 1200, quantity: 2, category: "books" },
  {
    id: 3,
    name: "Наушники",
    price: 5000,
    quantity: 1,
    category: "electronics",
  },
  { id: 4, name: "Книга 'CSS'", price: 1000, quantity: 1, category: "books" },
  { id: 5, name: "Чехол", price: 500, quantity: 2, category: "accessories" },
];

// --- 💻 РАБОЧАЯ ОБЛАСТЬ ---
// (Твой код)

class Cart {
  // ...
}
