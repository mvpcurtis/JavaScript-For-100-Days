console.log('Connected.');
/*
const buttons = {
  one: document.querySelector('#one'),
  two: document.querySelector('#two'),
  three: document.querySelector('#three'),
  four: document.querySelector('#four'),
  five: document.querySelector('#five'),
  six: document.querySelector('#six'),
  seven: document.querySelector('#seven'),
  eight: document.querySelector('#eight'),
  nine: document.querySelector('#nine'),
  zero: document.querySelector('#zero'),
  add: document.querySelector('#add'),
  subtract: document.querySelector('#subtract'),
  multiply: document.querySelector('#multiply'),
  divide: document.querySelector('#divide'),
  equals: document.querySelector('#equals'),
  delete: document.querySelector('#delete'),
  reset: document.querySelector('#reset'),
  decimal: document.querySelector('#decimal'),
};

const outputField = document.querySelector('#calc-wrapper span');

const updateValue = () => {
  valueOne = outputField;
};

*/

const firstNumber = document.querySelector('#one');
const secondNumber = document.querySelector('#two');
const result = document.querySelector('#result');
const buttons = {
  add: document.querySelector('#add'),
  subtract: document.querySelector('#subtract'),
  multiply: document.querySelector('#multiply'),
  divide: document.querySelector('#divide'),
};

let value = undefined;

const add = (a, b) => {
  return a + b;
};

const subtract = (a, b) => {
  return a - b;
};

const multiply = (a, b) => {
  return a * b;
};

const divide = (a, b) => {
  return a / b;
};

const operation = (a, b, c) => {
  if (a === 'add') {
    result.value = add(b, c);
  } else if (a === 'subtract') {
    result.value = subtract(b, c);
  } else if (a === 'multiply') {
    result.value = multiply(b, c);
  } else if (a === 'divide') {
    result.value = divide(b, c);
  }
  return 'try again.';
};

buttons.add.addEventListener('click', function () {
  operation('add', Number.parseInt(firstNumber.value, 10), Number.parseInt(secondNumber.value, 10));
});

buttons.subtract.addEventListener('click', function () {
  operation('subtract', Number.parseInt(firstNumber.value, 10), Number.parseInt(secondNumber.value, 10));
});

buttons.multiply.addEventListener('click', function () {
  operation('multiply', Number.parseInt(firstNumber.value, 10), Number.parseInt(secondNumber.value, 10));
});

buttons.divide.addEventListener('click', function () {
  operation('divide', Number.parseInt(firstNumber.value, 10), Number.parseInt(secondNumber.value, 10));
});
