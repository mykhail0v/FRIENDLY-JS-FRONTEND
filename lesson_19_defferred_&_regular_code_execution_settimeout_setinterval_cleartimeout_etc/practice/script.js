/*
    Задача 1. "Приветствие пользователя" (Easy)
Темы: Функции (стрелочные), интерполяция, условия, дефолтные параметры.

Представь, что мы делаем шапку сайта. Напиши стрелочную функцию generateWelcomeMessage, которая принимает два аргумента:

username (строка)

role (строка, по умолчанию должна быть 'guest')

Логика:

Если role равна 'admin', возвращаем строку: "Привет, босс [username]! Панель управления готова."

В любом другом случае возвращаем: "Привет, [username]! Рады видеть."

Используй шаблонные строки (интерполяцию).
*/

// const generateWelcomeMessage = (username, role = 'guest') => {
//     if (role === 'admin') {
//         return `Привет, босс ${username}! Панель управления готова.`
//     }
//     return `Привет, ${username}! Рады видеть.`
// }

/////////////////////////////////////////////////////////////////////////

/*
Задача 2. "Фильтр товаров" (Medium)
Темы: Массивы, методы массивов (filter, map), объекты.

У нас есть массив объектов (товары с бэкенда):

JavaScript

const products = [
  { id: 1, name: 'Mouse', price: 25, available: true },
  { id: 2, name: 'Keyboard', price: 100, available: false },
  { id: 3, name: 'Monitor', price: 250, available: true },
  { id: 4, name: 'Cable', price: 10, available: true }
]
Задание: Тебе нужно получить массив названий товаров, которые есть в наличии (available: true) и которые стоят дороже 20. Используй цепочку методов (filter, map). В итоге должен получиться массив строк: ['Mouse', 'Monitor'].
*/

// const products = [
//   { id: 1, name: 'Mouse', price: 25, available: true },
//   { id: 2, name: 'Keyboard', price: 100, available: false },
//   { id: 3, name: 'Monitor', price: 250, available: true },
//   { id: 4, name: 'Cable', price: 10, available: true }
// ]

// const availableProducts = products
//                                 .filter(({available, price}) => price > 20 && available)
//                                 .map(({name}) => name)

///////////////////////////////////////////////////////////////////////////////////

/*
"Исчезающее уведомление" (Medium+)
Темы: Классы, this, setTimeout.

Нам нужно смоделировать поведение всплывающего уведомления (Toast). Напиши класс Notification.

Конструктор принимает message (сообщение).

У класса есть метод show().

Сначала он выводит в консоль: Show: [твое сообщение]

Затем, через 2 секунды, он должен вывести в консоль: Hide: [твое сообщение]

Важно: Следи за контекстом this внутри таймера!
*/

///////////////////////////////////////////////////////////////////////////////

// class Notification {
//     constructor(message) {
//         this.message = message
//     }

//     show() {
//         console.log(`Show: ${this.message}`)
//         setTimeout(() => {
//             console.log(`Hide: ${this.message}`)
//         }, 2000)
//     }
// }

// const hello = new Notification('hello')
// hello.show()

////////////////////////////////////////////////////////////////////

/*
    Задача: "Генератор карточек пользователей" (Темы: Массивы (map), Строки, Объекты)

Представь, что мы получили JSON с пользователями. Тебе нужно превратить этот массив объектов в одну длинную строку, которая содержит HTML-код. Мы пока не вставляем это в реальную страницу, просто формируем строку.

Входные данные:

JavaScript

const users = [
  { id: 1, name: 'Alice', isAdmin: true },
  { id: 2, name: 'Bob', isAdmin: false },
  { id: 3, name: 'Charlie', isAdmin: false, },
]
Задание: Напиши функцию renderUsers(usersList), которая возвращает строку HTML.

Каждый пользователь должен быть обернут в <div class="user-card">...</div>.

Внутри должен быть <h3>Имя</h3>.

Если isAdmin: true, добавь внутри <span class="badge">Admin</span> (если false — не добавляй ничего).

Используй метод .map() и .join('') (чтобы склеить массив строк в одну строку).
*/

const users = [
  { id: 1, name: 'Alice', isAdmin: true },
  { id: 2, name: 'Bob', isAdmin: false },
  { id: 3, name: 'Charlie', isAdmin: false, },
]

const renderUsers = (usersList) => {
    return 
}