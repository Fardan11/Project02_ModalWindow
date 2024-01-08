'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btn = document.querySelector('.close-modal');

const btnsOpenmoadal = document.querySelectorAll('.show-modal'); //If we dont use All it only selects the first element!!
console.log(btnsOpenmoadal);

for (let i = 0; i < btnsOpenmoadal.length; i++) {
  btnsOpenmoadal[i].addEventListener('click', function () {
    console.log('Button Clicked');
    modal.classList.remove('hidden'); // there is no dot here, fot is only for selector!!
  });
}
