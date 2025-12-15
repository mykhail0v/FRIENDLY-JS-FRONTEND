// const buttonElement =
//   document
//     .body          // <body>
//     .children[0]   // <div class="box-1">
//     .children[0]   // <div class="box-2">
//     .children[0]   // <div class="box-3">
//     .children[0]   // <button id="myButton">

// console.log('Кнопка:', buttonElement)

// можно проще:

// const buttonElement = document.getElementById('myButton')

// console.log('buttonElement:', buttonElement)

///////////////////////////////////////////////////

// console.log('Кнопка:', myButton) // если в html id елемента указан в camel-case нотации, нам доступна глобальная переменная по его id // это не хорошая практика, т.к. можно напутать с значением переменных, лучше использовать метод выше

//////////////////////////////////////////////////////

// если не указан id:

// const buttonElement = document.querySelector('button') // css селектор

// const buttonElement = document.querySelector(
//   '.box-1 > .box-2 > .box-3 > *:not(div)'
// )

// console.log('Кнопка:', buttonElement)

//////////////////////////////////////////////////////

// если нужно получить доступ к нескольким элементам сразу:

// const listItemElements = document.querySelectorAll('.list .item') // если не найдёт элемент - получит пустой NodeList

// console.log('Элементы списка:', listItemElements)

// listItemElements.forEach((element) => {
//     console.log('Элемент списка:', element)
// })

////////////////////////////////////////////////////////

// ПОИСК ЭЛЕМЕНТА В КОНТЕКСТЕ ОТ ДРУГОГО DOM-ЭЛЕМЕНТА

// const wrapperElement = document.querySelector('.wrapper')
// console.log('wrapperElement:', wrapperElement)

// const listElement = wrapperElement.querySelector('.list')
// console.log('listElement:', listElement)

// const listItemElements = listElement.querySelectorAll('.item')
// console.log('listItemElements:', listItemElements)

// это может быть полезно, если контекс поиска слишком велик - оптимизация

///////////////////////////////////////////////////////////////

// НАХОЖДЕНИЕ БЛИЖАЙШЕГО РОДИТЕЛЬСКОГО ЭЛЕМЕНТА ПО СЕЛЕКТОРУ

// const thirdBoxElement = document.querySelector('.box-3')

// const firstBoxElement = thirdBoxElement.closest('.box-1')

// console.log('firstBoxElement:',firstBoxElement)

///////////////////////////////////////////////////////////////

// ПЕРЕЧЕСЛЕНИЕ СЕЛЕКТОРОВ

// const boxElements = document.querySelectorAll(`
//     .box-1,
//     .box-2,
//     .box-3
// `)

// console.log('boxElements:', boxElements)

///////////////////////////////////////////////////////////////

// СТАРЫЕ МЕТОДЫ ПОИСКА

// const formElements = document.getElementsByTagName('form')
// const radioGroupElements = document.getElementsByClassName('radio-group')
// const inputElements = document.getElementsByName('specialization') // перебрать их коллекции как массивы нельзя, только через клонирование в массив

// console.log('formElements:', formElements)
// console.log('groupElements:', radioGroupElements)
// console.log('inputElements:', inputElements)

// console.log('======================================')

// // Клонируем элемент <form>, добавляем в конце <body>
// const secondFormElement = formElements[0].cloneNode(true)
// document.body.appendChild(secondFormElement)

// console.log('formElements после:', formElements)
// console.log('groupElements после:', radioGroupElements)
// console.log('inputElements после:', inputElements)

///////////////////////////////////////////////////

// НЕЙМИНГ DOM-ЭЛЕМЕНТОВ

const linkElement = document.querySelector('a')
const link = 'https://aleksanderlamkov.ru/'

const listElement = document.querySelector('ul')
const list = [1, 2, 3, 4, 5]

const listItemElement = document.querySelector('li')
const formElement = document.querySelector('form')
const inputElement = document.querySelector('input')
const buttonElement = document.querySelector('button')

const linkElements = document.querySelectorAll('a')
const listElements = document.querySelectorAll('ul')
const listItemElements = document.querySelectorAll('li')
const formElements = document.querySelectorAll('form')
const inputElements = document.querySelectorAll('input')
const buttonElements = document.querySelectorAll('button')

/////////////////////////////////////////////////////////

// КАК ЛУЧШЕ НАХОДИТЬ ЭЛЕМЕНТЫ В DOM-ДЕРЕВЕ

// через классы лучше не искать, т.к. это они созданы для стилей. Лучше искать дерез data- атрибуты:

const sliderElement = document.querySelector('[data-js-slider]') // селектор по атрибуту пишется с квадратными скобками
const sliderListElement = document.querySelector('[data-js-slider-list]')
const sliderSlideElements = document.querySelectorAll('[data-js-slider-slide]')