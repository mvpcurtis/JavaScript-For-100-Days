console.log('Connected.');

const addBtn = document.querySelector('button');
const inputFld = document.querySelector('input');

const addTodo = () => {
  let el = document.createElement('li');
  el.textContent = inputFld.value;
  document.querySelector('ul').appendChild(el);
};

const handler = () => {
  addTodo();
};

document.querySelector('li').addEventListener('dblclick', function () {
  document.querySelector('li').remove();
});

addBtn.addEventListener('click', function () {
  handler();
});
