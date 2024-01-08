'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btn = document.querySelector('.close-modal');

const btnsOpenmodal = document.querySelectorAll('.show-modal'); //If we dont use All it only selects the first element!!
console.log(btnsOpenmodal);
const btnsClosemodal = document.querySelector('.close-modal'); //If we dont use All it only selects the first element!!

const openModal = function () {
  console.log('Button Clicked');
  modal.classList.remove('hidden'); // there is no dot here, fot is only for selector!!
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenmodal.length; i++) {
  btnsOpenmodal[i].addEventListener('click', openModal);
}
btnsClosemodal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
