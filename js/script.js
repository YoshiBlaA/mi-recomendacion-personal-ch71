let nombre = prompt("Escribe tu nombre: ");
let apellido = prompt("Escribe tu primer apellido");
const noCancionesAgregadas = 20;
const annioActual = 2026;
const acceso = true;

if(acceso){
    if(nombre && apellido){
        alert(`Bienvenid@ ${nombre} ${apellido}`);
    }
    else if(!nombre && apellido){
        alert(`Bienvenid@ ${apellido}`);
    }
    else if(nombre && !apellido){
        alert(`Bienvenid@ ${nombre}`);
    }
    else{
        alert(`Bienvenido usuario anónimo`);
    }
    
    alert(`Durante este año ${annioActual} se han agregado ${noCancionesAgregadas} canciones`)
    alert(`Si tienes dudas sobre cómo usar la página, puedes hacer click sobre el botón de Ayuda`);
    alert(`Que te diviertas :)`);
}