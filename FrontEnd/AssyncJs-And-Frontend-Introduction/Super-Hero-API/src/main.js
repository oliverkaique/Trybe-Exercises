//Cathing the DOM

const searcBtn = document.getElementById('button')

//logic of the button
const getSuperHero = () => {
  const radomNumber =Math.floor(Math.random() * 50) + 1;
  console.log(radomNumber);
}

//addEventListener
searcBtn.addEventListener('click', getSuperHero)


