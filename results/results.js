import pokemon from '../pokemon.js';
import { findByID, pokedexGet, storeLifetime } from '../functions.js';

const currentPokedex = pokedexGet();

const main = document.getElementById('main');
const homeButton = document.getElementById('home');

homeButton.addEventListener('click', () => {
    // const lifetime = localStorage.getItem('ITEMS');
    // const lifetime = pokedexGet();
    storeLifetime();
    setTimeout(() => {
        // storeLifetime();
        // localStorage.removeItem('ITEMS');
        // window.location = '../';
    }, 100);
});

for (const entry of currentPokedex) {
    const poke = findByID(entry.id, pokemon);
    const pokedx = findByID(entry.id, currentPokedex);

    const container = document.createElement('div');
    container.classList.add('results-container');

    const img = document.createElement('img');
    img.src = poke.url_image;
    img.classList.add('poke-img');

    const header = document.createElement('h3');
    header.textContent = poke.pokemon;
    header.classList.add('poke-name');

    const div = document.createElement('div');
    div.classList.add('results-body');

    const p = document.createElement('p');

    const encounterSpan = document.createElement('span');
    encounterSpan.textContent = `Encounters: ${pokedx.encounters}`;

    const captureSpan = document.createElement('span');
    captureSpan.textContent = `Captures: ${pokedx.captures}`;

    p.append(encounterSpan, captureSpan);
    p.classList.add('results-text');

    div.append(img, p);
    container.append(header, div);
    main.append(container);
}


let pokeNames = currentPokedex.map(i => i.pokemon);
let pokeEncount = currentPokedex.map(i => i.encounters);
let pokeCaps = currentPokedex.map(i => i.captures);

var ctx = document.getElementById('results-chart').getContext('2d');
// eslint-disable-next-line no-undef, no-unused-vars
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: pokeNames,
        datasets: [{
            label: 'Pokemon Encounters',
            data: pokeEncount,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)'
            ],
            
            borderWidth: 1
        },
        {
            label: 'Pokemon Captures',
            data: pokeCaps,
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)'
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)'
            ],
            
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const allPokeNames = pokemon.map(i => i.pokemon);
// console.log('pokeIDS', pokeIDS);
const pokeAtt = pokemon.map(i => i.attack);

var radarChart = document.getElementById('radar-chart');
// eslint-disable-next-line no-undef, no-unused-vars
radarChart = new Chart(radarChart, {
    type: 'radar',
    data: {
        labels: allPokeNames,
        datasets: [{
            label: 'Pokemon Attack Values',
            data: pokeAtt,
            fill: true,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgb(255, 99, 132)',
            pointBackgroundColor: 'rgb(255, 99, 132)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(255, 99, 132)'
        }]
    },
    options: {
        scale: {
            min: 0,
            max: 100,
            ticks: {
                stepSize: 10
            },
            pointLabels: {
                fontSize: 18
            }
        },
        legend: {
            position: 'left'
        }
    }
});
  