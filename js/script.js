var textoIndex=0;
var textos = ['Desarrollador FrontEnd', 'Programador','Ingeniero en Comunicaciones y Electrónica'];

function cambiarTexto(){
    var elemento = document.getElementById('titulo');
    elemento.style.opacity = 0;

    setTimeout(function(){
        elemento.innerHTML = textos[textoIndex];
        elemento.style.opacity = 1;
        textoIndex = (textoIndex+1) % textos.length;
    },800) 
}

setInterval(cambiarTexto,2000);
console.log("Funcion cambiar")

let menuVisible = false;
//Función que oculta o muestra el menú
function mostrarOcultarMenu(){
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
