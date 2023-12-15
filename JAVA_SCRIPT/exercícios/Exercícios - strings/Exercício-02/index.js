function marcaVogais(){
    let frase = document.getElementById("frase").value;
    let fraseMarcada = "";
    for(let i = 0; i < frase.length; i++){
        if("aeiouAEIOU".includes(frase[i])){
            fraseMarcada += "<strong>" + frase[i] + "</strong>";
        }
        else{
            fraseMarcada += frase[i];
        }
    }
    return fraseMarcada;
}

document.getElementById("enviar").addEventListener("click", function(){
    document.getElementById("resposta").innerHTML = marcaVogais();
})