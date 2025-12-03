/*
Задача 1: Аналитика продаж (С подсказками)
Представь, что мы пишем админку для интернет-магазина. У нас есть массив заказов. Нужно получить общую выручку только с выполненных заказов (status: 'done'), сумма которых больше 50$.

Входные данные:

JavaScript

const orders = [
  { id: 1, status: 'pending', amount: 100 },
  { id: 2, status: 'done', amount: 200 },
  { id: 3, status: 'done', amount: 40 }, // Меньше 50, не считаем
  { id: 4, status: 'canceled', amount: 500 },
  { id: 5, status: 'done', amount: 150 },
]
Твоя задача: Написать функцию calculateRevenue(orders), которая:

Отберет только заказы со статусом 'done'.

Из них оставит только те, где amount > 50.

Посчитает сумму оставшихся заказов.

Вернет число (итоговую выручку).
*/

// const orders = [
//   { id: 1, status: 'pending', amount: 100 },
//   { id: 2, status: 'done', amount: 200 },
//   { id: 3, status: 'done', amount: 40 }, // Меньше 50, не считаем
//   { id: 4, status: 'canceled', amount: 500 },
//   { id: 5, status: 'done', amount: 150 },
// ]

// const caldulateRevenue = (orders) => orders
//                                         .filter(({status, amount}) => status === "done" && amount > 50)
//                                         .reduce((acc, {amount}) => amount + acc, 0)

// console.log(caldulateRevenue(orders))

//////////////////////////////////////////////////////

/*
    Задача 2: Имитация API (С подсказками)
Темы: Классы (17), Промисы (20), setTimeout (18), Обработка ошибок (19).

ТЗ (Техническое задание):

Создай класс FakeServer.

У него должен быть метод getData(id).

Метод должен возвращать Промис.

Внутри промиса используй setTimeout, чтобы сымитировать задержку сети в 1000 мс.

Логика ответа:

Если id — это число (typeof 'number'), промис должен успешно выполниться (resolve) с объектом: { id: id, status: 'success' }.

Если id — не число (например, строка или undefined), промис должен упасть с ошибкой (reject) с текстом: "Ошибка: ID должен быть числом".
*/

// class FakeServer {
//     getData(id) {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 if(typeof id === 'number') {
//                 resolve({id: id, status: 'success' })
//             } else {
//                 reject (`Ошибка: ID должен быть числом`)
//             }    
//             }, 1000);

//         })
//     }
// }

////////////////////////////////////////////////////////

/*
Задача 3 (Без подсказок): Использование класса
Тема: Async/Await + Try/Catch + Классы

Теперь, когда у нас есть рабочий класс FakeServer (считай, что он импортирован или написан выше), твоя задача — использовать его.

ТЗ:

Создай экземпляр класса FakeServer.

Напиши асинхронную функцию fetchUser.

Внутри функции попытайся получить данные для id: 101.

Выведи полученный ответ в консоль.

Оберни вызов в try...catch, чтобы если сервер вернет ошибку (или ты передашь туда строку вместо числа), мы увидели сообщение об ошибке в консоли.

Вызови эту функцию.
*/

// const server = new FakeServer()

// const fetchUser = async (id) => {
//     try {
//         console.log(`Ищу пользователя с id: ${id}...`)
        
//         const user = await server.getData(id)

//         console.log('Данные получены:', user)
//     } catch (error) {
//         console.warn('Произошла ошибка:', error)
//     }
// }

// fetchUser(101)
// fetchUser(10)
// fetchUser(50)
// fetchUser("text")

//////////////////////////////////////////////////////////////////

/*
Задача 4: Эстафета (С подсказками)
Легенда: У нас есть класс AuthService.

Сначала нужно проверить логин (checkLogin). Это занимает время.

Если логин верный, он возвращает userId.

Затем, используя этот userId, нужно получить права доступа (getPermissions).

Твой код (Я даю класс, ты пишешь функцию loginUser):

JavaScript

class AuthService {
  checkLogin(login) {
    return new Promise((resolve) => {
      console.log(`🔍 Проверяю логин: ${login}...`)
      setTimeout(() => {
        // Допустим, логин всегда верный и возвращает ID 777
        resolve(777) 
      }, 1000)
    })
  }

  getPermissions(userId) {
    return new Promise((resolve) => {
      console.log(`🔑 Ищу права для пользователя ${userId}...`)
      setTimeout(() => {
        resolve(['admin', 'editor'])
      }, 1000)
    })
  }
}

const auth = new AuthService()
*/

class AuthService {
  checkLogin(login) {
    return new Promise((resolve) => {
      console.log(`🔍 Проверяю логин: ${login}...`)
      setTimeout(() => {
        // Допустим, логин всегда верный и возвращает ID 777
        resolve(777) 
      }, 1000)
    })
  }

  getPermissions(userId) {
    return new Promise((resolve) => {
      console.log(`🔑 Ищу права для пользователя ${userId}...`)
      setTimeout(() => {
        resolve(['admin', 'editor'])
      }, 1000)
    })
  }
}

const auth = new AuthService()

// 👇 ТВОЯ ЗАДАЧА: Написать эту функцию
const loginProcess = async (loginName) => {
  await auth.checkLogin()
}

loginProcess('super_admin')
