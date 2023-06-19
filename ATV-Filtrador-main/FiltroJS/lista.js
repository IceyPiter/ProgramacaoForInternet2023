const nameList = ["Aline", "Otavio", "Camila", "Nareba", "Jean", "Julio", "Julio Rodalo", "Rany", "Ti"]

const listEl = document.getElementById("list");
const searchField = document.getElementById("searchField");

numlist = 0;

this.fillList();

function fillList(list = nameList){
    listEl.innerHTML = "";
    for(let i=0; i < list.length; i++){
        let listItems = document.createElement("li");
        listItems.innerHTML = list[i];
        listEl.appendChild(listItems);
    }
}
//------------Adicionar---------------
function adicionar() {
    nameList.push(searchField.value);
    this.fillList(nameList);
}

//--------------Filtrar----------------
function filtrar() {
    const filteredList = nameList.filter(el => {
        const listItems = el.toLowerCase();
        const searchWord = searchField.value.toLowerCase();
        return listItems.includes(searchWord)
    });
    fillList(filteredList);
}

//------------Selecionar-------------
function selecionar() {
    
}

//--------------Remover--------------
function remover() {
    nameList.pop();
    this.fillList(nameList);
}