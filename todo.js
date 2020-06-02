const todoForm = document.querySelector(".form_todo"),
  inputTodo = todoForm.querySelector("input"),
  todoList = document.querySelector(".todolist");

const TODO_LS = "todo_list";

let todos = [];


function deleteTodo(event){
  event.target.parentElement.remove();
  // const parsedTD = JSON.parse(localStorage[TODO_LS]);
  const id = event.target.parentElement.id;
  todos.splice(id, 1);
  localStorage.setItem(TODO_LS, JSON.stringify(todos))
}

function saveTodoList(todos){
  localStorage.setItem(TODO_LS, JSON.stringify(todos));
}

function addtodoList(value){
  const todo = document.createElement("li");

  const text = document.createElement("span");
  text.innerText = value; 

  const delBtn = document.createElement("button");
  delBtn.innerText = 'x'
  delBtn.addEventListener("click", deleteTodo)

  todo.appendChild(text);
  todo.appendChild(delBtn);
  todo.id = todoList.childElementCount;
  todoList.appendChild(todo);
  const todosObj = {
    text: value,
    id: todoList.childElementCount-1
  }
  todos.push(todosObj);
  saveTodoList(todos);
}

function inputList(event){
  event.preventDefault;
  const todo = inputTodo.value;
  localStorage.setItem(TODO_LS, todo);
  addtodoList(todo);
  inputTodo.value='';
}

function loadtodoList(){
  const loadedTodoList = localStorage.getItem(TODO_LS);
  if(loadedTodoList){
    const parsedTodoList = JSON.parse(loadedTodoList);
    parsedTodoList.forEach(function(list){
      addtodoList(list.text);
    });
  }
}


function init(){
  loadtodoList();
  todoForm.addEventListener("submit", inputList);
}

init()