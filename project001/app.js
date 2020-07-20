// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const fillterOption = document.querySelector('.fillter-todo');
// Event Listeners
document.addEventListener('DOMContentLoaded',getTodos);
todoButton.addEventListener('click' ,addTodo);
todoList.addEventListener('click',deleteAndCheck);
fillterOption.addEventListener('click',filterTodo);
// Functions
function addTodo (event){
  event.preventDefault();

  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');
  const newTodo = document.createElement('li');
  newTodo.innerText = todoInput.value;
  saveLocalTodos(todoInput.value);
  newTodo.classList.add('todo-item');
  todoDiv.appendChild(newTodo);

  const completeButton = document.createElement('button');
  completeButton.innerHTML = '<i  class="fas fa-check"> </i>'
  completeButton.classList.add('complete-btn');
  todoDiv.appendChild(completeButton);

  const deleteButton = document.createElement('button');
  deleteButton.innerHTML = '<i  class="fas fa-trash"> </i>'
  deleteButton.classList.add('trash-btn');
  todoDiv.appendChild(deleteButton);
  todoList.appendChild(todoDiv);
  todoInput.value = "";
}

function deleteAndCheck(e) {
  const item = e.target;
  if(item.classList[0] === "trash-btn"){
    const todo = item.parentElement;
    console.log(todo);
    todo.classList.add('fall');
    removeLocalTodos(todo)
    todo.addEventListener('transitioned',function(){
      todo.remove();
    })
  }
  if(item.classList[0] === "complete-btn"){
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }

}

function filterTodo(e){
 const todos = todoList.childNodes;
 todos.forEach(function (todo) {
  
  if(todo.classList== undefined){
    return
  }
   switch(e.target.value){
     case "all": todo.style.display="flex"
     break ;
     case "completed":
       if(todo.classList.contains("completed")){
         todo.style.display = 'flex';
       }else{
         todo.style.display = "none";
       }break;
       case "uncompleted":
       if(!todo.classList.contains('completed')){
         todo.style.display = 'flex';
       }else{
         todo.style.display = "none";
       }break;
   }
 })
}


function saveLocalTodos(todo) {
  let todos;
  if(localStorage.getItem('todos') === null){
    todos =[];
  }else{
    todos = JSON.parse(localStorage.getItem('todos'));
  }
  todos.push(todo);
  localStorage.setItem("todos",JSON.stringify(todos));
}
function getTodos(){
  let todos;
  if(localStorage.getItem("todos") === null){
    todos =[];
  }else{
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.forEach(function(todo) {
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');
  const newTodo = document.createElement('li');
  newTodo.innerText = todo;
  newTodo.classList.add('todo-item');
  todoDiv.appendChild(newTodo);

  const completeButton = document.createElement('button');
  completeButton.innerHTML = '<i  class="fas fa-check"> </i>'
  completeButton.classList.add('complete-btn');
  todoDiv.appendChild(completeButton);

  const deleteButton = document.createElement('button');
  deleteButton.innerHTML = '<i  class="fas fa-trash"> </i>'
  deleteButton.classList.add('trash-btn');
  todoDiv.appendChild(deleteButton);
  todoList.appendChild(todoDiv);
  })
}

function removeLocalTodos(todo) {
  let todos;
  if(localStorage.getItem('todos') === null){
    todos =[];
  }else{
    todos = JSON.parse(localStorage.getItem('todos'));
  }
   const todoIndex = todo.children[0].innerText;
   todos.splice(todos.indexOf(todoIndex),1);

   localStorage.setItem('todos',JSON.stringify(todos))
}