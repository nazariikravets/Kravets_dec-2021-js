let time=+prompt('Число від 0 до 59')
if (time>=0 && time<=14){
     console.log('Перша частина години')
}
 else if (time>14 && time<=29){
     console.log('Друга частина години')
 }
 else if (time>29 && time<=44){
     console.log('Третя частина години')
 }
 else if (time>44 && time<=59){
     console.log('Четверта частина години')
 }
 else {
     console.log('Значеня не коректне')
}


let day=+prompt('Яке сьогодні число?')
if (day >=1 && day <=10){
    console.log('Перша декада місяця')
}
else if (day >10 && day <=20){
    console.log('Друга декада місяця')
}
else if (day >20 && day <=31){
    console.log('Третя декада місяця')
}
else {
    console.log('Некоректне значення')
}



let test=!!23
if (test === true){
    console.log('вірно')
}
else {
    console.log('невірно')
}
(test === true) ? console.log('Вірно'): console.log('Невірно')


let a=+prompt('Введіть цифру що дорівнює 1, 0, -3')
if (a !== 0){
    console.log('Вірно')
}
else {
    console.log('Невірно')
}
(a !== 0) ? console.log('Вірно'): console.log('Невірно')



let dayWeek=prompt('Введіть день тижня')
switch (dayWeek){
    case 'Понеділок':
        console.log('Пограти в компютерні ігри')
        break
    case 'Вівторок':
        console.log('Побігати')
        break
    case 'Середа':
        console.log('Приготовати їсти')
        break
    case 'Четвер':
        console.log('Поприбирати')
        break
    case 'Пятниця':
        console.log('Подумати про себе')
        break
    case 'Субота':
        console.log('Нічого не робити')
        break
    case 'Неділя':
        console.log('Співати')
        break
    default:
        console.log('Щось не те записано')
}



let dayYear=+prompt('Введіть кількість днів у цьому році')
    if (dayYear%2 ===0){
        console.log('Високосний')
    }
    else {
        console.log('Невисокосний')
    }

(dayYear%2 === 0) ? console.log('Високосний'): console.log('Невисокосний')



let nameJS=prompt('Яка «офіційна» назва JavaScript?')
if (nameJS === 'ECMAScript'){
    console.log('Все правильно')
}
else {
    console.log('Не знаєте? ECMAScript!')
}