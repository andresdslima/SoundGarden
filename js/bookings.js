const table = document.querySelector('.table')
const tabela = document.querySelector('#tabela-eventos')
const body = document.querySelector('body');
table.innerHTML = ''
tabela.innerHTML = ''
const ID_ATUAL = window.location.search.split("=")
const BASE_URL = 'https://xp41-soundgarden-api.herokuapp.com';

body.onload = async (evento) => {
    
    const resposta = await fetch(`${BASE_URL}/bookings/event/${ID_ATUAL[1]}` , {method: "GET"})
    const conteudoResposta = await resposta.json()
    console.log(conteudoResposta);
    const {owner_name, owner_email, number_tickets} = await conteudoResposta;    
    table.innerHTML += `<table class="table">
    <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">Date</th>
            <th scope="col">Title</th>
            <th scope="col">Artists</th>
            <th scope="col">Actions</th>
        </tr>
    </thead>
    <table id="tabela-eventos">`
    for (let index = 0; index < conteudoResposta.length; index++) {
    tabela.innerHTML += `
    <tr>
    <th scope="row">${index + 1}</th>
    <td>${conteudoResposta[index].owner_name}</td>
    <td>${conteudoResposta[index].owner_email}</td>
    <td>${conteudoResposta[index].number_tickets}</td>
    </tr>`
}
table.innerHTML += `</table>
</table>`
};