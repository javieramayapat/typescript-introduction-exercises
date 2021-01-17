(function () {

    /**
     * 
     * Ejemplo: Inicialización de una clase de forma tradicional.
     */

    // class Avenger {
    //     nombre: string;
    //     equipo: string;
    //     nombreReal: string;

    //     puedePelear: boolean;
    //     peleasGanadas: number;

    //     /**
    //      * El constrcutor es un método especial dentro de una clase, que se llama automáticamente cada vez que se crea un objeto de esa clase.
    //      * Dentro de el podemos incializar nuestras propiedades de la clase.
    //      * 
    //      */
    //     constructor(nombre: string, equipo: string, nombreReal: string, puedePelear: boolean, peleasGanadas: number) {
    //             this.nombre = nombre;
    //             this.equipo = equipo;
    //             this.nombreReal = nombreReal;
    //             this.puedePelear = puedePelear;
    //             this.peleasGanadas = peleasGanadas;
    //     }
    // }

    // Creación e inicialización de una instancia de la clase Avenger.
    // const ironman =  new Avenger('Robert','Ironman','Robert jr',true,10);
    // console.log(ironman);







    /**
     * Simplificación de una clase usando la creación de las propiedades y su instancia dentro del mismo constructor.
     */
    class Avenger {

        /**
         * Si en el constrcutor agregamos el nivel de acceso que tiene la propiedad, entonces typescrip nos va a crear una propiedad en la clase
         * con ese nombre y a su vez la inicializara con el valor que venga del constructor.
         */
        constructor
            (
                public name: string,
                public equipo?: string,
                public nombreReal?: string,
                public puedePelear?: boolean,
                public peleasGanadas?: number
            ) { }

    }

    // Creación de una instancia de la clase Avenger.
    const antman = new Avenger('Steve Rogers');

    console.log(antman);




})();



