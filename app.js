function fetchPokemon() {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=100')
        .then(response => response.json())
        .then(data => {
            displayPokemon(data.results);
        })
        .catch(error => {
            console.error(error);
        });
}

function displayPokemon(pokemonList) {
    const pokemonContainer = document.getElementById('pokemon-list');
    pokemonList.forEach(pokemon => {
        const pokemonItem = document.createElement('li');
        pokemonItem.classList.add('pokemon-item');
        pokemonItem.innerHTML = `
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split('/')[6]}.png" alt="${pokemon.name}">
            <h2>${pokemon.name}</h2>
            <p>Click for abilities</p>
        `;
        pokemonItem.onclick = () => showAbilities(pokemon.url);
        pokemonContainer.appendChild(pokemonItem);
    });
}

function showAbilities(url) {
    fetch(url)
        .then(response => response.json())
        .then(pokemon => {
            alert(`${pokemon.name}'s abilities: ${pokemon.abilities.map(ability => ability.ability.name).join(', ')}`);
        })
        .catch(error => {
            console.error(error);
        });
}

fetchPokemon();