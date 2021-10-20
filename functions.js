

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
    const pokesData = pokedexGet();
    let pokeSelect = findByID(id, pokesData);

    if (pokeSelect) {
        pokeSelect.captures++;
    } else {
        const pokeNew = { pokemon: 'pokemon', id: id, encounters: 1, captures: 1 };
        pokesData.push(pokeNew);
    }
}
