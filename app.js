"use strict";
// Creación de una función anonima auto invocada en javascript
(function () {
    /*
        Let: Puede perfecamento sutituir a var para poder almacenar
             espacio de memoria para una variable
        let: Solo vive en el espacio delimitado por las llaves llamado scope
        Nota: No permite redeclarar una variable en el mismo scope.

        const: Me sirve para declarar constantes en typescript
        Nota: Las constantes pesan menos en la memorias si el valor
              no va a cambiar
        Las constantes en mayusculas indican que una variable nunca  va
        a cambiar de valor.

    */
    var mensaje = 'hola';
    var HOLA = 'Hola Javier';
    hola = 123;
    if (true) {
        var mensaje_1 = 'mundo';
    }
    console.log(mensaje);
})();
