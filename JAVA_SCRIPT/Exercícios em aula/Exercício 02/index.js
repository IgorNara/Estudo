function par_impar(){
    let numero = parseInt(document.getElementById("numero").value);
    if(numero%2 == 0) return "O número digitado é par";
    else{
        return "O número digitado é ímpar";
    }
}

document.getElementById("clique").addEventListener("click", function(){
    let resultado = document.getElementById("resposta");
    resultado.innerText = par_impar(); 
})