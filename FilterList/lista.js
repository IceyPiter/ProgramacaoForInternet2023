var nameList = ["Aline","Otavio","Camila","Nareba","Jean", "Julio", "Julio Rodalo", "Rany", "Ti"]

const listEl = document.getElementById("list");
const addButton = document.getElementById("buttonAdd")
const removeButton = document.getElementById("buttonRemove");
const selectButton = document.getElementById("buttonSelect");
const filtButton = document.getElementById("buttonFilt");
filtButton.addEventListener("click",filtHandler);
addButton.addEventListener("click",addList);
// selectButton.addEventListener("click",selectName);
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

selectButton.addEventListener("click", () => { 
  
    if (nameList.length == 0) {
      alert("Não há tarefas para selecionar")       // se não há tarefas, exibe alerta
      return                                        // e retorna
    }
  
    let aux = -1                   // variável auxiliar para indicar linha selecionada
  
    for (let i = 0; i < nameList.length; i++) {
      // se tag é da class tarefa-selecionada (está selecionada)
      if (nameList[i].className == "tarefa-selecionada") {
        nameList[i].className = "tarefa-normal"      // troca para normal
        aux = i                                     // muda valor da variável auxiliar
        break                                       // sai da repetição
      }
    }
  
    // se a linha que está selecionada é a última, irá voltar para a primeira
    if (aux == nameList.length - 1) {
      aux = -1
    }
  
    nameList[aux + 1].className = "tarefa-selecionada" // muda estilo da próxima linha
  })

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
