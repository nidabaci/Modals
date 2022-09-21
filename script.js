'use strict';

const modals = document.querySelectorAll('.modal');
const overlay = document.querySelector('.overlay');
const btnsCloseModal = document.querySelectorAll('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

function openModal(i) {
  closeModal()
  modals[i].classList.remove('hidden');
  overlay.classList.remove('hidden');
};

function closeModal() {
  for (let i = 0; i < modals.length; i++) {
    modals[i].classList.add('hidden');
  }
  overlay.classList.add('hidden');
};
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', () => {
    openModal(i)
  }, false);
}
for (let i = 0; i < btnsCloseModal.length; i++) {
  btnsCloseModal[i].addEventListener('click', closeModal, false);
}
overlay.addEventListener('click', closeModal, false);