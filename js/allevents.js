//GET EVENTOS API
const body = document.querySelector('body');
const divEventos = document.querySelector('#allEvents');
divEventos.innerHTML = '';

const BASE_URL = 'https://xp41-soundgarden-api.herokuapp.com';

body.onload = async () => {
    const resposta = await fetch(`${BASE_URL}/events`, { method: "GET" });
    const conteudoResposta = await resposta.json();

    const { _id, name, attractions, scheduled, description } = await conteudoResposta;

    for (let i = 50; i < 56; i++) {
        divEventos.innerHTML += `
            <article class="evento card p-5 m-3">
                <h2 id="nomeData">
                    ${conteudoResposta[i].name} - ${conteudoResposta[i].scheduled}
                </h2>
                <h4 id="atracoes">
                    ${conteudoResposta[i].attractions}
                </h4>
                <p id="descricao">
                    ${conteudoResposta[i].description}
                </p>
                <a id="botao" data-id="${conteudoResposta[i]._id}" class="btn btn-primary open">
                    Book tickets
                </a>
            </article>
        `;
    };

    // MODAL
    const open = document.querySelectorAll('.open');
    const close = document.querySelector('#close');
    const send = document.querySelector('#send');
    const modalContainer = document.querySelector('.modal-container');

    open.forEach(element => {
        element.addEventListener('click', () => {
            modalContainer.classList.add('show');
            send.setAttribute('data-id', `${element.getAttribute("data-id")}`);
        });
    });

    close.addEventListener('click', () => {
        modalContainer.classList.remove('show');
    });
};

// Registrando nova reserva
const nomeUsuario = document.querySelector('#name');
const emailUsuario = document.querySelector('#email');
const ticketsUsuario = document.querySelector('#tickets');
const formNovaReserva = document.querySelector('form');


formNovaReserva.onsubmit = async event => {
    event.preventDefault();

    const send = document.querySelector('#send');

    try {
        const novaReserva = {
            owner_name: nomeUsuario.value,
            owner_email: emailUsuario.value,
            number_tickets: parseInt(ticketsUsuario.value),
            event_id: send.getAttribute('data-id'),
        };

        const options = {
            method: "POST",
            body: JSON.stringify(novaReserva),
            headers: {
                "Content-Type": "application/json",
            },
        };

        await fetch(`${BASE_URL}/bookings`, options);
        alert('Deu bom')

    } catch (error) {
        console.log(error);
        alert('Deu ruim');
    };
};