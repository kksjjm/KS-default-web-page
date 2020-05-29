const nameInput = document.querySelector(".form_js input"),
 greetingText = document.querySelector("h4");

const HIDE_Class = "hide",
USER_Local = "user_name";

function sayHello(name){
  greetingText.innerText = `Hello! ${name} you look so great today!`;
  greetingText.classList.remove(HIDE_Class);
}

function getUserName(){
  const userName = localStorage.getItem(USER_Local);
  if(userName){
    sayHello(userName);
  }else{
    nameInput.classList.remove(HIDE_Class);
  }
}

function init(){
  getUserName();
}

init();