async function acharPokemon() {
    let pokemon = document.getElementById("pokemon");
    let url = "https://pokeapi.co/api/v2/pokemon/";
    let pokeEsc = pokemon.value.toLowerCase();
    console.log(pokeEsc)
    url = url + pokeEsc;
    const dados = await fetch(url);
    const json_pokemon = await dados.json();
    console.log(json_pokemon)
    let a = true
    console.log(json_pokemon.abilities[1].is_hidden)
    preencherInfo(json_pokemon)
}

function buscarInfoAbility(pokemon){
    let info = []
    for(let i = 0; i<(pokemon.abilities).length; i++){
        info.push(pokemon.abilities[i].ability.name)
        if((pokemon.abilities[i].ability.is_hidden)){
            info.push("Hidden Ability");
        }else{
            info.push("Normal Ability")
        }
    }
    return(info)
}

function preencherInfo(pokemon,abilidade,jogos,itens){
    console.log(buscarInfoAbility(pokemon))
    document.getElementById("ability").value = pokemon.abilities[0].ability.name;
    document.getElementById("game_indices").value = pokemon.base_experience;
    document.getElementById("held-itens").value = pokemon.held_items[0];
}

document.getElementById("pokemon").addEventListener("focusout", acharPokemon)
