// EDIT EVENT
const nomeEditar = document.querySelector('#nome');
const bannerEditar = document.querySelector('#banner');
const atracoesEditar = document.querySelector('#atracoes');
const descricaoEditar = document.querySelector('#descricao');
const dataEditar = document.querySelector('#data');
const ticketsEditar = document.querySelector('#lotacao');
const formEditar = document.querySelector('form');
const body = document.querySelector('body');

const BASE_URL = 'https://xp41-soundgarden-api.herokuapp.com';

body.onload = async (evento) => {
    
    const resposta = await fetch(`${BASE_URL}/events/${"6243703488397406a233da6e"}` , {method: "GET"})
    const conteudoResposta = await resposta.json()


    const {name, poster, attractions, description, scheduled, number_tickets} = await conteudoResposta;

    nomeEditar.value = name;
    bannerEditar.value = poster;
    atracoesEditar.value = attractions;
    descricaoEditar.value = description;
    dataEditar.value = scheduled;
    ticketsEditar.value = number_tickets;
};

formEditar.onsubmit = async event => {
    event.preventDefault();



    try {
        const editarEvento = {
            name: nomeEditar.value,
            poster: bannerEditar.value,
            attractions: atracoesEditar.value.split(', '),
            description: descricaoEditar.value,
            scheduled: dataEditar.value,
            number_tickets: ticketsEditar.value,
        };      

        const options = {
            method: "PUT",
            body: JSON.stringify(editarEvento),
            headers: {
                "Content-Type": "application/json",
            },
        };

        const resposta = await fetch(`${BASE_URL}/events/${"6243703488397406a233da6e"}` , options)
        const conteudoResposta = await resposta.json()
        alert('Deu bom')

    } catch (error) {
        console.log(error);
        alert('Deu ruim');
    }
};