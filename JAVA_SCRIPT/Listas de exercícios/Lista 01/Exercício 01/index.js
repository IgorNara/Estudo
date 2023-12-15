function reescreve(){
    let texto = document.getElementById("texto").value;
    return texto;
}

document.getElementById("clique").addEventListener("click", function(){
    document.getElementById("resposta").innerText = reescreve();
})