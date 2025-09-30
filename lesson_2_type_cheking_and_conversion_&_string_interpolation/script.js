'use strict'

//примитивные типы данных
const name = 'Alex' //String
const age = 28 //Number
const isDeveloper = true //Boolean
const pover = 9999999999n //BigInt
const sign = Symbol() //Symbol
const something = undefined //undefined

//специальные типы данных
const user = {
    login: '123',
    password: 'qwerty',
} //Object

const data = null //Null

//строки
const greeting = "Hello"
const userName = 'Alex'
const goodbye = `Goodbye`

const message = `${greeting}, ${name}!` //интерполяция строк

console.log(message)

const a = 5
const b = 10
const sum = `Сумма а и b равна ${a+b}`

console.log(sum)

const message2 = `
    Это
    длинное
    сообщение
    на несколько
    строк`

//числа
const posX = 50
const posY = -100
const posZ = 1.55

const point = (posX + posY + posZ) * 2 / posX

console.log(point)

console.log ('Слово' / 100) //NaN

console.log(100 / 0) //Infinity

console.log(-100 / 0) //-Infinity

/*

    -9007199254740991 < number < 9007199254740991

*/

console.log(9900000000000091 + 1)
console.log(9900000000000091 + 2)

console.log(9900000000000091n + 1n)
console.log(9900000000000091n + 2n)//применение BigInt что бы не допустить коллизии

const number = 1_000_000_000//запись допустима

//булевые
const shouldLearnJs = true
const isAlreadyLate = false

const age1 = 38
const isChild = age1 < 18

console.log(isChild)

//Null
let data1 = null

console.log(data)

//Undefined
let name1 

console.log(name1)

// объект
const user1 = {
    name: 'Nick',
    age: 25,
    isDeveloper: true,
}

const numbers = [4, 8, 16, 23, 42]
const map = new Map()
const set = new Set()
const date = new Date()

console.log(typeof(numbers))
console.log(typeof(map))
console.log(typeof(set))
console.log(typeof(date))

//проверка типа

const message3 = 'Hello'

console.log(
    typeof message
)

console.log(
    typeof 100
)

console.log(
    typeof 100n
)

console.log(
    typeof true
)

console.log(
    typeof null //object (lol)
)

console.log(
    typeof undefined
)

console.log(
    typeof {}
)

console.log(
    typeof [1, 2] //object
)

console.log(
    typeof (111 + 222)
)


//преобразование типов данных - явные и неявные

//неявные
const num = 111
const str = '222'
const result = num + str

console.log(result)
console.log(typeof result)//string

console.log('16' / '8') //2
console.log(typeof ('16' / '8')) //number

//явные
const age3 = 11

console.log(age)
console.log(String(age))
console.log(typeof age)
console.log(typeof String(age))

const isAdult = false

console.log(isAdult)
console.log(String(isAdult))

const obj = {
    name: 'Alex'
}

console.log(
    String(obj)
) // [object Object]

const str2 = '1000'
const num2 = Number(str2)

console.log(num2)
console.log(typeof num2)

console.log(
    Number('точно-не-число')
) //NaN

console.log(
    Number('111-')
) //NaN

//преобразование булевых в числа

console.log(
    Number(true)
) //1

console.log(
    Number(false)
) //0

console.log(
    Number(null)
) //0

console.log(
    Number(undefined)
) //NaN

//Самые частоиспользуемые преобразования типов данных
console.log( Boolean(-1)) //true
console.log( Boolean(0)) //false
console.log( Boolean(1)) //true
console.log( Boolean(2)) //true

console.log( Boolean('Hello!')) //true
console.log( Boolean('0')) //true
console.log( Boolean(' ')) //true
console.log( Boolean('')) //false

console.log( Boolean('')) //false
console.log( Boolean(0)) //false

//преобразуються в false 
console.log( Boolean(0))
console.log( Boolean(NaN))
console.log( Boolean(''))
console.log( Boolean(null))
console.log( Boolean(undefined))

//Все остальные значения - в true