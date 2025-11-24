// console.log('Начало кода...')

// const userDAta = undefined

// names.forEach((name) => {
//     console.log('Имя:', name)
// })

// console.log('Конец кода...')

/////////////////////////////////////////////////////////////////

// КОНСТРУКЦИЯ try catch 

// console.log('Начало кода...')

// try {
//     // пробуем выполнить код
//     const names = undefined

//     names.forEach((name) => {
//     console.log('Имя:', name)
// })
//     console.log('Это сообщение не выведется')
// } catch (error) {
//     // обрабатываем ошибку
//     console.log('Возникла ошибка:', error)
// }

// console.log('Конец кода...')

/////////////////////////////////////////////////////////

// try catch может отловить ошибки только в синтаксически коррегтном JS-коде

// console.log('Начало кода...') // код всего JS файла не будет выполнен
// try {
//     ~@&34r94r
// } catch (error) {
//     console.log('Возникла ошибка:', error)
// }

// console.log('Конец кода...')

//////////////////////////////////////////////////////////////////

// в блоке try нельзя поймать ошибку ассинхронного кода

// console.log('Начало кода...')

// try{
//     setTimeout(() => {
//         const names = undefined

//         names.forEach((name) => {
//             console.log('Имя:', name)
//         })
//     }, 3000)
// } catch (error) {
//     console.log('Возникла ошибка:', error)
// }

// console.log('Конец кода...')

////////////////

// что бы код отработал, надо try catch перенести в тело ассинхронной функции:

// console.log('Начало кода...')

//     setTimeout(() => {
//         try{
//             const names = undefined
            
//             names.forEach((name) => {
//             console.log('Имя:', name)
//         })
//         }
//         catch (error) {
//         console.log('Возникла ошибка:', error)
//         }

//         console.log('Конец кода...')
//     }, 3000)

/////////////////////////////////////////////////////////////

// об error:

// console.log('Начало кода...')

// try {
//     const names = undefined

//     names.forEach((name) => {
//         console.log('Имя:', name)
//     })
// } catch (error) {
//     console.log('full error:', error)
//     console.log('name:', error.name)
//     console.log('message:', error.message)
//     console.log('stack:', error.stack)
// }

// console.log('Конец кода...')

//////////////////////////////////////////////////////////////////

// console.log('Начало кода...')

// try {
//     // вставим код с ошибкой (висячая запятая в JSON)
//     const userJSON = `{
//         "name": "Nikita",
//         "age" : 25,
//     }`
//     const user = JSON.parse(userJSON)
// } catch (error) {
//     console.log('Возникла ошибка:', error)
// }

// console.log('Конец кода...')

///////////////////////

// THROW, КЛАСС ERROR

// бывает, что JS ошибку за ошибку не считает:

// console.log('Начало кода...')

// try {
//     const userJSON = `{
//         "age" : 25
//     }`
//     const user = JSON.parse(userJSON)
//     const {name, age} = user

//     if(!name) {
//         const errorMessage = 'Имя не заполнено!' // пробросим ошибку
        
//         throw new Error(errorMessage) // если делать не через класс,  в name, message и stack будет undefined
//     }

//     console.log(`
//         Привет, ${name}!
//         Твой возраст - ${age}, верно?
//     `)
// } catch (error) {
//     console.log('Возникла ошибка:', error)
//     console.log('name:', error.name)
//     console.log('message:', error.message)
//     console.log('stack:', error.stack)
// }

// console.log('Конец кода...')

///////////////////////////////////////////////////////

// FINALY  

try {
    // пытаемся выполнить код
} catch(error) {
   // обрабатываем возникшую ошибку 
} finally {
    // выполняем при любом раскладе
}

/////////////////////

try {
    const nameыЫ = ['a', 'b', 'c']

    names.forEach((name) => {
        console.log('Имя:', name)
    })
    console.log('Код в блоку try отработал успешно')
} catch (error) {
    console.log('Возникла ошибка:', error)
} finally {
    console.log('Выполнюсь в любом случае...')
}

                                          





















