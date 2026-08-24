/**
 * * VARIABLES DE NOMBRE, APELLIDO, NUMERO DE CANCIONES AGREGADAS EN EL ANNIO ACTUAL Y ACCESO
 */ 

const nombre = prompt("Escribe tu nombre: ");
const apellido = prompt("Escribe tu primer apellido");
const noCancionesAgregadas = 20;
const annioActual = 2026;
const acceso = true;


/**
 * * VERIFICAR QUE TIENE ACCESO
 * * SI SE CUMPLE, ENTRA EN EL BLOQUE
 */
if(acceso){

    // * IMPRIMIT NOMBRE Y APELLIDO SI SE PROPORCIONARON
    if(nombre && apellido){
        alert(`Bienvenid@ ${nombre} ${apellido}`);
    }
    // * SOLO IMPRIMIR APELLIDO SI NO SE PROPORCIONO NOMBRE
    else if(!nombre && apellido){
        alert(`Bienvenid@ ${apellido}`);
    }
    // * SOLO IMPRIMIR NOMBRE SI NO SE PROPORCIONO APELLIDO
    else if(nombre && !apellido){
        alert(`Bienvenid@ ${nombre}`);
    }
    // * IMPRIMIR USUARIO ANONIMO SI NO SE PROPORCIONO NIGUNO
    else{
        alert(`Bienvenido usuario anónimo`);
    }
    
    // * IMPRIMIR MENSAJES POST-BIENVENIDA, USANDO LAS VARIABLES RESTANTES
    alert(`Durante este año ${annioActual} se han agregado ${noCancionesAgregadas} canciones`)
    alert(`Si tienes dudas sobre cómo usar la página, puedes hacer click sobre el botón de Ayuda`);
    alert(`Que te diviertas :)`);
}