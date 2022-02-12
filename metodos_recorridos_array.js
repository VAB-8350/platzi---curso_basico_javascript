var articulos = [
    {nombre: 'Bici', costo: 3000},
    {nombre: 'Tv', costo: 2500},
    {nombre: 'Libro', costo: 320},
    {nombre: 'Celular', costo: 10000},
    {nombre: 'laptop', costo: 20000},
    {nombre: 'teclado', costo: 500},
    {nombre: 'audifonos', costo: 1700},
]

            // metodo de recorrido

// este metodo retorna todos los objetos que cumplan la condicion
var articulosFiltrados = articulos.filter(function(articulos){
    return articulos.costo <= 500;
});

// este metodo recorre todos los objetos y retorna el atributo solocitado
var nombreArticulos = articulos.map(function(articulos) {
    return articulos.nombre
})

// este metodo busca el objeto que cumpla una condicion, si lo encuentra lo retorna, de caso contrario retorna false
var encuentraArticulo = articulos.find(function(articulos) {
    return articulos.nombre === 'laptop'
});

// recorre el array anterior retornando los nombres en este caso
articulos.forEach(function(articulos) {
    console.log(articulos.nombre);
});

// retorna true si la condicion se cumple la condicion en algun objeto del Array, en caso contrario retorna false
var articulosBaratos = articulos.some(function(articulos) {
    return articulos.costo <= 700;
});

console.log(articulosFiltrados);
console.log(nombreArticulos);
console.log(encuentraArticulo);
console.log(articulosBaratos);