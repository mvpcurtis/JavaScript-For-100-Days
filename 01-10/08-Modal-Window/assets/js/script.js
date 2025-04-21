console.log('Connected.');

const initModalBtn = document.querySelector('#init-modal');
const closeModalBtn = document.querySelector('#close-modal');
const overlay = document.querySelector('#overlay');
const modalWindow = document.querySelector('#modal-window');

const closeModal = () => {
  overlay.style.display = 'none';
  modalWindow.style.display = 'none';
};

const initModal = () => {
  overlay.style.display = 'block';
  modalWindow.style.display = 'block';
};

initModalBtn.addEventListener('click', initModal);
closeModalBtn.addEventListener('click', closeModal);
