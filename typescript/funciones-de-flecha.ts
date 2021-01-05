// Creación de una función anonima auto invocada en javascript
(function () {

    /* Funciones de flecha */

    // Ejemplo de una función normal
    const miFunction = function (a: string) {
        return a.toUpperCase();
    }

    // Transformación a función de flecha y sus beneficios.

    /**
     * Al usuar una funcion de flecha  se elimina la palabra function y agrega una => despues de los parentesis 
     */
    const miFunctionF = (a: string) => {
        return a.toUpperCase();
    }

    /**
     * Si en una función de flecha hay dentro solo una linea de código y esa linea de código es el valor a retornar
     * podemos quitar la palabra return y ahorrarnos las {} que envuelven el cuerpo de la función para solo
     * devover el reusltado.
     */
    //  const miFunctionF = (a: string) => a.toUpperCase;


    /* 
        Ejercicio: Pasar la función sumarN a una funcion de flecha
    */

    const sumarN = function (a: number, b: number) {
        return a + b;
    }

    const sumarNF = (a: number, b: number) => a + b;


    // Ejemplo donde una función normal de problemas y lo funcione con una funcion de flecha

    const hulk = {
        nombre: 'Hulk',
        smash() {
            // funcion normal que cambia a donde apunta this
            // setTimeout( function () {
            //     console.log(`${this.nombre} smash!!!`);
            // })

            // funcion de flecha que que no modifica a this
            setTimeout( () => {
                console.log(`${this.nombre} smash!!!`);
            })
        }
    }

    hulk.smash()


})();



