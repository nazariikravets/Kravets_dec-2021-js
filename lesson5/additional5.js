// - Дано натуральное число n. Выведите все числа от 1 до n.
let natural=(n)=>{
    if (n >0 && n%1===0){
        console.log(n)
    }
    else {
        console.log('Це число не натуральне')
    }
}
natural(24)



// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B,
// или в порядке убывания в противном случае.
//
let fnnaturalAB=(a,b)=>{
    if (a<b){
        for (i=a;i<=b;i++){
            console.log(i)
        }

    }
    else if (a>b){
        for (i=a;i>=b;i--){
            console.log(i)
        }
    }
}
fnnaturalAB(30,23)




// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
//
let foo=[9,8,0,4]
let afnarrayI=(array,j)=>{
    let  number=[]
    let num=0
    for (i = 0; i < array.length; i++) {
        if (j===i) {
            num=array[i]
            array[i]=array[i+1]
            array[i+1]=num
        }
        number[number.length] = array[i]
    }
    console.log(number)
}
afnarrayI(foo,2)


// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
 let fooNumber=[1,0,6,0,3,3,5,0,5]
let fn=(array)=>{
    let nam=[]
    let nam2=[]
    let result=[]
    for (i=0; i<array.length;i++){
        if (array[i]===0){
            nam[nam.length]=array[i]
        }
        else if (array[i]!==0){
            nam2[nam2.length]=array[i]
        }
    }
    for (i=0;i<nam2.length; i++){
        result[result.length]=nam2[i]
    }
    for (i=0;i<nam.length; i++){
        result[result.length]=nam[i]
    }
    console.log(result)
}
fn(fooNumber)
