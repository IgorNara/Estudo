function ocorrenciaPalavras(){
    let texto = document.getElementById("texto").value;
    texto = texto.trim().split(" ");
    let ocorrencia = [];
    let palavras = texto.reduce(function(palavras, valor){
        let cont = 0;
        valor = valor.trim();
        if(!palavras.includes(valor)){
            palavras.push(valor);
            for (const valor2 of texto) {
                if(valor2 == valor){
                    cont++;
                }
            }
            ocorrencia.push(cont);
            return palavras;
        }
        return palavras;
    }, [])  
    let tbody = document.getElementById("tbody");
    palavras.forEach(function(valor, i) {
        tbody.innerHTML += `<tr> <td> ${valor} </td> <td> ${ocorrencia[i]}</td> </tr>`
    })
}

document.getElementById("enviar").addEventListener("click", function(){
    document.getElementById("tabela").innerHTML = '<table border="1"> <thead> <tr> <th>Palavra</th> <th>Ocorrência</th> </tr> </thead> <tbody id="tbody"></tbody> </table>';
    ocorrenciaPalavras();
})
