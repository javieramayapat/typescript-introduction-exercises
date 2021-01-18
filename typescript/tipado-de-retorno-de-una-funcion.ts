(function () {

    function sumar(a: any, b: any) {
        return a + blur;
    }

    function showName(name: string) {
        console.log(`Este es mi nombre: ${name}`);
    }

    // Ejercicio conevrtirlas a una funcion de flecha

    /* 
        Es una buena practica es especificar el tipado de retorno de una función
        debido que asi las respuesta podran acceder a las funciones 
        cargadas por cada tipo.
    */
    const sumarFlecha = (a: number, b: number): number => a + b

    const showNameflecha = (name: string) => {
        console.log(`Este es mi nombre: ${name}`);
    }

    // ejemplo en el que typescript no puede inferir el tipo de dato
     const obtenerSalario = (): Promise<string> => {

        return new Promise((resolve,reject) => {
                resolve("Javier");
        });
     }

     obtenerSalario()
         .then(res => console.log(res.toUpperCase()));

})();



