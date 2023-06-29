import './style.css';

// endPoints
const DOG_URL = 'https://dog.ceo/api/breeds/image/random';
const CAT_URL = 'https://api.thecatapi.com/v1/images/search';

// DOM
const btndog = document.getElementById('randomdog');
const btncat = document.getElementById('randomcat');
const btnSurprise = document.getElementById('surprise');
const img = document.getElementById('petimg');
// eventListeners

btndog.addEventListener('click', (event) => {
  event.preventDefault();
  fetch(DOG_URL)
    .then(((response) => response.json()))
    .then(((data) => {
      const petURL = data.message;
      img.src = petURL;
    }));
});

btncat.addEventListener('click', () => {
  fetch(CAT_URL)
    .then((res) => res.json())
    .then(([data]) => {
      const petURL = data.url;

      img.src = petURL;
    });
});

btnSurprise.addEventListener('click', () => {
  Promise.any([
    fetch(DOG_URL),
    fetch(CAT_URL),
  ])
    .then((res) => res.json())
    .then((data) => {
      const petURL = data.message || data[0].url;

      img.src = petURL;
    });
});
