const URL = "http://localhost:3000/livro/"

function criarLinhaLivro(livro){
    return `<divclass="linhaLivro">
        <tr><th>`+livro.nome+`</th>
        <th>`+livro.descricao+`</th>
        <th>`+livro.quantidade+`</th></tr>
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
    var tabelaLivro = document.getElementById("tabelaLivro")
    // tabelaLivro.innerHTML += iniciarTabela()
    for (let i = 0; i < listaLivros.length; i++) {
        const livro = listaLivros[i];
        tabelaLivro.innerHTML += criarLinhaLivro(livro)
    }
}
