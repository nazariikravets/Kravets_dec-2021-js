// є масив -
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
// створити під кожен об'єкт свій блок з конопкою "додати до улюблених"' +
// ' при натисканні на яку об'єкт потрапляє до масиву
// favorites улюблених обраних об'єктів в локальному сховищі.
// Створити сторніку favorites.html при переході на яку потрібно вивест в документ
// всіх обраних на попередньому етапі.
let divConteiner = document.createElement('div');
divConteiner.classList.add('conteiner');
document.body.appendChild(divConteiner)
for (const user of users) {
    let divUser = document.createElement('div');
    let divObject = document.createElement('div');
    let button = document.createElement('button');
    divObject.innerText=`name: ${user.name}, age: ${user.age}, status: ${user.status}`
    button.innerText='додати до улюблених'
    divUser.style.display='flex'


    divUser.append(divObject,button)
    divConteiner.append(divUser)
    button.onclick=function () {
        let favorites=JSON.parse(localStorage.getItem('keyFavorites'))|| []
        favorites.push(user)
localStorage.setItem('keyFavorites',JSON.stringify(favorites))
        button.disabled=true
    }
}
