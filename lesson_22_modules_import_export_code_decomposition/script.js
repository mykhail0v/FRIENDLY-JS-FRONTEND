// import someAction from "./tabs.js" // при експорте через default можно указывать любое имя 
import {num} from './sayHi.js'
import initTabs, {selectors} from './tabs.js'
import initModals from "./modals.js"
import { initSliders } from "./sliders.js"

// someAction()
initTabs()
initModals()
initSliders()

//////////////////////////////////

// import logCat, {a, b, c} from "./constans.js";
// import * as constans from "./constants/index.js"

// console.log('constans:', constans)
// console.log(constans.a)
// console.log(constans.b)
// console.log(constans.c)
// constans.logCat()