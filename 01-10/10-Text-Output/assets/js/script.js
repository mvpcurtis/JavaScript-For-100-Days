console.log('Connected.');

const outputs = {
  length: document.querySelector('#length'),
  uppercase: document.querySelector('#uppercase'),
  lowercase: document.querySelector('#lowercase'),
  capitalize: document.querySelector('#capitalize'),
  firstLetter: document.querySelector('#first-letter'),
  lastLetter: document.querySelector('#last-letter'),
  initials: document.querySelector('#initials'),
};

const inputField = document.querySelector('#input');

const length = (value) => {
  return value.length;
};

const uppercase = (value) => {
  return value.toUpperCase();
};

const lowercase = (value) => {
  return value.toLowerCase();
};

const capitalize = (value) => {
  return value
    .toLowerCase()
    .split(' ')
    .map(function (value) {
      return value.charAt(0).toUpperCase() + value.slice(1);
    })
    .join(' ');
};

const firstLetter = (value) => {
  return value[0];
};

const lastLetter = (value) => {
  return value[value.length - 1];
};

const initials = (value) => {
  const words = value.split(' ');
  let initial = '';
  words.forEach(function (word) {
    if (word.length > 0) {
      initial += word[0].toUpperCase();
    }
  });
  return initial;
};

inputField.addEventListener('keyup', function () {
  outputs.length.textContent = length(inputField.value);
  outputs.uppercase.textContent = uppercase(inputField.value);
  outputs.lowercase.textContent = lowercase(inputField.value);
  outputs.capitalize.textContent = capitalize(inputField.value);
  outputs.firstLetter.textContent = firstLetter(inputField.value);
  outputs.lastLetter.textContent = lastLetter(inputField.value);
  outputs.initials.textContent = initials(inputField.value);
});
