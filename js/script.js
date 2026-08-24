const nombre = prompt("Escribe tu nombre: ");
const apellido = prompt("Escribe tu primer apellido");
const noCancionesAgregadas = 20;
const annioActual = 2026;
const acceso = true;

if(acceso){
    alert(`Bienvenid@ ${nombre} ${apellido}`);
    alert(`Durante este año ${annioActual} se han agregado ${noCancionesAgregadas} canciones`)
    alert(`Si tienes dudas sobre cómo usar la página, puedes hacer click sobre el botón de Ayuda`);
    alert(`Que te diviertas :)`);
}