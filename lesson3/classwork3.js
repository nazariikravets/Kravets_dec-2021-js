// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
//     1. перебрати його циклом while
//     2. перебрати його циклом for
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// 5. перебрати циклом while та вивести  числа тільки парні  значення
// 6. перебрати циклом for та вивести  числа тільки парні  значення
// 7. замінити кожне число кратне 3 на слово "okten"
// 8. вивести масив в зворотньому порядку.
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
let array=[2,17,13,6,22,31,45,66,100,-18]
let i=0
while (i<array.length){
    console.log(array[i])
    i++
}

for (i=0; i<array.length; i++){
    console.log(array[i])
}
let j=0
while (j<array.length){
    if (j%2 !==0){
        console.log(array[j])
    }
    j++
}
for (i=0; i<array.length; i++){
    if (i%2 !==0){
        console.log(array[i])
    }
}
let o=0
while (o<array.length){
    if (array[o]%2 ===0){
        console.log(array[o])
    }
    o++
}
for (i=0; i<array.length; i++){
    if (array[i]%2 ===0){
        console.log(array[i])
    }
}
for (i=0; i<array.length; i++){
    if (array[i]%3 ===0){
    array[i]='okten';
    console.log(array[i]+' '+i)
    }
}
let arrayA=[2,17,13,6,22,31,45,66,100,-18]
for (i=arrayA.length-1; i>=0; i--){
    console.log(arrayA[i])
}
let p=arrayA.length-1
while (p>=0){
    console.log(arrayA[p])
    p--
}
while (p>=0){
    if (p%2 !==0){
        console.log(arrayA[p])
    }
    p--
}
for (i=arrayA.length-1; i>=0; i--){
    if (i%2 !==0){
        console.log(arrayA[i])
    }
}
while (o<arrayA.length) {
    if (array[p] % 2 === 0) {
        console.log(arrayA[p])
    }
    p++
}
for (i=arrayA.length-1; i>=0; i--){
    if (arrayA[i]%2 ===0){
        console.log(arrayA[i])
    }
}
for (i=arrayA.length-1; i>=0; i--) {
    if (arrayA[i] % 3 === 0) {
        arrayA[i] = 'okten';
        console.log(arrayA[i] + ' ' + i)
    }
}
