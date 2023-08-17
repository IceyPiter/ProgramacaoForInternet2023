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
    preencherInfo(buscarInfoAbility(json_pokemon),buscarInfoGame(json_pokemon))
}

function buscarInfoAbility(lista){
    let info = []
    for(let i = 0; i<(lista.abilities).length; i++){
        info.push(lista.abilities[i].ability.name)
        if((lista.abilities[i].ability.is_hidden)){
            info.push("Hidden Ability");
        }else{
            info.push("Normal Ability")
        }
    }
    let retorno = ``;
    for(let i = 0; i < info.length; i++){
        retorno += `${info[i]} --> ${info[i+1]} \n`;
        i++
    }
    return(retorno)
}

function buscarInfoGame(lista){
    let info = []
    for(let i = 0; i<(lista.game_indices).length; i++){
        info.push(lista.game_indices[i].version.name)
    }
    let retorno = ``;
    for(let i = 0; i < info.length; i++){
        retorno += `${info[i]} \n`;
    }
    return(retorno)
}

function preencherInfo(abilidade,jogos,itens){
    document.getElementById("ability").value = abilidade;
    document.getElementById("game_indices").value = jogos;
    document.getElementById("held-itens").value = pokemon.held_items[0];
}

document.getElementById("pokemon").addEventListener("focusout", acharPokemon)
