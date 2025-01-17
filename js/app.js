let total = document.getElementById('valor-total');
let listaProdutos = document.getElementById('lista-produtos');
let valorTotal = 1400;

function adicionar() {
    let produto = document.getElementById('produto').value;
    let quantidade = document.getElementById('quantidade').value;
    let valorProduto;
    let nomeProduto;

    switch (produto) {
        case 'Fone de ouvido - R$100':
            valorProduto = 100*quantidade;
            nomeProduto = 'Fone de ouvido';
            adicionarCarrinho(quantidade, nomeProduto, valorProduto)
            break;
        case 'Celular - R$1400':
            valorProduto = 1400*quantidade;
            nomeProduto = 'Celular';
            adicionarCarrinho(quantidade, nomeProduto, valorProduto);
            break;
        case 'Oculus VR - R$5000':
            valorProduto = 5000*quantidade;
            nomeProduto = 'Oculus VR';
            adicionarCarrinho(quantidade, nomeProduto, valorProduto);
            break;
    }

}

function limpar() {
    valorTotal = 0;
    total.textContent = 'R$0';
    listaProdutos.textContent = '';
}

function adicionarCarrinho(quantidade, nome, valor) {
    listaProdutos.innerHTML = listaProdutos.innerHTML + `<section class="carrinho__produtos__produto"><span class="texto-azul">${quantidade}x</span> ${nome} <span class="texto-azul">R$${valor}</span></section>`;
    valorTotal = valorTotal+valor;
    total.textContent = `R$${valorTotal}`;
}