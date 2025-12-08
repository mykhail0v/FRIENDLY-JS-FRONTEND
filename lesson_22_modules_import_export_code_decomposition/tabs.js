import {num} from './sayHi.js' // при повторном импорте сущности  в другой файл код дублироваться не будет

export const selectors = {}

// const initTabs = () => {
//     console.log('initTabs!')
//     //...
// }

// export default initTabs // при стрелочной функции эту конструкцию надо разбивать на несколько строчек

// либо же совсем не использовать название функции с default:

// export default () => {
//     console.log('initTabs!')
// }

export default function initTabs() {
    console.log('initTabs!')
}

// лучше отдавать предпочтение обычному експорту, без default