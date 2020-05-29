const form = document.querySelector(".form_js"),
  nameInput = form.querySelector("input"),
  greeting = document.querySelector("h4");

const HIDE_Class = "hide",
const USER_ = "user_name";

console.log(form);

function sayHello(name){
  greeting.innerText = `Hello! ${name} you look great today :)`
  greeting.classList.remove(HIDE_Class);
}

function loadName(){
  const userName = localStorage.getItem(USER_);
  if(userName){
    sayHello(userName);
  }else{
    
    nameInput.classList.remove(HIDE_Class);
  }
}

function init(){
  loadName();
}

init();