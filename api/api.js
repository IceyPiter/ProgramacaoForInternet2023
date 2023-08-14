async function acharPokemon() {
    let pokemon = document.getElementById("pokemon");
    let url = "https://pokeapi.co/api/v2/pokemon/";
    let pokeEsc = pokemon.value.toLowerCase();
    console.log(pokeEsc)
    url = url + pokeEsc;
    const dados = await fetch(url);
    const json_pokemon = await dados.json();
    console.log(json_pokemon)
    preencherInfo(json_pokemon)
}

function preencherInfo(pokemon,abilidade,jogos,itens){
    document.getElementById("ability").value = pokemon.abilities;
    document.getElementById("game_indices").value = pokemon.game_indices;
    document.getElementById("held-itens").value = pokemon.held_items;
}

document.getElementById("pokemon").addEventListener("focusout", acharPokemon)