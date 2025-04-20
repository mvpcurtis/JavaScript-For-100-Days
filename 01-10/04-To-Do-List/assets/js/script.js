console.log('Connected.');

let todo = JSON.parse(localStorage.getItem('todo')) || [];
const inputField = document.querySelector('#input-field');
const todoItems = document.querySelector('li');
const todoCount = document.querySelector('#counter');
const addBtn = document.querySelector('#add');
const deleteBtn = document.querySelector('#delete');

const editTask = () => {};

const saveToLocalStorage = () => {
  localStorage.setItem('todo', JSON.stringify(todo));
};

const toggleTask = (index) => {
  todo[index].disabled = !todo[index].disabled;
  saveToLocalStorage();
  displayTasks();
};

const displayTasks = () => {
  todoItems.innerHTML = '';
  todo.forEach(function (item, index) {
    const pEl = document.createElement('p');
    pEl.innerHTML = `
    <div class="todo-container">
      <input type="checkbox" class="todo-checkbox" id="input-${index}" ${item.disabled ? 'checked' : ''}>
      <p id="todo-${index} class="${item.disabled ? 'disabled' : ''}" onclick="editTask(${index})">${item.text}</p>
    </div>`;
    pEl.querySelector('.todo-checkbox').addEventListener('change', function () {
      toggleTask(index);
    });
    todoItems.appendChild(pEl);
  });
};

const deleteTasks = () => {};

const addTask = () => {
  const newTask = inputField.value.trim();
  if (newTask !== '') {
    todo.push({
      text: newTask,
      disabled: false,
    });
    saveToLocalStorage();
    inputField.value = '';
    displayTasks();
  }
};

document.addEventListener('DOMContentLoaded', function () {
  addBtn.addEventListener('click', addTask);
  inputField.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      addTask();
    }
  });
  deleteBtn.addEventListener('click', deleteTasks);
  displayTasks();
});
