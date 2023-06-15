function calculo(){
    document.querySelector("form").addEventListener("submit", (e)=> {
        e.preventDefault()
        const valor = Number(document.getElementById("valor").value)
        const resp = document.getElementById("resposta")
        const trocos = document.getElementById("troco")
        let tr = 0
        let tp = 0
        console.log(valor)
        if(valor < 1){
          resp.innerText = "Valor Insuficiente"
          trocos.innerText = "Seu troco é: " + valor
        }
        else if(valor < 1.75){
            tp = 30
            resp.innerText = `Você tem ${tp} minutos...`
            if(valor != 1){
                tr = valor - 1
                trocos.innerText = "Seu troco é: " + tr 
            }else{
                trocos.innerText = "Seu troco é: 0"
            }
        }
        else if(valor < 3){
            tr = valor - 3
            if(tr >= 1.75){
                tr = tr - 1.75
                tp = tp + 60
            }
            if(tr >= 1){
                tr = tr - 1
                tp = tp + 30
            }
            resp.innerText = `Você tem ${tp} minutos...`
            if(valor != 1){
                tr = valor - 1.75
                trocos.innerText = "Seu troco é: " + tr 
            }
        }
        else if(valor >= 3){
            if(valor > 3){
                tp = (valor-valor%3)/3
                tr = valor - 3*tp
                tp = tp*120
                if(tr >= 1.75){
                    tr = tr - 1.75
                    tp = tp + 60
                }
                if(tr >= 1){
                    tr = tr - 1
                    tp = tp + 30
                }
            }
            else{
                tr = valor - 3
                tp = "120"
            }
            resp.innerText = `Você tem ${tp} minutos...`
            if(valor != 3){
                trocos.innerText = "Seu troco é: " + tr 
            }
            else{
                trocos.innerText = "Seu troco é: 0"
            }
        }
    })
}