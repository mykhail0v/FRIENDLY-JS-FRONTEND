// массив - это НЕ тип данных, это коллекция

// const arr = [
//     'Привет',
//     100,
//     true,
//     () => console.log('Hello'),
//     {name: 'Nikita'},
//     [1, 2, 3, 4, 5],
// ] // как правило, в массиве хранят данные одного типа

// const names = ['Александр', 'Михаил', 'Василий']
// const ages = [28, 30, 32]
// const permissions = [true, false, false, false, true]

/////////////////////////////

// СОЗДАНИЕ 

// const arr = []
// const arr2 = new Array()

///////////////////////////

// МАССИВ - ЭТО ОБЪЕКТ 

// const arr = [
//     'Привет', // каждый элемент привязываеться к порядковому индексу
//     100,
//     true,
// ]

// console.log('arr:', arr)
// console.log('typeof arr:', typeof arr) // object

// // обращение к элементу по индексу
// console.log(arr[0]) // Привет
// console.log(arr[1]) // 100
// console.log(arr[999]) // undefined
// console.log(arr[-1]) // undefined

////////////////////

// // ОРАЩЕНИЕ К СВОЙСТВУ ОБЪЕКТА В МАССИВЕ 

// const arr = [
//     'Привет',
//     100,
//     true,
//     () => console.log('Hello'),
//     {name: 'Nikita'},
//     [1, 2, 3, 4, 5],
// ]

// console.log( arr[4].name) // Nikita
// console.log( arr[4]['name']) // Nikita

// // ОБРАЩЕНИЕ К ФУНКЦИИ

// arr[3]() // Hello

// // ОБРАЩЕНИЕ К ЭЛЕМЕНТУ ВЛОЖЕННОГО МАССИВА ПО ИНДЕКСУ

// console.log( arr[5][0]) // 1

///////////////////////////////////////////////////////////

// МНОГОМЕРНЫЕ МАССИВЫ (МАССИВ В МАССИВЕ)

// const matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
// ]

// console.log(matrix[2][1]) // 8

///////////////////////////////////////////////////////////

// ЗАМЕНА ЗНАЧЕНИЯ В МАССИВЕ ПО ИНДЕКСУ

// const arr = [
//     'Hello',
//     100,
//     true,
// ]

// console.log('arr before:', arr)

// arr[0] = 'Bye'
// arr[1] = 200
// arr[2] = false
// arr[3] = '1000' // ДОБАВЛЕНИЕ ЭЛЕМЕНТА В МАССИВ ПО КОНКРЕТНОМУ ИНДЕКСУ
// arr[100] = 'q' // если добавить элемент по индексу более, чем длинна массива, массив увеличиться до длины с этим индексом, а между этим элементом и предидущим будут х96 пустых мест

// console.log('arr after:', arr)

// console.log(arr.length) // 101

// console.log( arr[arr.length - 1]) // обращение к последнму элементу
// console.log( arr.at(-1)) // то же самое (первый с конца)

////////////////////////////////////////////////////////////

// БАЗОВЫЕ МЕТОДЫ ДЛЯ РАБОТЫ С МАССИВАМИ

// const letters = ['А', 'Б', 'В',]

// console.log('letters before:', letters)

// letters.push('Г', 'Д') // ДОБАВЛЕНИЕ ЭЛЕМЕНТОВ В КОНЕЦ МАССИВА

// console.log('letters after:', letters)

////////////////

// const letters = ['А', 'Б', 'В',]

// console.log('letters before:', letters)

// letters.unshift('Г', 'Д') // ДОБАВЛЕНИЕ ЭЛЕМЕНТОВ В НАЧАЛО МАССИВА

// console.log('letters after:', letters) // добавлять и удалять элементы с начала массива - дорого для производительности

/////////////////////////////////////////////////////////

// УДАЛЕНИЕ ЭЛЕМЕНТОВ С НАЧАЛА И С КОНЦА МАССИВА

// const letters = ['А', 'Б', 'В',]

// console.log('letters before:', letters)

// console.log(letters.pop()) // УДАЛЕНИЕ ЭЛЕМЕНТОВ С КОНЦА МАССИВА И ВОЗВРАТ ЗНАЧЕНИЯ УДАЛЁННОГО ЭЛЕМЕНТА

// console.log('letters after:', letters)

////////////////

// const letters = ['А', 'Б', 'В',]

// console.log('letters before:', letters)

// console.log(letters.shift()) // УДАЛЕНИЕ ЭЛЕМЕНТОВ С НАЧАЛА МАССИВА И ВОЗВРАТ ЗНАЧЕНИЯ УДАЛЁННОГО ЭЛЕМЕНТА

// console.log('letters after:', letters)

/////////////////////////////////////////////////////////////////

// МЕТОД ПРИВЕДЕНИЯ МАССИВА К СТРОКЕ 

// const arr = ['Привет', 100, true] // если привести к строке объект или функцию - будет беда

// console.log( arr.toString()) // Привет,100,true (не принимает аргуметы)

// console.log( arr.join(', ')) // (принимает аргументы)

////////////////////////////////////////////////////////////////

// const message = 'Один, два, три, четыре, пять'

// console.log(
//     message.split(', ').join(', ') // преобразование в массив и обратная склейка применяются для перебора значений массивов и каких-то манипуляций с ними
// )

////////////////////////////////////////////////////////////////

// КОПИРОВАНИЕ МАССИВОВ

// const arr1 = ['А', 'Б', 'В',]

// const arr2 = arr1 // так скопировать не получиться, т.к. arr2 будет хранить ссылку на arr1 (как объект)
// arr2[0] = '_'

// console.log('arr1:', arr1)
// console.log('arr2:', arr2)

/////////////////////////////////////

// const arr1 = ['А', 'Б', 'В',]

// const arr2 = []

// for (let i = 0; i < arr1.length; i++) {
//     arr2.push(arr1[i]) // СОЗДАЁМ ПОДЛИННУЮ КОПИЮ
// }

// console.log('arr1:', arr1)
// console.log('arr2:', arr2)

////////////////////////////////////

// ЛЕГЧЕ ЧЕРЕЗ SPREAD
 
// const arr1 = ['А', 'Б', 'В',]

// const arr2 = [...arr1]

// arr2[0] = '_'

// console.log('arr1:', arr1)
// console.log('arr2:', arr2)

//////////////////////////////////

// // МОЖНО И ЧЕРЕЗ SLICE

// const arr1 = ['А', 'Б', 'В',]

// const arr2 = arr1.slice()

// // arr2[0] = '_'

// console.log('arr1:', arr1)
// console.log('arr2:', arr2)

//////////////////////////////////

// SLICE ИСПОЛЬЗУЮТ ДЛЯ КОПИРОВАНИЯ ЧАСТИ МАССИВА

// const arr1 = ['А', 'Б', 'В',]

// const arr2 = arr1.slice(0, 2) // верхний индекс - НЕ ВКЛЮЧИТЕЛЬНО

// // arr2[0] = '_'

// console.log('arr1:', arr1)
// console.log('arr2:', arr2) // ['А', 'Б']

//////////////////////////////////

// SLICE ИСПОЛЬЗУЮТ ДЛЯ КОПИРОВАНИЯ ЧАСТИ МАССИВА

// const arr1 = ['А', 'Б', 'В',]

// const arr2 = arr1.slice(-1) //  один элемент с конца

// // arr2[0] = '_'

// console.log('arr1:', arr1)
// console.log('arr2:', arr2) // ['В']

///////////////////////////////////////////////////////////////////

// ОБЪЕДИНЕНИЕ МАССИВОВ

// const arr1 = ['А', 'Б']
// const arr2 = ['В', 'Г']

// const totalArr = [...arr1, ...arr2]

// console.log(totalArr) // ['А', 'Б', 'В', 'Г']

/////////////////////////

// МОЖНО И ЧЕРЕЗ CONCAT

// const arr1 = ['А', 'Б']
// const arr2 = ['В', 'Г']
// const arr3 = ['Д', 'Е']

// const totalArr = arr1.concat(arr2, arr3)

// console.log(totalArr) // ['А', 'Б', 'В', 'Г', 'Д', 'Е']

//////////////////////////////////////////////////////////////////

// СРАВНЕНИЕ МАССИВОВ

// const arr1 = ['А', 'Б']
// const arr2 = ['А', 'Б']

// // console.log(arr1 == arr2) // нельзя сравнивать на прямую, потому что массив - это объект, они сравниваються по ссылке

// const areArraysEqual = (array1, array2) => {
//     if (array1.length !== array2.length) {
//         return false
//     }

//     for (let i = 0; i < array1.length; i++) {
//         const value1 = array1[i]
//         const value2 = array2[i]

//         if (value1 !== value2) {
//             return false
//         }
//     }

//     return true
// }

// console.log( areArraysEqual( arr1, arr2)) // эта функция хороша ДЛЯ ПОВЕРХНОСТНОГО СРАВНЕНИЯ  

///////////////////

// ПРОВЕРКА НА МАССИВ ДЛЯ ГЛУБОКОГО СРАВНЕНИЯ 

const arr1 = ['А', 'Б', [], ]
const arr2 = ['А', 'Б', [], ]


const areArraysEqual = (array1, array2) => {
    if (array1.length !== array2.length) {
        return false
    }

    for (let i = 0; i < array1.length; i++) {
        const value1 = array1[i]
        const value2 = array2[i]

        const areValuesArrays = 
            Array.isArray(value1) && Array.isArray(value2)

        if (areValuesArrays) {
            if(!areArraysEqual(value1, value2)) {
                return false
            } else {
                continue
            }
        }

        if (value1 !== value2) {
            return false
        }
    }

    return true
}

console.log( areArraysEqual( arr1, arr2)) // для сравнений лучше использовать библиотеки





























