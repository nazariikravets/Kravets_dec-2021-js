// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
//
let User=function (id,name,surname,email,phone){
    this.id=id;
    this.name=name;
    this['suraname']=surname
    this['email']=email
    this['phone']=phone
}
let array=[]
array[0]= new User(1,'ivan','ivanow','asdada@.gmail.com',235234534)
array[1]= new User(2,'ivan','ivanow','asdada@.gmail.com',235234534)
array[2]= new User(3,'ivan','ivanow','asdada@.gmail.com',235234534)
array[3]= new User(4,'ivan','ivanow','asdada@.gmail.com',235234534)
array[4]= new User(5,'ivan','ivanow','asdada@.gmail.com',235234534)
array[5]= new User(6,'ivan','ivanow','asdada@.gmail.com',235234534)
array[6]= new User(7,'ivan','ivanow','asdada@.gmail.com',235234534)
array[7]= new User(8,'ivan','ivanow','asdada@.gmail.com',235234534)
array[8]= new User(9,'ivan','ivanow','asdada@.gmail.com',235234534)
array[9]= new User(10,'ivan','ivanow','asdada@.gmail.com',235234534)
console.log(array)



// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//
console.log(array.filter(user => user.id % 2 === 0));


// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//
console.log(array.sort((a, b) => a.id - b.id));


// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
class Client {
    constructor(id,name,surname,email,phone,order) {
        this['id']=id
        this['name']=name;
        this['suraname']=surname;
        this['email']=email;
        this['phone']=phone
        this['order']=order
    }
}
let client=[]
client[0]=new Client(1,'Victor','Volman','sadfd@gmail.com',12333434534,['phone','leptop','marker','pen','water','juice'])
client[1]=new Client(2,'Victor','Volman','sadfd@gmail.com',12333434534,['phone','leptop','marker','pen','water'])
client[2]=new Client(3,'Victor','Volman','sadfd@gmail.com',12333434534,['phone','leptop','marker',])
client[3]=new Client(4,'Victor','Volman','sadfd@gmail.com',12333434534,['phone',])
client[4]=new Client(5,'Victor','Volman','sadfd@gmail.com',12333434534,['phone','leptop','marker','pen'])
client[5]=new Client(6,'Victor','Volman','sadfd@gmail.com',12333434534,['phone','leptop','marker','pen','water'])
client[6]=new Client(7,'Victor','Volman','sadfd@gmail.com',12333434534,['phone','leptop','marker',])
client[7]=new Client(8,'Victor','Volman','sadfd@gmail.com',12333434534,['phone','leptop','marker','pen'])
client[8]=new Client(9,'Victor','Volman','sadfd@gmail.com',12333434534,['phone','leptop','marker','pen','water','juice'])
client[9]=new Client(10,'Victor','Volman','sadfd@gmail.com',12333434534,['phone','leptop','marker','pen'])
console.log(client)
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
console.log(client.sort((a, b) => a.order.length - b.order.length))