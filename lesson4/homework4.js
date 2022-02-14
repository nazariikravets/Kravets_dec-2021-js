// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function Spra() {
    let a=10
    let b=20
    return a*b
}
let resoul=Spra()
console.log(resoul)

// - створити функцію яка обчислює та повертає площу кола з радіусом

function Skolo() {
    let p=3.14
    let r=5
    return p*Math.pow(r,2)

}
let resoulKolo=Skolo()
console.log(resoulKolo)

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function Sclindr() {
    let h=10
    let r=3
    return 2*3.14*h*r
}
let resoulClindr=Sclindr()
console.log(resoulClindr)

// - створити функцію яка приймає масив та виводить кожен його елемент

function arrayC(xxx){
    for (const argument of xxx) {
        console.log(argument)
    }
}
let oi=[21,43,46]
let arrayCo=arrayC(oi)

    // - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function para(a) {
    document.write(`<p>${a}</p>`)
}
let resulPara=para('Я хочу додому')
    // - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function ulLi(a){
    document.write(`<ul>`)
    document.write(`<li>${a}</li>`)
    document.write(`<li>${a}</li>`)
    document.write(`<li>${a}</li>`)
    document.write(`</ul>`)
}
let resulUlLi=ulLi("додому")

    // - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
    // Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function ulLiargument(a,x) {
    document.write(`<ul>`)
    for (i=0;i<x;i++){
        document.write(`<li>${a}</li>`)
    }
    document.write(`</ul>`)
}
let resulUlLiargument=ulLiargument('Скоріше',3)

    // - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

function arrayb(ok){
    document.write(`<ol>`)
    for (const argument of ok) {
        document.write(`<li>${argument}</li>`)

    }
        document.write(`</ol>`)

}
let numTextBool = [26, 'war', true, false, 100];
let resularrayb=arrayb(numTextBool)

//     - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.' +
// 'Для кожного об'єкту окремий блок.

function arrayIdAgeName(xxx){
    for (let i = 0; i < xxx.length; i++) {
        const xxx1 = xxx[i];
        document.write(`<div>${xxx1.id} ${xxx1.name} ${xxx1.age}</div>`)
    }
}
let object=[{id:1, name:'nazar', age:21 },{id:2, name:'ivan', age:24},{id:3, name:'Pavlo', age:17}]
let resularrayIdAgeName=arrayIdAgeName(object)


