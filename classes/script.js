class person{
constructor(fname, lname,age){
    this.firstName = fname;
    this.lastName = lname;
    this.age = age;
    console.log("person created...");
}

sayHi(){
    console.log("say hi ...");
}

}

let person1 = new person("abdulhadi", "safi", 28);

console.log(person1);
person1.sayHi();