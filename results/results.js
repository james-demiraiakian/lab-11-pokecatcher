import pokemon from '../pokemon.js';
import { findByID, pokedexGet } from '../functions.js';

const currentPokedex = pokedexGet();

const main = document.getElementById('main');

for (const entry of currentPokedex) {
    const poke = findByID(entry.id, pokemon);
    const pokedx = findByID(entry.id, currentPokedex)
    console.log(poke);

    const container = document.createElement('div');
    container.classList.add('results-container');

    const img = document.createElement('img');
    img.src = poke.url_image;

    const header = document.createElement('h3');
    header.textContent = poke.pokemon;

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

// var ctx = document.getElementById('results-chart').getContext('2d');
// var myChart = new Chart(ctx, {
//     type: 'bar',
//     data: {
//         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//         datasets: [{
//             label: '# of Votes',
//             data: [12, 19, 3, 5, 2, 3],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         scales: {
//             y: {
//                 beginAtZero: true
//             }
//         }
//     }
// });