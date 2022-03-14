// - Дано список імен.
//     let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

let n1 = 'Harry..Potter'
let n2 = 'Ron---Whisley'
let n3 = 'Hermione__Granger'

let fnName = (str) => {
    return str.replaceAll('_', ' ')
        .replaceAll('-', ' ')
        .replaceAll('.', ' ')
        .replace('  ', ' ')
        .replace('   ', ' ')
}

console.log(fnName(n3));


// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.


let fnRandom = (x) => {
    let random = []
    for (i = 0; i < x; i++) {
        random.push(Math.round(Math.random() * 100))
    }
    return random
}

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// Відсортувати його за допомоги sort
let arrayRandom = fnRandom(10)
console.log(arrayRandom)
console.log(arrayRandom.sort((a, b) => a - b));
console.log(arrayRandom.sort((a, b) => b - a));


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// відфільтрувати  його за допомоги filter, залишивши тільки парні числа
console.log(arrayRandom.filter(number => number % 2 === 0));

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції)
// . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
let arrayRandom1 = fnRandom(15)
console.log(arrayRandom1.map((number) => {
    return number.toString()
}));

console.log(arrayRandom1.map(number => number.toString()));

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]
let array = [23, 21, 54, 32, 45]
let sortNums = (array, direction) => {
    if (direction === 'ascending') {
        return array.sort((a, b) => a - b)
    } else if (direction === 'descending') {
        return array.sort((a, b) => b - a)
    }
}
console.log(sortNums(array, 'ascending'));


// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
]

console.log(coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration));

console.log(coursesAndDurationArray.filter(course => course.monthDuration > 5));