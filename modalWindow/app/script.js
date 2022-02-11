'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModals = document.querySelectorAll('.show-modal');
console.log(btnsOpenModals);

for (let i = 0; i < btnsOpenModals.length; i++)
  btnsOpenModals[i].addEventListener('click', function () {
    console.log('BTN CLICKED');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });

 btnCloseModal.addEventListener('click', function () {
   modal.classList.add('hidden');
   overlay.classList.add('hidden');
 });
