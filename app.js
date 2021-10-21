// import functions and grab DOM elements
import pokemon from './pokemon.js';
import { pokeCap, pokeEncounter } from './functions.js';
// const radios = document.getElementsByName('pokemon');
const pokeRadio1 = document.getElementById('poke-one');
const pokeRadio2 = document.getElementById('poke-two');
const pokeRadio3 = document.getElementById('poke-three');
let pokeImage1 = document.getElementById('pke-img-one');
let pokeImage2 = document.getElementById('pke-img-two');
let pokeImage3 = document.getElementById('pke-img-three');
const select = document.getElementById('poke-select');

// initialize global state

const pokeRender = () => {
    let rand1 = Math.floor(Math.random() * pokemon.length);
    let rand2 = Math.floor(Math.random() * pokemon.length);
    let rand3 = Math.floor(Math.random() * pokemon.length);
    
    while (rand1 === rand2 || rand1 === rand3 || rand2 === rand3) {
        rand1 = Math.floor(Math.random() * pokemon.length);
        rand2 = Math.floor(Math.random() * pokemon.length);
        rand3 = Math.floor(Math.random() * pokemon.length);
    }
  
    const poke1 = pokemon[rand1];
    const poke2 = pokemon[rand2];
    const poke3 = pokemon[rand3];
    pokeEncounter(poke1.id);
    pokeEncounter(poke2.id);
    pokeEncounter(poke3.id);
    const pokeImg1 = poke1.url_image;
    const pokeImg2 = poke2.url_image;
    const pokeImg3 = poke3.url_image;
    
    pokeImage1.src = pokeImg1;
    pokeRadio1.value = poke1.id;
    pokeImage2.src = pokeImg2;
    pokeRadio2.value = poke2.id;
    pokeImage3.src = pokeImg3;
    pokeRadio3.value = poke3.id;
};

pokeRender();

let plays = 0;

select.addEventListener('click', () => {
    const pokeSelected = document.querySelector('input[type=radio]:checked');

    if (pokeSelected) {
        const pokeID = Number(pokeSelected.value);
        plays++;
        pokeCap(pokeID);
        if (plays >= 10) {
            window.location = './results';
        } else {
            pokeRender();
        }
    }
});
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
