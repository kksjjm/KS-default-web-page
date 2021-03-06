const nameForm = document.querySelector(".form_name"),
  nameInput = nameForm.querySelector("input"),
  greeting = document.querySelector("h4");

const HIDE_Class = "hide",
 USER_LS = "user_name";

function saveName(name){
  localStorage.setItem(USER_LS, name);
}

function sayHello(name){
  greeting.innerText = `Hello! ${name} you look great today :)`
  greeting.classList.remove(HIDE_Class);
}

function inputName(event){
  event.preventDefault;
  const currentValue = nameInput.value;
  sayHello(currentValue);
  saveName(currentValue);
}

function askNewName(){
  nameInput.classList.remove(HIDE_Class);
  nameForm.addEventListener("submit", inputName)
}

function loadName(){
  const userName = localStorage.getItem(USER_LS);
  if(userName){
    sayHello(userName);
  }else{
    askNewName();
  }
}

function init(){
  loadName();
}

init(); 