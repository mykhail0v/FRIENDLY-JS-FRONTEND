// json - javascript object notation - стандатисированный формат данных в виде javascript - объекта

/*
Строгие правила:

1. никаких undefined или функций внутри объекта

2. все строки и имена свойств обязательно в двойных кавычках

3. никаких висячих запятых.
*/

// const user = {
//     "name": "Никита",
//     "age": "25",
//     "city": "Одесса",
//     "address": {
//         "street": "ул. Дерибасовская, д. 1, кв. 3",
//         "zipcode": 123456
//     },
//     "todos": ["sleep", "eat", "work", "train", "learn"],
//     "hasCat": false,
//     "yacht": null
// }
// // что бы отправить данные на сервер - нужно их сначала привести к формату строки

// // const userDataAsString = user.toString()

// // console.log(userDataAsString) // не выйдет, будет [object Object]

// const userDataAsString = JSON.stringify(user) // уже можно отправлять на сервер

// console.log(userDataAsString)

// const parsedUserData = JSON.parse(userDataAsString) // для обратного действия

// console.log(parsedUserData) // если в json форматте будет ошибка - будет ошибка и в консоли, данные не распарсятся.

//////////////////////////////////////////////////////////////////////////

const user = {
    name: 'Nikita',
    sayHi() {
        console.log(`Привет, ${this.name}!`)
    },
    car: undefined,
}

const userDataAsString = JSON.stringify(user)
console.log(userDataAsString) // {"name":"Nikita"} - если будут функции или undefined, stringify их не преобразует

///////////////////////////////////////////////////////////////////////

// JSON формат так же может содержать в семе массив (ведь массив - это тип данных object)

const arr = [
    "Михаил",
    "Алевтина",
    "Аглая",
    "Гликерия"
]

console.log(typeof arr)