
//GET EVENTOS API
const tbody = document.querySelector('#tabela-eventos')
const body = document.querySelector('body');
tbody.innerHTML = ''
const BASE_URL = 'https://xp41-soundgarden-api.herokuapp.com';

body.onload = async (evento) => {

    const resposta = await fetch(`${BASE_URL}/events`, { method: "GET" })
    const conteudoResposta = await resposta.json()

    const { _id, name, attractions, scheduled, description } = await conteudoResposta;

    for (let index = 50; index < 56; index++) {
        tbody.innerHTML += `<article class="evento card p-5 m-3">
    <h2 id="nomeData">${conteudoResposta[index].name} - ${conteudoResposta[index].scheduled}</h2>
    <h4 id="atracoes">${conteudoResposta[index].attractions}</h4>
    <p id="descricao">${conteudoResposta[index].description}</p>
    <a id="botao" data-id="${conteudoResposta[index]._id}" class="btn btn-primary open">Book tickets</a>
</article>`
    }
};