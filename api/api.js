async function acharPokemon() {
    let pokemon = document.getElementById("pokemon");
    let url = "https://pokeapi.co/api/v2/pokemon/";
    let pokeEsc = pokemon.value.toLowerCase();
    const listAbility = document.getElementById("listAbilities")
    const listGames = document.getElementById("listGames")
    const img = document.getElementById("pokeIMG")
    const img2 = document.getElementById("pokeIMG2")
    const img3 = document.getElementById("TypeIMG")
    const img4 = document.getElementById("TypeIMG2")
    listAbility.innerHTML = ""
    listGames.innerHTML = ""
    img.setAttribute("src", "")
    img2.setAttribute("src", "")
    img3.setAttribute("src", "")
    img4.setAttribute("src", "")
    console.log(pokeEsc)
    url = url + pokeEsc;
    try{
        const dados = await fetch(url);
        const json_pokemon = await dados.json(); 
        console.log(json_pokemon)
        setImage(json_pokemon,img,img2,img3,img4)
        preencherInfo(json_pokemon,listAbility,listGames)
    } catch{
        alert("Pokemon Inexistente ou Nome Errado")
    } 
}

function setImage(pokemon,img,img2,img3,img4){
    img.setAttribute("src", pokemon.sprites.front_default)
    img2.setAttribute("src", pokemon.sprites.front_shiny)
    img3.setAttribute("src", `assets/${pokemon.types[0].type.name}.png`)
    if(pokemon.types.length == 2){
        img4.setAttribute("src", `assets/${pokemon.types[1].type.name}.png`)
    }
    
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

function preencherInfo(json_pokemon,listAbility,listGames){
    buscarInfoAbility(json_pokemon,listAbility)
    buscarInfoGame(json_pokemon,listGames)
}

function testarValidade(){
    
}

document.getElementById("pokemon").addEventListener("focusout", acharPokemon)
