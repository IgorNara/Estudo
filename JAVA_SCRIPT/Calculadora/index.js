const Input = document.getElementById("input");
const InputResult = document.getElementById("Result");
const Clear = document.getElementById("clear");
const Tecla = document.getElementsByClassName("Tecla");
const Igual = document.getElementById("igual");
const Copy = document.getElementById("copy");
const TeclasPermitidas = [
    " ",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "+",
    "*",
    "/",
    "-",
    "(",
    ")",
    "%",
  ];

  Clear.addEventListener("click", function(){
    Input.value = "";
  });

  Input.addEventListener("keydown", function(evento)
  {
    evento.preventDefault();
    if(TeclasPermitidas.includes(evento.key)){
        return (Input.value += evento.key);
    }

    if(evento.key == "Backspace"){
        return (Input.value = Input.value.slice(0, Input.value.length -1));
    }

    if(evento.key == "Enter"){
        return calculo();
    }
  })

  function calculo () {
    return (InputResult.value = eval(Input.value));
  }

  for (const Valor of Tecla) {
    Valor.addEventListener("click", function()
    {
        Input.value += Valor.innerText;
    })
  }

  Igual.addEventListener("click", function(){
    return calculo();
  })

  Copy.addEventListener("click", function(){
    navigator.clipboard.writeText(InputResult.value);
  })