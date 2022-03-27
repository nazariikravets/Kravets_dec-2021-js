let parseFavorites = JSON.parse(localStorage.getItem('keyFavorites'));
let divCon = document.createElement('div');
for (const user of parseFavorites) {
    let divUser = document.createElement("div");
    divUser.style.marginTop='20px'
    divUser.innerText=`name: ${user.name}, age: ${user.age}, status: ${user.status}`
    divCon.appendChild(divUser)
}
document.body.appendChild(divCon)