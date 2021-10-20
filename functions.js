

export function findByID(id, pokemon) {
    for (const poke of pokemon) {
        if (poke.id === id) {
            return poke;
        }
    }
}

export function pokeGet() {
    const pokeString = localStorage.getItem('POKEMON') || '[]';
    const pokeData = JSON.parse(pokeString);
    return pokeData;
}

// export function pokeSet(id) {
//     const pokesData = pokeGet();
//     const pokeData = findByID(id, );
// }
