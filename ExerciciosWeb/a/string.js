const frm = document.querySelector("form")
const saida = document.querySelector("h4")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    let text = frm.valor1.value;
    let insert = frm.valor2.value;
    let posicions = frm.valor3.value;
    let vetor = text.split("")
    let pos = posicions.split(";")
    let resp = []

    for(let i = 0; i< vetor[0].length;i++){
        resp.push(vetor[0][i])
    }
    for(let x = 0; x < posicions.length;x++){
        if(vetor[x] == "0"){
            resp.splice(text[x],0,insert + " ")
        }
        else if(vetor[x] == vetor[1]){
            resp.splice(text[x],0," " + insert)
        }else{
            resp.splice(text[x],0," " + insert)
        }
    }
    saida.innerText = resp.join("")
})