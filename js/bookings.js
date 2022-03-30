// BOOKINGS
const eventBookings = document.querySelector('#event-bookings');
const booking = document.createElement('div');

booking.innerHTML += `
    <ul>Name
        <li>Email</li>
        <li>Tickets</li>
    </ul>
    <hr>
`;

eventBookings.appendChild(booking);

// BASE_URL/events traz um array com tds os eventos... 

// Como mandar os dados do modal pra API ou p outra pagina? precisa do id do event q vai ser feita a reserva!!! POST 