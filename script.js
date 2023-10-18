import { barcelona ,roma ,paris ,londres,} from "./ciudades.js"

let titulos = document.getElementById("titulo");
let subtitulos = document.getElementById("subtitulo");
let parrafos = document.getElementById("parrafo");


//   Obtener los elementos del DOM
//                      query = consulta
let enlaces = document.querySelectorAll('a')
console.log(enlaces);
//agregar el click a cada a 

enlaces.forEach(function(enlace){
    //limpiar los a de active
   enlace.addEventListener('click',function(){
    enlaces.forEach(function(enlace){
        enlace.classList.remove('active');
    });
    enlace.classList.add('active');
   
        //obteniendo info 
    let contenido = obtenerContenido(enlace.textContent);
        // imprimir data 
        titulos.innerHTML = contenido.titulo;
        subtitulos.innerHTML = contenido.subtitulo;
        parrafos.innerHTML = contenido.parrafo;
    
    });
   

   
});

// Función para obtener la información correcta del archivo ciudades.js
function obtenerContenido(enlace) {
    let contenidos = {
        'Barcelona': barcelona,
        'Roma': roma,
        'París': paris,
        'Londres': londres,
    }
    return contenidos[enlace];
}