var miAuto = {
    marca: 'Toyota',
    modelo: 'Corolla',
    anio: 2014,
    detalleDelAuto: function() {
        console.log('Auto '+ this.modelo + ' ' + this.anio)
    }
};

console.log(miAuto.detalleDelAuto());