const ul = document.querySelector("#transactions");


eventoRemover = (botao, li, receitas, despesas, nomeTransacao)=>{

    botao.addEventListener("click", function(){
        const receitasAtuais = receitas.textContent.split("R$")[1];
        const despesasAtuais = despesas.textContent.split("R$")[1];
        const valor = li.querySelector("span").textContent;
        const saldo = document.querySelector("#balance");
        localStorage.removeItem(nomeTransacao);

        if(parseFloat(valor) > 0){
            const novoValor = parseFloat(receitasAtuais) - parseFloat(valor);
            const novoSaldo = parseFloat(saldo.textContent.split(" ")[1]) - parseFloat(valor);
            receitas.textContent = `+ R$${novoValor}`;
            saldo.textContent = `R$ ${novoSaldo}`;
            ul.removeChild(li);
        }
        else{
            const novoValor = parseFloat(despesasAtuais) + parseFloat(valor);
            const novoSaldo = parseFloat(saldo.textContent.split(" ")[1]) - parseFloat(valor);
            despesas.textContent = `- R$${novoValor}`;
            ul.removeChild(li);
            saldo.textContent = `R$ ${novoSaldo}`;
        }
    })  
}


const botao = document.querySelector(".btn");
botao.addEventListener("click", function(){
    const nomeTransacao = document.querySelector("#text").value;
    const valorTransacao = document.querySelector("#amount").value;

    const receitas = document.querySelector("#money-plus");
    const despesas = document.querySelector("#money-minus");

    const receitasAtuais = receitas.textContent.split("R$")[1];
    const despesasAtuais = despesas.textContent.split("R$")[1];

    let novoValorReceitas = 0;
    let novoValorDespesas = 0;

    const li = document.createElement("li");

    const saldo = document.querySelector("#balance");7

    if(valorTransacao < 0){
        li.setAttribute("class", "minus");
        novoValorDespesas = parseFloat(valorTransacao.split("-")[1]) + parseFloat(despesasAtuais);
        const novoSaldo = parseFloat(saldo.textContent.split(" ")[1]) + parseFloat(valorTransacao);
        saldo.textContent = `R$ ${novoSaldo}`;
        despesas.textContent = `- R$${novoValorDespesas}`; 
    }
    else{
        li.setAttribute("class", "plus");
        const novoSaldo = parseFloat(saldo.textContent.split(" ")[1]) + parseFloat(valorTransacao);
        saldo.textContent = `R$ ${novoSaldo}`;
        novoValorReceitas = parseFloat(valorTransacao) + parseFloat(receitasAtuais);
        receitas.textContent = `+ R$${novoValorReceitas}`; 
    }

    li.innerHTML = `${nomeTransacao} <span>${valorTransacao}</span> <button class="delete-btn">x</button>`;
    
    const botaoRemover = li.querySelector(".delete-btn");

    eventoRemover(botaoRemover, li, receitas, despesas, nomeTransacao);

    let transacao = {
        "nome": nomeTransacao,
        "valor": valorTransacao
    };

    localStorage.setItem(transacao["nome"], `R$ ${transacao["valor"]}`);

    ul.appendChild(li);
})