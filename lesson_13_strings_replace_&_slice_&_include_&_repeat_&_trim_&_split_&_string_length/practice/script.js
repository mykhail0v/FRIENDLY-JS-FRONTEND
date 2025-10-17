/*  Задача 1

     Генератор URL-слагов (slug)

Представь, что ты пишешь движок для блога. У каждой статьи есть заголовок, например, "Мой Первый Пост: Привет, Мир!". Чтобы ссылка на эту статью была красивой и понятной для поисковиков (SEO-friendly), её преобразуют в так называемый "слаг" (slug): moy-perviy-post-privet-mir.

Твоя задача — написать функцию createSlug(title), которая принимает строку с заголовком и возвращает её "слаг" версию по определённым правилам.

Техническое задание для функции createSlug:

Входные данные: Строка title с заголовком любой длины и с любыми символами.

Выходные данные: Новая строка, преобразованная по правилам.

Правила преобразования:

Все символы в строке должны быть приведены к нижнему регистру.

Все пробелы (включая множественные пробелы подряд) должны быть заменены на один дефис.

Из строки нужно удалить все символы, которые не являются буквами латинского алфавита, цифрами или дефисом. (Для простоты, давай пока сфокусируемся только на латинице. Транслитерацию кириллицы делать не нужно, просто удаляем русские буквы).

Слаг не должен начинаться или заканчиваться дефисом. Если после обработки по краям остались дефисы, их нужно убрать.
*/

// const createSlug = (title) => {
//     const lowerCasedTitle = title.toLowerCase()
//     const HyphenatedTitle = lowerCasedTitle.replace(/\s+/g, '-')
//     const invalidCharsRegex = /[^a-z0-9-]/g
//     let slug = HyphenatedTitle.replace(invalidCharsRegex, '')
//     while(slug.startsWith('-')) {
//         slug = slug.slice(1)
//     }
//     while(slug.endsWith('-')) {
//         slug = slug.slice(0, -1)
//     }
//     return slug
// }

console.log(createSlug("My Awesome Post 2025"))
console.log(createSlug(" Another Post With Spaces "))
console.log(createSlug("This! Is? A* Test!!!"))
console.log(createSlug("---Leading and trailing---"))
console.log(createSlug("Привет, мир!"))

// or

function createSlug(title) {
    const slug = title
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^a-z0-9-]/g, '')
        .replace(/^-+|-+$/g, '') // Удаляем дефисы в начале ИЛИ в конце строки

        return slug
}

