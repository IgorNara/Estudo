const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');

const btSumir = document.querySelector("#sumir");

btSumir.addEventListener("Click", function(){
    const buraco1 = document.querySelector(".hole1");
    buraco1.classList.toggle("up");
    console.log(buraco1)
})

var sorteia_buraco = () => Math.floor(Math.random()*6);
console.log(sorteia_buraco);

function startGame(){
    const buraco = document.querySelector(`.hole${sorteia_buraco}`);
    console.log(buraco);

    buraco.classList.toggle("up");
}