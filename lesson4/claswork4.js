
// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
function min(a,b,c) {
    if (a<=b && a<=c){
        console.log(a)
    }
    else if (b<=a && b<=c){
        console.log(b)
    }
    else if (c<=a && c<=b){
        console.log(c)
    }
}
let resulMin=min(100,99,101)

    // - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

function max(a,b,c) {
    if (a>=b && a>=c){
        console.log(a)
    }
    else if (b>=a && b>=c){
        console.log(b)
    }
    else if (c>=a && c>=b){
        console.log(c)
    }
}
let resulMax=max(100,150,120)

    // - створити функцію яка повертає найбільше число з масиву
let array=[100,232,43,12,3453,1,123,3453,23,2,-25]
function maxNumber(a){
    let maxn=a[0]
    for (const argument of a) {
        if (argument>maxn){
            maxn=argument
        }

    }
    return maxn
}
let resultMaxNumber=maxNumber(array)
console.log(resultMaxNumber)

// - створити функцію яка повертає найменьше число з масиву

function minNumber(a){
    let minx=a[0]
    for (const argument of a) {
        if (argument<minx){
            minx=argument
        }

    }
    return minx
}
let resultMinNumber=minNumber(array)
console.log(resultMinNumber)

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

function arrayNumber(x){
    let s=0
    for (const argument of x) {
        s=s+argument

    }
    return s
}
let resulArrayNumber=(arrayNumber(array))
console.log(resulArrayNumber)

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

function arrayNumberSer(x){
    let s=0
    for (const argument of x) {
        s=s+argument

    }

    return s/x.length
}
let resulArrayNumberSer=(arrayNumberSer(array))
console.log(resulArrayNumberSer)

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
// (Math використовувати заборонено);

function calculator(...arraybezlim) {
    let maxArray=arraybezlim[0]
    let minArray=arraybezlim[0]
    for (const arraybezlimElement of arraybezlim) {
        if (arraybezlimElement>maxArray){
            maxArray=arraybezlimElement
        }
        if (arraybezlimElement<minArray){
            minArray=arraybezlimElement
        }
    }
    console.log(maxArray)
    return minArray
}
let resultcalculator=calculator(100,220,333,2,5,454,462,4653,0)
console.log(resultcalculator)

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

function random(x) {
    let arrayRandom=[]
    for (i=0; i<x; i++){
        arrayRandom.push(Math.round(Math.random()*100))
    }
    console.log(arrayRandom)
}
random(10)

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент,
//     який характеризує кінцеве значення діапазону.


function randomLimit(x,y) {
    let arrayRandomLimit=[]
    for (i=0; i<x; i++){
        arrayRandomLimit.push(Math.round(Math.random()*y))
    }
    console.log(arrayRandomLimit)
}
randomLimit(10,1000 )

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

let number=[1,2,3,4,5,6,7,8,9]
function newArray(a) {
    let newArrayN=[]
    for(i=a.length-1;i>=0;i--){
        newArrayN[newArrayN.length]=a[i]
    }
    return newArrayN
}
let resulnewArray=newArray(number)
console.log(resulnewArray)