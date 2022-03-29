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

// Como mandar os dados do modal pra API ou p outra pagina? 