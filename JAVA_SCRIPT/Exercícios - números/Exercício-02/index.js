function maiorNumero(){
    let input01 =parseInt(document.getElementById("numero01").value); 
    let input02 = parseInt(document.getElementById("numero02").value);
    if(input01 > input02) return input01  + " é maior";
    else if(input02 > input01){
        return input02 + " é maior";
    }
    else{
        return "Valores iguais";
    }
}

document.getElementById("clique").addEventListener("click", function(){
    let resultado = document.getElementById("resposta");
    resultado.innerText = maiorNumero();
})