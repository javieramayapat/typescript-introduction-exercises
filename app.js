"use strict";
// Creación de una función anonima auto invocada en javascript
(function () {
    /*
        Template Literales:Nos permiten construir string de manera más
                           sencilla.

        Para imprimir una variable dentro de un template literal
        debo encerrarla dentro de ${ nombre }

        Nota: Los templates literales permiten el procesamiento
              de infromación debido a que entre ${} las llaves
              corre codigo navito de javascript
    
    */
    var nombre = 'Javier';
    var apellido = 'Amaya';
    var edad = 24;
    var sumar = function () { return edad + 5; };
    // Formar la siguientes salida  -> Javier Amaya (24)
    // const salida = nombre + " " + apellido + "(" + edad + ")";
    var salida = nombre + " " + apellido + " (" + sumar() + ")";
    console.log(salida);
})();
