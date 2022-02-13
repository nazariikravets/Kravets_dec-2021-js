// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль


let number = [21, 23, 45, 82, 0];
let text = ['nazar', 'anton', 'work', 'okten', 'baraban'];
let numTextBool = [26, 'war', true, false, 100];
console.log(number);
console.log(numTextBool);
console.log(text);


// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

let pus = []
pus[0] = 'BamBam'
pus[1] = 25
pus[2] = false
console.log(pus)


// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.


for (i = 0; i < 10; i++) {
    document.write(`<div>Я хочу додому </div>`)
}
for (let i = 0; i < 10; i++) {
    document.write(`<div>${'текст №'+ (1+i)} - я хочу додому сьогодні </div>`);
}
let j=0
while (j<20){

    document.write(`<h1> Я йду спати</h1>`)
    j++
}
let o=0
while (o<20){

    document.write(`<h1>${'Заголовк №'+(1+o)} Я йду спати</h1>`)
    o++
}

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

let numberA=[21, 232, 3453, 2, 3, 5, 0, 1353, 343, 632]
for (const number1 of numberA) {
    console.log(number1)
}
let textA=['Тернопіль', 'Дніпро', 'Київ', 'Львів', 'Івано-Франківськ','Луцьк', 'Чернівці', 'Житомир','Харків', 'Полтава']
for (const string of textA) {
    console.log(string)
}
let different=[214, false, true, 'line', 'sport', 'js', 3434, 422, 4566, 333]
for (const differentElement of different) {
    console.log(differentElement)
}



for (const differentElement of different) {
    if (typeof(differentElement) === 'boolean'){
        console.log(differentElement)
    }
}



for (const differentElement of different) {
    if (typeof(differentElement) === 'number'){
        console.log(differentElement)
    }
}


for (const differentElement of different) {
    if (typeof(differentElement) === 'string'){
        console.log(differentElement)
    }
}



// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
//     Вивести в консоль всі його елементи в циклі.
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

let pusA=[]
pusA[0]=35322
pusA[1]='varr'
pusA[2]='true'
pusA[3]=true
pusA[4]=false
pusA[5]='212'
pusA[6]='false'
pusA[7]=2334
pusA[8]=2222
pusA[9]=3333
console.log(pusA)

for (i=0; i<10; i++){
    console.log('Поточний номер кроку ' + (i+1) )
    document.write(`<div>${'Поточний номер кроку '+ (i+1)} </div>`)
}
for (i=0; i<100; i++){
    console.log('Поточний номер кроку ' + (i+1) )
    document.write(`<div>${'Поточний номер кроку '+ (i+1)} </div>`)
}
for (i=0; i<100; i=i+2){
    console.log('Поточний номер кроку ' + (i+2)/2 )
    document.write(`<div>${'Поточний номер кроку '+ (i+2)/2} </div>`)
}
for (i=0; i<100; i++){
    if (i%2 !== 0){
        console.log('Поточний номер кроку ' + (i+1))
        document.write(`<div>${'Поточний номер кроку '+ (i+1)} </div>`)
    }

}
for (i=0; i<100; i++){
    if (i%2 === 0){
        console.log('Поточний номер кроку ' + (i+1))
        document.write(`<div>${'Поточний номер кроку '+ (i+1)} </div>`)
    }

}