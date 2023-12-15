function mediaFinal(){
    let n1 = document.getElementById("nota-01").value;
    let n2 = document.getElementById("nota-02").value;
    let n3 = document.getElementById("nota-03").value;
    return ((n1*2) + (n2*3) + (n3*5))/10;
}

document.getElementById("enviar").addEventListener("click", function(){
    document.getElementById("resposta").innerText = "Média final : " + mediaFinal();
})