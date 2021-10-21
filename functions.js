import pokemon from './pokemon.js';

export function findByID(id, pokemon) {
    for (const poke of pokemon) {
        if (poke.id === id) {
            return poke;
        }
    }
}

export function pokedexGet() {
    const pokeString = localStorage.getItem('POKEMON') || '[]';
    const pokeData = JSON.parse(pokeString);
    return pokeData;
}

export function pokeCap(id) {
    let pokeData = pokedexGet();
    let pokeSelect = findByID(id, pokeData);

    if (pokeSelect) {
        pokeSelect.captures++;
    }
    // else {
    //     const matchingPokemon = findByID(id, pokemon);
    //     const pokeNew = { pokemon: matchingPokemon.pokemon, id: id, encounters: 1, captures: 1 };
    //     pokeData.push(pokeNew);
    // }

    // const pokeString = JSON.stringify(pokeData);
    // localStorage.setItem('POKEMON', pokeString);
    pokedexSet(pokeData);
}

export function pokeEncounter(id) {
    let pokeData = pokedexGet();
    let pokeEncount = findByID(id, pokeData);

    if (pokeEncount) {
        pokeEncount.encounters++;
    } else {
        const matchingPokemon = findByID(id, pokemon);
        const newEncount = { pokemon: matchingPokemon.pokemon, id: id, encounters: 1, captures: 0 };
        pokeData.push(newEncount);
    }

    // const pokeString = JSON.stringify(pokeData);
    // localStorage.setItem('POKEMON', pokeString);
    pokedexSet(pokeData);
}

export function pokedexSet(pokeData) {
    const pokeString = JSON.stringify(pokeData);
    localStorage.setItem('POKEMON', pokeString);
}
