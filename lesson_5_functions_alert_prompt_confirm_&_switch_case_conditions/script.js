// ALERT

// alert('Hello!') // можно вывести одну сущность

// const message = 'Привет из message'

// alert(message)

// alert(1 + 2 + 3)

// alert ('HEllo 1')
// console.log('Hello 2')
// alert ('HEllo 3')
// console.log('Hello 4')


//PROMPT
// const userAge = prompt('Сколько тебе лет?', 18)  // всё введённое пользователем в промпте приводиться к строке

// // console.log(`Возраст ${userAge}`)

// if (userAge >=18) {
//     console.log('Доступ разрешён')
// } else {
//     console.log ('Доступ запрещён')
// }

// const userAge1 = Number(prompt('Сколько тебе лет?', 18)) // можно было использовать +, но лучше Number  

// if (userAge1 === 0) {
//     console.log('Такого возраста не может быть!')
// } else {
//     console.log(`Твой возраст: ${userAge}`)
// }

//CONFIRM
// const isUserReady = confirm('Ты готов?') // результат всегда true или false

// if (isUserReady) {
//     console.log('Начинаем!')
// } else {
//     console.log ('Ладно, подождём...')
// }

//SWITCH CASE
const age = +prompt('Сколько тебе лет?')

// switch (age) {
//     case 0: {
//         console.log('Такого возраста не бывает!')
//         break
//     }
//     case 18: {
//         console.log('Не верю, покажи паспорт.')
//         break
//     }
//     case 1000: {
//         console.log ('Вампир, что ли?')
//         break
//     }
//     default: {
//         console.log(`Твой возраст ${age}`)
//     }
// }

switch (true) {
    case age < 1: {
        console.log('Такого возраста не бывает!')
        break
    }
    case age === 18: {
        console.log('Не верю, покажи паспорт.')
        break
    }
    case age > 0 && age <= 125: {
        console.log (`Твой возраст ${age}`)
        break
    }
    case age > 125: {
        console.log('Вампир, что ли?')
        break
    }
    default: {
        console.log('Возраст введён некорректно')
    }
}
