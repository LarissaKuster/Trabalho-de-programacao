const URL = "http://localhost:3000/livro/"

function criarLinhaLivro(livro){
    return `<div class="linha">
                <p>`+livro.nome+`</p>
                <p>`+livro.descricao+`</p>
                <p>`+livro.quantidade+`</p>
            </div>`
}

fetch(URL).then(function(response) {
    return response.json();
}).then(function(data) {
    console.log(data);
    listaLivros = data
    adicionarLivros()
}).catch(function(err) {
    console.log(err);
    console.log("Houve algum problema!");
});

function adicionarLivros(){
    var tabelaLivro = document.getElementById("tabela")
    for (let i = 0; i < listaLivros.length; i++) {
        const livro = listaLivros[i];
        tabelaLivro.innerHTML += criarLinhaLivro(livro)
    }
}
