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

// Sidebar
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.7 // Ajusta según sea necesario, mayor umbral para mayor precisión
    };

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
});
