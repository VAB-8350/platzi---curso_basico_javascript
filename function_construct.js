function auto(marca, modelo, anio) {
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
}

var autoNuevo = new auto('toyota', 'corola', 2020);
var autoNuevo2 = new auto('tesla', 'model s', 2018);
var autoNuevo3 = new auto('citroen', 'C4', 2014);

console.log(autoNuevo);
console.log(autoNuevo2);
console.log(autoNuevo3);
