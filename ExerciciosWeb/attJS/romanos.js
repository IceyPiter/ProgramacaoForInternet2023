const frm = document.querySelector("form")
const saida = document.querySelector("h4")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    let num = frm.valor.value;
    num = num.toUpperCase();
    let val = 0;
    let aux1 = 0;

    
        

    for(let i = 0; i <= num.length; i++){
        if(num[i] == "M"){
            aux1 = 1000;
        }
        if(num[i] == "D"){
            aux1 = 500;
        }
        if(num[i] == "C"){
            aux1 = 100;
        }
        if(num[i] == "L"){
            aux1 = 50;
        }
        if(num[i] == "X"){
            aux1 = 10;
        }
        if(num[i] == "V"){
            aux1 = 5;
        }
        if(num[i] == "I"){
            aux1 = 1;
        }
        if(num[i+1] == "M"){
            aux2 = 1000;
        }
        if(num[i+1] == "D"){
            aux2 = 500;
        }
        if(num[i+1] == "C"){
            aux2 = 100;
        }
        if(num[i+1] == "L"){
            aux2 = 50;
        }
        if(num[i+1] == "X"){
            aux2 = 10;
        }
        if(num[i+1] == "V"){
            aux2 = 5;
        }
        if(num[i+1] == "I"){
            aux2 = 1;
        }
        if(aux1>=aux2){
            if(num[i] == "M"){
                val += 1000;
                if(num[i-1] == "D"){
                    val -= 500
                }
                if(num[i-1] == "C"){
                    val -= 100
                }
                if(num[i-1] == "L"){
                    val -= 50
                }
                if(num[i-1] == "X"){
                    val -= 10;
                }    
                if(num[i-1] == "I"){
                    val -= 1;
                }
            }if(num[i]== "D"){
                val += 500;
                if(num[i-1] == "C"){
                    val -= 100
                }
                if(num[i-1] == "L"){
                    val -= 50;
                }
                if(num[i-1] == "X"){
                    val -= 10;
                }    
                if(num[i-1] == "I"){
                    val -= 1;
                }
            }if(num[i]== "C"){
                val += 100;
                if(num[i-1] == "X"){
                    val -= 10
                }
                if(num[i-1] == "V"){
                    val -= 50
                }
                if(num[i-1] == "I")
                    val -= 1;
            }if(num[i]== "L"){
                val += 50;
                if(num[i-1] == "X"){
                    val -= 10
                }    
                if(num[i-1] == "I"){
                    val -= 1;
                }
            }if(num[i]== "X"){
                val += 10;
                if(num[i-1] == "V"){
                    val -= 5
                    }
                if(num[i-1] == "I"){
                    val -= 1;
                }
            }if(num[i]=="V"){
                val += 5;
                if(num[i-1] == "I"){
                    val -= 1;
                }
            }if(num[i]=="I"){
                val += 1;
            }
        }else{
            continue
        }
    }
    saida.innerHTML = ("O número em decimal é: " + val)
})