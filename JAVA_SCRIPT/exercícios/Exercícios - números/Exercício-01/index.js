function soma_Dois_Numeros(){
    var n1 = parseFloat(document.getElementById("numero-01").value);
    var n2 = parseFloat(document.getElementById("numero-02").value);
    return n1 + "+" + n2 + " = " + (n1 + n2);
}

document.getElementById("enviar").addEventListener("click", function(){
    let resultado = document.getElementById("resposta");
    resultado.innerText =  soma_Dois_Numeros();
})