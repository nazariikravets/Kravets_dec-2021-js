// 1) Напишіть код, який :
// a) додає клас з назвою групи, елементу з ід main_header
document.getElementById('main_header').classList.add('dec-2021') ;


// b) робить шириниу елементу ul 400pxu
let elementsUl=document.getElementsByTagName('ul')
elementsUl[0].style.width='400px'

// c) робить шириниу всіх елементів з класом linkList шириною 50%
let elementsLinkList=document.getElementsByClassName('linkList')
for (const elements of elementsLinkList) {
    elements.style.width='50%'
}



// d) отримує текст який зберігається в елементі з класом listElement2
let elementsListElement2= document.getElementsByClassName('listElement2')
console.log(elementsListElement2[0].innerText);


// e) отримує всі елементи li та змінює ім колір фону на сірий
let elementsLi=document.getElementsByTagName('li')
for (const element of elementsLi) {
    element.style.background='silver'
}


// f) отримує всі елементи 'a' та додає їм клас anchor
let elementsA=document.getElementsByTagName('a')
for (const element of elementsA) {
    element.classList.add('anchor')
}



// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів

for (const element of elementsA) {
    if (element.innerText==='link3'){
        element.style.fontSize='40px'

    }
}


// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
for (const element of elementsA) {
    element.classList.add(`element_${element.innerText}`)
}


// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
let elementsSubHeader=document.getElementsByClassName('sub-header')
let becPromt=prompt("enter  background")
for (const element of elementsSubHeader) {
    element.style.background=`${becPromt}`
}

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
let colorPromt=prompt("enter color")
for (const element of elementsSubHeader) {
    if (element.innerText==='content 2 segment'){
        element.style.color=`${colorPromt}`
    }
}


// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
let textPromt=prompt('Enter text')
let elementsContetnt1=document.getElementsByClassName('content_1')
elementsContetnt1[0].innerText=`${textPromt}`
console.log(elementsContetnt1[0].innerHTML)
// l) отримати елементи p та змінити їм padding на 20px
let elementsP=document.getElementsByTagName('p')
for (const element of elementsP) {
    element.style.padding='20px'
}

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
let elementsText2=document.getElementsByClassName('text2')
elementsText2[0].innerText='dec-2021'

