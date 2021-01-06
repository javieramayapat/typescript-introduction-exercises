// Creación de una función anonima auto invocada en javascript
(function () {

    /**
     * Desestructuración de objetos nos permite convertir los valores en variables
     * para usarse facilmente.
     * Para desestructurar un objeto usamos llaves {}
     *  */

    const avenger = {
        nombre: "steve",
        clave: 'Capitán America',
        poder: 'suero'
    }

    // imprimir propiedades
    // console.log(avenger.nombre);
    // console.log(avenger.clave);
    // console.log(avenger.poder);


    // Ejemplo de desestructuración en constantes
    const { nombre, clave, poder } = avenger;

    // console.log(nombre);
    // console.log(clave);
    // console.log(poder);


    // Ejemplo de desestructuración en una función
    const extraer = ({ nombre, clave, poder }: any) => {
        console.log(nombre);
        console.log(clave);
        console.log(poder);
    }

    extraer(avenger)



    /**-------------------Desestructuración de arreglos---------------
     * En el caso de los arreglos es necesario respetar las posiciones.
     * Las variables creadas pueden tener un nombre distinto.
     * Para desestructurar un arreglo usamos []
     * */

    const avengers: string[] = ['Thor', 'Ironman', 'Spiderman'];

    const [thor, ironman, spiderman] = avengers;

    // Para solo indcarle a typescript que nos interesa la ultima opción podrias separar los valores por comas.
    // const [ , , spiderman] = avengers;

    const extraerArr = ([thor, ironman, spiderman]: string[]) => {
        console.log(thor);
        console.log(ironman);
        console.log(spiderman);
    }

    extraerArr(avengers)





})();



