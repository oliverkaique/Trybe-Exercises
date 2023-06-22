// importing librarie
import { nanoid } from 'nanoid';
import copy from 'clipboard-copy';

// importing css
import './style.css';

// cathing the DOM
const button = document.getElementById('button');
const password = document.getElementById('password');
const reset = document.getElementById('reset');
const copyBtn = document.getElementById('copy');

// logic of the function that will put the password in the screen
const passwordGenerator = () => {
  const randomPassword = nanoid();
  password.innerHTML = randomPassword;
};

// logic of the function that will reset the password in the screen
const resetPassword = () => {
  password.innerHTML = '';
};

// logic of the function that will copy to clipboard the password in the screen
const copyPassword = () => {
  const content = password.innerText;
  copy(content);
};

// EventListener for the buttons
button.addEventListener('click', passwordGenerator);
reset.addEventListener('click', resetPassword);
copyBtn.addEventListener('click', copyPassword);