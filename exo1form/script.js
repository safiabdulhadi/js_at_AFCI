let form = document.querySelector("#loginForm");

console.log(form.email);
// Ecouter la modification de l'email
form.email.addEventListener("change", function(){
validEmail(this)
});

const validEmail = function(inputEmail){
    // Creation de la reg exp pour validation email
let emailRegExp = new RegExp('^[a_zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$','g');

let textEmail = emailRegExp.test(inputEmail.value);
let small = inputemail.nextelementSibling;
if(textEmail){
small.innerHTML = "Adresse Valide ";
small.classList.add("text-success");
} else{
    small.innerHTML = " Adresse Non valide ";
}

};