// WHILE

let count = 0

while (count < 10) {
    console.log(count)
    count++
}

// DO WHILE

do {
    console.log(count)
    count++
} while (count < 10)   // цикл do воспроизводит итерацию как минимум один раз, даже если условие ложно (сначала выполняет (do), а потом проверяет (while))

 // FOR

 console.log('Цикл сейчас начнётся...')

// let i = 0

//  for (; i < 4;) {
//     console.log(i)
//     i++
//  }


// let i = 0

//  while (i < 4) {
//     console.log(i)
//     i++
//  }
 

 for (let i = 0; i < 4; i++) {
    console.log(i)
    const message = 'Hello'
 }
//  console.log(message) // будет ошибка, вне области видимости
 console.log('...цикл закончен!')

 //BREAK

 let count1 = 1

 while (count1 < 10) {
    

    if (count1 % 5 === 0) {
        console.log('Цикл прерван досрочно')
        break
    }

    console.log(count1)

    count1++
 }

 //CONTINUE

for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        continue  //переходит к следующей операции не выполняя текущую
    }

    console.log(i)
}