// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується
// та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
//
//

let btn1 = document.getElementById('btn1');
btn1.onclick=function (){
    console.log(document.forms.form1.input1.value)
    console.log(document.forms.form1.input2.value)
    console.log(document.forms.form2.input3.value)
    console.log(document.forms.form2.input4.value)
}



// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)//
let rydkyy = document.getElementById('r');
let stovbzyy=document.getElementById('s');
let textTablizaa=document.getElementById('t');
let btn4=document.getElementById('btn4');


btn4.onclick=function (){
    let rydky=rydkyy.value
    let stovbzy=stovbzyy.value
    let textTabliza=textTablizaa.value
    function generator(tr,td,text){
        let table = document.createElement('table');
        let tableDiv = document.createElement('div');
        table.style.border='1px solid red'
        tableDiv.appendChild(table);
        document.body.appendChild(tableDiv)
        for (let i=0; i<tr; i++){
            let tr = document.createElement('tr');
            tr.style.border='1px solid silver'
            table.append(tr)
            for (let j=0; j<td;j++){
                let td = document.createElement('td');
                td.style.border='1px solid green'
                td.innerText=`${text}`
                tr.appendChild(td)
            }
        }

    }
    generator(rydky,stovbzy,textTabliza)
}







//
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку
//
//
let array=['чмо','дурак','хуйло','сука'];
let btn2 = document.getElementById('btn2');
let input = document.getElementById('abc');

btn2.onclick=function (){
    let x
    for (const string of array) {
        if (input.value===string){
            x='mat'
        }
    }
    if (x==='mat'){
        alert('погане слово')
    }
    else  alert('все добре')

}


// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку

let btn3 = document.getElementById('btn3');
let inputText = document.getElementById('abcd');
btn3.onclick=function (){
    let y
    for (const mat of array) {
        if (inputText.value.toLowerCase().includes(`${mat}`)){
            y='mat'
        }

    }
    if (y==='mat'){
        alert('Не можна таке говорити')
    }
    else
        alert("ти молодець не матюкаєшся")
}