const form = document.querySelector(".form_js"),
  nameInput = form.querySelector("input"),
  greeting = document.querySelector("h4");

const HIDE_Class = "hide",
 USER_LS = "user_name";

function sayHello(name){
  greeting.innerText = `Hello! ${name} you look great today :)`
  greeting.classList.remove(HIDE_Class);
}

function saveName(name){
  localStorage.setItem(USER_LS, name);
}

function inputName(event){
  event.preventDefault;
  const newName = nameInput.value;
  console.log(newName);
  // sayHello(newName);
  // saveName(newName);
}

function askNewName(){
  nameInput.classList.remove(HIDE_Class);
  form.addEventListener("submit", inputName)
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