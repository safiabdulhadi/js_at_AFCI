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



class Students {
    constructor(f, l, age) {
        this.name = f;
        this.lastName = l;
        this.age = age;
    }
    // instance method
    biodata(){
        // console.log(`Hi I am a class method ${this.name} `);
            console.log(`Hi my name is  ${this.name}  family is ${this.lastName}
        and my age is ${this.age}`);

    }
}
let obj1 = new Students("Abdulhadi", "Safi", 28);
let obj2 = new Students("javad", "Khan", 22);
// console.log(obj1);
obj1.biodata();
obj2.biodata();


// how to inherit class
class player extends Students{

}
let obj3 = new player("nawid", "Samadi", 26);
let obj4 = new player("javad", "Khan", 22);
obj3.biodata();
obj4.biodata();



let a = prompt('Please enter first number that you add ', '');
let b = prompt ('Please enter second number that you add ','');
let c = parseInt(a) + parseInt(b);
console.log(`this is the sum of number you dail ${c}`);