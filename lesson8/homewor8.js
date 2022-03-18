// -- отримує текст з параграфа з id "content"

console.log(document.getElementById('content'));

// -- отримує текст з блоку з id "rules"
let textRules= document.getElementById('rules');
console.log(textRules);

// -- замініть текст параграфа з id 'content' на будь-який інший
document.getElementById('content').innerText = 'asdqe';


// -- замініть текст параграфа з id 'rules' на будь-який інший
textRules.innerHTML = '<h2>wrefgdgdfgd</h2>';


// -- змініть кожному елементу колір фону на червоний
let elementAll=document.body.children
console.log(elementAll)
for (const element of elementAll) {
    element.style.background='red'
}

// -- змініть кожному елементу колір тексту на синій


for (const element of elementAll) {
    element.style.color='blue'
}
// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
let classList= document.getElementById('rules').classList
for (const classListElement of classList) {
    console.log(classListElement)
}
// -- поміняти колір тексту у всіх елементів fc_rules на червоний

let elementsFcRules= document.getElementsByClassName('fc_rules')
for (const element of elementsFcRules) {
    element.style.color='red'
}