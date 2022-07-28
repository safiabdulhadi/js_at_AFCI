// class person{
// constructor(fname, lname,age){
//     this.firstName = fname;
//     this.lastName = lname;
//     this.age = age;
//     console.log("person created...");
// }

// sayHi(){
//     console.log("say hi ...");
// }

// }

// let person1 = new person("abdulhadi", "safi", 28);

// console.log(person1);
// person1.sayHi();



// class Students {
//     constructor(f, l, age) {
//         this.name = f;
//         this.lastName = l;
//         this.age = age;
//     }
//     // instance method
//     biodata(){
//         // console.log(`Hi I am a class method ${this.name} `);
//             console.log(`Hi my name is  ${this.name}  family is ${this.lastName}
//         and my age is ${this.age}`);

//     }
// }
// let obj1 = new Students("Abdulhadi", "Safi", 28);
// let obj2 = new Students("javad", "Khan", 22);
// // console.log(obj1);
// obj1.biodata();
// obj2.biodata();


// // how to inherit class
// class player extends Students{

// }
// let obj3 = new player("nawid", "Samadi", 26);
// let obj4 = new player("javad", "Khan", 22);
// obj3.biodata();
// obj4.biodata();


// class User {
//     constructor(email, name) {
//         this.email = email;
//         this.name = name;
//     }
//     login(){
//         console.log(this.email, 'just logged in');
//     }
//     logout(){
//         console.log(this.email, 'just logged out');
//     }
// }
// var userOne = new User('safiabdulhadi1994@gmail.com', 'Abdulhadi');
// var userTwo = new User('yoshi@gmail.com', 'Yoshi');

// userOne.login();
// userTwo.logout();

// function User(email, name){
//     this.email = email;
//     this.name = name;
//     this.online = false;
//     this.login = function(){
//         console.log(this.email, 'has logged in');
//     }
// }

// var userOne = new User('safiabdulhadi1994@gmail.com', 'Abdulhadi');
// var userTwo = new User('yoshi@gmail.com', 'Yoshi');

// console.log(userOne);
// userTwo.login();