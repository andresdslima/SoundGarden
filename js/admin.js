// ADMIN
// const ID_ATUAL = window.location.href.split('=')[1];

// Registrando novo evento
const nomeNovoEvento = document.querySelector('#nome');
const atracoesNovoEvento = document.querySelector('#atracoes');
const descricaoNovoEvento = document.querySelector('#descricao');
const dataNovoEvento = document.querySelector('#data');
const ticketsNovoEvento = document.querySelector('#lotacao');
const formNovoEvento = document.querySelector('form');

const BASE_URL = 'https://xp41-soundgarden-api.herokuapp.com';

formNovoEvento.onsubmit = async evento => {
    evento.preventDefault();

    try {
        const convertedDate = new Date(dataNovoEvento.value).toISOString();

        const novoEvento = {
            name: nomeNovoEvento.value,
            poster: "https://www.google.com",
            attractions: atracoesNovoEvento.value.split(', '),
            description: descricaoNovoEvento.value,
            scheduled: convertedDate,
            number_tickets: ticketsNovoEvento.value,
        };      

        const options = {
            method: "POST",
            body: JSON.stringify(novoEvento),
            headers: {
                "Content-Type": "application/json",
            },
        };

        const resposta = await fetch(`${BASE_URL}/events`, options);
        const conteudoResposta = await resposta.json();
        console.log(conteudoResposta);
        alert('Deu bom')

    } catch (error) {
        console.log(error);
        alert('Deu ruim');
    }
};



