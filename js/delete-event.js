// DELETE EVENT
const nomeDeletar = document.querySelector('#nome');
const bannerDeletar = document.querySelector('#banner');
const atracoesDeletar = document.querySelector('#atracoes');
const descricaoDeletar = document.querySelector('#descricao');
const dataDeletar = document.querySelector('#data');
const ticketsDeletar = document.querySelector('#lotacao');
const formDeletar = document.querySelector('form');
const body = document.querySelector('body');
const ID_ATUAL = window.location.search.split("=")
const BASE_URL = 'https://xp41-soundgarden-api.herokuapp.com';

body.onload = async evento => {
    
    const resposta = await fetch(`${BASE_URL}/events/${ID_ATUAL[1]}`, {method: "GET"})
    const conteudoResposta = await resposta.json()


    const {name, poster, attractions, description, scheduled, number_tickets} = await conteudoResposta;

    nomeDeletar.value = name;
    bannerDeletar.value = poster;
    atracoesDeletar.value = attractions;
    descricaoDeletar.value = description;
    dataDeletar.value = scheduled;
    ticketsDeletar.value = number_tickets;
};

formDeletar.onsubmit = async event => {
    event.preventDefault();

    try {
        const resposta = await fetch(`${BASE_URL}/events/${ID_ATUAL[1]}`, {method: "DELETE"});
        alert('Deu bom');

    } catch (error) {
        console.log(error);
        alert('Deu ruim');
    }
};