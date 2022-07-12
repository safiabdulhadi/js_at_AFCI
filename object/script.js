var detail = {
    firstName: 'Abdulhadi',
    lastName: 'Safi',
    age: 28,
   city:["Lille", 59000],
   education:{
    learnWeb:"web developer",
   },
fullname: function(){
    return this.firstName + ' ' +this.lastName;
}
};
console.log(detail.fullname());