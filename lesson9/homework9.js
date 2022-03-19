// Все робити за допомоги js.
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
//
let divElement = document.createElement('div');
divElement.classList.add('wrap');
divElement.classList.add('collapse');
divElement.classList.add('alpha');
divElement.classList.add('beta');
divElement.style.background = 'silver';
divElement.style.color = 'red';
divElement.style.fontSize = '20px';
document.body.append(divElement)
let divElement2 = divElement.cloneNode(true)
document.body.appendChild(divElement2)


// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
//
let array = ['Main', 'Products', 'About us', 'Contacts']
for (const string of array) {
    let liElement = document.createElement('li');
    liElement.innerText = string
    let elementsMeny = document.getElementsByClassName('menu')[0];
    elementsMeny.append(liElement)
}


// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
//
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
for (const element of coursesAndDurationArray) {
    let divElement1 = document.createElement('div');
    divElement1.innerText=`${element.title} ${element.monthDuration}`
    document.body.appendChild(divElement1)
}




// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,
// в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

for (const element of coursesAndDurationArray) {
    let htmlDivElement = document.createElement('div');
    htmlDivElement.classList.add('item');
    let htmlH2Element = document.createElement('h2');
    htmlH2Element.classList.add('heading');
    htmlH2Element.innerText=`${element.title}`;
    let htmlParagraphElement = document.createElement('p');
    htmlParagraphElement.classList.add('description');
    htmlParagraphElement.innerText=`${element.monthDuration}`;
    htmlDivElement.append(htmlH2Element,htmlParagraphElement);
    document.body.appendChild(htmlDivElement);
}