function inverteFrase(){
    let frase = document.getElementById("frase").value;
    let frase_inversa = frase.split("");
    frase_inversa.reverse();
    frase_inversa = frase_inversa.join("");
    frase_inversa = frase_inversa.split(" ");
    frase_inversa = frase_inversa.reverse(); 
    return frase_inversa.join(" ");
}

document.getElementById("enviar").addEventListener("click", function(){
    document.getElementById("resposta").innerText = inverteFrase();
})