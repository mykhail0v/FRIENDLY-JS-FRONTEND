// синхронная функция:

// const wait = (ms, callback) => {
//     const now = new Date().getTime()

//     while (new Date().getTime() < now + ms) {
//         // ничего не делаем
//     }

//     callback()
// }

// console.log(1)
// wait(5000, () => console.log(2)) // блокирует выполнение дальнейшего кода на 5 сек
// console.log(3)

///////////////////

// ассинхронная:

// const wait = (ms, callback) => {
//     setTimeout(callback, ms)
// }

// console.log(1)
// wait(5000, () => console.log(2)) // не задерживает, выполняется позже следующего кода
// console.log(3)

///////////////////////////////////////

// событийный цикл создаёт очередь из всех ассинхронных задач

// // Синхронный код, выполняющийся сразу
// console.log('Начало программы')

// // Асинхронная операция с использованием setTimeout
// setTimeout(() => {
//   console.log('Асинхронная задача выполнена')
// }, 2000) // Задержка в 2 секунды

// // Синхронный код, выполняющийся сразу
// console.log('Конец программы')

//////////////////////////////////////////////////////////////////////

// КОЛБЭК-ФУНКЦИЯ вызывается в ответ на совершение определённого события

// setTimeout(() => {
//     console.log('Hello!') // это колбэк-функция
// }, 5000);

// // callback Hell:

// const makeRequest = (url, onSuccess) => { 
//     // ... 
// }

// const sellerId = 154

// // 1. Первый запрос: получаем продавца
// makeRequest(`/api/sellers/${sellerId}`, (seller) => {
//   // Получили продавца, берем ID его первого товара
//   const firstProductId = seller.productIds[0]

//   // 2. Второй запрос: получаем товар по этому ID
//   makeRequest(`/api/products/${firstProductId}`, (product) => {
//     // Получили товар, берем ID первого отзыва
//     const firstReviewId = product.reviewsIds[0]

//     // 3. Третий запрос: получаем отзыв по ID
//     makeRequest(`/api/reviews/${firstReviewId}`, (review) => {
//       // Наконец-то добрались до имени автора!
//       const authorName = review.author.name
//       console.log(authorName)
//     })
//   })
// })

////////////////////

// Эту функцию мы используем, чтобы имитировать сервер.
// Она принимает запрос и функцию (callback), которую вызовет, когда "данные придут".
// const fakeServerRequest = (url, callback) => {
//   console.log(`⏳ Запрос на ${url}...`)

//   setTimeout(() => {
//     console.log(`✅ Ответ от ${url} получен`)

//     // Имитируем разные ответы базы данных
//     let responseData = null
//     if (url === '/auth') responseData = { userId: 777, name: 'CyberPunk' }
//     else if (url === '/settings') responseData = { theme: 'dark', lang: 'ru' }
//     else if (url === '/notifications') responseData = ['Вам лайк', 'Скидка на пиццу']

//     // Вызываем колбэк и отдаем ему данные
//     callback(responseData)
//   }, 1000) // Задержка 1 секунда
// }

// // === НАЧАЛО АДА ===
// console.log('🚀 Приложение запускается...')

// // Шаг 1: Логинимся
// fakeServerRequest('/auth', (user) => {
//   console.log(`--> Шаг 1 завершен. Пользователь: ${user.name}`)

//   // Шаг 2: Получаем настройки для этого юзера
//   // ВАЖНО: Мы пишем это ВНУТРИ первого колбэка, потому что user доступен только здесь
//   fakeServerRequest('/settings', (settings) => {
//     console.log(`--> Шаг 2 завершен. Тема: ${settings.theme}`)

//     // Шаг 3: Грузим уведомления
//     fakeServerRequest('/notifications', (notifications) => {
//       console.log(`--> Шаг 3 завершен. Уведомлений: ${notifications.length}`)
      
//       // Тут мог бы быть 4-й шаг... и 5-й...
//       console.log('🏁 Всё загружено, можно показывать сайт!')
//     })
//   })
// })

// console.log('...Код после вызовов (выполнится ДО того, как придут ответы)')

////////////////////////

// const fn = () => {
//     console.log('Подготовка...')
//     setTimeout(() => {
//         console.log('Готово!')
//         setTimeout(() => {
//             console.log('Поехали!')
//         }, 2000);
//     }, 2000)
// }

// fn()

////////////////////////////////////////////////////

// что бы избежать ада с колбэкаами - существуют промисы

/**
 * Promise - специальный объект-надстройка
 * для работы с асинхронным кодом
 */

/**
 * Promise имеет 3 состояния:
 * pending - ожидание, исходное состояние
 * fulfilled - выполнено успешно, получен результат
 * rejected - выполненно с ошибкой
 */

/**
 * Основные методы Promise:
 * then() - обрабатывает fulfilled состояние 
 * catch() - обрабатывает rejected состояние
 */

// const promise = new Promise((fulfill, reject) => {
//     console.log('Начало, состояние pending...')

//     setTimeout(() => {
//         if(Math.random() > 0.5) {
//             fulfill('Ура, состояние fulfilled')
//         } else {
//             reject (
//                 'Увы, состояние rejected'
//             )
//         }
//     }, 3000);
// })

// promise
//     .then((successData) => {
//         console.log('Успех! Полученны данные:', successData)
//     })
//     .catch((errorData) => {
//         console.log('Ошибка. Получены данные:', errorData)
//     })
//     .finally(() => {
//         console.log('Код, выполняющийся в самом конце, независимо от результата.')
//     })

/////////////////////////////////////////////////////////

// можно записать тоже самое и без catch

// const promise = new Promise((fulfill, reject) => {
//     console.log('Начало, состояние pending...')

//     setTimeout(() => {
//         if(Math.random() > 0.5) {
//             fulfill('Ура, состояние fulfilled')
//         } else {
//             reject (
//                 'Увы, состояние rejected'
//             )
//         }
//     }, 3000);
// })

// promise
//     .then(
//         (successData) => {
//             console.log('Успех! Полученны данные:', successData)
//         },
//         (errorData) => {
//             console.log('Ошибка. Получены данные:', errorData)
//         }
//     )
//     .finally(() => {
//         console.log('Код, выполняющийся в самом конце, независимо от результата.')
//     })

///////////////////////////////////////////////////////////

// const makeRequest = (url, onSuccess) => { 
//     return new Promise((fulfill) => {
//         fulfill('Ура, состояние fulfilled')
//     })
// }

// const sellerId = 154

// makeRequest(`/api/sellers/${sellerId}`) 
//     .then((seller) => {
//         const firstProductId = seller.productIds[0]

//         return makeRequest(`/api/products/${firstProductId}`)
//     })
//     .then((product) => {
//         const firstReviewId = product.reviewsIds[0]

//         return makeRequest(`/api/reviews/${firstReviewId}`)
//     })
//     .then((review) => {
//         const authorName = review.author.name
//     })
//     .catch((error) => {
//         console.log(error)
//     })

///////////////////////////////////////////

    // альтернативный синтаксис

//////////////////////////////////////////

// async

// async function getSomething() {

// } // for function declaration

// const getSomething = async() => {

// } // for array function

// async function getSomething() {
//     return 'Привет!' // возвращает promise
// }

// getSomething()
//             .then((something) => {
//                 console.log(something)
//             })

////////////////////////////////////////////////////////

// avait - позволяет дождаться выполнение промиса, а уже затем продолжить работу
 
// async function getSomething() {
//     return new Promise((fulfill) => {
//         setTimeout(() => {
//             fulfill('Привет!')
//         }, 3000);
//     })
// }

// console.log('Начало')

// const something = await getSomething()

// console.log(something)

// console.log('Конец')

////////////////////////////////

const makeRequest = async (url, onSuccess) => { 
    return new Promise((fulfill) => {
        fulfill('Ура, состояние fulfilled')
    })
}

try {
    const seller = await makeRequest(`/api/products/${sellerId}`)
    const firstProductId = seller.productIds[0]

    const product = await makeRequest(`/api/products/${firstProductId}`)
    const firstReviewId = product.reviewIds[0]

    const review = await makeRequest(`/api/reviews/${firstReviewId}`)
    const authorName = review.author.name
} catch(error) {
    console.log(error)
}