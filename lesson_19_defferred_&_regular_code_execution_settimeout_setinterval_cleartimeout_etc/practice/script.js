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

// const users = [
//   { id: 1, name: 'Alice', isAdmin: true },
//   { id: 2, name: 'Bob', isAdmin: false },
//   { id: 3, name: 'Charlie', isAdmin: false, },
// ]

// const renderUsers = (usersList) => {
//     // const list = usersList.map(({name, isAdmin}) => { 
//     //     if (isAdmin) {
//     //         return `<div class="user-card"><h3>${name}</h3><span class="badge">Admin</span></div>`
//     //     }
//     //     return `<div class="user-card"><h3>${name}</h3></div>`
    
//         // можно сократить записью через тернарный оператор:

//     const list = usersList.map(({name, isAdmin}) => {
//         return `<div class="user-card">
//                     <h3>${name}</h3>
//                     ${isAdmin ? '<span class="badge">Admin</span>' : ''}
//                 </div>`
//     }).join('')
//     return `<div class="users-container">${list}</div>`


// }
// console.log(renderUsers(users))

///////////////////////////////////////////////////////////////

// ЗАДАЧА 6

/*
"Обратный отсчет" (Easy)
Тема: setInterval, clearInterval, условные конструкции.

Напиши функцию startCountdown(seconds).

Она принимает количество секунд (число).

Каждую секунду она пишет в консоль текущее число: 10, 9, 8...

Когда доходит до 0, она пишет "Поехали! 🚀" и останавливает таймер.

Важно: Не забудь сохранить ID таймера в переменную, чтобы потом передать его в clearInterval
*/

// const startCountdown = (seconds) => {
//     let counter = seconds
//     console.log(counter)
//     counter--
//     const intervalId = setInterval(() => {
//         if (counter < 0) {
//             clearInterval(intervalId)
//             console.log('Поехали!')
//         } else {
//             console.log(counter)
//             counter--
//         }
//     }, 1000);
// }

//  startCountdown(5)

////////////////////////////////////////////////////////////////////////////////

// ЗАДАЧА 7

/*
"Поиск сервера" (Medium)
Тема: Классы, this, setInterval, случайные числа.

Представь, что наше приложение пытается подключиться к серверу, который то работает, то нет.

Напиши класс ServerConnector.

Конструктор принимает maxRetries (сколько раз пытаться подключиться, например, 5).

Метод connect(), который запускает интервал (раз в 1 секунду).

Внутри интервала:

Увеличиваем счетчик попыток.

Пишем в консоль: Попытка соединения #${номер}...

Имитируем удачу: Math.random() > 0.8 (20% шанс успеха).

Если повезло: Пишем "Подключено!" и останавливаем интервал.

Если количество попыток превысило maxRetries: Пишем "Ошибка соединения: Сервер недоступен" и останавливаем интервал.

Подсказка для 2-й задачи: Чтобы остановить интервал внутри метода класса, тебе нужно где-то хранить его ID. Обычно это делают в this.intervalId.
*/

class ServerConnector {
    constructor (maxRetries) {
        this.maxRetries = maxRetries
    }

    connect() {
        let numberAttempt = 1
        const intervalId = setInterval(() => {
            console.log(`Попытка соединения #${numberAttempt}`)
            numberAttempt++
            if (Math.random() > 0.8) {
                console.log("Подключено!")
                clearInterval(intervalId)
            }
            if (numberAttempt > this.maxRetries) {
                console.log("Ошибка соединения: Сервер недоступен")
                clearInterval(intervalId)
            }
        }, 1000);
    }
}

const connecting = new ServerConnector(5)

connecting.connect()