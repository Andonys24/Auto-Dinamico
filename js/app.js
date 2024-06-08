// Mostar Input de busqueda
let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
    // Remover activo del menu si se activa el input de busqueda
    menu.classList.remove('active');
}

// Mostar y ocultar menu de hamburguesa
let menu = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = () => {
    menu.classList.toggle('active');
    // remover input de busqueda cuando se inicie el menu
    search.classList.remove('active');
}

// eliminar menu al hacer scroll o darl click a una opcion
window.onscroll = () => {
    menu.classList.remove('active');
    search.classList.remove('active');
}

// Header
let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 80);
})