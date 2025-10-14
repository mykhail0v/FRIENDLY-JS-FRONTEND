// ОБЪЕКТ - ССЫЛОЧНЫЙ ТИП ДАННЫХ

// const obj1 = { age: 10}
// const obj2 = { age: 10}
// console.log( obj1 == obj2) // будет false, потому что JS хранит не примитивные значения ПО ССЫЛКЕ НА МЕСТО В ПАМЯТИ. Под каждый объект будет собственная область в памяти, и каждому объекту будет уникальная ссылка

///////////////////////////////////////////

// const obj1 = {name: 'Александр'}
// const obj2 = obj1

// console.log( obj1 === obj2) // будет true, потому что ссылаються на одну и ту же область памяти

// obj2.name = 'Максим'

// console.log(obj1)

/////////////////////////////////////////

// СРАВНЕНИЕ ОБЪЕКТОВ

// const obj1 = {
//     name: 'Никита',
//     age: 28,
// }

// const obj2 = {
//     name: 'Никита',
//     age: 28,
// }

// const areObjectsEqual = (object1, object2) => {
//     const keys1 = Object.keys(object1) // этот метод собирает ключи объекта в массив
//     const keys2 = Object.keys(object2)


//     if(keys1.length !== keys2.length) {
//         return false
//     }

//     for (const key in object1) {
//         if (object1[key] !== object2[key]) {
//             return false
//         }
//     }

// /*
// Когда мы пытаемся получить значение по НЕСУЩЕСТВУЮЩЕМУ ключу в JavaScript, мы получаем undefined.

// В итоге сравнение выглядит так: 28 !== undefined.

// Это условие истинное!

// */

//     return true
// }

// console.log(
//     'Равны ли obj1 и obj2:', areObjectsEqual(obj1, obj2)
// ) // этот метод даёт возможность поверхностного сравнения

///////////////////////////////////////////////////////

// для глубокого надо применить метод рекурсии (когда функция вызывает саму себя):

// const obj1 = {
//     name: 'Никита',
//     age: 28,
//     address: {
//         city: 'Odessa',
//         zipcode: 123456,
//     },
// }

// const obj2 = {
//     name: 'Никита',
//     age: 28,
//     address: {
//         city: 'Odessa',
//         zipcode: 123456,
//     },
// }

// const areObjectsEqual = (object1, object2) => {
//     const keys1 = Object.keys(object1) 
//     const keys2 = Object.keys(object2)

//     console.log('keys1:', keys1)
//     console.log('keys2:', keys2)

//     console.log('Длина keys1:', keys1.length)
//     console.log('Длина keys2:', keys2.length)

//     if(keys1.length !== keys2.length) {
//         return false
//     }

//     for (const key in object1) {
//         const value1 = object1[key]
//         const value2 = object2[key]
//         const areValuesObjects = 
//             typeof value1 == 'object' && typeof value2 === 'object'

//         if (areValuesObjects) {
//             return areObjectsEqual(value1, value2)
//         }
//         if (value1 !== value2) {
//             return false
//         }
//     }

//     return true
// }

// console.log(
//     'Равны ли obj1 и obj2:', areObjectsEqual(obj1, obj2)
// )   // тут есть бага, чуть позже вернуться и решить

///////////////////////////////////////////////////////////////////

// КЛОНИРОВАНИЕ ОБЪЕКТА

// const obj1 = {name: 'Александр'}
// const obj2 = {}

// for (const key in obj1) {
//     obj2[key] = obj1[key]
// }

// console.log(obj2)

// obj2.name = 'Никита'

// console.log(obj2)
// console.log(obj1)

/////////////////////////////////////////////////////////////////////////

// можно то же самое так:

// const obj1 = {name: 'Александр'}
// const obj2 = Object.assign({}, obj1) // встроенный функционал JS // вторым, третьим и т.д. аргументом можно передать сколько угодно много объектов, и все их свойства будут записаны в целевой объект

// console.log(obj2)

// obj2.name = 'Никита'

// console.log(obj2)
// console.log(obj1)

////////////////////////////////////////////////////////////////////////

// SPREAD OPERATOR - короткий синтаксис для копирования объекта (оператор расширения)

// const obj1 = { name: 'Никита', age: 18,}
// const obj2 = {...obj1} ///

// console.log(obj2)

// obj2.name = 'Александр'

// console.log(obj2)
// console.log(obj1)

/////////////////////////////////////////////////////////////////////////////

//ОБЪЕДИНЕНИЕ ОБЪЕКТОВ

// const obj1 = {name: 'Никита'}
// const obj2 = {age: 24}
// const obj3 = {
//     name: 'Максим', // если в объединяемых объектах будут одинаковые названия свойств, значение последнего перезатрёт предидущие
//     isDeveloper: true,
// }

// const user = Object.assign({}, obj1, obj2, obj3)


// console.log('user:', user)

//////////////////////////////////////////////////////////////////////////////////

// можем и так:

// const obj1 = {name: 'Никита'}
// const obj2 = {age: 24}
// const obj3 = {
//     name: 'Максим',
//     isDeveloper: true,
// }

// const user = { ...obj1, ...obj2, ...obj3}


// console.log('user:', user)

//////////////////////////////////////////////////////////////////////////////////

// ПОВЕРХНОСТНОЕ И ГЛУБОКОЕ КОПИРОВАНИЕ

// const obj1 = {name: 'Никита'}

// const obj2 = {
//     age: 24,
//     address: {
//         city: 'Odessa'
//     },
// }

// const obj3 = {
//     name: 'Максим',
//     isDeveloper: true,
//     address: {
//         zipcode: 123456,
//     }
// }

// const user = { ...obj1, ...obj2, ...obj3}

// console.log('user:', user) // при объединении объектов с вложенными объектами запишется содержимое только последнего объекта. Для записи всех свойст нужно использовать сторонние библиотеки или собственные костыли(о них позже).

//////////////////////////////////////////////////////////////////////////////////////

// OPTIONAL CHAINING/ОПЦИОНАЛЬНАЯ ЦЕПОЧКА

// const user = {
//     name: 'Никита',
//     age: 24,
//     address: {
//         city: 'Odessa',
//         zipcode: 123456,
//     },
// }

// console.log(user.address?.city) // ?. значит: "если в объекте есть свойство с именем address и если это свойство - объект, обратись к свойству "city" этого объекта" (используеться довольно часто)

/////////////////////////////////////////////////////////////////

// const guest1 = {
//     name: 'Василий',
//     age: 30,
//     orderInfo: { // эти свойства опциональны (могут быть, а могут и не быть)
//         roomType: 2,
//         stayDates: { // эти свойства опциональны (могут быть, а могут и не быть)
//             from: '14.04.2024',
//             to: '21.04.2024', // эти свойства опциональны (могут быть, а могут и не быть)
//         }
//     },
// }

// const guest2 = {
//     name: 'Екатерина',
//     age: 25,
// }

// const logGuestInfo = (guest) => {
//     const chekoutDate = guest.orderInfo && guest.orderInfo.stayDates && guest.orderInfo.stayDates.to 
//         ? guest.orderInfo.stayDates.to
//         : null // это выражение можно упростить


//     console.log(`
//         Имя: ${guest.name}
//         Возраст: ${guest.age}  
//         Дата выезда: ${chekoutDate},  
//     `)
// }

// logGuestInfo(guest1)
// logGuestInfo(guest2)

///////////////////////////////////////////////

// вот так: 

// const guest1 = {
//     name: 'Василий',
//     age: 30,
//     orderInfo: { 
//         roomType: 2,
//         stayDates: { 
//             from: '14.04.2024',
//             to: '21.04.2024',
//         }
//     },
// }

// const guest2 = {
//     name: 'Екатерина',
//     age: 25,
// }

// const logGuestInfo = (guest) => {
//     console.log(`
//         Имя: ${guest.name}
//         Возраст: ${guest.age}  
//         Дата выезда: ${guest.orderInfo?.stayDates?.to ?? 'Не указана'},
//     `) // :) // (Опциональная цепочка + оператор нулевого слияния)
// }

// logGuestInfo(guest1)
// logGuestInfo(guest2)

////////////////////////////////////////////////////////

// ДЕСТРУКТУРИЗАЦИЯ ОБЪЕКТА 

// const user = {
//     name: 'Никита',
//     age: 24,
//     isDeveloper: true,
// }

// const name = user.name
// const age = user.age
// const isDeveloper = user.isDeveloper // эту запись можно сократить (ниже:)

// console.log('name:', name)
// console.log('age:', age)
// console.log('isDeveloper:', isDeveloper)

/////////////////////////////////////////////////////////////

// const user = {
//     name: 'Никита',
//     age: 24,
//     isDeveloper: true,
// }

// const { name, age, isDeveloper, address
//  } = user // можно и через let

// console.log('name:', name)
// console.log('age:', age)
// console.log('isDeveloper:', isDeveloper)
// console.log('address', address) // undefined

///////////////////////////////////////////////////////////////////

// ДЕСТРУКТУРИЗАЦИЯ В ПАРАМЕТРАХ ФУНКЦИИ

// const logAddress = (city, street, houseNumber, apartmentNumber) => {
//     console.log(`
//         Адрес:
//         г. ${city}, ул. ${street},
//         д. ${houseNumber}, кв. ${apartmentNumber}    
//     `)
// } // что бы не напутать параметры, используют объекты (пример ниже)

// logAddress('Odessa', 'Пушкинcкая', 21, 35)

////////////////////////////////////////////////////////////////////

// const logAddress = (address) => {
//     console.log(`
//         Адрес:
//          г. ${address.city}, ул. ${address.street},
//          д. ${address.houseNumber}, кв. ${address.apartmentNumber}
//     `)
// }

// logAddress( {
//     city: 'Odessa',
//     street: 'Пушкинская',
//     houseNumber: 21,
//     apartmentNumber: 35,
// }) // вот так, но можно сократить: 

///////////////////////////////////////////////////////////////////

// const logAddress = (address) => {
//     const { city, street, houseNumber, apartmentNumber} = address
//     console.log(`
//         Адрес:
//          г. ${city}, ул. ${street},
//          д. ${houseNumber}, кв. ${apartmentNumber}
//     `) // вот так, а можно ещё сократить, записав деструктуризацию обхекта при создании  прамаметров
// }

// logAddress( {
//     city: 'Odessa',
//     street: 'Пушкинская',
//     houseNumber: 21,
//     apartmentNumber: 35,
// })

/////////////////////////////////////////////////////////////////

// const logAddress = ({
//     city, 
//     street, 
//     houseNumber, 
//     apartmentNumber
// }) => {
//     console.log(`
//         Адрес:
//          г. ${city}, ул. ${street},
//          д. ${houseNumber}, кв. ${apartmentNumber}
//     `) // вот так (так лучше всего)
// }

// logAddress( {
//     city: 'Odessa',
//     street: 'Пушкинская',
//     houseNumber: 21,
//     apartmentNumber: 35,
// })

////////////////////////////////////////////////////////////////////////

// ДЕСТРУКТУРИЗАЦИЯ С ПЕРЕИМЕНОВАНИЕМ

// const user = {
//     name: 'Никита',
// }

// const admin = {
//     name: 'Boss'
// }

// const {name: userName } = user
// const {name: adminName} = admin

// console.log('userName:', userName)
// console.log('adminName:', adminName)

/////////////////////////////////////////////////////////////////////////

// ДЕСТРУКТУРИЗАЦИЯ СО ЗНАЧЕНИЕМ ПО УМОЛЧАНИЮ

// const user1 = {
//     name: 'Никита',
//     age: 24,
//     city: 'Odessa',
// }

// const user2 = {
//     name: 'Максим',
//     age: 5,
// }

// const {city = 'не указан'} = user1 // значение по умолчанию, если в объекте нет ожидаемого свойства (используется часто)

// console.log('Город:', city)

////////////////////////////////////////////////////////////////////////

// ДЕСТРУКТУРИЗАЦИЯ С ПЕРЕИМЕНОВАНИЕМ И ЗНАЧЕНИЕМ ПО УМОЛЧАНИЮ

// const user = {
//     city: 'Odessa'
// }

// const { city: userCity = 'Не указано' } = user

// console.log('userCity:', userCity)

///////////////////////////////////////////////////////////////////////////

// ОСТАТОЧНЫЕ параметры

// const logUser = (user) => {
//     const {name, age, city, ...otherInfo} = user // остаточные параметры можно прописать только в конце (часто используется на практике)


//     console.log(`
//         Имя: ${name}
//         Возраст: ${age}
//         Город: ${city} 
//     `)

//     console.log('Доп. инфа:', otherInfo)

// }

// logUser({
//     name: 'Никита',
//     age: 28,
//     city: 'Odessa',
//     company: 'Google',
//     jobPost: 'Frontend-developer',
//     yearsOfExperience: 10,
//     hasCat: true, 
// })
