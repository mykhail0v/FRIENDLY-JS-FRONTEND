/* Задача 1
Знакомство с объектом

Представь, что мы пишем простенький функционал для соцсети. У нас есть объект user, который описывает пользователя.

Твоя задача:

Создай объект user со свойствами name (строка) и age (число).

Добавь этому объекту метод sayHello.

Этот метод должен выводить в консоль приветствие, используя имя и возраст пользователя из этого же объекта. Например: "Привет, меня зовут Джон и мне 30 лет.".

Ключевой момент: для доступа к name и age внутри метода sayHello обязательно используй ключевое слово this
*/

// const user = {
//     name: 'Nikita',
//     age: '24',
//     sayHello() {
//         console.log(`Привет, меня зовут ${this.name} и мне ${this.age} лет`)
//     }
// }

//////////////////////////

/* Задача 2

Потерянный this

А теперь давай сломаем то, что работает! Это классическая ловушка, в которую попадаются все.

Твоя задача:

Возьми свой работающий код из первой задачи.

Создай новую переменную, например, sayHi, и присвой ей ссылку на метод user.sayHello. Обрати внимание: мы присваиваем сам метод, а не вызываем его. То есть без ().

Теперь вызови эту новую переменную как функцию: sayHi().

Прежде чем запускать код, попробуй предсказать, что выведется в консоль и, самое главное, почему. Потом запускай и проверяй свою теорию.
*/

// const user = {
//     name: 'Nikita',
//     age: '24',
//     sayHello() {
//         console.log(`Привет, меня зовут ${this.name} и мне ${this.age} лет`)
//     }
// }

// const sayHi = user.sayHello

// sayHi()

////////////////////////////

/* Задача 3

Вернуть контекст!

Мы знаем, что sayHi() вызывается в "неправильном" контексте (window).

Твоя задача: Измени только строку вызова sayHi(), чтобы принудительно "сказать" этой функции, что ее this должен быть объектом user.

Подсказка: Погугли методы функций call() и apply(). Они созданы как раз для таких ситуаций.
*/

// const user = {
//     name: 'Nikita',
//     age: '24',
//     sayHello() {
//         console.log(`Привет, меня зовут ${this.name} и мне ${this.age} лет`)
//     }
// }

// const sayHi = user.sayHello

// sayHi.call(user)

////////////////////////////

/* Задача 4

"Привязанный" навсегда

Отлично, call и apply решают проблему, но у них есть особенность — они вызывают функцию сразу же. А что если нам нужно не вызвать функцию сейчас, а создать ее новую версию, у которой this будет "прибит" к нужному объекту навсегда?

Это супер-частый кейс во фронтенде. Представь, что мы хотим, чтобы приветствие выводилось не сразу, а через 2 секунды, или по клику на кнопку.

JavaScript

// Псевдокод, который НЕ сработает как надо:
setTimeout(user.sayHello, 2000); // Через 2 секунды this снова потеряется
button.addEventListener('click', user.sayHello); // При клике this тоже потеряется
Твоя задача:

Используя user.sayHello, создай новую функцию boundSayHello.

Эта новая функция должна быть такой, чтобы при ее вызове (boundSayHello()) this внутри нее всегда был равен user, вне зависимости от того, как и где ее вызывают.

Проверь, что твой код работает, просто вызвав boundSayHello() в последней строке.

Подсказка: Есть третий, специальный метод для "привязки" контекста, который не вызывает функцию сразу, а возвращает новую, "обернутую" функцию. Его название говорит само за себя. Поищи в сторону метода .bind().
*/

// const user = {
//     name: 'Nikita',
//     age: '24',
//     sayHello() {
//         console.log(`Привет, меня зовут ${this.name} и мне ${this.age} лет`)
//     }
// }

// const sayHi = user.sayHello

// sayHi.call(user)

////////////////////////////

/* Задача 4
    Отложенное приветствие
Давай применим это на практике. Самый частый случай использования .bind() — это когда нам нужно передать функцию куда-то, чтобы она выполнилась позже. Например, через 2 секунды.

Для этого есть встроенная в JS функция setTimeout(какая_функция, через_сколько_миллисекунд).

Проблема: Если мы просто передадим user.sayHello в setTimeout, то через 2 секунды setTimeout вызовет ее без контекста, и this снова потеряется.

Твоя задача:

Возьми наш оригинальный объект user.

Создай новую, "привязанную" функцию boundSayHello, которая навсегда будет знать, что ее this — это user.

Передай эту новую boundSayHello в setTimeout, чтобы приветствие корректно отобразилось в консоли через 2 секунды.
*/

// const user = {
//     name: 'Nikita',
//     age: 24,
//     sayHello() {
//         console.log(`Привет, меня зовут ${this.name} и мне ${this.age} лет.`);
//     }
// };


// const boundSayHello = user.sayHello.bind(user)


// setTimeout(boundSayHello, 2000)

////////////////////////////

/* Задача 5

    Метод-шпион
У нас есть два объекта: user и spy. У шпиона есть метод reveal, который должен выводить имя и возраст любого объекта, за которым он "следит".

Твоя задача:
Вызови метод spy.reveal так, чтобы он вывел в консоль данные объекта user, а не свои собственные. Используй метод .call().

*/

// const user = {
//     name: 'John',
//     age: 30
// };

// const spy = {
//     name: 'Agent Smith',
//     age: 45,
//     reveal() {
//         // Этот метод должен выводить имя и возраст того, за кем следит
//         console.log(`Revealed: Name is ${this.name}, Age is ${this.age}`);
//     }
// }

// spy.reveal.call(user)

////////////////////////////

/* Задача 6

Таймер-робот

У нас есть робот, который должен представиться через 3 секунды после активации. Но если передать его метод introduce в setTimeout напрямую, он потеряет себя (this) и не сможет назвать свое имя.

Твоя задача:
Создай "привязанную" версию метода robot.introduce с помощью .bind() и передай ее в setTimeout, чтобы робот представился корректно.

*/

// const robot = {
//     name: 'Bender',
//     introduce() {
//         console.log(`Hello, my name is ${this.name}!`)
//     }
// }


// const boundIntroduce = robot.introduce.bind(robot)

// setTimeout(boundIntroduce, 3000)

////////////////////////////

/* Задача 6

Универсальный калькулятор

Есть объект calculator с методом sum, который суммирует все переданные ему аргументы. И есть массив чисел numbers.

Твоя задача:
Вызови метод calculator.sum так, чтобы он просуммировал числа из массива numbers. Здесь идеально подойдет метод .apply(), потому что он умеет принимать аргументы в виде массива.

*/

// const calculator = {
//     // Этот метод суммирует все аргументы, которые ему передали
//     sum(...args) {
//         const result = args.reduce((total, num) => total + num, 0);
//         console.log(`Result: ${result}`);
//         return result;
//     }
// };

// const numbers = [1, 2, 3, 4, 5];

// // Твой код здесь: вызови calculator.sum с числами из массива numbers

// calculator.sum.apply(calculator, numbers)

////////////////////////////

/* Задача 7

"Починка" обработчика событий
Это симуляция реальной фронтенд-задачи. У нас есть объект button, у которого есть счетчик кликов clicks и метод handleClick. Мы "вешаем" этот метод на "событие клика" (симулируем его простым вызовом).

Код в текущем виде не работает: this теряется, и this.clicks становится NaN.

Твоя задача:
Исправь строку, где мы создаем onClickHandler, используя .bind(), чтобы контекст this не терялся.

*/

// const button = {
//     clicks: 0,
//     handleClick() {
//         this.clicks++;
//         console.log(`Button clicked ${this.clicks} times.`);
//     }
// };

// // Представим, что это наш обработчик события.
// // Сейчас он теряет контекст. Исправь эту строку!
// const onClickHandler = button.handleClick.bind(button);

// // Симуляция кликов
// onClickHandler(); // Должно вывести "Button clicked 1 times."
// onClickHandler(); // Должно вывести "Button clicked 2 times."

////////////////////////////

/* Задача 8

Городской регистратор

Есть функция registerResident, которая должна работать как метод для любого объекта-города. Она принимает нового жителя и добавляет его в массив residents того города, в контексте которого она вызвана.

Твоя задача:
Используя .call() или .apply(), зарегистрируй newResident1 в city1, а newResident2 в city2.

*/

// function registerResident(residentName) {
//     this.residents.push(residentName);
//     console.log(`${residentName} has been registered in ${this.name}.`);
// }

// const city1 = {
//     name: 'New York',
//     residents: ['Peter Parker']
// };

// const city2 = {
//     name: 'Gotham',
//     residents: ['Bruce Wayne']
// };

// const newResident1 = 'Tony Stark';
// const newResident2 = 'Clark Kent';

// // Твой код здесь:
// // 1. Зарегистрируй newResident1 в city1
// // 2. Зарегистрируй newResident2 в city2

// registerResident.call(city1, newResident1)
// registerResident.call(city2, newResident2)

// // Для проверки
// console.log(city1.residents); // Должен содержать 'Tony Stark'
// console.log(city2.residents); // Должен содержать 'Clark Kent'

////////////////////////////

/* Задача 9

Секундомер

Твоя задача:
Написать код для метода start. Этот метод должен запускать таймер, который каждую секунду увеличивает свойство seconds на 1 и выводит текущее значение в консоль.

Ключевое условие: внутри setInterval (аналог setTimeout, но повторяется) используй стрелочную функцию, чтобы избежать потери this.

*/

// const stopwatch = {
//     seconds: 0,
//     start() {
//         setInterval(() => {
//             console.log(++this.seconds)
//         }, 1000);
//     }
// };

// stopwatch.start();


///////////////////////

/*
## Задача-загадка: Кто есть this?
Ниже есть объект challenger. В нем намешаны обычные и стрелочные функции в разных местах.

Твоя миссия:

Не запуская код, предскажи, что выведется в консоль после каждого из четырех вызовов в конце. Напиши свой прогноз и, самое главное, краткое объяснение для каждой строки, почему this повел себя именно так.

JavaScript

const challenger = {
    name: 'Challenger Object',

    // Метод №1: Обычная функция
    regularMethod() {
        console.log(`1. Regular method: My name is ${this.name}`);
    },

    // Метод №2: Стрелочная функция как свойство объекта
    arrowMethod: () => {
        console.log(`2. Arrow method: My name is ${this.name}`);
    },

    // Метод №3: Метод с вложенными таймерами
    nestedMethod() {
        // Таймер с обычной функцией
        setTimeout(function() {
            console.log(`3. Nested regular fn: My name is ${this.name}`);
        }, 100);

        // Таймер со стрелочной функцией
        setTimeout(() => {
            console.log(`4. Nested arrow fn: My name is ${this.name}`);
        }, 200);
    }
};

// --- ВЫЗОВЫ ---

// Вызов 1
challenger.regularMethod();

// Вызов 2
challenger.arrowMethod();

// Вызов 3
const standaloneRegular = challenger.regularMethod;
standaloneRegular();

// Вызов 4
challenger.nestedMethod();


Формат ответа, который я от тебя жду:

Прогноз: 1. Regular method: My name is Challenger Object
Объяснение: потому что...

Прогноз: 2. Arrow method: My name is ...
Объяснение: потому что...

Прогноз: 3. Nested regular fn: My name is ... (этот и следующий появятся после 4-го вызова)
Объяснение: потому что...

Прогноз: 4. Nested arrow fn: My name is ...
Объяснение: потому что...
*/


/*
Прогноз: 1. Regular method: My name is Challenger Object
Объяснение: потому что метод вызван через function declaration, контекст не потерян, this указывает на родительский объект
Прогноз: 2. Arrow method: My name is  
Объяснение: потому что стрелочная функция теряет контекст, её this будет указывать на глобальный объект браузера window, в котором свойство name - пустая строка
Прогноз: 3. Regular method: My name is  (этот и следующий появятся после 4-го вызова)
Объяснение: потому что в третьем вызове создаёться новая функция без указания контекста, так что контекст этой функции будет снова объект браузера, что выведет пустую строку при обращении к его свойству name
Прогноз: 4. Nested arrow fn: My name is  через 100 милисекунд и My name is Challenger Object через 200 милисекунд Объяснение: потому что первая функция этого объекта объявленна в function deсlaration, значит её контекст зависит от того,что слева от точки при вызове,и ищет там объект, но не находит, потому что он там не указан,и this снова возвращает значение глобального window - пустую строку. Вторая функция объявленна стрелочным методом, что скрывает для неё внешний контекст, и она видит "родительский" её метода, то есть, через одну вложенность наверх, а это как раз объект challenger в котором лежит нужный нам name, и this указывает на него.
*/

//////////////////////////////////////////

/* Задача 11
Объект "Корзина покупок" на объектах
Создай объект shoppingCart со следующей структурой и методами:

Свойство items:

Это должен быть пустой объект {}. Он будет хранить добавленные товары.

Структура хранения будет такой: {'НазваниеТовара': { price: ..., quantity: ... }}.

Метод addProduct(product):

Принимает один аргумент — объект товара, например { name: 'Банан', price: 30 }.

Логика:

Проверить, есть ли уже в this.items ключ с названием product.name.

Если есть — просто увеличить quantity у существующего товара на 1.

Если нет — добавить новый ключ product.name в this.items, а в качестве значения записать объект { price: product.price, quantity: 1 }.

Метод removeProduct(productName):

Принимает название товара (строку).

Находит товар в объекте this.items по его ключу (productName) и удаляет его. (Вспоминай, как удалять свойства из объекта).

Метод calculateTotal():

Должен перебрать все свойства объекта this.items (вспомни цикл for...in).

Для каждого товара внутри this.items вычислить его стоимость (price * quantity).

Сложить все стоимости и вернуть итоговую сумму.

Метод getCartInfo():

Возвращает строку с информацией о состоянии корзины. Например: "В корзине 2 вида товаров на сумму 350".

Этот метод для подсчета суммы должен вызывать this.calculateTotal().

Чтобы посчитать количество видов товаров, можно получить количество ключей в объекте this.items. Тут тебе может пригодиться Object.keys(this.items).length, это стандартный способ узнать, сколько свойств в объекте.
*/

// const shopppingCart = {
//     items: {},
//     addProduct(product) {
//         if (product.name in this.items) {
//             this.items[product.name].quantity++
//         } else {
//             this.items[product.name] = {price: product.price, quantity: 1,}
//         }
//     },
//     removeProduct(productName){
//     delete this.items[productName]
//     },
//     calculateTotal() {
//         let productSum = 0
//         let totalSum = 0

//         for(let productKey in this.items) {
//             const currentProduct = this.items[productKey]
//             productSum = currentProduct.price * currentProduct.quantity
//             totalSum += productSum
//         }

//         return totalSum
//     },
//     getCartInfo() {
//         let count = Object.keys(this.items).length
//         return `В корзине ${count} вида продукта на сумму ${this.calculateTotal()}`
//     }
// }

// // Твой идеальный объект shoppingCart здесь...

// console.log('--- Начинаем покупки ---')
// shopppingCart.addProduct({ name: 'Молоко', price: 35, })
// shopppingCart.addProduct({ name: 'Хлеб', price: 20, })
// shopppingCart.addProduct({ name: 'Молоко', }) // Добавляем еще одно молоко
// console.log(shopppingCart.items)
// // Ожидаем: { 'Молоко': { price: 35, quantity: 2 }, 'Хлеб': { price: 20, quantity: 1 } }

// console.log(shopppingCart.getCartInfo())
// // Ожидаем: "В корзине 2 вида продукта на сумму 90"

// console.log('\n--- Удаляем хлеб ---')
// shopppingCart.removeProduct('Хлеб')
// console.log(shopppingCart.items)
// // Ожидаем: { 'Молоко': { price: 35, quantity: 2 } }

// console.log(shopppingCart.getCartInfo())
// // Ожидаем: "В корзине 1 вида продукта на сумму 70"

//////////////////////////////////////////

/* Задача 12

Объект "Телефонная книга"

Нужно создать объект phoneBook, который будет хранить контакты и позволит ими управлять.

Вот его структура и методы:

Свойство contacts

Это пустой объект {}, который будет хранить все контакты.

Структура хранения: {'Имя контакта': { phone: '...', email: '...' }}.

Метод addContact(name, phone, email)

Принимает три строковых аргумента: имя, телефон и email.

Логика: Проверяет, есть ли уже контакт с таким name в this.contacts.

Если есть, выводит в консоль сообщение вроде "Контакт 'Иван' уже существует." и ничего не делает.

Если нет, добавляет новый контакт в this.contacts в правильном формате.

Метод findContact(name)

Принимает имя контакта для поиска.

Логика:

Если контакт с таким name найден, возвращает строку с его данными, например: "Имя: Иван, Телефон: 123-45-67, Email: ivan@test.com".

Если контакт не найден, возвращает строку "Контакт не найден.".

Метод updateContact(name, newInfo)

Принимает имя контакта и объект newInfo с новыми данными.

Объект newInfo может содержать только одно поле ({ email: 'new@email.com' }) или несколько ({ phone: '555-55-55', email: 'ivan.new@email.com' }).

Логика:

Находит существующий контакт по name.

Если контакт найден, он обновляет только те поля, которые есть в newInfo, не затирая остальные. (Вспоминай про объединение объектов).

Если контакт не найден, ничего не делает.

Метод removeContact(name)

Принимает имя и удаляет контакт из this.contacts.
*/

// const phoneBook = {
//     contacts: {},
//     addContact(name, phone, email) {
//         if (name in this.contacts) {
//             console.log(`Контакт '${name}' уже существует.`)
//         } else {
//             this.contacts[name] = {phone, email}
//         }
//     },
//     findContact(name) {
//         if (name in this.contacts) {
//             const contact = this.contacts[name]
//             return `Имя: ${name}, Телефон: ${contact.phone}, Email: ${contact.email}`
//         } else return 'Контакт не найден.'
//     },
//     updateContact(name, newInfo) {
//         if(name in this.contacts) {
//             this.contacts[name] = {...this.contacts[name], ...newInfo}
//             console.log(`Контакт '${name}' успешно обновлен.`)
//         } else {
//             console.log(`Ошибка: Невозможно обновить. Контакт '${name}' не найден.`)
//         }
//     },
//     removeContact(name) {
//         if (name in this.contacts) {
//             delete this.contacts[name]
//             console.log(`Контакт '${name}' удален.`)
//         } else {
//             console.log(`Ошибка: Невозможно удалить. Контакт '${name}' не найден.`)           
//         }
//     } 
// }

// // console.log('--- Этап 1: Добавление ---')
// phoneBook.addContact('Иван', '111-11-11', 'ivan@mail.com')
// phoneBook.addContact('Мария', '222-22-22', 'maria@mail.com')
// phoneBook.addContact('Петр', '333-33-33', 'petr@mail.com')

// // --- Попытка добавить дубликат ---
// // phoneBook.addContact('Иван', '000-00-00', 'ivan.new@mail.com')

// console.log('\nТекущее состояние книги:', phoneBook.contacts)


// // // --- 2. Поиск контактов ---
// // console.log('\n--- Этап 2: Поиск ---')
// // console.log(phoneBook.findContact('Мария'))
// // console.log(phoneBook.findContact('Алексей'))


// // // --- 3. Обновление контакта ---
// console.log('\n--- Этап 3: Обновление ---')
// phoneBook.updateContact('Иван', { email: 'ivan.work@mail.com' })
// phoneBook.updateContact('Петр', { phone: '777-77-77', email: 'petr.boss@mail.com' })
// phoneBook.updateContact('Алексей', { phone: '999-99-99' }) // Попытка обновить несуществующий контакт

// console.log('\nСостояние после обновления:', phoneBook.contacts)


// // --- 4. Удаление контакта ---
// console.log('\n--- Этап 4: Удаление ---')
// phoneBook.removeContact('Мария')
// phoneBook.removeContact('Мария') // Попытка удалить еще раз

// console.log('\nФинальное состояние книги:', phoneBook.contacts)

//////////////////////////////////////////

/* Задача 13

Объект "Настройки пользователя"

Нужно создать объект userSettings, который будет управлять настройками пользователя и позволит сбрасывать их к значениям по умолчанию.

Вот его структура и методы:

Свойство defaults

Это объект, который хранит настройки по умолчанию. Он не должен меняться.

Задай ему такие значения: { theme: 'light', notifications: true, language: 'en', }

Свойство current

Это объект, который хранит текущие настройки пользователя.

Важно: Изначально он должен быть точной копией объекта defaults. (Вспоминай, как скопировать объект, чтобы они не были связаны).

Метод updateSetting(key, value)

Принимает ключ (строку, например, 'theme') и новое значение (например, 'dark').

Обновляет значение для указанного ключа в объекте this.current.

Метод getSetting(key)

Принимает ключ (строку).

Возвращает значение этого ключа из this.current.

Метод resetToDefaults()

Вот и небольшое усложнение. Этот метод не принимает аргументов.

Он должен сбросить все текущие настройки пользователя (this.current) обратно к значениям по умолчанию, которые хранятся в this.defaults.

На что обратить внимание:

Копирование объектов: Ключевой момент в начале — правильно скопировать defaults в current, чтобы при изменении current не менялся defaults.

Сброс настроек: Подумай, как в resetToDefaults можно снова скопировать все значения из одного объекта в другой, полностью заменяя старые.
*/

const userSettings =  {
    defaults: {
        theme: 'light', 
        notifications: true, 
        language: 'en',
    },
    current: {
        theme: 'light', 
        notifications: true, 
        language: 'en',
    },
    updateSetting(key, value) {
        this.current[key] = value
    },
    getSetting(key) {
        return this.current[key]
    },
    resetToDefaults() {
        this.current = {...this.defaults}
    }
}

console.log('--- Начальные настройки ---')
console.log('Текущая тема:', userSettings.getSetting('theme')) // 'light'
console.log('Текущие настройки:', userSettings.current)
console.log('Настройки по умолчанию:', userSettings.defaults)


// --- 2. Обновляем настройки ---
console.log('\n--- Обновляем тему и выключаем уведомления ---')
userSettings.updateSetting('theme', 'dark')
userSettings.updateSetting('notifications', false)
console.log('Новая тема:', userSettings.getSetting('theme')) // 'dark'
console.log('Текущие настройки после изменений:', userSettings.current)


// --- 3. Проверяем, что настройки по умолчанию не изменились ---
console.log('\n--- Проверяем defaults ---')
console.log('Настройки по умолчанию остались прежними:', userSettings.defaults) // Должны быть light, true, en


// --- 4. Сбрасываем настройки ---
console.log('\n--- Сбрасываем к значениям по умолчанию ---')
userSettings.resetToDefaults()
console.log('Тема после сброса:', userSettings.getSetting('theme')) // 'light'
console.log('Текущие настройки после сброса:', userSettings.current)
