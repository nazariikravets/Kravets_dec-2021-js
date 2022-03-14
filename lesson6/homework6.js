// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

let string1 = 'hello world'
console.log(string1.length);


let string2 = 'lorem ipsum'
console.log(string2.length);


let string3 = 'javascript is cool'
console.log(string3.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

let toUpperCase1 = string1.toUpperCase()
console.log(toUpperCase1)

let toUpperCase2 = string2.toUpperCase()
console.log(toUpperCase2)

let toUpperCase3 = string3.toUpperCase()
console.log(toUpperCase3)

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

console.log(toUpperCase1.toLowerCase());
console.log(toUpperCase2.toLowerCase());
console.log(toUpperCase3.toLowerCase());

// "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string   '
console.log(str.trim());

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']

let str1 = 'Каждый охотник желает знать';
let stringToarray = (str) => {
    return str.split(' ')
}
let array = stringToarray(str1)
console.log(array)

// Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый

let delete_characters = (str, length) => {
    return str.substring(0, length)
}
let resultSubstring = delete_characters(str1, 7)
console.log(resultSubstring)


// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами.
//     При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

let str2 = "HTML JavaScript PHP";
let insert_dash = (str) => {
    return str.toUpperCase().replaceAll(' ', '-')
}
let resultReplaceToUpperCase = insert_dash(str2)
console.log(resultReplaceToUpperCase)


// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
let str3 = 'я хочу додому'
let fn = (str) => {
    if (str[0] === ' ')
        return str
    return str[0].toUpperCase() + str.slice(1)
}
let resultToUpperCaseSlice = fn(str3)
console.log(resultToUpperCaseSlice)


// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

let capitalize = (str) => {

   return  str.split(' ').map(wordStr => wordStr.charAt(0).toUpperCase()+wordStr.slice(1)).join(' ')

}
let resultCapitalize=capitalize(str3)
console.log(resultCapitalize)