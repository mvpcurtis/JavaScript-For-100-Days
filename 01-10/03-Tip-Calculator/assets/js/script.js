const billInput = document.querySelector('#bill-amount');
const tipInput = document.querySelector('#tip-amount');
const calcBtn = document.querySelector('button');

const calcTip = function (bill, tip) {
  return (tip / 100) * bill;
};

const handler = function () {
  let bill = parseInt(billInput.value);
  let tip = parseInt(tipInput.value);
  const calculate = calcTip(bill, tip);
  billInput.value = calculate;
  tipInput.value = calculate;
};

calcBtn.addEventListener('click', function () {
  handler();
});
