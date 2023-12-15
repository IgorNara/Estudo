const divFilmes = document.querySelector("#filmes");
const informacoes = document.querySelector("#mais-informacoes");
const http = new XMLHttpRequest;
const url = "https://rafaelescalfoni.github.io/desenv_web/filmes.json";
const botaoFechar = document.querySelector("#fechar");
const divModal = criarElemento("div");

informacoes.style.display = 'none';


function corClassificacao(classificacao){
    let span = document.querySelector(".span");
    console.log(classificacao)
    if(classificacao < 14){
        span.setAttribute("class", "verde")
        if(classificacao == 0){
            span.innerHTML = "L";
        }
    }
    else if(classificacao < 16){
        span.setAttribute("class", "amarelo")
    }
    else{
        span.setAttribute("class", "vermelho")
    }
    return span;
}


function criarElemento(elemento){
    return document.createElement(elemento);
}


function vetorTitulosSemelhantes(filmes, filme){
    vetor = [];
    filme.titulosSemelhantes.forEach(id => {
        filmes.forEach(titulo => {
            if(titulo.id == id){
                vetor.push(titulo.titulo);
            }
        })
    })
    return vetor;
}


function vetorDeOpinioes(filme){
    let vetor = [];
    filme.opinioes.forEach(opiniao => {
        vetor.push(opiniao["rating"]);
        vetor.push(opiniao["descricao"]);
    })
    return vetor;
}


function estrelasFilme(opinioes){
    let rating = 0;
    let contagem = 0;
    opinioes.forEach(opiniao => {
        rating += opiniao["rating"];
        contagem += 1;  
    })
    return rating/contagem;
}


http.open("get", url);
http.send();
http.onreadystatechange = function(){
    if(http.readyState == 4){
        if(http.status == 200){
            let resposta = this.responseText;
            let filmes = JSON.parse(resposta);
            filmes.forEach(filme => {
                let divFilmeImg = criarElemento("div");
                let img = criarElemento("img");
                let botao = criarElemento("button");

                let urlImg = filme.figura;
                let titulo = filme.titulo;
                
                divFilmeImg.setAttribute("class", "div-imagem");
                botao.setAttribute("class", `btn ${titulo.split(" ")[0]}${titulo.split(" ")[1]?titulo.split(" ")[1]:"undefined"}`);
                img.setAttribute("class", "imagem");
                img.setAttribute("src", urlImg);
                
                botao.appendChild(img)
                divFilmeImg.appendChild(botao);
                divFilmes.appendChild(divFilmeImg); 
            });


            const botoes = document.querySelectorAll(".btn");
            botoes.forEach(btn =>{
                btn.addEventListener('click', function(){
                    let classes = btn.classList;
                    let classe = classes[1];
                    let divOpinioes = criarElemento("div");
                    let divEstrelas = criarElemento("div");

                    console.log(classe);

                    botaoFechar.addEventListener('click', function(){
                        divModal.innerHTML = '';
                        informacoes.style.display = 'none';
                    })

                    informacoes.style.display = 'block';

                    informacoes.appendChild(divModal);

                    divOpinioes.setAttribute("class", "opnioes");
                    divModal.setAttribute("class", "modal");
                    divEstrelas.setAttribute("class", "estrelas");

                    filmes.forEach(filme => {
                        let comparaTitulo = filme.titulo.split(" ");
                        comparaTitulo = (comparaTitulo[0] + comparaTitulo[1]);
                        let titulo = `<h2 class="titulo">Título: ${filme.titulo}</2>`;
                        let classificacao = `<p class="classificacao">Classificação: <span class="span"> ${filme.classificacao} </span></p>`;
                        let resumo = `<p class="resumo">Resumo: ${filme.resumo}</p>`;
                        let generos = `<p class="generos">Gêneros: ${filme.generos} </p>`;
                        let elenco = `<p class="elenco">Elenco: ${filme.elenco} </p>`;
                        let vetorTitulos = vetorTitulosSemelhantes(filmes, filme);
                        let vetorOpinioes = vetorDeOpinioes(filme);
                        let estrelas = estrelasFilme(filme.opinioes);
                        
                        if(classe == comparaTitulo){
                            divModal.innerHTML = titulo;
                            divModal.innerHTML += classificacao;
                            divModal.innerHTML += resumo;
                            divModal.innerHTML += generos;
                            divModal.innerHTML += elenco;
                            divModal.innerHTML += vetorTitulos[0]?`<p class="semelhantes">Títulos semelhantes: ${vetorTitulos} </p>`:"";
                            divModal.innerHTML += "<hr><h3>Opiniões: </h3>";

                            for(i = 0; i < vetorOpinioes.length; i+=1){
                                let divOpiniao = criarElemento("div");
                                divOpiniao.innerHTML += "<p class='rating'>Rating: " + vetorOpinioes[i] + "</p>";
                                i+=1;
                                divOpiniao.innerHTML += "<p class='descricao'>" + vetorOpinioes[i] + "</p>";
                                divOpinioes.appendChild(divOpiniao);
                                divOpiniao.setAttribute("class", "opiniao");
                            }

                            divModal.appendChild(divOpinioes);

                            for(i = 0; i < estrelas; i+=1){
                                let img = criarElemento("img");
                                img.setAttribute("src", "estrela.png")
                                img.setAttribute("class", "estrela")
                                divEstrelas.appendChild(img)
                                divModal.appendChild(divEstrelas);
                            }

                            corClassificacao(filme.classificacao);  
                        }
                        
                    })
                })
            })
        }
    }
}







