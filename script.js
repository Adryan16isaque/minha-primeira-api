const input = document.querySelector('#input');
const btnBuscarEndereco = document.querySelector('#btnBuscarEndereco');
const resultado = document.querySelector('#resultado');

resultado.addEventListener('click', () => {

}
)
btnBuscarEndereco.addEventListener('click', () => buscar());

function buscar() {
    const cep = input.value.trim();
    if (cep === "") {
        resultado.innerHTML = " Digite um cep para pesquisa".toUpperCase()
        resultado.classList.add('resultadoEstilizacao')
        return
    }

    buscarCep(cep)
}

function buscarCep(cep) {
    fetch(`https://cep.awesomeapi.com.br/json/${cep}`)
        .then(reposta => reposta.json())
        .then(dados => {
            const valorEndereco = dados.address
            const valorEstado = dados.state
            const valorCidade = dados.city
            const valorDistrito = dados.district

            exibirEndereco(valorEndereco, valorEstado, valorCidade, valorDistrito)
        })
        .catch(() => {
            resultado.innerHTML = "cep nao encontrado, digite um CEP válido".toUpperCase()
        })
}
function exibirEndereco(endereco, estado, cidade, distrito) {

    resultado.classList.add('resultadoEstilizacao')

    resultado.innerHTML = `
    <h2>ENDERECO ENCONTRADO:</h2>
    <p>Endereco: ${endereco.toUpperCase()}</p>
    <p>Estado: ${estado.toUpperCase()}</p>
    <p>Cidade: ${cidade.toUpperCase()}</p>
    <p>Distrito: ${distrito.toUpperCase()}</p>
    `;
}