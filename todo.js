const todoForm = document.querySelector(".form_todo"),
  inputTodo = todoForm.querySelector("input"),
  todoList = document.querySelector(".todolist");

const TODO_LS = "todo_list";

function addtodoList(value){
  const todo = document.createElement("li");
  const text = document.createElement("span");
  text.innerText = value; 
  const delBtn = document.createElement("button");
  delBtn.innerText = 'x'
  todo.appendChild(text);
  todo.appendChild(delBtn);
  todoList.appendChild(todo);
}

function inputList(event){
  event.preventDefault;
  const todo = inputTodo.value;
  localStorage.setItem(TODO_LS, todo);
  addtodoList(todo);
  inputTodo.value='';
}

function init(){

  todoForm.addEventListener("submit", inputList);
}

init();