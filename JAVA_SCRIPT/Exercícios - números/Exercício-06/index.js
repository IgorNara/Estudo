const select = document.getElementById("select");

function temperatura_correspondente(){
    let temperatura = parseInt(document.getElementById("temperatura").value);
    if(select.value == "Celcius") return ((temperatura - 32)/9)*5;
    if(select.value == "Fahrenheit") return ((temperatura*1.8) + 32);
}

document.getElementById("select").addEventListener("change", function(){
    if(document.getElementById("enviar")) document.getElementById("enviar").remove();
    if(document.getElementById("temperatura")) document.getElementById("temperatura").remove();
    if(document.getElementById("limpar")) document.getElementById("limpar").remove();
    if(document.getElementById("subtitulo")) document.getElementById("subtitulo").remove();
    if(document.getElementById("label")) document.getElementById("label").remove();
    if(select.value == "Celcius"){
        document.getElementById("form").innerHTML = '<h3 id="subtitulo">Fahrenheit para Celcius</h3> <label for="temperatura" id="label">Temperatura em Fahrenheit: </label> <div id="input"></div>';
        document.getElementById("input").innerHTML = '<input type="number" id="temperatura"> <input type="submit" id="enviar">  <input type="reset" id="limpar" value="limpar">';
        document.getElementById("limpar").addEventListener("click", function(){
            document.getElementById("resposta").innerText = "";
        })
        document.getElementById("resultado").innerHTML = '<p id="resposta"></p>';
        document.getElementById("resposta").innerText = "";
        document.getElementById("input").addEventListener("click", function(event){
            if (event.target && event.target.id == "enviar"){
              event.preventDefault();
              document.getElementById("resposta").innerHTML = document.getElementById("temperatura").value + "°F = " + temperatura_correspondente() +"°C";
            }
          });
    }
    else if(select.value == "Fahrenheit"){
        document.getElementById("form").innerHTML = '<h3 id="subtitulo">Celcius para Fahrenheit </h3> <label for="Fahrenheit" id="label">Temperatura em Celcius: </label> <div id="input"></div>';
        document.getElementById("input").innerHTML = '<input type="number" id="temperatura"> <input type="submit" id="enviar"> <input type="reset" id="limpar" value="limpar">';
        document.getElementById("limpar").addEventListener("click", function(){
            document.getElementById("resposta").innerText = "";
        })
        document.getElementById("resultado").innerHTML = '<p id="resposta"></p>';
        document.getElementById("resposta").innerText = "";
        document.getElementById("input").addEventListener("click", function(event){
            if (event.target && event.target.id == "enviar"){
              event.preventDefault();
              document.getElementById("resposta").innerHTML = document.getElementById("temperatura").value + "°C = " + temperatura_correspondente() +"°F";
            }
          });
    }
})






