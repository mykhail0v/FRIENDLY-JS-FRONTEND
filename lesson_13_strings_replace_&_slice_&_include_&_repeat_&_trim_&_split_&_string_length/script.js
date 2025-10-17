// ДЛИНА СТРОКИ

// const name = 'Александр'
// const emptyStr = ''
// const strWithOneSpace = ' '

// console.log(`Длина строки'${name}':`, name.length)
// console.log(`Длина строки'${emptyStr}':`, emptyStr.length)
// console.log(`Длина строки'${strWithOneSpace}':`, strWithOneSpace.length) // length - это свойство, а не метод

//////////////////////////////////

// ПОЛУЧЕНИЕ КОНКРЕТНОГО СИМВОЛА ИЗ СТРОКИ ПО ЕГО ИНДЕКСУ

// const name = 'Александр'

// console.log( name[0])
// console.log( name[1])
// console.log( name[name.length - 1]) // последняя

// at - метод

// console.log(name.at(0))
// console.log(name.at(1))
// console.log(name.at(-1)) // первый с конца
// console.log(name.at(-2))

// этими способами можно только получить символ по индексу, НО НЕ ИЗМЕНИТЬ ЕГО

////////////////////////////////////////////////////

// МЕТОДЫ ИЗМЕНЕНИЯ РЕГИСТРА СИМВОЛОВ СТРОКИ

// const text = 'КаКоЙтОтЕкСт'

// console.log( text.toLocaleLowerCase())
// console.log( text.toUpperCase())

////////////////////////////////////////////////////

// МЕТОД ИЗБАВЛЕНИЯ ОТ ПРОБЕЛОВ В НАЧАЛЕ И В КОНЦЕ

// const message = '   Привет!   '

// console.log(`
//     Строка "${message}" имеет длину ${message.length} символов    
// `)

// const messageFormated = message.trim() // если пробелы находяться не в начале и не в конце - обрезаться они уже не будут

// console.log(`
//     Строка "${messageFormated}" имеет длину ${messageFormated.length} символов    
// `)


// const messageFormatedBEfore = message.trimStart() // если пробелы находяться не в начале и не в конце - обрезаться они уже не будут

// console.log(`
//     Строка "${messageFormatedBEfore}" имеет длину ${messageFormatedBEfore.length} символов    
// `)


// const messageFormatedAfter = message.trimEnd() // если пробелы находяться не в начале и не в конце - обрезаться они уже не будут

// console.log(`
//     Строка "${messageFormatedAfter}" имеет длину ${messageFormatedAfter.length} символов    
// `)

//////////////////////////////////////////////////////

// ПОЛУЧЕНИЕ ПЕРВОГО ИНДЕКСА ПОДСТРОКИ В СТРОКЕ

// const message = 'Пробуем найти ~это выражение~ в этом предложениии'

// console.log(
//     message.indexOf('~это выражение~')
// )

// console.log(
//     message.indexOf('П')
// )

// console.log(
//     message.indexOf('фыфыфыфыфы') // -1
// )

// // проверка на наличие подстроки в строке:

// console.log(
//     message.indexOf('фыфыфыфыфы') !== -1 // false
// )

// console.log(
//     message.indexOf('П') !== -1 // true
// )

// // более удобный метод для решения той же задачи:

// console.log(
//     message.includes('~это выражение~')
// )

//////////////////////////////////////////////////

// ПРОВЕРКА НАЧАЛА И ОКОНЧАНИЯ СТРОКИ 

// const message = 'Начало и конец строки'

// console.log(message.startsWith('Нач')) // true
// console.log(message.endsWith('оки')) // true

///////////////////////////////////////////////////

// ВЫШЕУПОМЯНУТЫМ МОЖНО ЗАДАТЬ ВТОРОЙ АРГУМЕНТ - ИНДЕКС (НОМЕР ПОЗИЦИИ СИМВОЛА СТРОКИ С КОТОРОЙ БУДЕТ ПРОИСХОДИТЬ ПОИСК ВХОЖДЕНИЯ)

// const message = 'Привет'

// console.log( message.indexOf('ив', 4)) // -1
// console.log( message.includes('ив', 4)) // false
// console.log( message.startsWith('Пр', 0)) // true
// console.log( message.endsWith('ет', 3)) // false // тут указывается номер позиции, которая будет считаться концом строки
// console.log( message.endsWith('ет', message.length)) // true // так по умолчанию

///////////////////////////////////////////////////////////////////

// СПОСОБЫ ПОЛУЧИТЬ ПОДСТРОКУ ИЗ СТРОКИ (ОБРЕЗКА СТРОКИ)

// const str = 'JavaScript'

// console.log( str.substring(0, 4)) // Java

// console.log( str.substring(4)) // Script

// console.log( str.substring(4, 0)) // Java // тож работает, но запутывает, лучше не применять

// // slice не позволяет менять индексы местами:

// console.log( str.slice(0, 4)) // Java
// console.log( str.slice(4, 0)) // будет пустая строка

// console.log( str.slice(-6)) // slice может обрезать с конца (тут последние 6 символов) // substring бы не сработал

// console.log( str.slice(-6, -3)) // Scr
// console.log( str.slice(-3, -6)) // пустая строка

///////////////////////////////////////////////////////////////////

// REPEAT

// const str = 'JavaScript'

// console.log( str.repeat(3)) //JavaScriptJavaScriptJavaScript

///////////////////////////////////////////////////////////////////

// ЗАМЕНА ПОДСТРОКИ В СТРОКЕ 

// const message = 'Я изучаю бэкенд'

// console.log(
//     message.replace('бэкенд', 'фронтенд')
// )

// console.log(
//     message.replace('бэк', 'фронт')
// )

///////////////////////

// заменяет первое вхождение: 

// const message = 'Я изучаю бэкенд, но я ещё не знаю про бэкенд'

// console.log(
//     message.replace('бэкенд', 'фронтенд') // Я изучаю фронтенд, но я ещё не знаю про бэкенд
// )

// // что бы заменить все: 


// console.log(
//     message.replaceAll('бэкенд', 'фронтенд') // Я изучаю фронтенд, но я ещё не знаю про фронтенд
// )

// // можно через replace и регулярное выражение:

// console.log(
//     message.replace(/бэкенд/g, 'фронтенд') // Я изучаю фронтенд, но я ещё не знаю про фронтенд
// )

////////////////////////////  

// через регулярное выражение без учёта регистра:

// const message = 'Я изучаю бэкенд, но я ещё не знаю про бЭкеНД'

// console.log(
//     message.replace(/бэкенд/gi, 'фронтенд') // Я изучаю фронтенд, но я ещё не знаю про фронтенд
// )

/////////////////////////////////

// ЗАМЕНА ВСЕХ ЦИФР ЧЕРЕЗ РЕГУЛЯРНЫЕ ВЫРАЖЕНИЯ

// const str = '+3 (989) 888-77-55'

// console.log(
//     str.replace(/\d/g, '#') // +# (###) ###-##-##
// )

////////////////////////////////////////////////////////////////////////

// РАЗБИЕНИЕ СТРОКИ НА МАССИВ ПО УКАЗАННОМУ РАЗДЕЛИТЕЛЮ

// const str = 'Привет, мир!'

// console.log(
//     str.split(', ')
// )

////////////////////////////////////////////////////////////////////////

// МУТАБЕЛЬНОСТЬ И ИММУТАБЕЛЬНОСТЬ

// ВСЕ ВЫШЕУПОМЯНУТЫЕ МЕТОДЫ НЕ МУТИРУЮТ ИСХОДНУЮ СТРОКУ

// const message = '  Привет!  '

// console.log(`
//     Сообщение до:
//     "${message}"    
// `)

// message.trim()
// message.toUpperCase()
// message.slice(0, 4)

// console.log(`
//     Сообщение после:
//     "${message}"    
// `) // без изменений

///////////////////

// что бы мутабельность заработала:

// let message = '  Привет!  '

// console.log(`
//     Сообщение до:
//     "${message}"    
// `)

// message = message.trim()
// message = message.toUpperCase()
// message = message.slice(0, 4)

// console.log(`
//     Сообщение после:
//     "${message}"    
// `)

// // можно записать синтаксисом чейнинга

// message = message
//     .trim()
//     .toUpperCase()
//     .slice(0, 4)

// console.log(`
//     Сообщение после:
//     "${message}"    
// `)
    
///////////////////////////////////

// ЗАДАЧА НА МЕТОДЫ СТРОК 

// const value = prompt(' Введите ваше имя:')

// const clearValue = value.trim().toLowerCase()

// if (clearValue.length === 0) {
//     alert('Oшибка! Имя не может быть пустым.')
// }

// if (clearValue.includes('админ')) {
//     alert('Ошибка! Вы не можете занять это имя.')
// }

