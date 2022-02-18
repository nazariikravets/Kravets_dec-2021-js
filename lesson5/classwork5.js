// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
let fnMin=(num1,num2,num3)=>{
    if (num1 <= num2 && num1 <= num3){
        console.log(num1)
    }
    else if (num2 <= num1 && num2 <= num3){
        console.log(num2)
    }
    else if (num3 <= num1 && num3 <= num2){
        console.log(num3)
    }
}
fnMin(12,10,9);



// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
let fnMax=(num1,num2,num3)=>{
    if (num1 >= num2 && num1 >= num3){
        console.log(num1)
    }
    else if (num2 >= num1 && num2 >= num3){
        console.log(num2)
    }
    else if (num3 >= num1 && num3 >= num2){
        console.log(num3)
    }
}
fnMax(12,10,9);




// - створити функцію яка повертає найбільше число з масиву
let array=[23,354,232,3432,444,3436,2]
let fnMaxNumber=(array)=>{
    let max=array[0]
    for (const arrayElement of array) {
        if (arrayElement>=max){
            max=arrayElement
        }
    }
    return max
}
let resultFnMaxNumber=fnMaxNumber(array)
console.log(resultFnMaxNumber)





// - створити функцію яка повертає найменьше число з масиву
let fnMinNumber=(array)=>{
    let min=array[0]
    for (const arrayElement of array) {
        if (arrayElement<=min){
            min=arrayElement
        }
    }
    return min
}
let resultFnMinNumber=fnMinNumber(array)
console.log(resultFnMinNumber)



// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
let fnSuma=(array)=>{
    let s=0
    for (const arrayElement of array) {
        s=s+arrayElement
    }
    return s
}
let resultFnSuma=fnSuma(array)
console.log(resultFnSuma)



// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
let fnSer=(array)=>{
    let s=0
    for (const arrayElement of array) {
        s=s+arrayElement
    }
    return s/array.length
}
let resultFnSer=fnSer(array)
console.log(resultFnSer)


// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
let fnCalcu=(...num)=>{
    max=num[0]
    min=num[0]
    for (const numElement of num) {
        if (numElement>=max){
            max=numElement
            console.log(max)
        }
        if (numElement<=min){
            min=numElement
        }
    }
    return min


}
let  resultFnCalcu=fnCalcu(3435,234,355,3334,543,464,343)
console.log(resultFnCalcu)

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
let fnrandom=(x)=>{
    let random=[]
    for (i=0;i<x; i++){
        random.push(Math.round(Math.random()*100))
    }
    console.log(random)
}
fnrandom(10)

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент,
// який характеризує кінцеве значення діапазону.
let fnrandomLimit=(x,limit)=>{
    let random=[]
    for (i=0;i<x; i++){
        random.push(Math.round(Math.random()*limit))
    }
    console.log(random)
}
fnrandomLimit(10,1000)


// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
let fnRevers=(array)=>{
    let revers=[]
    for (i=array.length-1;i>=0;i--) {
        revers[revers.length] = array[i]
    }
    console.log(revers)
}
let number=[1,2,3,4,5,6,7,8]
fnRevers(number)