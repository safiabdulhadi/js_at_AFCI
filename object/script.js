// var detail = {
//     firstName: 'Abdulhadi',
//     lastName: 'Safi',
//     age: 28,
//    city:["Lille", 59000],
//    education:{
//     learnWeb:"web developer",
//    },
// fullname: function(){
//     return this.firstName + ' ' +this.lastName;
// }
// };
// console.log(detail.fullname());

// let obj = new Object();
// obj.name = 'Abdulhadi';
// obj.age = 28;

// console.log(obj.name + " " + obj.age);

// // Also we can create objects 

// let obj1 ={
//     name: 'Safi',
//     age: 28
// }
// console.log(obj1.name + " " +obj1.age);


// let obj1 ={
//     name: 'Safi',
//     age: 28,
//     phoneNumber: 12345
// }

// for(let key in obj1){
//     console.log(key + " " + obj1[key])
// }



// var fees = {};
// fees['Rahul'] = 100;
// fees['Sumit'] = 200;
// fees['Rohan'] = 300;
// console.log(fees.Rahul + " " + fees.Sumit + " " + fees.Rohan);

// var fees = {};
// fees.Rahul = 200;
// fees.Sumit = 400;
// fees.Rohan = 100;
// console.log(fees['Rahul'] + " " + fees['Sumit'] + " " + fees['Rohan']);
// console.log(fees.Rahul + " " + fees.Sumit + " " + fees.Rohan);

// var fees = {
// Rahul : 200,
// Sumit : 400,
// Rohan : 100
// }
// console.log(fees);
// console.log(fees.Rahul + " " + fees.Sumit + " " + fees.Rohan);


// var fees = {};
// fees['Rahul'] = 100;
// fees['total'] = function(){
//     return (100 + 200)
// }
// console.log(fees.total());

// var fees = {
//     Rahul: 100, 
//     Sumit: 300,
//     Rohan: 200
// }
// console.log(fees);
// console.log(fees.Rahul);
// console.log(fees.Rahul);


// let user = {
//     name: "John",
//     age: 30,
//     sayHi(){
//         console.log(this.name);
//     }
// };
// user.sayHi();

// let user2 = {
//     name: "John",
//     age: 25,
//     fun: function(){
//         console.log(this.age)
//     }
// }
// console.log(user2.age);
// console.log(user2.fun());



// let user = {
//     name: "John",
//     age: 30
// };

// user.sayHi = function(){
//     console.log(this.name + " " + this.age);
// }
// user.sayHi();

const france ={
    name: 'France',
    population: 67,
    capital: 'paris',
    languages:['french', 'English','Arabic']
}

for(const country in france){ 
    // console.log( country + " "  + france[country]);
    // console.log( country,france[country]);
    // console.log(`${country} ${france[country]}`);
}

// Object constructor
// console.log(france)
const arrFromObj = Object.entries(france);
console.log(arrFromObj);
// arrFromObj.forEach(element => {
//     console.log(element);
// })
// for(const [key, value] of Object.entries(france)){
//     console.log(key, value)
// }

console.log(Object.keys(france));