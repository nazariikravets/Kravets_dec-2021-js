// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage
//
let div1 = document.createElement('div');
let form = document.createElement('form');
let input1 = document.createElement('input');
let input2 = document.createElement('input');
let button1 = document.createElement('button');
button1.innerText='Відправити'
input1.setAttribute('name', 'input1')
input2.setAttribute('name', 'input2')
input1.setAttribute('placeholder', 'name')
input2.setAttribute('placeholder', 'age')
document.body.appendChild(div1);
div1.appendChild(form)
form.append(input1,input2,button1);

let object=function (nameUser,ageUser){
   let userid= {
       name:nameUser,
       age:ageUser
    }
    localStorage.setItem('user', JSON.stringify(userid))
}
button1.onclick=function () {
    object(input1.value,input2.value)
}



// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищ

let model = document.forms.car.model;
let type = document.forms.car.type;
let volume = document.forms.car.volume;
let btn2 = document.getElementById('btn2');
let arrayCarFn=function (model,type,volume) {
    let array=JSON.parse(localStorage.getItem('car')) || [];

    array.push({model,type,volume})
    localStorage.setItem('car',JSON.stringify(array))
}
btn2.onclick=function (){
    arrayCarFn(model.value,type.value,volume.value)
}