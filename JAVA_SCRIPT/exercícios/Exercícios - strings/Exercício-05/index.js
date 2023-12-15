function implementaTexto(request, implementacao, posicao){
    let texto = document.getElementById("texto").value.trim();
    texto = texto.split(" ");
    if(texto.includes(request)){
        let novoTexto = " ";
        let acumulador = 0;
            if(posicao != -1){
                novoTexto = texto.reduce(function(novoTexto, palavra){
                    if(palavra == request){
                        acumulador++;
                        if(acumulador == posicao){
                                novoTexto += " " + implementacao;
                                return novoTexto; 
                        }
                        else{
                            novoTexto += " " + palavra; 
                        }
                        return novoTexto;
                    }
                    else{
                        novoTexto += " " + palavra; 
                        return novoTexto;
                    }
                }, " ")
            }
            else{
                novoTexto = texto.reduce(function(novoTexto, palavra){
                    if(palavra == request){
                        novoTexto += " " + implementacao;
                    }
                    else{
                        novoTexto += " " + palavra; 
                    }
                    return novoTexto;
                }, " ")
            }
            return novoTexto;
    }
    else{
        return `ERRO: "${request}" não existe no texto.`;
    }
}

document.getElementById("enviar").addEventListener("click", function(){
    document.getElementById("form_procurar_palavra").innerHTML = `<br> <label for="palavraProcurada">Procure uma palavra para substituir em seu texto: </label> <input type="text" id="palavraProcurada"> <input type="submit" value="Procurar" id="procurar">`;
    document.getElementById("procurar").addEventListener("click", function(){
        document.getElementById("form_substituir_palavra").innerHTML = `<br> <label for="posicao">Digite qual deseja substituir: </label> <input type="text" id="posicao" placeholder="Ex: -1 = todos, 1 = primeiro, assim por diante."> <br> <br> <label for="palavraParaSubstituir">Digite a palavra que substituirá: </label> <input type="text" id="palavraParaSubstituir"> <input type="submit" value="Substituir" id="substituir">`;
            document.getElementById("substituir").addEventListener("click", function(){
                let request = document.getElementById("palavraProcurada").value;
                let implementacao = document.getElementById("palavraParaSubstituir").value;
                let posicao = document.getElementById("posicao").value;
                document.getElementById("resposta").innerText = "Novo texto: " + implementaTexto(request, implementacao, posicao);
            })
    })
})

