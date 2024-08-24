'use strict';

const DEMO_USERNAME = 'Demo';
const DEMO_PASWD = '123123';

let usernameEl = document.getElementById('username');
let paswdEl = document.getElementById('paswd');
let showPaswdWrapper = document.getElementById('toggle-paswd');
let showPaswd = document.querySelector('#toggle-paswd i');
// console.log(paswdEl);

paswdEl.addEventListener('input', () => {
  const paswdInput = paswdEl.value;
  if (paswdInput) {
    showPaswdWrapper.classList.remove('hidden');
  } else showPaswdWrapper.classList.add('hidden');
});

showPaswd.addEventListener('click', () => {
  if (paswdEl.type === 'password') paswdEl.type = 'text';
  else paswdEl.type = 'password';
  showPaswd.classList.toggle('fa-eye');
  showPaswd.classList.toggle('fa-eye-slash');
});

//Submit
let submitBtn = document.getElementById('submit-btn');
let logginForm = document.getElementById('loggin-form');
let logginError = document.getElementById('loggin-error');

const validateForm = () => {
  if (usernameEl.value === DEMO_USERNAME && paswdEl.value === DEMO_PASWD) {
    logginError.classList.add('hidden');
    return true;
  }
  logginError.classList.remove('hidden');
  return false;
};
