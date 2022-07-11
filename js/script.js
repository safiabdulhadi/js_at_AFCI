"use strict";
// var a = ["ali", "khan", "nawid", "abdul"];
// var b =a.slice(-3);
// console.log(b)

// if statements 

// const time = 19;

// if(time < 12) {
//     console.log('Good morning');
// }
// else if(time === 12){
//     console.log('oh it is noon!');
// } else if(time > 12 && time<18){
//     console.log('Good afternoon')
// }
// else {
//     console.log('good evening');
// }


// Comparison operators
// let x = 20;
// // Equal
// console.log(x ==20)
// console.log(x =='20')
// // Not Equal 
// console.log(x !=20) //false
// console.log(x !=2); //This is true
// // Deeply Equal
// console.log(x ===20); //This is true
// console.log(x ==='20'); //this will be false coz its string

// // Strict not Equal
// console.log(x !==20); //this is false
// console.log(x !=="20"); //This is true
// console.log(x !==2);//This is true coz it not the same value

// Greater than

// Greater or equal 

// les than

// les than or equal


// // Logical Operators
// const fruit = ["apple", "banana", 'grape'];

// // And
// if(fruit.includes('apple') && fruit.includes('banana')){
//     console.log('Both fruits exist its mean that are true');
// }

// //or
// if(fruit.includes('coconut')|| fruit.includes('apple')){
//     console.log('Atleast one fruit exists');
// }

// // Not
// if(!fruit.includes('cherry')){
//     console.log('Cherry is missing')
// }

// let divisible = 1;

// if (divisible == 1) {
//     console.log('one')
// } else if (disible == 5) {
//     console.log("five")
// } else if (disible == 15) {
//     console.log(15)
// }else{
//     console.log('out')
// }
// let num = 15;

// if(num % 15 ===0 ){
//     console.log('fizz  buzz')
// } else if (num % 5=== 0){
//     console.log('buzz')
// } else if (num % 3=== 0){
//     console.log('fizz')
// } else {
//     console.log(num) 
// }

// for(let i = 1; i < 21; i++){
//     if(i % 15 ===0 ){
//         console.log('fizz  buzz')
//     } else if (i % 5=== 0){
//         console.log('buzz')
//     } else if (i % 3=== 0){
//         console.log('fizz')
//     } else {
//         console.log(i) 
//     }

// }

// loop for + if

// let books = ["ahamd", "khan", "ali", "karim"];
// for(let i = 0; i < books.length; i++){
//   if(books[i] === "khan"){
//     console.log(books[i]);
//   }
// }




//  objects

// const user = {
//     fName: 'ali',
//     lName: 'khan',
//     pets: 'dog'
// }


// console.log(user.fName, user.lName);

// console.log(window);
// window.alert()


// const gas = [20,10,30,40,50];
// const food = [20,60,50,40,30];

// function calculateTotal(arr){
// let total = 0;
// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i])
//     total += arr[i];
// }
// return total;
// }

// console.log(calculateTotal(gas));



// Array inside of array a is objects
// const users = [
//     {
//         username: 'admin',
//         followers: 29,
//         is_folloowed: false
//     },
//     {
//         username: 'ahamd',
//         followers: 25,
//         is_folloowed: true
//     },
//     {
//         username: 'admin',
//         followers: 35,
//         is_folloowed: false
//     },

// ]
// console.log(users[1]);
// console.log(users[2].followers);

// for(let i = 0; i < users.length; i++){
//     if(users[i].is_folloowed === true){
//         // console.log("hi there " + users[i].username + " " + "welcome" );
//         // console.log("hi there ");
//     }
// }

// for(let i = 0; i < users.length; i++){
//     // console.log(users[i])
//     console.log(users[i].username + " ")// all 3 username outputs
// }



// let stopLight = 'yellow';

// if(stopLight === 'red'){
//     console.log("Stop!");
// } else if(stopLight === 'yellow'){
//     console.log('Slow down');
// } else if(stopLight === 'green'){
//     console.log('Go!')
// } else{
//     console.log('Caution, unknown!');
// }

// function change() {
//     let txt = document.getElementById('txt')
//     txt.innerHTML = " Welcome to js";
//     txt.style.backgroundColor = "green";
// }
// setTimeout(change, 2000);

let p = new Promise((resolve, reject) => {
    let a = 1 + 1;
    if (a === 2) {
        resolve("success !");
    } else {
        reject("failed !");
    }
})
p.then((message) => {
    console.log(`this is in the then ${message}`)
}).catch((error) => {
    console.log(`this is in the catch error ${error}`)
})