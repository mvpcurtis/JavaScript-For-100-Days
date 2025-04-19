const incrementBtn = document.querySelector('#increment');
const decrementBtn = document.querySelector('#decrement');
const resetBtn = document.querySelector('#reset');
const numberEl = document.querySelector('#number');

let number = 0;
number = parseInt(localStorage.getItem('value'));

const updateEl = () => {
  localStorage.setItem('value', number);
  numberEl.textContent = parseInt(localStorage.getItem('value'));
};

const increment = () => {
  number += 1;
  updateEl();
};

const decrement = () => {
  number -= 1;
  updateEl();
};

const reset = () => {
  number = 0;
  updateEl();
};

updateEl();

incrementBtn.addEventListener('click', increment);
decrementBtn.addEventListener('click', decrement);
resetBtn.addEventListener('click', reset);
