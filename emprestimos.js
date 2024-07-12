const URL = "http://localhost:3000/emprestimo/";

async function criarLinhaEmprestimo(emprestimo) {
    try {

        const livroResponse = await fetch("http://localhost:3000/livro/" + emprestimo.fk_livro);
        if (!livroResponse.ok) {
            throw new Error(`Erro ao buscar livro: ${livroResponse.statusText}`);
        }
        const livroData = await livroResponse.json();
        const nomelivro = livroData.nome;

        const clienteResponse = await fetch("http://localhost:3000/cliente/" + emprestimo.fk_cliente);
        if (!clienteResponse.ok) {
            throw new Error(`Erro ao buscar cliente: ${clienteResponse.statusText}`);
        }
        const clienteData = await clienteResponse.json();
        const nomecliente = clienteData.nome;

        return `<div class="linha">
                    <p>${nomecliente}</p>
                    <p>${nomelivro}</p>
                    <p>${emprestimo.datadevolucao}</p>
                </div>`;
    } catch (err) {
        console.error(err);
        console.log("Houve algum problema!");
    }
}

async function adicionarEmprestimo() {
    try {
        const response = await fetch(URL);
        if (!response.ok) {
            throw new Error(`Erro ao buscar empréstimos: ${response.statusText}`);
        }
        const listaEmprestimo = await response.json();
        console.log("Lista de empréstimos:", listaEmprestimo);
        const tabelaEmprestimo = document.getElementById("tabela");

        for (const emprestimo of listaEmprestimo) {
            const linha = await criarLinhaEmprestimo(emprestimo);
            tabelaEmprestimo.innerHTML += linha;
        }
    } catch (err) {
        console.error(err);
        console.log("Houve algum problema!");
    }
}

adicionarEmprestimo();
