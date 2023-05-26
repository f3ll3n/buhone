const formPopup = document.getElementById('form-popup');
const closeButton = document.getElementById('close');
const button = document.getElementById('submit');
const form = document.getElementById('form')

function handleOnSubmit(event) {
    console.log('clicked');
    event.preventDefault();
    formPopup.style.display = "flex";
}
function closePopup() {
    formPopup.style.display = "none";
}

form.addEventListener('submit', (event) => handleOnSubmit(event));

closeButton.addEventListener('click', () => closePopup());
