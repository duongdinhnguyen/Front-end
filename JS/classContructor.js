class User{
    constructor (id, name, age){
        this.id =id,
        this.name = name,
        this.age = age
    }
    getName(){
        console.log(this.name);
    }
}
// function User(id, name, age){
//     this.id =id,
//     this.name =name,
//     this.age = age,
//     this.getName= function(){
//         console.log(this.name);
//     }
// }

var student = new User(1, 'Duong', 21);
student.getName();