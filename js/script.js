/**
 * * VARIABLES DE NOMBRE, APELLIDO, NUMERO DE CANCIONES AGREGADAS EN EL ANNIO ACTUAL Y ACCESO
 */ 

const nombre = prompt("Escribe tu nombre de usuario: ");
const bienvenida = "Bienvenid@";
const noCancionesAgregadas = 20;
const annioActual = 2026;
const acceso = true;


/**
 * * VERIFICAR QUE TIENE ACCESO
 * * SI SE CUMPLE, ENTRA EN EL BLOQUE
 */
if(acceso){

    // * IMPRIMIT NOMBRE Y APELLIDO SI SE PROPORCIONARON
    if(nombre){
        alert(`${bienvenida} ${nombre} ${apellido}`);
    }
    // * IMPRIMIR USUARIO ANONIMO SI NO SE PROPORCIONO NIGUNO
    else{
        alert(`${bienvenida} usuario anónimo`);
    }
    
    // * IMPRIMIR MENSAJES POST-BIENVENIDA, USANDO LAS VARIABLES RESTANTES
    alert(`Durante este año ${annioActual} se han agregado ${noCancionesAgregadas} canciones \nSi tienes dudas sobre cómo usar la página, puedes hacer click sobre el botón de Ayuda`);
}