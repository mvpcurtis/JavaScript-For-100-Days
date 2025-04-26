'use strict';
console.log('Connected.');
// word counter

const textarea = document.querySelector('textarea');
const charCountEl = document.querySelector('#character-counter');
const wordCountEl = document.querySelector('#word-counter');
let value;

const charCounter = (v) => {
  return v.length;
};

textarea.addEventListener('keyup', function () {
  value = textarea.value;
  charCountEl.textContent = `Chracter Counter: ${charCounter(value)}`;
});
