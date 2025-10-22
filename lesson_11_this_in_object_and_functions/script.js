// console.log('this глобальный:', this) // различные параметры страницы браузера и вспомогательные функции

// function fn() {
//     console.log('this в теле функции:', this)
// }

// fn()

/////////////////////////////////////////////////////

// const user = {
//     name: 'Никита',
//     age: 24,
//     logThis: function() {
//         console.log('this в теле метода объекта user:', this)
//         // console.log('this.name:', this.name)
//     },
//     address: {
//         city: 'Odessa',
//         zipcode: 123456,
//         logInnerThis: function () {
//             console.log('this в теле метода объекта address:', this)
//         },
//     },
// }

// user.logThis()
// user.address.logInnerThis()

/////////////////////////////////////////////////////////

// const user = {
//     name: 'Никита',
//     age: 24,
//     logThis: () => {
//         console.log('this в теле метода объекта user:', this)
//     },
// }

// user.logThis() // при обращении к this в СТРЕЛОЧНЫХ функциях как бы теряется контекст выполнения, и this всегда будет указывать на глобальный объект

///////////////////////////////////////////////////////

// const user = {
//     name: 'Никита',
//     age: 24,
//     logThis() { // приходиться использовать function declaration, можно сократить вот так <--
//         console.log('this в теле метода объекта user:', this)
//     },
// }

// user.logThis()

/////////////////////////////////////////////////////////

// НЕОБЫЧНОЕ ПОВЕДЕНИЕ THIS В РАЗНЫХ УСЛОВИЯХ

// const logName()

////////////////////////////////////////////////////////

// const calculator = {
//     read() {
//         this.a = Number(prompt('Введите первое число:', 0 ))  // для предвидения к num можно исползовать унарный + к промпт без внешних скобок
//         this.b = Number(prompt('Введите второе число:', 0 ))
//     },
//     sum() {
//         return this.a + this.b
//     },
//     mul() {
//         return this.a * this.b
//     },
// }

// calculator.read()
// console.log('calculator:', calculator)
// console.log('Сумма:', calculator.sum())
// console.log('Произведение:', calculator.mul())

///////////////////////////////

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this
  },
  down() {
    this.step--;
    return this
  },
  showStep() { // показывает текущую ступеньку
    console.log('Текущая ступенька:', this.step )
    return this
  }
}

ladder
    .up()
    .up()
    .down()
    .showStep()
    .down()
    .showStep(); // показывает 1 затем 0

// подобный вызов через точку называется ЧЕЙНИНГОМ от слова "цепЬ"
