// console.dir(document)
// console.log(document.documentElement)
// console.log(document.head)
console.log(
    'Элемент <body>:',
    document.body
)

console.log(
    'Родительский элемент над <body>:',
    document.body.parentElement
)

console.log(
    ' перед <body>:',
    document.body.previousElementSibling
)

console.log(
    'Соседний элемент после <body>:',
    document.body.nextElementSibling
)

console.log(
    'Дочерние элементы <body>:',
    document.body.children
)

//////////////////////////

// HTML коллекция

// const bodyChildren = document.body.children

// console.log(bodyChildren)

// // создание нового элемента <button>

// const newButtonElement = document.createElement('button')

// // Добавление нового элемента <button> в <body> в конец

// document.body.appendChild(newButtonElement)

// console.log(bodyChildren)

// const bodyChildrenArray = [...bodyChildren]

// bodyChildrenArray.forEach((element) => {
//     console.log('Дочерний элемент <body>:', element)
// })

const divElement = document.body.children[0]

console.log(
    'Элемент <div>:',
    divElement
)

console.log(
  'Первый дочерний элемент внутри <div>:',
  divElement.firstElementChild
)

console.log(
  'Последний дочерний элемент внутри <div>:',
  divElement.lastElementChild
)

console.log(
  'Родительский элемент над <div>:',
  divElement.parentElement
)

console.log(
  'Родительский элемент над <div>:',
  divElement.parentNode
) // разница между этими двумя будет только в том случае, если мы работаем с корневым элементом разметки html:

console.log(
  'Родительский элемент над <html>:',
  document.documentElement.parentElement
)

console.log(
  'Родительский узел над <html>:',
  document.documentElement.parentNode
)

console.log(
  'Соседний элемент перед <div>:',
  divElement.previousElementSibling
)

console.log(
  'Соседний узел перед <div>:',
  divElement.previousSibling
)

console.log(
  'Соседний элемент после <div>:',
  divElement.nextElementSibling
)

console.log(
  'Соседний узел после <div>:',
  divElement.nextSibling
)

//////////////////

console.log(
  'Первый дочерний элемент внутри <div>:',
  divElement.firstElementChild
)

console.log(
  'Первый дочерний узел внутри <div>:',
  divElement.firstChild
)

console.log(
  'Последний дочерний элемент внутри <div>:',
  divElement.lastElementChild
)

console.log(
  'Последний дочерний узел внутри <div>:',
  divElement.lastChild
)

console.log(
  'Дочерние элементы внутри <div>:',
  divElement.children
)

console.log(
  'Дочерние узлы внутри <div>:',
  divElement.childNodes
)