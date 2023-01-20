/* Imports */
import { getBeanieBabies, getZodiac } from './fetch-utils.js';
/* Get DOM Elements */
const beanieBabiesEl = document.querySelector('.beanie-babies');
const selectEl = document.querySelector('select');
const buttonEl = document.querySelector('button');
const formEl = document.querySelector('form');
/* State */
let beanieBabiesData = [];

/* Events */
window.addEventListener('load', async () => {
    const beanies = await getBeanieBabies();

    beanieBabiesData = beanies;

    displayBeanieBabies();

    const signs = await getZodiac();

    for (let sign of signs) {
        const optionEl = document.createElement('option');

        optionEl.value = sign.name;
        optionEl.textContent = sign.name;

        selectEl.append(optionEl);
    }
});

/* Display Functions */
function displayBeanieBabies() {
    beanieBabiesEl.textContent = '';

    for (let beanieBaby of beanieBabiesData) {
        const beanieBabyEl = document.createElement('div');
        const wordsEl = document.createElement('p');
        const imgEl = document.createElement('img');

        wordsEl.textContent = `${beanieBaby.title} is a ${beanieBaby.astroSign} and was born on ${beanieBaby.birthday}`;
        imgEl.src = beanieBaby.image;

        beanieBabyEl.classList.add('beanie-baby');

        beanieBabyEl.append(wordsEl, imgEl);

        beanieBabiesEl.append(beanieBabyEl);
    }
}
// (don't forget to call any display functions you want to run on page load!)
displayBeanieBabies();
