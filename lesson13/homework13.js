setTimeout(()=>{
    let time=9
console.log(`${time}-Прокинутись`)
    time=time+2
    setTimeout(()=>{
        console.log(`${time}-Поснідати`)
        time=time+2
        setTimeout(()=>{
            console.log(`${time}-Подивитись лекцію`)
            time=time+2
            setTimeout(()=>{
                console.log(`${time}-Пообідати`)
                time=time+2
                setTimeout(()=>{
                    console.log(`${time}-Зробити домашню роботу`)
                    time=time+2
                    setTimeout(()=>{
                        console.log(`${time}-Погуляти`)
                        time=time+2
                        setTimeout(()=>{
                            console.log(`${time}-Повечеряти`)
                            time=time+2
                            setTimeout(()=>{
                                console.log(`${time}-Заснути`)
                            },2000)
                        },2000)
                    },2000)
                },2000)
            },2000)
        },2000)
    },2000)
},2000)








new Promise((resolve, reject) =>{
    let time=9
    setTimeout(()=>{
        console.log(`${time}-Прокинутись`)
        time=time+2
        resolve(time)
    },2000)
} ).then(time => {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          console.log(`${time}-Поснідати`)
          time = time + 2
          resolve(time)
      }, 2000)
  })})
    .then(time => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(`${time}-Подивитись лекцію`)
                time = time + 2
                resolve(time)
            }, 2000)
        })})
    .then(time => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(`${time}-Пообідати`)
                time = time + 2
                resolve(time)
            }, 2000)
        })})
    .then(time => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(`${time}-Зробити домашню роботу`)
                time = time + 2
                resolve(time)
            }, 2000)
        })})
    .then(time => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(`${time}-Погуляти`)
                time = time + 2
                resolve(time)
            }, 2000)
        })})
    .then(time => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(`${time}-Повечеряти`)
                time = time + 2
                resolve(time)
            }, 2000)
        })})
    .then(time => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(`${time}-Заснути`)
                time = time + 2
                resolve(time)
            }, 2000)
        })})



















function day(text,time ,millisec){
   return  new Promise((resolve, reject)=>{

       setTimeout(()=>{
           console.log(`${time} - ${text}`)
           time=time+2;
           resolve(time)
       },millisec)
   })
}

day('Прокинутись',9,2000)
    .then(value=>{
        return day('Поснідати',value,2000)
    })
    .then(value=>{
        return day('Подивитись лекцію',value,2000)
    })
    .then(value=>{
        return day('Пообідати',value,2000)
    })
    .then(value=>{
        return day('Зробити домашню роботу',value,2000)
    })
    .then(value=>{
        return day('Погуляти',value,2000)
    })
    .then(value=>{
        return day('Повечеряти',value,2000)
    })
    .then(value=>{
        return day('Заснути',value,2000)
    })