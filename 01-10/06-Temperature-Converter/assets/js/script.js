console.log('Conntected.');

const celsiusField = document.querySelector('#cel');
const celsiusBtn = document.querySelector('#celsius button');
const fahrenheitField = document.querySelector('#fah');
const fahrenheitBtn = document.querySelector('#fahrenheit button');

const presentErrorMsg = () => {
  const spanEl = document.createElement('span');
  spanEl.textContent = 'Please enter a valid number!';
  spanEl.id = 'error';
  document.querySelector('.app').appendChild(spanEl);
  setTimeout(function () {
    spanEl.remove();
  }, 3000);
};

const floorToSecondDecimal = (number) => {
  return Math.floor(number * 100) / 100;
};

const conCelToFah = (celsius) => {
  let sum = (celsius * 9) / 5 + 32;
  fahrenheitField.value = floorToSecondDecimal(sum);
};

const conFahToCel = (fahrenheit) => {
  let sum = ((fahrenheit - 32) * 5) / 9;
  celsiusField.value = floorToSecondDecimal(sum);
};

celsiusBtn.addEventListener('click', function () {
  const celsius = parseInt(celsiusField.value);
  if (isNaN(celsius)) {
    presentErrorMsg();
  } else {
    conCelToFah(celsius);
  }
});

fahrenheitBtn.addEventListener('click', function () {
  const fahrenheit = parseInt(fahrenheitField.value);
  if (isNaN(fahrenheit)) {
    presentErrorMsg();
  } else {
    conFahToCel(fahrenheit);
  }
});
