let total = document.getElementById('valor-total');
let listaProdutos = document.getElementById('lista-produtos');
let valorTotal;
limpar();

function adicionar() {
    let produto = document.getElementById('produto').value;
    let quantidade = document.getElementById('quantidade').value;
    let valorProduto;
    let nomeProduto;
    // Outra alternativa para o problema seria analisar a variável produto, usando o split('-') e split('R$') para separar nome e valor do produto
    // Essa abordagem seria mais eficiente caso precisássemos adicionar mais produtos à página
    if (quantidade > 0) {
        switch (produto) {
            case 'Fone de ouvido - R$100':
                valorProduto = 100*quantidade;
                nomeProduto = 'Fone de ouvido';
                adicionarCarrinho(quantidade, nomeProduto, valorProduto);
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
        document.getElementById('quantidade').value = null;
    } else {
        alert('A quantidade precisar ser maior que 0');
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