// - створити функцію яка обчислює та повертає площу прямокутника
let spramo=(a,b)=> a*b;
let resultSpramo=spramo(20,30)
console.log(resultSpramo)



// - створити функцію яка обчислює та повертає площу кола
let skolo=(p,r)=> p*Math.pow(r,2)
let resultSkolo=skolo(3.14,5)
console.log(resultSkolo)



// - створити функцію яка обчислює та повертає площу циліндру
let scilidr=(p,r,h)=> 2*p*h*r
let resultScilindr=scilidr(3.14,5,10)
console.log(resultScilindr)




// - створити функцію яка приймає масив та виводить кожен його елемент
let array=[24545,234,424,654,3]
let arrayNumber=(array)=>{
    for (const arrayElement of array) {
        console.log(arrayElement)
    }
}
arrayNumber(array);



// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент
let fnText=(text)=>{
    document.write(`<p>${text}</p>`)
}
fnText('Hello')



// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let fnUl=(text)=>{
    document.write(`<ul>`)
    document.write(`<li>${text}</li>`)
    document.write(`<li>${text}</li>`)
    document.write(`<li>${text}</li>`)
    document.write(`</ul>`)
}
fnUl('я хочу додому')


// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
//     Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let fnUlFor=(text,x)=>{
    document.write(`<ul>`)
    for (i=0; i<x; i++){
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
}
fnUlFor("Дім",3)


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
//
let fnOl=(array)=>{
    document.write(`<ol>`)
    for (const arrayElement of array) {
        document.write(`<li>${arrayElement}</li>`)
    }
    document.write(`</ol>`)
}
let numTextBool = [26, 'war', true, false, 100];
fnOl(numTextBool)


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.' +
// ' Для кожного об'єкту окремий блок.

let object=[{id:1, name:'nazar', age:21 },{id:2, name:'ivan', age:24},{id:3, name:'Pavlo', age:17}]
let fnDocument=(object)=>{
    for (i=0;i<object.length;i++){
        document.write(`<div>${object[i].id} ${object[i].name} ${object[i].age}</div>`)
    }
}
fnDocument(object)