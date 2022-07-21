// const obj = new Object({
//     name: "Abdulhadi"
// });

// const obj = new obj();

const obj = {
    name: 'Safi abdulhadi',
    getName: function(){
        return this.name;
    },
    getRoll: function(){
        return this.roll;
    }
}

// console.log(obj);

const obj2 ={
    roll:1, 
    name: "Ali Khan", // function will return this name
    __proto__:obj 
}

const obj3 ={
    class: "web developer",
    __proto__:obj2
}

// console.log(obj3.getRoll());
// console.log(obj3.getName());
 // console.log(obj2.name); //to get prototype of objects name
// console.log(obj.getName());
// console.log(obj2.getName());
// console.log(obj2.getRoll());


const array1=["Arrray"];

console.log(array1);


const object = new Object();
console.log(object);


const array = new Array();
console.log(array);

const fun = new function(){};

console.log(fun);


Array.prototype.show = function(){
    return this;
}
const city = ["Lille"];
console.log(city.show());



Array.prototype.convertIntoObject = function(){
    let newObj = {};
    this.forEach(element => {
        newObj[element] = element;
        })
        return newObj;
}
console.log(city.convertIntoObject())