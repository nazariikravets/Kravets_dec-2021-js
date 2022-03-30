// // function User(name,age,status){
// // this.name=name;
// // this.age=age;
// // this.status=status
// // }
// // let podd=new User('nazar',21,true)
// // console.log(podd)
//
//
//
// function User(name,surname,age){
//     this.name=name
//     this.suraname=surname
//     this.age=age
// }
//
// function Userlogin(name,surname,age,password){
//     User.call(this,name,surname,age);
//     this.password=password;
// }
//
// let asd=new Userlogin('nazar','kravets',21,'abcd')
// console.log(asd)


     setTimeout(() => {
        let counter = 0;-->
         console.log('do', counter);-->
         setTimeout(() => {-->
             counter++;-->
             console.log('do', counter);-->
            setTimeout(() => {-->
                 counter++;-->
                 console.log('do', counter)-->
             }, 2000)-->
         }, 1500);-->
     }, 1000)-->

    let promise = new Promise((resolve, reject) => {-->
        setTimeout(() => {-->
            let counter = 0;-->
<           console.log('do', counter);-->
            resolve(counter);-->
        }, 1000)-->
    });-->

    promise-->
        .then(counter => {-->
            return new Promise((resolve, reject) => {-->
                setTimeout(() => {-->
                    counter++;-->
                    console.log('do', counter);-->
<                   resolve(counter);-->
                }, 1500);-->

            })-->
        })-->
        .then(value => {-->
            return new Promise((resolve, reject) => {-->
                setTimeout(() => {-->
<                   value++;-->
<                   console.log('do', value);-->
                    resolve(value);-->
<               }, 2000)-->
<           });-->
        })-->
        .then(value => new Promise((resolve, reject) => {-->
            if (value === 2) {-->
                setTimeout(() => {-->
                    reject(value);-->
<               }, 500)-->
            } else {-->
<               setTimeout(() => {-->
                    resolve(value);-->
<               }, 3000)-->
<           }-->

<       }))-->
        .then(value => console.log(value))-->
      .catch(reason => console.log(reason));-->



{/*<script>*/}
{/*    fetch('https://jsonplaceholder.typicode.com/users')*/}
{/*    .then(value => {*/}
{/*    return value.body.getReader().read()*/}
{/*}).then(value => {*/}
{/*    let uint8Array = value.value;*/}
{/*    let map = uint8Array.map(ascii => {*/}
{/*    let char = String.fromCharCode(ascii);*/}
{/*    console.log(char);*/}
{/*    return char;*/}
{/*});*/}
{/*    let join = map.join();*/}
{/*    console.log(join);*/}
{/*});*/}

{/*</script>*/}

{/*</body>*/}
{/*</html>*/}
