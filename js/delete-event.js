// DELETE EVENT
const inputTags = document.querySelectorAll('input');
inputTags.forEach(input => {
    input.setAttribute('required', '');
});

const nameDelete = document.querySelector('#nome');
const bannerDelete = document.querySelector('#banner');
const artistsDelete = document.querySelector('#atracoes');
const descriptionDelete = document.querySelector('#descricao');
const dateDelete = document.querySelector('#data');
const ticketsDelete = document.querySelector('#lotacao');
const formDelete = document.querySelector('form');
const body = document.querySelector('body');

const BASE_URL = 'https://xp41-soundgarden-api.herokuapp.com';
const ID_ATUAL = window.location.search.split("=");

body.onload = async () => {
    const response = await fetch(`${BASE_URL}/events/${ID_ATUAL[1]}`, { method: "GET" });
    const contentResponse = await response.json();

    const { name, poster, attractions, description, scheduled, number_tickets } = await contentResponse;

    nameDelete.value = name;
    bannerDelete.value = poster;
    artistsDelete.value = attractions;
    descriptionDelete.value = description;
    dateDelete.value = scheduled;
    ticketsDelete.value = number_tickets;
};

formDelete.onsubmit = async event => {
    event.preventDefault();

    try {
        await fetch(`${BASE_URL}/events/${ID_ATUAL[1]}`, { method: "DELETE" });
        alert('Event deleted successfully!');

    } catch (error) {
        console.log(error);
        alert('Error!!!');
    }
};