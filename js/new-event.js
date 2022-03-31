// NEW EVENT
const inputTags = document.querySelectorAll('input');
inputTags.forEach(input => {
    input.setAttribute('required', '');
});

const nameNewEvent = document.querySelector('#nome');
const artistsNewEvent = document.querySelector('#atracoes');
const descriptionNewEvent = document.querySelector('#descricao');
const dateNewEvent = document.querySelector('#data');
const ticketsNewEvent = document.querySelector('#lotacao');
const formNewEvent = document.querySelector('form');

const BASE_URL = 'https://xp41-soundgarden-api.herokuapp.com';

formNewEvent.onsubmit = async event => {
    event.preventDefault();

    try {
        const newEvent = {
            name: nameNewEvent.value,
            poster: "https://www.google.com",
            attractions: artistsNewEvent.value.split(', '),
            description: descriptionNewEvent.value,
            scheduled: dateNewEvent.dateNewEventalue,
            number_tickets: ticketsNewEvent.value,
        };

        const options = {
            method: "POST",
            body: JSON.stringify(newEvent),
            headers: {
                "Content-Type": "application/json",
            },
        };

        await fetch(`${BASE_URL}/events`, options);
        alert('Event registered successfully!')

    } catch (error) {
        console.log(error);
        alert('Error!!!');
    }
};