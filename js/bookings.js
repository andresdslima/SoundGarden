const body = document.querySelector('body');
const bookingList = document.querySelector('#tabela-eventos');
const eventTitle = document.querySelector("#event-title");

const ID_ATUAL = window.location.search.split("=");
const BASE_URL = 'https://xp41-soundgarden-api.herokuapp.com';

body.onload = async () => {
    const resposta = await fetch(`${BASE_URL}/bookings/event/${ID_ATUAL[1]}`, { method: "GET" });
    const conteudoResposta = await resposta.json();
    // const { owner_name, owner_email, number_tickets } = await conteudoResposta;
    // eventTitle.innerHTML = ID_ATUAL[1].event.name;

    for (let i = 0; i < conteudoResposta.length; i++) {
        bookingList.innerHTML += `
            <tr>
                <th scope="row">${i + 1}</th>
                <td>${conteudoResposta[i].owner_name}</td>
                <td>${conteudoResposta[i].owner_email}</td>
                <td>${conteudoResposta[i].number_tickets}</td>
            </tr>
        `;
    };

    // const eventTitle = JSON.parse(conteudoResposta[0].evento);
    // console.log(eventTitle);
};