const hoursEle = document.querySelector('#hours');
const minutesEle = document.querySelector('#minutes');
const secondsEle = document.querySelector('#seconds');

setInterval(function () {
  let currentTime = new Date();
  hoursEle.textContent = (currentTime.getHours() < 10 ? '0' : '') + currentTime.getHours();
  minutesEle.textContent = (currentTime.getMinutes() < 10 ? '0' : '') + currentTime.getMinutes();
  secondsEle.textContent = (currentTime.getSeconds() < 10 ? '0' : '') + currentTime.getSeconds();
}, 1000);
