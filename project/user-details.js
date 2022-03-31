let url = new URL(location.href)
let element = JSON.parse(url.searchParams.get('date'))

let divConteiner = document.createElement("div");
divConteiner.classList.add('conteiner')
let divInfoUser = document.createElement('div');
divInfoUser.innerText = `id: ${element.id};name: ${element.name};username: ${element.username};email: ${element.email}; address-  (street: ${element.address.street}; suite:${element.address.suite}; city:${element.address.city}; zipcode:${element.address.zipcode}; geo -( lat: ${element.address.geo.lat}; lng;${element.address.geo.lng}));phone:${element.phone}; website:${element.website}; company - (name:${element.company.name}; catchPhrase: ${element.company.catchPhrase}; bs:${element.company.bs};)  `
document.body.appendChild(divConteiner)
let btn2 = document.createElement('button');
btn2.innerText = 'post of current user'
btn2.classList.add('btn2')
divConteiner.append(divInfoUser, btn2)
let postTitle = document.createElement('div');
postTitle.classList.add('postTitle')
document.body.appendChild(postTitle)
btn2.onclick = function () {
    fetch(`https://jsonplaceholder.typicode.com/users/${element.id}/posts`)
        .then(users => users.json())
        .then(users => {
            console.log(users)
            for (const element of users) {
                let divBtn3Title = document.createElement('div');
                divBtn3Title.classList.add('postbtn3')
                let title = document.createElement('div');
                title.innerText = element.title
                let btn3 = document.createElement('button');

             btn3.innerText = 'інформація про пост'
                divBtn3Title.append(title, btn3)
                btn2.disabled = true
                postTitle.appendChild(divBtn3Title)

                btn3.onclick=function (){
                    location.href=`./post-details.html?date=${JSON.stringify(element)}`
                }
            }


        })
}
