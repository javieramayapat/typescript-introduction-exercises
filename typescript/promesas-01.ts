(function () {

    /*     Promesas
        Al crear una promesa esta tiene una función que recibe 2 funciones
        resolve: Se manda a llamar cuando el resultado esta bien y queremos retornarlo.
        reject: Se manda a llamara cuando sucede un error
        
        prom1.then : Es una funión que se manda a llamar cuando todo salio correctamente.
        prom1.catch :Es lo que se va a ejecutar cuando sucede un error

        El no manejar errores en una promesa puede detener el código, por ello es necesario
        usar el catch.

    */

    console.log('Inicio');

    // Creación de la promesa
    const prom1 = new Promise((resolve, reject) => {

        setTimeout(() => {
            reject('Se termino el timeout');
        }, 1000)

    });

    // Ejecución de la promesa
    prom1
        .then(mensaje => console.log(mensaje))
        .catch(mensaje => console.warn(mensaje))


    console.log('Fin');

})();



