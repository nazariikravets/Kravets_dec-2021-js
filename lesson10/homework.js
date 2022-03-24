// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так,
// чтобы при клике на кнопку исчезал элемент с id="text".
//
let text = document.getElementById('text');
let btn1 = document.getElementById('btn1');
btn1.onclick = function () {
    text.style.display = 'none'
}


//     - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
let btn2 = document.getElementById('btn2');
btn2.onclick = function () {
    btn2.style.display = 'none'
}


//
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
//
let inputAge = document.getElementById('inputAge');
let btn3 = document.getElementById('btn3');
let age = inputAge.value

btn3.onclick = function () {
    if (age < 18) {
        alert('Вам немає 18')
    } else if (age >= 18) {
        alert('вам є 18')
    }

}


// - Создайте меню, которое раскрывается/сворачивается при клике
//
//
let h2 = document.getElementById('h2');
let ulli = document.getElementById('ul');
h2.onclick = function () {
    ulli.classList.toggle('style')
}


// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.

let array = [{coment: 'cупер', body: 'ДЯКУЮ'},
    {coment: 'Такоє', body: 'Могло бути і краще'},
    {coment: 'Клас!', body: 'мені сподобалось, ви найкращі'}
]
let div = document.createElement('div');
for (const arrayElement of array) {
    let divElement = document.createElement('div');
    let h2Element = document.createElement('h2');
    let parElement = document.createElement('p');
    h2Element.innerText=`${arrayElement.coment}`
    parElement.innerText=`${arrayElement.body}`
    let button = document.createElement('button');
    button.innerText='Звернути коментар'
    button.onclick=function (){
        parElement.style.display='none'
    }
divElement.append(h2Element,parElement,button)
    div.append(divElement)

}
document.body.append(div)

