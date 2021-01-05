// Creación de una función anonima auto invocada en javascript
(function(){

    /* 
        Orden de parámetros de una función: Obligatorios, opcionales
        y por defecto.
    */
   function activar( quien   : string, 
                     momento ?: string,
                     objeto  : string = 'batiseñal'){

        if(momento){
            console.log(`${quien} activó la ${objeto} en la ${momento}.`);
        }else{
            console.log(`${quien} activó la ${objeto}`);
        }
        
   }

   activar("Gordon",'batiseñal','tarde');
  
})();



