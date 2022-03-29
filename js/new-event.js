// NEW EVENT
// Colocar infos de uma pag pra outra pag:
const ID_ATUAL = window.location.href.split('=')[1];
// URL...?id=13neu13neu13&title=EventTitle&...
// <a href="reservas.html?id=${item._id}">
// Vamos usar depois...

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

        const resposta = await fetch(`${BASE_URL}/events`, options);
        const conteudoResposta = await resposta.json();
        var idNovoEvento = conteudoResposta._id;
        alert('Deu bom')

    } catch (error) {
        console.log(error);
        alert('Deu ruim');
    }
};

export default idNovoEvento;