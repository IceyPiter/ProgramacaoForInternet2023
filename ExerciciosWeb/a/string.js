const frm = document.querySelector("form")
const saida = document.querySelector("h4")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    let text = frm.valor1.value;
    let insert = frm.valor2.value;
    let posicions = frm.valor3.value;
    let pos = posicions.split(";")
    let resp = []
    for(let i = 0; i< text.length;i++){
        resp.push(text[i])
    }
    console.log(resp)
    for(let x = 0; x < pos.length;x++){
        if(pos[x] == "0"){
            resp.splice(pos[parseInt(x)],0,insert + " ")
        }
        else if(parseInt(pos[x]) == text.length){
            resp.splice(pos[parseInt(x)],0," " + insert)
        }else{
            resp.splice(pos[parseInt(x)],0," " + insert)
        }
    }
    saida.innerText = resp.join("")
})