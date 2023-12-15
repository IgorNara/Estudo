function tenisPolar(){
    let texto = document.getElementById("texto").value.trim();    
    texto = texto.split(" ");
    let novoTexto = texto.reduce(function(novoTexto, palavra){
        letras = palavra.split("");
        let palavraModificada = "";
        for(let letra of letras){
            if(letra == 't' || letra == 'T'){
                palavraModificada += "p";
            }
            else if(letra == 'e' || letra == 'E'){
                palavraModificada += "o";
            }
            else if(letra == 'n' || letra == 'N'){
                palavraModificada += "l";
            }
            else if(letra == 'i' || letra == 'I'){
                palavraModificada += "a";
            }
            else if(letra == 's' || letra == 'S'){
                palavraModificada += "r";
            }
            else if(letra == 'p' || letra == 'P'){
                palavraModificada += "t";
            }
            else if(letra == 'o' || letra == 'O'){
                palavraModificada += "e";
            }
            else if(letra == 'l' || letra == 'L'){
                palavraModificada += "n";
            }
            else if(letra == 'a' || letra == 'A'){
                palavraModificada += "i";
            }
            else if(letra == 'r' || letra == 'R'){
                palavraModificada += "s";
            }
            else{
                palavraModificada += letra;
            }
        }
        novoTexto += palavraModificada + " ";
        return novoTexto;
    }, "")
    return novoTexto;
}


document.getElementById("enviar").addEventListener("click", function(){
    document.getElementById("resposta").innerText = tenisPolar();
})