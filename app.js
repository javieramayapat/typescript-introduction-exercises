"use strict";
// Creación de una función anonima auto invocada en javascript
(function () {
    /*
        Any: Typescript tiene un tipo especial de dato llamado any el cual
             soporta cualquier tipado.
    */
    var mensaje = 'hola';
    var numero = 123;
    var booleano = true; //false
    var hoy = new Date();
    // Demostración de como el tipo Any soporta cualquier tipado.
    var cualquiercosa;
    cualquiercosa = mensaje;
    cualquiercosa = numero;
    cualquiercosa = booleano;
    cualquiercosa = hoy;
    /* Objetos : Typescript adquiere un comportamiento interesante en los objetos
                 en el cual identifica los atributos creados e infiere su tipado
                 agregando un cierto candado a los objetos creados, asi bloquea
                 la creación de las nuevas propiedades al objeto ya establecido.
    */
    var spiderman = {
        nombre: 'Peter',
        edad: 30
    };
    spiderman = {
        nombre: 'Javier',
        edad: 25
    };
})();
