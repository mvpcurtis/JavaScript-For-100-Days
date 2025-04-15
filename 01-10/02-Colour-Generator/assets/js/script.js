console.log('Connected.');

const newColBtn = document.querySelector('#new-colour');
const copyColBtn = document.querySelector('#copy-colour');
const currentCol = document.querySelector('span');

const colourChars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

const getRandom = function () {
  return Math.floor(Math.random() * colourChars.length - 1) + 1;
};

const getHex = function () {
  let colour = '#';
  for (let i = 0; i < 6; i++) {
    colour = colour + colourChars[getRandom()];
  }
  return colour;
};

const applyCol = function () {
  let colour = getHex();
  currentCol.textContent = colour;
  document.querySelector('body').style.backgroundColor = colour;
};

const copyCode = function () {
  let colour = currentCol.innerText;
  const temp = document.createElement('textarea');
  temp.value = colour;
  temp.setAttribute('readonly', '');
  temp.style.position = 'absolute';
  document.body.appendChild(temp);
  temp.select();
  document.execCommand('copy');
  document.body.removeChild(temp);
  const alert = document.createElement('span');
  alert.classList.add('alert');
  alert.textContent = `Colour code ${colour} has been copied!`;
  document.querySelector('.app').insertAdjacentElement('afterbegin', alert);
  setTimeout(function () {
    alert.remove();
  }, 2000);
};

newColBtn.addEventListener('click', function () {
  applyCol();
});

copyColBtn.addEventListener('click', function () {
  copyCode();
});
