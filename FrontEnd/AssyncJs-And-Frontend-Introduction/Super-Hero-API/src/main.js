// importing the sweetalert
import Swal from 'sweetalert2';

import './style.css';

// Cathing the DOM
const searcBtn = document.getElementById('button');
const img = document.getElementById('shimage');
const nome = document.getElementById('shname');

// BASEURL
const BASE_URL = 'https://akabab.github.io/superhero-api/api';

// simple random number func

const MAX_HEROES = 1000;

const radomId = () => Math.floor(Math.random() * MAX_HEROES);

// addEventListener
searcBtn.addEventListener('click', (event) => {
  event.preventDefault();

  const id = radomId();

  fetch(`${BASE_URL}/id/${id}.json`)
    .then(((response) => response.json()))
    .then(((data) => {
      img.src = data.images.md;
      nome.innerHTML = data.name;
    }))
    .catch((error) => Swal.fire({
      title: 'Hero not found',
      text: error.message,
      icon: 'error',
      confirmButtonText: 'Cool',
    }));
});
