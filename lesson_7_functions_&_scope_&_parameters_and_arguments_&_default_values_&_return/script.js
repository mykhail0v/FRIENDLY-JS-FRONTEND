// Встроенные в JS функции

// console.log('Привет из консоли!')

// const numberFromString = Number('100')
// const stringFromNumber = String(10)
// const booleanFromNull = Boolean(null)

// alert('Привет из alert')
// confirm('Подтверждение действия') 

// const answer = prompt('Введите ответ:')

// ФУНКЦИЯ

// function logHello() {
//     console.log('Привет')
//     console.log('Пока')
// }

// logHello()
// logHello()
// logHello()
// logHello()

// ОБЛАСТЬ ВИДИМОСТИ

// const message = 'Привет'

// function logMessage() {
//     const message = 'Привет' //если объявить переменную сдесь, и объявить её за функцией, JS выдаст ошибку, ибо переменная будет вне области видимости
//     console.log(message)
// }

// logMessage()

// console.log(`${message}, друг!`)

// const message = 'Глабальный привет!'

// function logMessage() {
//     const message = 'Локальный привет!' // эта переменная может выполняться только в пределах функции
//     console.log(message)

//     for (let i = 0; i < 3; i++) {
//         const message = `Итерация цикла №${i + 1}` // a эта доступна только внутри цикла
//         console.log(message)
//     }
// }

// logMessage()

// console.log(message)

// {
//     const number = 1
//     console.log(number)

//     {
        
//         console.log(number)
//         {
            
//             console.log(number) // любая локальная область видимости видит сущности с наружи
//         }
        
//     }
// }

// console.log(number) // из-вне к локальным сущностям обратиться нельзя, будет ошибка

// ФУНКЦИИ

// function logMessage(message, count) {
//     for (let i = 0; i < count; i++) {
//         console.log(message)
//     }
// }

// logMessage('Привет!', 3)
// logMessage('Пока', 2)

// const message = 'Привет'

// function logMessage(message, count) { // message тут - локальная переменная, которая неявно объявленна в параметрах функции (лучше называть эти переменные как-то иначе)
//     message = `(((${message})))`

//     for (let i = 0; i < count; i++) {
//         console.log(message)
//     }
// }

// logMessage(message, 3)
// console.log(message)

//лучше так 
// const globalMessage = 'Привет'

// function logMessage(message = 'Мяу', count = 1) { // 1 и мяу- значение по умолчанию
//     const messageFormatted = `(((${message})))`

//     for (let i = 0; i < count; i++) {
//         console.log(message)
//     }
// }

// logMessage(undefined, 3)
// console.log(globalMessage)

// const globalMessage = 'Привет'

// function logMessage(message = 'Мяу', count = 1) { // 1 и мяу - значение по умолчанию
//     const messageFormatted = `(((${message})))`

//     for (let i = 0; i < count; i++) {
//         console.log(message)
//     }
// }

// logMessage(undefined, 3) //что бы обратиться к первому значению по умолчанию

// function sumFiveNumbers(
//     num1 = 100,
//     num2 = 200,
//     num3 = 300,
//     num4 = 400,
//     num5,
// ) {
//     const sum = num1 + num2 + num3 + num4 + num5

//     console.log(`Сумма чисел равна ${sum}`)
// }

// sumFiveNumbers(
//     undefined,
//     undefined,
//     undefined,
//     undefined,
//     4              // что б такого не городить, параметры с значением по умолчанию лучше ставить в конце
// )

// // ВОЗВРАТ ЗНАЧЕНИЯ

// function sum(a, b) {
//     return a + b

//     console.log('Привет!') // следующие после return функции никогда не выполняться.
// }

// console.log(
//     sum(111, 222)
// )


// function getAgeType(age) {
//     if (typeof age !== 'number') {
//         return 'Возраст указан некорректно'
//     }

//     if (age < 1 || age > 125) {
//         return 'Такого возраста не может быть'
//     }

//     if (age < 18) {
//         return 'Несовершеннолетний'
//     }

//     return 'Взрослый'
// }

// console.log( getAgeType (125))

function getSecretMessage(name) {
    if (!name) return // проверка, что бы небыло тупости с undefined 
    return `O, а я тебя знаю! Ты же тот самый ${name}?`
}

console.log(
    getSecretMessage('Вася')
)