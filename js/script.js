document.addEventListener('DOMContentLoaded', function() {
    iniciarApp();
});

function iniciarApp() {
    setInterval(cambiarTexto, 2000);
    mostrarOcultarMenu();
    seleccionar();
    scrollNav();
}

let textoIndex = 0; // Declarar e inicializar textoIndex fuera de la función cambiarTexto
function cambiarTexto() {
    const textos = ['Desarrollador Web', 'Programador', 'Ingeniero en Comunicaciones y Electrónica'];
    const elemento = document.getElementById('titulo');

    elemento.style.opacity = 0;

    setTimeout(function() {
        elemento.innerHTML = textos[textoIndex];
        elemento.style.opacity = 1;
        textoIndex = (textoIndex + 1) % textos.length;
    }, 800);
}

let menuVisible = false;
//Función que oculta o muestra el menú
function mostrarOcultarMenu() {
    const nav = document.getElementById("nav");
    
    if(menuVisible) {
        nav.classList.remove("responsive");
    } else {
        nav.classList.add("responsive");
    }

    menuVisible = !menuVisible;
}

function seleccionar() {
    const enlaces = document.querySelectorAll('#nav a');
    
    enlaces.forEach(enlace => {
        enlace.addEventListener('click', () => {
            document.getElementById("nav").classList.remove("responsive");
            menuVisible = false;
        });
    });
}

function scrollNav() {
    const enlaces = document.querySelectorAll('.responsive a');
    
    enlaces.forEach(enlace => {
        enlace.addEventListener('click', function(e) {
            e.preventDefault();
            const seccion = document.querySelector(e.target.getAttribute('href'));
            seccion.scrollIntoView({ behavior: "smooth" });
        });
    });
}
