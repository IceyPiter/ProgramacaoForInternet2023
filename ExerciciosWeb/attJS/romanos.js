document.querySelector("form").addEventListener("submit", (e)=> {
    e.preventDefault()

    const elem1 = Number(document.getElementById("lado1").value);
    const elem2 = Number(document.getElementById("lado2").value);
    const elem3 = Number(document.getElementById("lado3").value);
    const resp = document.getElementById("resposta");
    if(elem1 == elem2 && elem1 == elem3){
        resp.innerText = "Triângulo Equilátero"
    }
    else if(elem1 == elem2 || elem1 == elem3 || elem2 == elem3){
        resp.innerText = "Triâgulo Isóceles"
    }
    else if(elem1 != elem2 && elem1 != elem3 && elem2 != elem3){
        resp.innerText = "Triângulo Escaleno"
    }
})