const year = 2025

if (year === 2025) {
    console.log('Ура!')
    console.log('Сейчас самое подходящее время, что бы изучить JavaScript!')
} else if (year === 3000){
    console.log('Слишком поздно. Нейросеть заменила человечество :(')
} else {
    console.log ('Неизвестный год :/')
}

const year1 = 2025
let message1 = null

if (year1 === 2025) {
    message1 = 'Начинаю учиться!'
} else {
    message1 = 'Неизвестный год'
}

console.log(message1) // задачи с присвоением переменной через какие-дибо условия принято выполнять с использованием тернарного оператора

// ТЕРНАРНЫЙ ОПЕРАТОР
const year2 = 2025
const message2 = year2 === 2025
    ? 'Начинаю учиться!'
    : 'Неизвестный год :/'

console.log(message2);

const year3 = 3000
const message3 = year3 === 2025 
    ? 'Начинаю учиться!'
    : year3 === 3000
        ? 'Нейросети победили' // тут код становиться трудно читаемым, лучше использовать классическую конструкцию для больших сравнений
        : 'Неизвестный год :/'
console.log(message3);

// ЛОГИЧЕСКИЕ ОПЕРАТОРЫ
false || false // false // оператор "или"
true || false // true
false || true // true
true || true // true

const age = 17
const withParent = false

if (age > 18 || withParent) {
    console.log('Проходите')
} else {
    console.log('Несовершеннолетним вход закрыт')
}

const result = '' || false || null || undefined || 0 || 'Привет' || 'Пока'

console.log(result)

const result1 = null || '' || 100 || 200 || 300

console.log(result1)

// && - логический оператор "и"
console.log(false && false) // false
console.log(true && false) // false
console.log(false && true) // false
console.log(true && true) // true

const moneyInWallet = 5
const iceCreamPrice = 2
const isStoreOpen = true

if (iceCreamPrice < moneyInWallet && isStoreOpen) {
    console.log('Вот ваше мороженное!')
} else {
    console.log('Магазин закрыт :(')
} //8:10

const result2 = 'Привет' && true && 5 && null && 10

console.log(result2) // null

const result3 = 'Привет' && true && 5 && true && 10

console.log(result3) // 10

const age2 = 17
const isYoung2 = age2 < 18

isYoung2 && console.log('Покажите паспорт!') // такого напиписания лучше избегать и писать через if

if (isYoung2) {
    console.log('Покажите паспорт!')
}

//оператор "не"
console.log(!true) //false
console.log(!false) //true

console.log(!'') //true
console.log(!'Hello') //false
console.log(!0) //true
console.log(!111) // false

// применение два "не" используется для приведения любого выражения к булевому типу
console.log(!!0) //false
console.log(!!1) //true
console.log(!!'') //false
console.log(!!' ') //true  // лучше использовать вункцию Boolean

const name1 = 'Никита'
const age3 = 25
const hasMuchMoney = false
const hasGoodJob = false
const hasMotivation = true
const hasFreeTime = true

if (name1 !== "Никита") {
    console.log('Вы не Никита, позовите Никиту')
} else if(age < 16) {
    console.log ('Ущё рано думать о взрослой жизни')
}else if (
    !hasMuchMoney || 
    !hasGoodJob || 
    hasMotivation && hasFreeTime // у оператора "и" приоритет в вычеслениях больше, чем у оператора "или"
) {
    console.log('Никите нужно учить фронтенд')
}else {
    console.log (`
        Ты либо безумно богат, что можешь не работать до конца жизни, 
        либо у тебя и так хорошая работа, 
        либо тебе просто это не нужно :(    
    `)
}

// ОПЕРАТОР НУЛЕВОГО СЛИЯНИЯ
const a = undefined
const b = 100

const RESULT1 = a || b
const RESULT2 = a ?? b // оператор нулевого слияния проверяет,не является ли null или undefined операнд слева и возвращает его значение, в противном случае возвращает значение справа.

console.log(RESULT1) 
console.log(RESULT2)