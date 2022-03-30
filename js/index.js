
//GET EVENTOS API
const divEventos = document.querySelector('#eventos-index')
const body = document.querySelector('body');
divEventos.innerHTML = ''
const BASE_URL = 'https://xp41-soundgarden-api.herokuapp.com';

body.onload = async (evento) => {
    
    const resposta = await fetch(`${BASE_URL}/events` , {method: "GET"})
    const conteudoResposta = await resposta.json()

    const {_id, name, attractions, scheduled, description} = await conteudoResposta;    
    
    for (let index = 50; index < 53; index++) {
    divEventos.innerHTML += `<article class="evento card p-5 m-3">
    <h2 id="nomeData">${conteudoResposta[index].name} - ${conteudoResposta[index].scheduled}</h2>
    <h4 id="atracoes">${conteudoResposta[index].attractions}</h4>
    <p id="descricao">${conteudoResposta[index].description}</p>
    <a id="botao" data-id="${conteudoResposta[index]._id}" class="btn btn-primary open">Book tickets</a>
</article>`
}

    // MODAL
    const open = document.querySelectorAll('.open');
    const close = document.querySelector('#close');
    const modalContainer = document.querySelector('.modal-container');

    open.forEach(element => {
        element.addEventListener('click', () => {
            modalContainer.classList.add('show');
        });
    });

    close.addEventListener('click', () => {
        modalContainer.classList.remove('show');
    });
};

// Registrando novo evento
const nomeUsuario = document.querySelector('#name');
const emailUsuario = document.querySelector('#email');
const ticketsUsuario = document.querySelector('#tickets');
const formNovoEvento = document.querySelector('form');


formNovoEvento.onsubmit = async event => {
    event.preventDefault();
    const botaoId = document.querySelector('.open')
    console.log("🚀 ~ file: index.js ~ line 49 ~ botaoId", botaoId.getAttribute('data-id'))

    try {
        const novaReserva = {
            owner_name: nomeUsuario.value,
            owner_email: emailUsuario.value,
            number_tickets: ticketsUsuario.value,
            event_id: botaoId.getAttribute('data-id')
        };      

        const options = {
            method: "POST",
            body: JSON.stringify(novaReserva),
            headers: {
                "Content-Type": "application/json",
            },
        };

        const resposta = await fetch(`${BASE_URL}/bookings`, options);
        const conteudoResposta = await resposta.json();
        alert('Deu bom')

    } catch (error) {
        console.log(error);
        alert('Deu ruim');
    }
};





