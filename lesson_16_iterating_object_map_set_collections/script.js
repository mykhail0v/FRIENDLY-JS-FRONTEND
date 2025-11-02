// for in

// const user = {
//     name: 'Nikita',
//     age: 24,
//     city: 'Odessa',
// }

// for (const key in user) {
//     console.log('Имя свойства:', key)
//     console.log('Значение свойства:', user[key])
// }

////////////////////////////////////////////////////

// ПЕРЕБОР КЛЮЧЕЙ ОБЪЕКТА - Object.keys

// const user = {
//     name: 'Nikita',
//     age: 24,
//     city: 'Odessa',
// }

// const userKeys = Object.keys(user)

// console.log('userKeys:', userKeys)

// userKeys.forEach((key) => {
//     console.log('Имя свойства:', key)
// })

//////////////////////////////////////////////////////

// ПЕРЕБОР ЗНАЧЕНИЙ ОБЪЕКТА - Object.values

// const user = {
//     name: 'Nikita',
//     age: 24,
//     city: 'Odessa',
// }

// const userValues = Object.values(user)

// console.log('userValues:', userValues)

// userValues.forEach((value) => {
//     console.log('Значение свойства:', value)
// })

//////////////////////////////////////////////////////

// ПЕРЕБОР ПАР ОБЪЕКТА КЛЮЧ-ЗНАЧЕНИЕ - Object.entries

// const user = {
//     name: 'Nikita',
//     age: 24,
//     city: 'Odessa',
// }

// const userEntries = Object.entries(user)

// console.log('userEntries:', userEntries)

// // userEntries.forEach ((userEntry) => {
// //     const key = userEntry[0]
// //     const value = userEntry[1]

// //     console.log('Имя свойства:', key)
// //     console.log('Значение свойства:', value)
// // }) // можно записать через синаксис деструктурирующего присваивания

// userEntries.forEach(([key, value]) => {
//     console.log('Имя свойства:', key)
//     console.log('Значение свойства:', value)   
// })

////////////////////////////////////////////////////////

// ПРЕОБРАЗОВАНИЕ ПАР МАССИВА КЛЮЧ-ЗНАЧЕНИЕ В ОБЪЕКТ - Object.fromEntries

// const user = {
//     name: 'Nikita',
//     age: 24,
//     city: 'Odessa',
// }

// const userEntries = Object.entries(user)

// console.log('userEntries:', userEntries)

// const userEntriesFormatted = userEntries.map(([key, value]) => {
//     return [key.toUpperCase(), `~~~${value}~~~`]
// })

// // если надо из массива ключ-значение сделать объект - метод Object.fromEntries()

// const userFormatted = Object.fromEntries(userEntriesFormatted)

// console.log('userFormatted:', userFormatted)

////////////////////////////////////////////////////////////////

// СТРУКТУРА ДАННЫХ MAP

// const data = {}

// data[1] = 'Один как число'
// data['1'] = 'Один как строка'

// console.log('data:', data)

///////////////

// const data = new Map([
//     [1, 'Один как число'],
//     ['1', 'Один как строка'],
// ])

// console.log('data:', data)

///////////////

// добавление элементов динамически:

// const data = new Map()

// data.set(1, 'Один как число')
// data.set('1', 'Один как строка')

// console.log('data:', data)

// // // ПОЛУЧЕНИЕ ЭЛЕМЕНТА ИЗ MAP КОЛЛЕКЦИИ:

// console.log( data.get(1))
// console.log( data.get('1'))

////////////////////////////////////////////////////////////////////

// ПРОВЕРКА НА СУЩЕСТВОВАНИЕ ЭЛЕМЕНТА В MAP КОЛЛЕКЦИИ 

// const data = new Map()

// data.set('name', undefined)

// console.log( data.has('name')) // true

// ///////////

// // DELETE

// data.delete('name')

// console.log( data.has('name')) // false

////////////////////////////////////////////////////////////////////////

// ОЧИЩЕНИЕ ВСЕЙ MAP КОЛЛЕКЦИИ

// const data = new Map()

// data.set('name', 'Никита')
// data.set('age', 24)

// data.clear()

// console.log('data:', data)

// ////////////////////

// // РАЗМЕР MAP КОЛЛЕКЦИИ 

// console.log( data.size )

////////////////////////////////////////////////////////////////////////

// // ПЕРЕБОР MAP КОЛЛЕКЦИИ

// const data = new Map()

// data.set('name', 'Никита')
// data.set('age', 24)

// console.log('keys:', data.keys())
// console.log('values:', data.values())
// console.log('entries:', data.entries())

////////////////
// ЦИКЛ FOR OF  

// const data = new Map()

// data.set('name', 'Никита')
// data.set('age', 24)

// for (const key of data.keys()) {
//     console.log('key:', key)
// }

// for (const value of data.values()) {
//     console.log('value:', value)
// }

// for (const entry of data.entries()) {
//     console.log('entry:', entry)
// }

////////////////////////////////////////////////////////////////////////

// forEach у MAP

// const data = new Map()

// data.set('name', 'Никита')
// data.set('age', 24)

// data.forEach((value, key, map) => {
//     console.log('value:', value)
//     console.log('key:', key)
//     console.log('map:', map)
// })

////////////////////////////////////////////////////////////////////////

// ПРЕОБРАЗОВАНИЕ ИЗ OBJECT в MAP

// const obj = {
//     name: 'Nikita',
//     age: 24,
// }

// const map = new Map( Object.entries(obj) )

// map.forEach((value, key) => {
//     console.log(`${key}: ${value}`)
// }) // ВНИМАТЕЛЬНО!!! СНАЧАЛА ЗНАЧЕНИЕ, ПОТОМ КЛЮЧ!

////////////////////////////////////////////////////////////////////////

// ПРЕОБРАЗОВАНИЕ ИЗ MAP В OBJECT

// const map = new Map([
//     ['name', 'Nikita'],
//     ['age', 24],
// ])

// console.log(map)

// const obj = Object.fromEntries(map)

// console.log(obj)

//////////

// !! ПОМНИТЬ, ЧТО ОБЪЕКТ НЕ МОЖЕТ ХРАНИТЬ СВОЙСТВА С КЛЮЧАМИ НЕ В ВИДЕ СТРОКИ:

// const map = new Map ([
//     ['name', 'Nikita'],
//     ['age', 24],
//     ['1', 'Один как строка'],  
//     [1, 'Один как число'],
    
// ])

// const obj = Object.fromEntries(map)

// console.log(obj) // если Map коллекция содержит 2 пары ключ-значение, в одной паре число типа num, а в другой типа str, в объекте останется только одно ствойство, идущее последним

//////////////////////////////////////////////////////////////////

// Set 

// const set = new Set([1, 2, 2, 2, 3])

// console.log(set)


// const arr = [100, 100, 1000, 1000, 5000]
// const set = new Set(arr)

// console.log(set)

/////////////////////////////////////////////////////

// ДОБАВЛЕНИЕ ЗНАЧЕНИЙ В КОЛЛЕКЦИЮ SET

// const arr = []
// const set = new Set()

// arr.push('Nikita')
// arr.push('Nikita')
// arr.push('Nikita')

// set.add('Nikita')
// set.add('Nikita')
// set.add('Nikita')

// console.log(arr) // [ 'Nikita', 'Nikita', 'Nikita' ]
// console.log(set) // { 'Nikita' }

// set может содержать ТОЛЬКО УНИКАЛЬНЫЕ значения

//////////////////////////////////////////////////////////////

// ДРУГИЕ МЕТОДЫ SET (как у MAP)

// const set = new Set()

// set.add('Nikita')
// set.delete('Nikita')
// console.log(
//     `Содержит ли set значение 'Nikita':`,
//     set.has('Nikita')
// )

// set.add('Maxim')
// set.add('Alex')
// console.log(
//     'size после добавления двух элементов:',
//     set.size
// )

// set.clear()
// console.log(
//     'size после удаления двух элементов:',
//     set.size    
// )

/////////////////////////////////////////////////////////////////

// ПЕРЕБОР КОЛЛЕКЦИИ SET (как у MAP)

const set = new Set()

set.add('Nikita')
set.add('Maxim')

for (const key of set.keys()) {
    console.log('key:', key)
}

for (const value of set.values()) {
    console.log('value:', value)
}

for (const entry of set.entries()) {
    console.log('entry:', entry)
}

console.log('set values:')
set.forEach((value) => {
    console.log(value)
}) // эти странности у set существуют только для обратной совместимости с Map, что бы с обеими структурами данных можно было взаимодействовать одинаковым синтаксисом

















