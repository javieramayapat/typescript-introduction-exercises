(function () {

    /* -------------------------------Planteamiento del problema------------------------------------
        Imagina crear una función que reciba un objeto xmen de tipo any y con ello poder imprimir 
        su propiedad nombre, estoa bre la posibilidad de que el si el nombre del de objeto 
        wolverine cambia tendremos que cambiar el nombre de esas propiedad en todas las
        funciones, haciendo inmantenible el nuestro código.

        Solucion: !Una interface de Typescript!

        La cual es typescript es como una clse tonta a la cual no le puedo agregar funcionamiento,
        y que me sirve para especificar reglas que debe tener un objeto para que se pueda usar
        como un tipo de dato.

        Nota: Una interfaz en javascript no tiene una representación debido q eu no existe, es propia
              de Typescript.
        
    */

    // Creación de la interfaz
    interface Xmen {
        nombre: String;
        edad: Number;
        poder ?: string; //Creación de una propiedad opcional
    }

    // Uso de una interzas para definir el tipado de un parámetro de una función
    const enviarMision = (xmen: any) => {
        console.log(`Enviando a ${xmen.nombre} a la mision.`);
    }

    const volverAlCuartel = (xmen: any) => {
        console.log(`Regresa al cuartel ${xmen.nombre}`);
        console.log(`Oculta tu habilidad de ${xmen.poder}`);
    }

    // Uso de ua interfaz como tipado de dato.
    const wolverine: Xmen = {
        nombre: 'Logan',
        edad: 50,
        poder: 'curación'
    }

    enviarMision(wolverine);
    volverAlCuartel(wolverine);

})();



