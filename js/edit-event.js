// EDIT EVENT
const nameEdit = document.querySelector('#nome');
const bannerEdit = document.querySelector('#banner');
const artistsEdit = document.querySelector('#atracoes');
const descriptionEdit = document.querySelector('#descricao');
const dateEdit = document.querySelector('#data');
const ticketsEdit = document.querySelector('#lotacao');
const formEdit = document.querySelector('form');
const body = document.querySelector('body');

const BASE_URL = 'https://xp41-soundgarden-api.herokuapp.com';
const ID_ATUAL = window.location.search.split("=");

body.onload = async () => {
    try {
        const response = await fetch(`${BASE_URL}/events/${ID_ATUAL[1]}`, { method: "GET" });
        const contentResponse = await response.json();

        const { name, poster, attractions, description, scheduled, number_tickets } = await contentResponse;

        nameEdit.value = name;
        bannerEdit.value = poster;
        artistsEdit.value = attractions;
        descriptionEdit.value = description;
        dateEdit.value = scheduled;
        ticketsEdit.value = number_tickets;

    } catch (error) {
        console.log(error);
        alert('Error!!!');
    };
};

formEdit.onsubmit = async event => {
    event.preventDefault();

    try {
        const editEvent = {
            name: nameEdit.value,
            poster: bannerEdit.value,
            attractions: artistsEdit.value.split(', '),
            description: descriptionEdit.value,
            scheduled: dateEdit.value,
            number_tickets: ticketsEdit.value,
        };

        const options = {
            method: "PUT",
            body: JSON.stringify(editEvent),
            headers: {
                "Content-Type": "application/json",
            },
        };

        const response = await fetch(`${BASE_URL}/events/${ID_ATUAL[1]}`, options);
        const contentResponse = await response.json();
        alert('Event edited successfully!');

    } catch (error) {
        console.log(error);
        alert('Error!!!');
    };
};