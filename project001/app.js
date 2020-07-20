// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
// Event Listeners
todoButton.addEventListener('click' ,addTodo);
// Functions
function addTodo (event){
  event.preventDefault();

  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');
  const newTodo = document.createElement('li');
  newTodo.innerText = 'hey';
  newTodo.classList.add('todo-item');
  todoDiv.appendChild(newTodo);

  const completeButton = document.createElement('button');
  completeButton.innerHTML = '<i  class="fas fa-check"> </i>'
  completeButton.classList.add('complet-button');
  todoDiv.appendChild(completeButton);

  const deleteButton = document.createElement('button');
  deleteButton.innerHTML = '<i  class="fas fa-trash"> </i>'
  deleteButton.classList.add('delete-button');
  todoDiv.appendChild(deleteButton);
  todoList.appendChild(todoDiv)
}


