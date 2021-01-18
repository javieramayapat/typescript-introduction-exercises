(function () {

    // Uso de Let y Const
const nombre = "Ricardo Tapia";
const edad = 23;

const PERSONAJE = {
  nombre,
  edad
};
 
 
// Cree una interfaz que sirva para validar el siguiente objeto

interface superHeroe {
    nombre: string,
    artesMarciales: string[]
}

const batman:superHeroe = {
  nombre: "Bruno Díaz",
  artesMarciales: ["Karate","Aikido","Wing Chun","Jiu-Jitsu"]
}

 
// Convertir esta funcion a una funcion de flecha
function resultadoDoble( a, b ){
  return (a + b) * 2
}

const resultadoDobleflecha = (a: number, b: number):number => (a + b)*2;
 
 
// Función con parametros obligatorios, opcionales y por defecto
// donde NOMBRE = obligatorio
//       PODER  = opcional
//       ARMA   = por defecto = "arco"
const getAvenger =  ( nombre: string, poder ?: string, arma: string = 'Volar') => {
  let mensaje;
  if( poder ){
     mensaje = nombre + " tiene el poder de: " + poder + " y un arma: " + arma;
  }else{
     mensaje = nombre + " tiene un " + poder
  }
  return mensaje;
};
 
 
// Cree una clase que permita manejar la siguiente estructura
// La clase se debe de llamar rectangulo,
// debe de tener dos propiedades:
//   * base
//   * altura
// También un método que calcule el área  =  base * altura,
// ese método debe de retornar un numero.

class Rectangulo {

    constructor(public base: number, public altura:number)
    {}

    calcularArea = ():number => this.base * this.altura;
}

let figura =  new Rectangulo(2,5);
console.log(figura.calcularArea())


})();



