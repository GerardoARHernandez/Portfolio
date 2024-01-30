
document.addEventListener('DOMContentLoaded', function(){
    iniciarApp();
})

function iniciarApp() {
    cambiarTexto();
    setInterval(cambiarTexto,2000);
    mostrarOcultarMenu();
    seleccionar();
    scrollNav();
}

function cambiarTexto(){

    let textos = ['Desarrollador FrontEnd', 'Programador','Ingeniero en Comunicaciones y Electrónica'];

    let elemento = document.getElementById('titulo');
    elemento.style.opacity = 0;

    setTimeout(function(){
        elemento.innerHTML = textos[0];
        elemento.style.opacity = 1;
        textoIndex = (1) % textos.length;
    },800)     
}

//Función que oculta o muestra el menú
function mostrarOcultarMenu(){
    let menuVisible = false;
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opción
    document.getElementById("nav").classList = "";
    menuVisible = false;
}


function scrollNav() {
    const enlaces = document.querySelectorAll('.responsive a')
    enlaces.forEach( enlace => {
        enlace.addEventListener('click', function(e){
            e.preventDefault();

            const scroll = e.target.attributes.href.value;
            const seccion = document.querySelector(scroll)
            seccion.scrollIntoView({ behavior: "smooth"});
        })
    });
}