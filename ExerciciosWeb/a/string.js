const frm = document.querySelector("form")
const saida = document.querySelector("h4")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    let text = frm.valor.value;
    let vetor = text.split(";")
    let resp = []
    let aux1 = "";
    let aux2 = " ";
    let aux3 = 0;

    for(let i = 0; i< vetor[0].length;i++){
        if(i == vetor[2]){
            aux3 +=1
        }
        if(aux3 == 0){
            aux1 += vetor[0][i]
        }else{
            aux2 += vetor[0][i]
        }
    }
    resp.push(aux1)
    resp.push(aux2)
    for(let x = 2; x < vetor.length;x++){
        resp.splice(x,0,vetor[1])
    }  
    aux1 += " "
    saida.innerText = resp.join("")
})