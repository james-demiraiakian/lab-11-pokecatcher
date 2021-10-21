// import functions and grab DOM elements
import pokemon from './pokemon.js';
import { findByID, pokeCap, pokeEncounter, pokedexGet, pokedexSet } from './functions.js';
const radios = document.getElementsByName('pokemon');
const pokeRadio1 = document.getElementById('poke-one');
const pokeRadio2 = document.getElementById('poke-two');
const pokeRadio3 = document.getElementById('poke-three');
let pokeImage1 = document.getElementById('pke-img-one');
let pokeImage2 = document.getElementById('pke-img-two');
let pokeImage3 = document.getElementById('pke-img-three');
const select = document.getElementById('poke-select');

// initialize global state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
