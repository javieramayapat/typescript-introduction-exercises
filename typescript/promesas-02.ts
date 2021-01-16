(function () {

    const retirarDinero = (montoRetirar: number): Promise<number> => {

        let dineroActual = 1000;

        return new Promise((resolve, reject) => {  //(1)

            if (montoRetirar > dineroActual) {
                reject('No hay suficientes fondos');
            } else {
                resolve(dineroActual);
            }
        });
    }

    retirarDinero(500)
        .then(montoActual => console.log(`Me queda ${montoActual}`))
        .catch(err => console.warn(err));

})();



