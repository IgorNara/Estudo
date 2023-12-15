function classificaSenha(){
    let senha = document.getElementById("senha").value;
    let resposta = document.getElementById("resposta");
    let forca = 0;
    if(senha.match(/[@#!$%&*()-+.=]/)) forca++;
    if(senha.match(/[0-9]/)) forca++;
    if(senha.match(/[A-Z]/)) forca++;
    if(senha.match(/[a-z]/)) forca++;
    
    if(forca > 0 && forca <= 2) resposta.style.backgroundColor = "red";
    else if(forca == 3) resposta.style.backgroundColor = "orange";
    else if(forca == 4) resposta.style.backgroundColor = "green";
}

document.getElementById("enviar").addEventListener("click", function(){
    classificaSenha();
})