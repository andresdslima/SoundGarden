// ADMIN
const body = document.querySelector('body');
const tbody = document.querySelector('#tabela-eventos');
tbody.innerHTML = '';

const BASE_URL = 'https://xp41-soundgarden-api.herokuapp.com';

body.onload = async () => {
    const response = await fetch(`${BASE_URL}/events`, { method: "GET" });
    const contentResponse = await response.json();

    for (let i = 0; i < 6; i++) {
        const finalDate = new Date(contentResponse[i].scheduled);
        
        tbody.innerHTML += `
            <tr>
                <th scope="row">${i + 1}</th>
                <td>${finalDate.getDate()}/${finalDate.getMonth() + 1}/${finalDate.getFullYear()}</td>
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