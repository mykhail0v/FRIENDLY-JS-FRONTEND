//бинарные операторы
console.log(2 + 2)
console.log(10 - 1)
console.log(5 * 10)
console.log(100 / 25)

console.log(2 ** 10)//возведение в степень

console.log(13 % 5) // 3 остаток от деления
console.log(5 % 2) // 1

//унарный оператор
console.log(-10)

console.log(5 * -2 + 10 / -3) //унарные слитно, бинарные через пробел

console.log(
    typeof Number('123')
)

console.log(
    typeof +'123'
) //унарный плюс приводит к числу

//оператор унарного плюса можно использовать со значениями любого типа данных
console.log( +true)
console.log( +false)
console.log( +'123')
console.log( +' ')
console.log( +'')
console.log( +null)
console.log( +undefined)

console.log(
    '5' + '3'
) //конкатенация

console.log(
    +'5' + +'3'
) //унарные операторы работают раньше, чем бинарные

const result = 1 + -2 - 3 * +'4' / 5 ** 2

/*
    1 + -2 - 3 * 4 / 5 ** 2
    1 + -2 - 3 * 4 / 25
    1 + -2 - 12 / 25
    1 + -2 - 0.48
    -1 - 0.48
    -1.48
*/

console.log(result)

let count = 1

count += 2 //count = count + 2

console.log(count)

let count2 = 1

count2 += 2 // conunt2 = count2 + 2
count2 -= 5 // conunt2 = count2 - 5
count2 *= 10 // conunt2 = count2 * 10
count2 /= 3 // conunt2 = count2 / 3

console.log(count2)

let message = 'Привет'

message += ', друг!' // комбинированные операторы присваивания работают с конкатенацией строк
message += 'Как дела?'

console.log(message)

let count3 = 10

count3--  // Дикремент - уменьшение значения переменной на единицу

console.log(count3)

count3++ // Инкремент -увеличение на 1

console.log(count3)

count3++
count3++
count3++ // суммируються

console.log(count3)

count3++ // постфиксная форма записи

++count3 // префиксная форма

console.log(count3)


let count4 = 10
let newCount4 = ++count4 // js сразу изменил значение "count" и присвоил его переменной

console.log(count4) // 11
console.log(newCount4) // 11

let count5 = 10
let newCount5 = count5++ // js сначала присвоил актуальное значение "count" переменной,  а потом увеличил это значение

console.log(count5) // 11
console.log(newCount5) // 10

//операторы сравнения
console.log(5 > 3) // true
console.log(10 < 1) // false
console.log(5 >= 5) // true
console.log(3 <= 0) // false

console.log(5 == 5) // true - сравнение 2 операнда на еквивалентность
console.log(5 != 5) // false 

// сравнение строк 
console.log('а' < 'б') // сравниваеться по номеру Юникода
console.log('ы' > 'f')
console.log('JavaScript' > 'Java')

// не строгое сравнение
console.log(2 == '2') // true
console.log('3' == 3) // true

// строгое сравнение
console.log(2 === '2') // false
console.log('3' === 3) // false

console.log(5 !==10 ) // true лучше пользоваться строгим