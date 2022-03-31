// NEW EVENT
const inputTags = document.querySelectorAll('input');
inputTags.forEach(input => {
    input.setAttribute('required', '');
});

// Registrando novo evento
const nomeNovoEvento = document.querySelector('#nome');
const atracoesNovoEvento = document.querySelector('#atracoes');
const descricaoNovoEvento = document.querySelector('#descricao');
const dataNovoEvento = document.querySelector('#data');
const ticketsNovoEvento = document.querySelector('#lotacao');
const formNovoEvento = document.querySelector('form');

const BASE_URL = 'https://xp41-soundgarden-api.herokuapp.com';

formNovoEvento.onsubmit = async event => {
    event.preventDefault();

    try {
        const novoEvento = {
            name: nomeNovoEvento.value,
            poster: "https://www.google.com",
            attractions: atracoesNovoEvento.value.split(', '),
            description: descricaoNovoEvento.value,
            scheduled: dataNovoEvento.value,
            number_tickets: ticketsNovoEvento.value,
        };      

        const options = {
            method: "POST",
            body: JSON.stringify(novoEvento),
            headers: {
                "Content-Type": "application/json",
            },
        };

        await fetch(`${BASE_URL}/events`, options);
        alert('Deu bom')
        

    } catch (error) {
        console.log(error);
        alert('Deu ruim');
    }
};