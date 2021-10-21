// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { findByID, pokeCap, pokedexGet, pokedexSet, pokeEncounter } from '../functions.js';
import pokemon from '../pokemon.js';


const { test, skip } = QUnit;

test('findByID(id, pokemon)', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = {
        '_id':'5cef3501ef6005a77cd4fd17',
        'pokemon':'bulbasaur',
        'id':1,
        'species_id':1,
        'height':7,
        'weight':69,
        'base_experience':64,
        'type_1':'grass',
        'type_2':'poison',
        'attack':49,
        'defense':49,
        'hp':45,
        'special_attack':65,
        'special_defense':65,
        'speed':45,
        'ability_1':'overgrow',
        'ability_2':'NA',
        'ability_hidden':'chlorophyll',
        'color_1':'#78C850',
        'color_2':'#A040A0',
        'color_f':'#81A763',
        'egg_group_1':'monster',
        'egg_group_2':'plant',
        'url_image':'http://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
        'generation_id':1,
        'evolves_from_species_id':'NA',
        'evolution_chain_id':1,
        'shape_id':8,
        'shape':'quadruped',
        'pokebase':'bulbasaur',
        'pokedex':'http://www.pokemon.com/us/pokedex/bulbasaur'
    };
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = findByID(1, pokemon);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

test('pokedexGet(id)', (expect) => {
    const pokeTest = [{ pokemon: 'bulbasaur', id: 1, encounters: 1, captures: 1 }];
    const pokeTestStr = JSON.stringify(pokeTest);
    localStorage.setItem('POKEMON', pokeTestStr);
    
    const expected = [{ pokemon: 'bulbasaur', id: 1, encounters: 1, captures: 1 }];

    const actual = pokedexGet();

    expect.deepEqual(actual, expected);
});

test('pokeCap(id)', (expect) => {
    localStorage.removeItem('POKEMON');
    const testStorage = [
        { 
            pokemon: 'bulbasaur', id: 1, encounters: 1, captures: 1 
        }
    ];

    const testStorageString = JSON.stringify(testStorage);
    localStorage.setItem('POKEMON', testStorageString);

    const expected = [
        { 
            pokemon: 'bulbasaur', id: 1, encounters: 1, captures: 2 
        }
    ];

    pokeCap(1);

    const lSString = localStorage.getItem('POKEMON');

    const actual = JSON.parse(lSString);

    expect.deepEqual(actual, expected);
});

test('pokeEncounter(id)', (expect) => {
    localStorage.removeItem('POKEMON');

    const expected = [
        { 
            pokemon: 'bulbasaur', id: 1, encounters: 1, captures: 0 
        }
    ];

    pokeEncounter(1);
    
    const lSString = localStorage.getItem('POKEMON');

    const actual = JSON.parse(lSString);

    expect.deepEqual(expected, actual);
});

test('pokedexSet(pokeData) - with data', (expect) => {
    localStorage.removeItem('POKEMON');

    const expected = [
        { 
            pokemon: 'bulbasaur', id: 1, encounters: 1, captures: 0 
        }
    ];

    pokedexSet(expected);

    const lSString = localStorage.getItem('POKEMON');

    const actual = JSON.parse(lSString);

    expect.deepEqual(expected, actual);
});

test('pokedexSet(pokeData) - empty', (expect) => {
    localStorage.removeItem('POKEMON');

    const expected = [];

    pokedexSet(expected);

    const lSString = localStorage.getItem('POKEMON');

    const actual = JSON.parse(lSString);

    expect.deepEqual(expected, actual);
});
