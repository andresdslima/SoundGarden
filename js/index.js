// MODAL
const open = document.querySelectorAll('.open');
const close = document.querySelector('#close');
const modalContainer = document.querySelector('.modal-container');

open.forEach(element => {
    element.addEventListener('click', () => {
        modalContainer.classList.add('show');
    });
});

close.addEventListener('click', () => {
    modalContainer.classList.remove('show');
});