const todoForm = document.querySelector("form_todo"),
  inputTodo = form.querySelector("input"),
  todoList = document.querySelector("todolist");

function inputList(event){
  event.preventDefault;
  const todo = inputTodo.value;
  console.lodg(todo);
}

function init(){
  inputTodo.addEventListener("submit", inputList)
}