function novo_salario(){
    let salario = parseFloat(document.getElementById("salario").value);
    let percentual = parseFloat(document.getElementById("reajuste").value);
    return salario + (salario*(percentual/100));
}

document.getElementById("enviar").addEventListener("click", function(){
    document.getElementById("resposta").innerText = "Novo salário: " + novo_salario();
})