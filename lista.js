const nameList = ["Aline","Otavio","Camila","Nareba","Jean", "Julio", "Julio Rodalo", "Rany", "Ti"]

const listEl = document.getElementById("list");
const addButton = document.getElementById("buttonAdd")
const removeButton = document.getElementById("buttonRemove");
const selectButton = document.getElementById("buttonSelect");
const filtButton = document.getElementById("buttonFilt");
filtButton.addEventListener("click",filtHandler)
addButton.addEventListener("click",addList)

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
    
}


function filtHandler(){
    const filteredList = nameList.filter(el => {
        const listItems = el.toLowerCase();
        const searchWorld = searchField.value.toLowerCase();
        return listItems.includes(searchWorld)
    });
    fillList(filteredList)
}

function addHandler(){

}
