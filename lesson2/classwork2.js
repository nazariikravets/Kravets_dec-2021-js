let a=+prompt('Введіть перше число')
let b=+prompt('Введіть друге число')
if (a>b){
    console.log(a)
}
else if (a === b ){
    console.log('Вони рівні')
}
else {
    console.log(b)
}


let numberHouse=73
if (numberHouse>=1 && numberHouse<=20){
    console.log('Підїзд 1!!!')
}
else if (numberHouse>=21 && numberHouse<=48){
    console.log('Підїзд 2!!!')
}
else if (numberHouse>=49 && numberHouse<=90){
    console.log('Підїзд 3!!!')
}





(+prompt('Ведіть число')===10) ? console.log('Вірно'): console.log("Невірно")






let temp=prompt('Яка температура сьогодні(наприклад +25)')
if (temp>='+10'&& temp<='+22'){
    console.log('Ми йдемо вчитися')
}
else {
    console.log('Ми вчимося ОНЛАЙН')
}





let prize=+prompt('Введіть цифру від 1 до 5')
switch (prize){
    case 1:
        console.log('Авто')
        break
    case 2:
        console.log('Компютер')
        break
    case 3:
        console.log('Телефон')
        break
    case 4:
        console.log('Навушники')
        break
    case 5:
        console.log('Книжка')
        break
    default:
        console.log('Число не вірне')
}
