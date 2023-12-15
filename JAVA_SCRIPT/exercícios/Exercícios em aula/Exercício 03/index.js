function IMC(){
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;
    return peso/Math.pow(altura, 2);
}

function classifica_IMC(valor){
    if(valor < 18.5) return "Baixo peso";
    else if(valor < 25){
        return "Normal";
    }
    else if(valor < 30){
        return "Sobrepeso";
    }
    else{
        return "Obesidade";
    }
}

document.getElementById("clique").addEventListener("click", function(){
    document.getElementById("resposta").innerText = `${IMC()} - ${classifica_IMC(IMC())}`;
})