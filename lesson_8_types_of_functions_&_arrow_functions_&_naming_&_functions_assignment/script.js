// СПОСОБЫ ОБЪЯВЛЕНИЙ ФУНКЦИЙ И ИХ ОСОБЕННОСТИ 

// FUNCTION DECLARATION

// console.log(sum(2, 3)) //function declaration можно использовать до её объявления в коде (такая механика называется "поднятие", или "хоистинг")

// function sum(a, b) {
//     return a + b
// }

/////////////////////////////////////////////

// function logMessage () {
//     console.log('Привет!')
// }

// function logMessage () {
//     console.log('Пока!')
// }

// logMessage() //function declaration можно перезаписать

//////////////////////////////////////////////

// function logMessage () {
//     console.log('Привет!')
// }

// logMessage()

// function logMessage () {
//     console.log('Пока!')
// }

//////////////////////////////////////////////

// function logAll() {
//     console.log(arguments)  // в function declaration мы можем получить доступ к неявной переменной arguments
// }

// logAll ('Привет', 555, false)

//////////////////////////////////////////////

// FUNCTION EXPRESSION

// const logHello = function () {
//     console.log('Привет!')
// }  // такую функцию нельзя переопределить (Однако, если объявить переменную через let, то можно)

// logHello() // function expression нельзя изпользовать ДО её объявления

//////////////////////////////////////////////

//ARROW FUNCTION

// const logHello = () => {
//     console.log('Привет!')
// }

// logHello()

/////////////////////////////////////////////

// //отличия
// const logSum = (a, b) => {
//     console.log(a + b)
// } // arrow function НЕ имеют доступа к неявной переменной arguments

// logSum(1, 2) // arrow function нельзя изпользовать ДО её объявления

// // в arrow function нет своего контекста, ключевое слово this покажет на родительскую область видимости

////////////////////////////////////////////////////

//особенности

// const sum = (a, b) => {
//     return a + b
// }

// console.log( sum(1, 2))

///////////////////////////////////////////////////

// const sum = (a, b) => a + b  // неявный возврат из функции, если записать в одну строку

// console.log( sum(1, 2))

//////////////////////////////////////////////////

// const doSomething = (num) => num % 2 === 0 ? num / 2 : (num + 1) / 2

/////////////////////////////////////////////////

// const doSomething = (num) => {
//     const isEven = num % 2 === 0  // сложные выражения лучше записывать полностью, чтобы было читабельно

//     return isEven ?
//         num / 2 :
//         (num + 1) / 2
// }

////////////////////////////////////////////////

// ФУНКЦИЯ КАК ЗНАЧЕНИЕ

// function fn1() {
//     return 'Я функция fn1'
// }

// const fn2 = function() {
//     return 'Я функция fn2'
// }

// const fn3 = () => {
//     return 'Я функция fn3'
// }

// console.log(fn1) // без круглых скобок справа вызов функции не работает, вместо этого покажется её содержимое
// console.log(fn2())
// console.log(fn3)

////////////////////////////////////////////////

// const fn1 = () => {
//     return 'Я функция fn1'
// }

// const fn2 = fn1

// console.log(fn2())

/////////////////////////////////////////////////

// CALLBACK FUNCTION

// const logMessage = (actionBefore, actionAfter) => {
//     actionBefore()
//     console.log('Привет!')
//     actionAfter()
// }

// const fn1 = () => console.log('before')
// const fn2 = () => console.log('after')

// logMessage(fn1, fn2)

// logMessage(
//     () => console.log('before'),
//     () => console.log('after')  // callback function - очень частый приём в JavaScript
// )

// logMessage (
//     console.log('before'),
//     console.log('after') // такая запись выведет ошибку, потому что аргументы вычисляются до выполнения функции и неявно возвращают значение undefined
// )

//////////////////////////////////////////////////

// ВОЗВРАТ ДРУГОЙ ФУНКЦИИ

// const validate = (hasAccess) => {
//     if (hasAccess) {
//         return () => console.log('Доступ разрешён :)')
//     } else {
//         return () => console.log('Доступ запрещён :(') // этот код можно упростить и убрать else
//     }
// }

// const logMessage = validate (true)

// logMessage()

////////////////////////////////////////////////////


// const validate = (hasAccess) => {
//     if (hasAccess) {
//         return () => console.log('Доступ разрешён :)')
//     } //  вот так
//         return () => console.log('Доступ запрещён :(') 
    
// }

// const logMessage = validate (false)

// logMessage()

//////////////////////////////////////////////////////

//ещё упростим

// const validate = (hasAccess) => {
//     if (hasAccess) {
//         return () => console.log('Доступ разрешён :)')
//     } //  вот так
//         return () => console.log('Доступ запрещён :(') 
    
// }

// const logMessage = validate (false)

// logMessage()

//////////////////////////////////////////////////////

// и ещё

const validate = (hasAccess) => hasAccess 
    ? () => console.log('Доступ разрешён :)')
    : () => console.log('Доступ запрещён :(')

const logMessage = validate(false)

logMessage() // помним, что главное не упростить, а привести к тому виду, в котором код удобно читать

// NAMING ФУНКЦИЙ

/*
   Глаголы-префиксы для функций:
   
    get - получить какое-то значение
    set - установить какое-то значение
    create - создать какую-то сущность
    update - обновить какую-то сущность
    delete - удалить какую-то сущность
    show - показать что-то
    hide - скрыть что-то
    search - найти что-то
    calc - вычислить что-то
    check - проверить что-то
    */

// const getPi = () => 3.14
// const setWeather = (weather) => {/* ... */}
// const createUser = (user) => {/* ... */}
// const updateUser = (id) => {/* ... */}
// const deleteUser = (id) => {/* ... */}
// const showMenu = () => {/* ... */}
// const hideMenu = () => {/* ... */}
// const searchProducts = () => {/* ... */}
// const calcSum = (a, b) => a + b
// const cheskAge = () => age > 18

///////////////////////////////////////////////////////////////////////////

// НАЗНАЧЕНИЕ ФУНКЦИЙ

// const someAction = () => {
//     console.log('Привет!')
//     console.log(555)
//     console.log(true)
// }

// someAction()
// someAction()
// someAction() // функция позволяет переиспользовать код множество раз

/////////////////////////////////////////////////////////////////////////

// document.querySelector('.button').addEventListener('click', () => {
//     document.querySelector('.menu').classList.add('is-active')
// }) //можно упростить, создав функцию

///////////////////////////////////////////////////////////////////////////

// const showMenu = () => {
//     document.querySelector('.menu').classList.add('is-active')
// }

// document.querySelector('.button').addEventListener('click', () => {
//     showMenu()
// }) //вот так

////////////////////////////////////////////////////////////////////////////

// Желательно что бы функция выполняла одно действие, указанное в её названии

// const getPi = () => {
//     // alert('Какой-то текст') // лишнее действие

//     return 3.14
// }

// console.log( getPi())

/////////////////////////////////////////////////////////////////////////////

const alertWarn = () => {
    alert('Какой-то текст')
}

const getPi = () => {
    return 3.14
}

alertWarn()
console.log( getPi()) // лучше так, так код читаеться намного удобнее