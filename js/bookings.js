// BOOKING LIST
const body = document.querySelector('body');
const bookingList = document.querySelector('#tabela-eventos');
const eventTitle = document.querySelector("#event-title");

const BASE_URL = 'https://xp41-soundgarden-api.herokuapp.com';
const ID_ATUAL = window.location.search.split("=");

body.onload = async () => {
    try {
        const response = await fetch(`${BASE_URL}/bookings/event/${ID_ATUAL[1]}`, { method: "GET" });
        const contentResponse = await response.json();

        contentResponse.forEach((element, index) => {
            bookingList.innerHTML += `
                <tr>
                    <th scope="row">${index + 1}</th>
                    <td>${element.owner_name}</td>
                    <td>${element.owner_email}</td>
                    <td>${element.number_tickets}</td>
                </tr>
            `;
        });

        const response2 = await fetch(`${BASE_URL}/events/${ID_ATUAL[1]}`, { method: "GET" });
        const contentResponse2 = await response2.json();
        eventTitle.innerHTML = contentResponse2.name;

    } catch (error) {
        console.log(error);
        alert('Error!!!');
    };
};