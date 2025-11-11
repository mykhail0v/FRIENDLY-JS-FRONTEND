// class Student {
//     constructor(name, age, hasExperience) {
//         this.name = name
//         this.age = age
//         this.experience = hasExperience
//     }

//     logName() {
//         console.log(this.name)
//     }

//     isAdult() {
//         return this.age >= 18
//     }

//     isReadyToWork() {
//         return this.experience
//     }
// }

////////////////////////////////////////////////////////

// class Student {
//     planet = 'Земля'
//     country = 'Украина'
//     region

//     constructor(name, age) {
//         this.name = name
//         this.age = age
//     }

//     logAge() {
//         console.log(this.age)
//     }
// }

// const firstStudent = new Student('Вася', 21)
// const secondStudent = new Student('Петя', 18)

// console.log('firstStudent:', firstStudent)
// console.log('secondStudent:', secondStudent)

// console.log('Имя первого студента:', firstStudent.name)
// console.log('Имя второго студента:', secondStudent.name)

// firstStudent.logAge()
// secondStudent.logAge()

//////////////////////////////////////////////////////////

// ГЕТТЕРЫ И СЕТТЕРЫ

// class Student {
//     constructor(name, age) {
//         this.name = name
//         this.age = age

//         this._someSecretAction()
//     }

//     set city(value) {
//         const firstLetter = value[0].toUpperCase()
//         const fromSecondLetter = value.slice(1).toLowerCase()

//         this._city = `${firstLetter}${fromSecondLetter}` // символом подчёркивания в начале свойства принято выделять свойства и методы, которые предназначенны для использования только в рамках объекта или класса (из вне класса обращаться к этой сущности не стоит) 
//     }

//     get city() {
//         return `г. ${this._city}`
//     }

//     _someSecretAction() {
//         // приватный метод // если свойство или метод в начале своего имени имеет символ подчёркивания - использовать эту сущность вне тела объекта или класса не стоит.
//     }
// }

// const firstStudent = new Student('Вася', 25)

// firstStudent.city = 'odessa' // под капотом сработал сеттер

// console.log(firstStudent.city) // под капотом сработал геттер
// console.log(firstStudent._city) // можно, но это не корректно
/////////////////////////////////////////////////////////////\

// что бы точно полностью запретить доступ из-вне, можно использовать решётку вместо _

//  class Student {
//     #city = null

//     constructor(name, age) {
//         this.name = name
//         this.age = age
//     }

//     set city(value) {
//         const firstLetter = value[0].toUpperCase()
//         const fromSecondLetter = value.slice(1).toLowerCase()

//         this.#city = `${firstLetter}${fromSecondLetter}`
//     }

//     get city() {
//         return `г. ${this.#city}`
//     }

// }

// const firstStudent = new Student('Вася', 25)

// firstStudent.city = 'odessa' 

// console.log(firstStudent.city) 
// // console.log(firstStudent.#city) // теперь будет ошибка

// // елси нужно спрятать под капот класса или объекта какие-то сущности, используй символ # в начале имени сущности!

/////////////////////////////////////////////////////////////////////////////////

// СТАТИЧЕСКИЕ МЕТОДЫ И СВОЙСТВА. КЛЮЧИВОЕ СЛОВО STATIC

// class Student {
//     country = 'Ukraine'
    
//     constructor(name, age) {
//         this.name = name
//         this.age = age
//     }

//     logAge() {
//         console.log(this.age)
//     }
// }

// const firstStudent = new Student('Вася', 25)

// console.log('Страна:', firstStudent.country)
// firstStudent.logAge()

// console.log('Страна:', Student.country)
// Student.logAge() // будут ошибки в консоли. Что бы их избежать, используют static:

// class Student {
//     static country = 'Ukraine'
    
//     constructor(name, age) {
//         this.name = name
//         this.age = age
//     }

//     static logAge() {
//         console.log('какой-то текст') // this уже нельзя использовать =(
//     }
// }

// const firstStudent = new Student('Вася', 25)

// // console.log('Страна:', firstStudent.country)
// // firstStudent.logAge() // теперь это нельзя использовать

// console.log('Страна:', Student.country)
// Student.logAge() 

/////////////////////////////////////////////////////////////

// // НАСЛЕДОВАНИЕ КЛАССОВ

// class Person {
//     constructor(name, age) {
//         this.name = name
//         this.age = age
//     }

//     eat() {console.log('Ем...')}
//     sleep() {console.log('Сплю...')}
// }

// const exemplePerson = new Person('Василий', 30)

// // console.log('Имя:', exemplePerson.name)
// // console.log('Возраст:', exemplePerson.age)
// // exemplePerson.eat()
// // exemplePerson.sleep()

// class Developer extends Person {
//     writeCode() {console.log('Пишу код...')}

//     sleep() {
//         console.log('Сплю только днём...')
//         this.writeCode()
//     }
// }


// // const exampleDeveloper = new Developer('Михаил', 25)

// // exampleDeveloper.writeCode()
// // exampleDeveloper.eat()
// // console.log('Имя:', exampleDeveloper.name)
// // console.log('Возраст:', exampleDeveloper.age)
// // exampleDeveloper.sleep()

// class JavaScriptDeveloper extends Developer {
//     makeFrontend() {console.log('Пишу фронтенд...')}

//     eat() {
//         super.eat() // переиспользуем существующий в родительском классе код
//         console.log('Смотрю ютуб...')
//     }
// }

// const jsDeveloperExample = new JavaScriptDeveloper('Никита', 25)

// // jsDeveloperExample.writeCode()
// jsDeveloperExample.eat()
// // console.log('Имя:', jsDeveloperExample.name)
// // console.log('Возраст:', jsDeveloperExample.age)
// // jsDeveloperExample.sleep()
// // jsDeveloperExample.makeFrontend()

///////////////////////////////////////////////////////////////////

// ПЕРЕОПРЕДЕЛЕНИЕ КОНСТРУКТОРА В НАСЛЕДУЕМОМ КЛАССЕ

class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    eat() {console.log('Ем...')}
    sleep() {console.log('Сплю...')}
}

class Developer extends Person {
    constructor(name, age, experience) {
        super(name, age)
        this.experience = experience
    }
    writeCode() {console.log('Пишу код...')}

    sleep() {
        console.log('Сплю только днём...')
        this.writeCode()
    }
}

const developerExample = new Developer('Миша', 23, 5) // хотим добавить 3 параметр - годы опыта

console.log('Количество лет опыта:', developerExample.experience)


