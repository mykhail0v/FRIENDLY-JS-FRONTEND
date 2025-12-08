// console.log(window) // браузерное окружение

// const divElement = window.document.createElement('div')
// divElement.style.width = '100px'
// divElement.style.height = '100px'
// divElement.style.border = '2px solid red'
// window.document.body.appendChild(divElement)

// // window.document.querySelector('div').remove()

// window.document.addEventListener('click', (event) => {
//   console.log('Координаты клика:', `x: ${event.x}, y: ${event.y}`)
// })

// window.addEventListener("scroll", () => {
//   console.log('Координаты скролла:', window.scrollY)
// })

//////////////////////////////

// console.log(window)

// console.log(
//   'Мой браузер:',
//   window.navigator.userAgent,
// )

// console.log(
//   'Высота окна браузера:',
//   window.screen.height,
// )

// console.log(
//   'Текущий URL-адрес вкладки браузера:',
//   window.location.href,
// )

// console.log(
//   'Длина "истории" текущей сессии браузера',
//   window.history.length,
// )

////////////////////////////////////////

// /* Всё браузерное окружение */
// console.log(window)

// /* Основной JavaScript */
// console.log(window.Math)
// console.log(
//   window.Object.keys({ name: 'Александр', age: 28, })
// )
// console.log(window.Number('123'))
// console.log(window.Boolean(0))

// /* BOM (Browser Object Model) */
// console.log(window.navigator)
// console.log(window.screen)
// console.log(window.location)
// console.log(window.history)
// console.log(window.frames)
// console.log(window.fetch)
// console.log(window.XMLHttpRequest)

// /* DOM (Document Object Model) */
// console.log(window.document)

//////////////////////////////////////////////////

/**
 * BOM (Browser Object Model)
 */

// console.log('Информация о браузере:', window.navigator)
// console.log('Информация об экране:', window.screen)
// console.log('Информация об URL', window.location)
// console.log('Информация об истории текущей сессии', window.history)

// /* Сохранить данные в localStorage */
// window.localStorage.setItem('id', JSON.stringify({ id: 123 }))

// const id = JSON.parse(
//   /* Получить данные из localStorage */
//   window.localStorage.getItem('key-name')
// )

// /* Отправка на сервер GET-запроса и получение ответа */
// window.fetch('https://jsonplaceholder.typicode.com/users')
//   .then((response) => response.json())
//   .then((users) => console.log('Пользователи:', users))

///////////////////////////////////////////////

/**
 * DOM (Document Object Model)
 */

// console.log(window.document)

// console.dir(window.document)

///////////////////////////////////////////////

// ко всем сущностям объекта window можно обращаться без .window

// /* Всё браузерное окружение */
// console.log(window)

// /* Основной JavaScript */
// console.log(Math)
// console.log(Object.keys({ name: 'Александр', age: 28 }))
// console.log(Number('123'))
// console.log(Boolean(0))

// /* BOM (Browser Object Model) */
// console.log(navigator)
// console.log(screen)
// console.log(location)
// console.log(history)
// console.log(frames)
// console.log(fetch)
// console.log(XMLHttpRequest)

// /* DOM (Document Object Model) */
// console.log(document)

/////////////////////////////////////////

// если называть собственные переменные как названия сущностей в window - можно допустить ошибку:



// console.log('Ширина окна браузера:', innerWidth)
// console.log('Высота окна браузера:', innerHeight)

// const innerWidth = 10 //ошибка (её можно исправить, добавив перед точкой в первых выводах слово window)
// const innerHeight = 5

////////////////////////////////////////////
// const location = 'Kiev' //будет ошибка

console.log(
    'Текущий полный URL-адрес:',
    location.href // тут такое исправление ужже не сработает, поможет только подключение скрипта с типом "модуль"
) // ограничение на совпадение имён с именами из window действует только для глобальных сущностей    

const someFn = () => {
    const location = 'Kiev' // так ошибки нет

    console.log(
    'Текущий полный URL-адрес:',
    window.location.href // если обращение к location в той же области видимости что и одноимённая переменная - обязательно использовать слово window.!!!
    )
}

someFn()

// ЛУЧШЕ НЕ СОЗДАВАТЬ ОДНОИМЁННЫХ ПЕРЕМЕННЫХ С СВОЙСТВАМИ WINDOW, А ПРИ ОБРАЩЕНИИ К ЭТИМ СВОЙСТВАМ ВСЕГДА ПЕРЕД НИМИ ПИСАТЬ window.

// так же нельзя называть переменную словом document!!!
