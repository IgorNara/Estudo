function valor_hipotenusa(){
    let cateto_01 = parseInt(document.getElementById("cateto-01").value);
    let cateto_02 = parseInt(document.getElementById("cateto-02").value);
    return Math.sqrt(Math.pow(cateto_01, 2) + Math.pow(cateto_02, 2))
}

document.getElementById("enviar").addEventListener("click", function(){
    document.getElementById("resposta").innerText = "Hipotenusa = " + valor_hipotenusa();
})