
let divConteiner = document.createElement('div');
divConteiner.classList.add('wrap')
fetch('https://jsonplaceholder.typicode.com/users')
    .then(users => users.json())
    .then(users => {
        for (const user of users) {
            let usere = document.createElement('div');
            let nameDiv = document.createElement('div');
            let idDiv = document.createElement('div');
            let btn1 = document.createElement('button');
            usere.classList.add('user')
            idDiv.innerText=user.id
            nameDiv.innerText=user.name
            btn1.innerText='Перегляньте детальнішу інформацію'
            usere.append(idDiv,nameDiv,btn1)
            divConteiner.appendChild(usere)
            btn1.onclick=function (){
location.href=`./user-details.html?date=${JSON.stringify(user)}`
            }
        }

    })
document.body.appendChild(divConteiner)