// LANDING PAGE
const body = document.querySelector('body');
const divEvents = document.querySelector('#eventos-index');
divEvents.innerHTML = '';

const BASE_URL = 'https://xp41-soundgarden-api.herokuapp.com';

body.onload = async () => {
    const response = await fetch(`${BASE_URL}/events`, { method: "GET" });
    const contentResponse = await response.json();

    for (let i = 0; i < 3; i++) {
        const finalDate = new Date(contentResponse[i].scheduled);

        divEvents.innerHTML += `
            <article class="evento card p-5 m-3">
                <h2 id="nomeData">
                    ${contentResponse[i].name} - ${finalDate.getDate()}/${finalDate.getMonth() + 1}/${finalDate.getFullYear()}
                </h2>
                <h4 id="atracoes">
                    ${contentResponse[i].attractions}
                </h4>
                <p id="descricao">
                    ${contentResponse[i].description}
                </p>
                <a id="botao" data-id="${contentResponse[i]._id}" class="btn btn-primary open">
                    Book tickets
                </a>
            </article>
        `;
    };

    // MODAL
    const open = document.querySelectorAll('.open');
    const close = document.querySelector('#close');
    const send = document.querySelector('#send');
    const modal = document.querySelector('.modal-container');

    open.forEach(element => {
        element.addEventListener('click', () => {
            modal.classList.add('show');
            send.setAttribute('data-id', `${element.getAttribute('data-id')}`);
        });
    });

    close.addEventListener('click', () => {
        modal.classList.remove('show');
    });
};

// REGISTERING NEW EVENT BOOKING
const nameUser = document.querySelector('#name');
const emailUser = document.querySelector('#email');
const ticketsUser = document.querySelector('#tickets');
const formNewBooking = document.querySelector('form');

formNewBooking.onsubmit = async event => {
    event.preventDefault();

    const send = document.querySelector('#send');

    try {
        const newBooking = {
            owner_name: nameUser.value,
            owner_email: emailUser.value,
            number_tickets: parseInt(ticketsUser.value),
            event_id: send.getAttribute('data-id'),
        };

        const options = {
            method: "POST",
            body: JSON.stringify(newBooking),
            headers: {
                "Content-Type": "application/json",
            },
        };

        await fetch(`${BASE_URL}/bookings`, options);
        alert('Event tickets booked successfully!')

    } catch (error) {
        console.log(error);
        alert('Error!!!');
    };
};