async function acharPokemon() {
    let pokemon = document.getElementById("pokemon");
    let url = "https://pokeapi.co/api/v2/pokemon/";
    let pokeEsc = pokemon.value.toLowerCase();
    const listAbility = document.getElementById("listAbilities")
    const listGames = document.getElementById("listGames")
    const listTypes = document.getElementById("listTypes")
    console.log(pokeEsc)
    url = url + pokeEsc;
    const dados = await fetch(url);
    const json_pokemon = await dados.json();
    console.log(json_pokemon)
    setImage(json_pokemon)
    preencherInfo(json_pokemon,listAbility,listGames,listTypes)
    buscarInfoAbility(json_pokemon,listAbility)
}

function setImage(pokemon){
    var img = document.getElementById("pokeIMG")
    var img2 = document.getElementById("pokeIMG2")
    var img3 = document.getElementById("TypeIMG")
    var img4 = document.getElementById("TypeIMG2")
    img.setAttribute("src", pokemon.sprites.front_default)
    img2.setAttribute("src", pokemon.sprites.front_shiny)
    img.setAttribute("src", pokemon.sprites.front_default)
    img2.setAttribute("src", pokemon.sprites.front_shiny)
}

function buscarInfoAbility(lista,list){
    let info = []
    for(let i = 0; i<(lista.abilities).length; i++){
        info.push(lista.abilities[i].ability.name)
        if((lista.abilities[i].ability.is_hidden)){
            info.push("Hidden Ability");
        }else{
            info.push("Normal Ability")
        }
    }
    for(let i = 0; i < info.length; i++){
        let listItems = document.createElement("li");
        listItems.innerHTML = `${info[i]}(${info[i+1]})`;
        list.appendChild(listItems);
        i++
    }
}

function buscarInfoGame(lista,list){
    let info = []
    for(let i = 0; i<(lista.game_indices).length; i++){
        info.push(lista.game_indices[i].version.name)
    }
    for(let i = 0; i < info.length; i++){
        let listItems = document.createElement("li");
        listItems.innerHTML = `${info[i]}`;
        list.appendChild(listItems);
    }
}

function preencherInfo(json_pokemon,listAbility,listGames,listTypes){
    buscarInfoAbility(json_pokemon,listAbility)
    buscarInfoGame(json_pokemon,listGames)
}

document.getElementById("pokemon").addEventListener("focusout", acharPokemon)
