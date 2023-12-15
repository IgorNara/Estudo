function fixarCarrinhoCompras() {
    const carrinho = document.querySelector(".carrinho-compras");

    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        if (scrollPosition >= 853 && scrollPosition < 13070) {
        carrinho.classList.add('fixed');
        } else if (scrollPosition < 853 || scrollPosition > 13070) {
        carrinho.classList.remove('fixed');
        }
    });
}

function checkProdutoNoMenu(produto){
    const itens = document.querySelectorAll(".item")
    for(i = 0; i < itens.length; i+=1){
        let nome = itens[i].querySelector("figcaption").textContent
        let nomeProduto = produto["name"]? produto["name"]: produto["title"]
        if(nome == nomeProduto){
            return true
        }
    }
    return false
}

function checkProduto(compras, produto){
    for(let i = 0; i < compras.length; i+=1){
        if(compras[i].textContent.includes(produto)){
            return true
        }
    }
    return false
}

function removerProduto(carrinho, itens, valorTotal){
    carrinho.addEventListener("click", (event) => {
        if (event.target.classList.contains("remover")) {
            const li = event.target.parentElement;
            const nome = li.textContent.split(":")[0]
            for(i = 0; i < itens.length; i+=1){
                if(nome == itens[i].querySelector("figcaption").textContent){
                    let total = parseFloat(valorTotal.textContent)
                    let preco = (itens[i].querySelector(".preco").textContent.replace(/[^0-9.]/g,''))
                    valorTotal.innerHTML = (total - preco).toFixed(2)
                }
            }
            const spanQuantidade = li.querySelector(".quantidade");
            let quantidade = parseInt(spanQuantidade.textContent);
            if (quantidade > 1) {
                spanQuantidade.textContent = quantidade - 1;
            } else {
                carrinho.removeChild(li);
            }    
        }
    });    
}

function itensPedido(compras){
    lista = []
    compras.forEach(item =>{
        produto = []
        produto.push(item.textContent.split(":")[0])
        produto.push(item.textContent.split(":")[1].split("")[2])
        lista.push(produto)
    })
    // console.log(lista)
    return lista
}

function adicionarPedido(pedido){
    const listaPedidos = document.querySelector(".pedidos")
    const totalPedidos = document.querySelector(".total-pedidos")
    console.log(listaPedidos)
    let total = parseInt(totalPedidos.textContent) + 1
    totalPedidos.textContent = total
    let li = document.createElement("li")
    pedido["produtos"].forEach(produto =>{
        li.textContent += `${produto[1]} ${produto[0]}, `
    })
    li.textContent += "valor: " + pedido["valor"]
    let spanRemover = document.createElement("span")
    spanRemover.setAttribute("class", "remover")
    spanRemover.textContent = "X"
    li.appendChild(spanRemover)
    listaPedidos.appendChild(li)
}

function resetarCompra(valorTotal, carrinho, btnComprar){
    valorTotal.textContent = 0
    carrinho.textContent = ""
    btnComprar.textContent = "Comprar"
}

function liRemover(listaPedidos){
    listaPedidos.addEventListener("click", (event)=>{
        if(event.target.classList.contains("remover")){
            const modal = document.getElementById("modal");
            modal.style.display = "block";
            let li = event.target.parentElement;
            return li
        }
    })
}

function eventBotoesModal(li, listaPedidos){
    const modal = document.getElementById("modal");
    const cancelar = document.getElementById("cancelar");
    const voltar = document.getElementById("voltar");
    cancelar.addEventListener("click", () => {
        alert("pedido cancelado");
        const totalPedidos = document.querySelector(".total-pedidos")
        modal.style.display = "none";
        totalPedidos.textContent = parseFloat(totalPedidos.textContent) - 1
        listaPedidos.removeChild(li)
    });

    voltar.addEventListener("click", () => {
        modal.style.display = "none";
    });
}

produtos = async URL =>{
    resposta = await fetch(URL)
    dados = await resposta.json()
    return dados
}

produtos("https://rafaelescalfoni.github.io/desenv_web/restaurante/items.json").then(dados =>{
    const menu = document.querySelector("#menu")
    const menuCompras = document.querySelector("#compras")
    dados.forEach(produto => {
        if(!checkProdutoNoMenu(produto)){
            let nome = produto["name"]? produto["name"]: produto["title"]
            let preco = produto["price"].split("$")[1]
            let urlFoto = produto["photo"]
            let detalhes = produto["details"]
            menu.innerHTML += `
                <div class="col-md-6">
                    <div class="item">
                        <figure>
                            <img src="${urlFoto}">
                            <figcaption>${nome}</figcaption>
                        </figure>
                        <div class="item-description">
                            ${detalhes}
                            <p class="preco">$${preco}</p>
                        </div>
                    </div>  
                </div>`
            // localStorage.setItem(nome, 0)
        } 
    });
    menuCompras.innerHTML += `
        <div class="col-md-4" carrinho-pedidos>
            <h1>Pedidos</h1>
            <div class="col-md-12 caixa-registradora">
                <h3 class="total-pedidos">0</h3>
                <ol class="pedidos" type="a"></ol>
            </div>
        </div>
        <div class="col-md-4 carrinho-compras">
            <h1>Carrinho de compras</h1>
            <div class="col-md-12 caixa-registradora">
                <h3 class="total">0</h3>
                <ol class="itens" type="a"></ol>
                <button class="btn" id="btn-comprar">Comprar</button>
                <button class="btn" id="btn-pedidos">Pedidos</button>
            </div>
        </div>`

    const itens = document.querySelectorAll(".item")
    const carrinho = document.querySelector(".itens")
    const valorTotal = document.querySelector(".total")
    itens.forEach(item =>{
        item.addEventListener("click", function(){
            let compras = carrinho.querySelectorAll(".produto")
            let nome = item.querySelector("figcaption").textContent;
            let preco = parseFloat(item.querySelector(".preco").textContent.replace(/[^0-9.]/g,''));
            let total = parseFloat(valorTotal.textContent)
            let valorAntigo = parseInt(localStorage.getItem(nome))
            let valorNovo = valorAntigo + 1
            if(!checkProduto(compras, nome)){
                let li = document.createElement("li")
                li.setAttribute("class", "produto")
                li.textContent = nome + ": "
                let spanQtd = document.createElement("span")   
                spanQtd.setAttribute("class", "quantidade")
                spanQtd.textContent = 1
                let spanRemover = document.createElement("span")
                spanRemover.setAttribute("class", "remover")
                spanRemover.textContent = "X"
                li.appendChild(spanRemover)
                li.appendChild(spanQtd)
                carrinho.appendChild(li)
            }  
            else{
                compras.forEach(produto =>{
                    if(produto.textContent.includes(nome)){
                        let spanQuantidade = produto.querySelector(".quantidade")
                        let quantidade = parseInt(spanQuantidade.textContent) + 1
                        spanQuantidade.textContent = quantidade
                    }
                })
            }
            valorTotal.innerHTML = (total + preco).toFixed(2)
            // localStorage.setItem(nome, valorNovo)
        })  
    })
    const btnComprar = document.querySelector("#btn-comprar")
    let numeroPedido = 1
    btnComprar.addEventListener("click", ()=>{
        let compras = carrinho.querySelectorAll(".produto")
        if(btnComprar.textContent != "Confirmar" && compras.length > 0){
            btnComprar.textContent = "Confirmar"
            valorTotal.textContent += ` + ${parseFloat(valorTotal.textContent*0.1).toFixed(2)} = ${parseFloat((valorTotal.textContent*0.1) + parseFloat(valorTotal.textContent)).toFixed(2)}`
        }
        else if(compras.length > 0){
            window.alert("Pedido confirmado")
            let compras = carrinho.querySelectorAll(".produto")
            total = (parseFloat(valorTotal.textContent)*0.1 + parseFloat(valorTotal.textContent)).toFixed(2)
            pedido = {"produtos": itensPedido(compras), "valor": total}
            localStorage.setItem(`Pedido ${numeroPedido}`, JSON.stringify(pedido))
            resetarCompra(valorTotal, carrinho, btnComprar)
            adicionarPedido(pedido)
            numeroPedido += 1
        }
    })
    const btnPedidos = document.querySelector("#btn-pedidos")
    btnPedidos.addEventListener("click", ()=>{
        window.scrollTo(0,200)
    })

    const listaPedidos = document.querySelector(".pedidos")    
    console.log(listaPedidos)
    removerProduto(carrinho, itens, valorTotal)
    li = liRemover(listaPedidos)
    console.log(li)
    eventBotoesModal(li, listaPedidos)
    fixarCarrinhoCompras()
}).catch(erro =>{
    console.log(erro)
})