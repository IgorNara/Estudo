function maiorOcorrencia(){
    let texto = document.getElementById("texto").value;
    let palavras = texto.split(" ");
    let letras = palavras.join("");
    let resposta = document.getElementById("resposta");
    let palavraMaisRepetida = "";
    let ocorrencia = "0";
    for (const palavra of palavras) {
        let i = 0;
        for (const compara of palavras) {
            if(palavra == compara){
                i++;
                if(i > ocorrencia){
                    if(palavraMaisRepetida != palavra) palavraMaisRepetida = palavra;
                    ocorrencia = i;
                }
                else if(i == ocorrencia){
                    if(!palavraMaisRepetida.includes(palavra)) palavraMaisRepetida += `, ${palavra}`;
                }

            }
        }
    }

    resposta.innerHTML = `Númeroo de palavras: ${palavras.length} <br> Total de letras: ${letras.length} <br> Palavra(s) mais repetida(s): ${palavraMaisRepetida}, ${ocorrencia} vezes`;
    
}

document.getElementById("enviar").addEventListener("click", function(){
    maiorOcorrencia();  
})