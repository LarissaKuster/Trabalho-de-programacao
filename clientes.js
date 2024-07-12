const URL = "http://localhost:3000/cliente/"

function criarLinhaCliente(cliente){
    return `<div class="linha">
                <p>`+cliente.nome+`</p>
                <p>`+cliente.id+`</p>
                <p>`+cliente.email+`</p>
            </div>`
}

fetch(URL).then(function(response) {
    return response.json();
}).then(function(data) {
    console.log(data);
    listaCliente = data
    adicionarCliente()
}).catch(function(err) {
    console.log(err);
    console.log("Houve algum problema!");
});

function adicionarCliente(){
    var tabelaCliente = document.getElementById("tabela")
    for (let i = 0; i < listaCliente.length; i++) {
        const cliente = listaCliente[i];
        tabelaCliente.innerHTML += criarLinhaCliente(cliente)
    }
}
