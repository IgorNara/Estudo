const verificaSeGanhou = jogo => {
    const jogosVencedores = [
        [0, 1, 2], 
        [3, 4, 5], 
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
}
let jogadorDaVez = "X";
const tabuleiro = document.getElementById("tabuleiro");
tabuleiro.addEventListener("click", function(event){
    const divClick = event.target;
    let img = document.createElement("img")
    
    if(jogadorDaVez == "X"){
        img.setAttribute("src", "x.jpg")
        jogadorDaVez = "O";
    }
    else{
        img.setAttribute("src", "o.png")
        jogadorDaVez = "X";
    }
    img.setAttribute("class", "img")    
    divClick.append(img)
})