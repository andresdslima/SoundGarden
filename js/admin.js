//GET EVENTOS API
const body = document.querySelector('body');
const tbody = document.querySelector('#tabela-eventos');
tbody.innerHTML = '';

const BASE_URL = 'https://xp41-soundgarden-api.herokuapp.com';

body.onload = async () => {
    const resposta = await fetch(`${BASE_URL}/events`, { method: "GET" });
    const conteudoResposta = await resposta.json();

    // const { _id, name, attractions, scheduled } = await conteudoResposta;

    for (let i = 50; i < 56; i++) {
        tbody.innerHTML += `
            <tr>
                <th scope="row">${i - 49}</th>
                <td>${conteudoResposta[i].scheduled}</td>
                <td>${conteudoResposta[i].name}</td>
                <td>${conteudoResposta[i].attractions}</td>
                <td>
                    <a href="bookings.html?id=${conteudoResposta[i]._id}" class="btn btn-dark">Check bookings</a>
                    <a href="edit-event.html?id=${conteudoResposta[i]._id}" class="btn btn-secondary">Edit</a>
                    <a href="delete-event.html?id=${conteudoResposta[i]._id}" class="btn btn-danger">Delete</a>
                </td>
            </tr>
        `;
    };
};