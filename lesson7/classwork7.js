// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник,
// рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
let Cars = function (year,zavod,model, maxSpeed, engineV) {
    this.model = model;
    this.zavod = zavod;
    this.year = year;
    this.maxspeed = maxSpeed;
    this.engineV = engineV;
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`);
    }
    this.info = function () {
        for (const argumentsKey in this) {
            if (typeof this[argumentsKey] !== 'function')
                console.log(`${argumentsKey}-${this[argumentsKey]}`);
        }
        }
    this.increaseMaxSpeed=function (newSpeed){
       this.maxspeed=this.maxspeed+newSpeed
    }
    this.changeYear=function (newValue){this.year=newValue }
    this.addDriver=function (driver){
        this['driver']=driver
    }
}
let car= new Cars(2008,'Japan','Toyota',230,3.5);
console.log(car)
car.drive()
car.info()
car.increaseMaxSpeed(20)
car.changeYear(2010)
car.info()
car.drive()
car.addDriver('Nazar');


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями
// модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
//
class Car1 {

    constructor(model,zavod,year,maxSpeed,engineV) {
        this.model=model;
        this.zavod=zavod;
        this.year=year;
        this.maxSpped=maxSpeed;
        this.engineV=engineV;
        this.drive=function (){
            console.log(`їдемо зі швидкістю ${this.maxSpped} на годину`);
        }
        this.info=function (){
            for (const key in this) {
                if (typeof this[key]!=='function')
                    console.log(`${key}-${this[key]}`);

            }
        }
        this.increaseMaxSpeed=function (newSpeed){
            this.maxSpped=this.maxSpped+newSpeed
        }
        this.changeYear=function (newValue){
            this.year=newValue
        }
        this.addDriver=function (driver){
            this.driver = driver;
        }
    }
}
let car2=new Car1('Mercedes','Germany',2018,300,4.0)
console.log(car2)
console.log(car2.addDriver('vasia'));
car2.drive()
car2.info()
car2.increaseMaxSpeed(30)
car2.changeYear(2020)
car2.drive()
car2.info()


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

let Popelyshka=function (name,age,size){
    this.name=name;
    this.age=age;
    this.size=size;
}
let arrayPopelyshka=[]
arrayPopelyshka[0]=new Popelyshka('Oksana',21,35)
arrayPopelyshka[1]=new Popelyshka('Olena',22,36)
arrayPopelyshka[2]=new Popelyshka('Olha',23,37)
arrayPopelyshka[3]=new Popelyshka('Vika',19,38)
arrayPopelyshka[4]=new Popelyshka('Nadia',20,39)
arrayPopelyshka[5]=new Popelyshka('Vita',25,40)
arrayPopelyshka[6]=new Popelyshka('Natalia',18,40)
arrayPopelyshka[7]=new Popelyshka('Svitlana',17,39)
arrayPopelyshka[8]=new Popelyshka('Valia',23,36)
arrayPopelyshka[9]=new Popelyshka('Tania',24,35)

console.log(arrayPopelyshka)

class Prince{
    constructor(name,age,findSize) {
        this.name=name;
        this.age=age;
        this.findSize=findSize;
    }
}

let prince=new Prince('Vasia', 25, 38)

for (const popelyshka of arrayPopelyshka) {
    if (popelyshka.size===prince.findSize){
        console.log(popelyshka)
    }

}

console.log(arrayPopelyshka.find(popelyshka => popelyshka.size === prince.findSize));