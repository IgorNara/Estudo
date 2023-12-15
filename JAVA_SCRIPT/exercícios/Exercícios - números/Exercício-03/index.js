function verifica_primo(){
    let numero = document.getElementById("numero").value;
    let TotalDivisores = 0;
    for(i = 1; i <= numero; i++){
        if(numero%i == 0) TotalDivisores++;
    }
    if(TotalDivisores == 2) return numero + " é primo.";
    else{
        return numero + " não é primo.";
    }
}

document.getElementById("clique").addEventListener("click", function(){
    document.getElementById("resposta").innerText = verifica_primo();
})