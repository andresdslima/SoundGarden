// ADMIN
const body = document.querySelector('body');
const tbody = document.querySelector('#tabela-eventos');
tbody.innerHTML = '';

const BASE_URL = 'https://xp41-soundgarden-api.herokuapp.com';

body.onload = async () => {
    const response = await fetch(`${BASE_URL}/events`, { method: "GET" });
    const contentResponse = await response.json();

    for (let i = 50; i < 56; i++) {
        tbody.innerHTML += `
            <tr>
                <th scope="row">${i - 49}</th>
                <td>${contentResponse[i].scheduled}</td>
                <td>${contentResponse[i].name}</td>
                <td>${contentResponse[i].attractions}</td>
                <td>
                    <a href="bookings.html?id=${contentResponse[i]._id}" class="btn btn-dark">Check bookings</a>
                    <a href="edit-event.html?id=${contentResponse[i]._id}" class="btn btn-secondary">Edit</a>
                    <a href="delete-event.html?id=${contentResponse[i]._id}" class="btn btn-danger">Delete</a>
                </td>
            </tr>
        `;
    };
};