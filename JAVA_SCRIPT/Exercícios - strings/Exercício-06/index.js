function escreveData(){
    let data = document.getElementById("data").value;
    data = data.split("-");
    let dia = data[2];
    let mes = data[1];
    let ano = data[0];
    let mesEscrito = " ";
    if(mes == 01) mesEscrito = "Janeiro";
    else if(mes == 02) mesEscrito = "Fevereiro";
    else if(mes == 03) mesEscrito = "Março";
    else if(mes == 04) mesEscrito = "Abril";
    else if(mes == 05) mesEscrito = "Maio";
    else if(mes == 06) mesEscrito = "Junho";
    else if(mes == 07) mesEscrito = "Julho";
    else if(mes == 08) mesEscrito = "Agosto";
    else if(mes == 09) mesEscrito = "Setembro";
    else if(mes == 10) mesEscrito = "Outubro";
    else if(mes == 11) mesEscrito = "Novembro";
    else mesEscrito = "Dezembro";
    return `${dia} de ${mesEscrito} de ${ano}.`
}

document.getElementById("enviar").addEventListener("click", function(){
    document.getElementById("resposta").innerText = escreveData();
})