
//GET EVENTOS API
const tbody = document.querySelector('#tabela-eventos')
const body = document.querySelector('body');
tbody.innerHTML = ''
const BASE_URL = 'https://xp41-soundgarden-api.herokuapp.com';

body.onload = async (evento) => {

    const resposta = await fetch(`${BASE_URL}/events`, { method: "GET" })
    const conteudoResposta = await resposta.json()
    console.log(conteudoResposta);
    const {_id, name, attractions, scheduled} = await conteudoResposta;    
    
    for (let index = 50; index < 53; index++) {
    tbody.innerHTML += `<tr>
    <th scope="row">${index-49}</th>
    <td>${conteudoResposta[index].scheduled}</td>
    <td>${conteudoResposta[index].name}</td>
    <td>${conteudoResposta[index].attractions}</td>
    <td>
        <a href="bookings.html?id=${conteudoResposta[index]._id}" class="btn btn-dark">Check bookings</a>
        <a href="edit-event.html?id=${conteudoResposta[index]._id}" class="btn btn-secondary">Edit</a>
        <a href="delete-event.html?id=${conteudoResposta[index]._id}" class="btn btn-danger">Delete</a>
    </td>
</tr>`
}

};