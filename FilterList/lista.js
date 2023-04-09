var nameList = ["Aline","Otavio","Camila","Nareba","Jean", "Julio", "Julio Rodalo", "Rany", "Ti"]

const listEl = document.getElementById("list");
const addButton = document.getElementById("buttonAdd")
const removeButton = document.getElementById("buttonRemove");
const selectButton = document.getElementById("buttonSelect");
const filtButton = document.getElementById("buttonFilt");
filtButton.addEventListener("click",filtHandler);
addButton.addEventListener("click",addList);
selectButton.addEventListener("click",selectName);
removeButton.addEventListener("click",removeItem);

var selecao = true
var posicaoSelected = 0
var nameListSecurity = nameList

this.fillList();

function fillList(list = nameList) {
    listEl.innerHTML = "";
    for(let i=0; i < list.length; i++){
        let listItems = document.createElement("li");
        listItems.innerHTML = list[i];
        listEl.appendChild(listItems);
        
    }
}

function addList() {
    nameList.push(searchField.value);
    fillList();
    }

function selectName() {
    nameListSecurity = nameList;
    if(selecao = false){
        alert("Já existe item Selecionado");
    }
    else{
        
        nomeSelecionado = searchField.value;
        for(let f=0 ; f <= nameList.length ; f++){
            var nome = nameList[f];
            if (nome == nomeSelecionado){;
                nomeSelecionado = String(nomeSelecionado) + "  : Item Selecionado";
                nameList[f] = nomeSelecionado;
                fillList();
                posicaoSelected = f
                selecao = false;
            }    
    }
    
    }

}

function Deselecionar(){
    if(selecao == true){
        alert("Não existe item selecionado")
    }
    else{
        nameList = nameListSecurity
        fillList()    
    }
    
}


function filtHandler(){
    const filteredList = nameList.filter(el => {
        const listItems = el.toLowerCase();
        const searchWorld = searchField.value.toLowerCase();
        return listItems.includes(searchWorld)
    });
    fillList(filteredList)
}

function removeItem(){
    nameList.splice(posicaoSelected,1);
    fillList();
}