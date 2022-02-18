// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його,
// якщо два аргументи - складає або конкатенує їх між собою.
function arrayArgument(...arr) {
    let en

    if (arr.length === 1) {
        console.log(arr[0]
        )
    } else if (arr.length === 2 && typeof (arr[0]) === 'string' || typeof (arr[1]) === 'string') {
        en = arr[0] + ' ' + arr[1]
    } else if (arr.length === 2) {
        en = arr[0] + arr[1]
    }
    return en

}

arrayArgument(25)
let resultArrayArgument = arrayArgument(25, 23)
console.log(resultArrayArgument)
let resultArrayArgument1 = arrayArgument(25, 'Kravets')
console.log(resultArrayArgument1)


//
// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]

let array1 = [1, 2, 3, 4]
let array2 = [2, 3, 4, 5]

function arraySuma(array1, array2) {
    let suma = []
   for (i=0,j=0; i<array1.length,j<array2.length; i++,j++){
       suma[suma.length]=array1[i]+array2[j]
   }

    return suma
}

let resultArraySuma = arraySuma(array1, array2)
console.log(resultArraySuma)


//
// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
let object1=[{name: 'Dima', age: 13}, {model: 'Camry'}]
function arrayObject(object1) {
    let resultObject1=[]
    for (i=0; i<object1.length; i++){
    for (const object1Key in object1[i]) {
     resultObject1[resultObject1.length]=object1Key
    }}

    return resultObject1
}
let resultArrayObject=arrayObject(object1)
console.log(resultArrayObject)
//
//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
let object2=[{name: 'Dima', age: 13}, {model: 'Camry'}]
function arrayObject2(object1){
    return [object1[0].name, object1[0].age,object1[1].model]
}
let esdfs=arrayObject2(object2)
console.log(esdfs)





