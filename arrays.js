var frutas = ["Manzana","Platano","Cereza","Fresa"];
console.log(frutas);

frutas.indexOf("Cereza"); //--> posicion de un elemento concreto
frutas.shift(); //--> elimina el primer elemento del array 
frutas.unshift("Uvas");// --> añade elemento en la primera posicion del array
frutas.push("Uvas");// --> añade elemento en array en ultima posicion
frutas.pop();// --> elimina el ultimo elemento del array 
console.log(frutas[0]); //--> para tener el elemento en ese indice del array
console.log(frutas.length);// --> te devuelve el tamaño del  array


var articulos = [
    {nombre: "Bici",costo: 3000},
    {nombre: "portatil",costo: 6000},
    {nombre: "Libro",costo: 300},
    {nombre: "Celular",costo: 8000},
    {nombre: "Ordenador",costo: 4000},
    {nombre: "Audifonos",costo: 400},
];
/*Metodo For Each*/
var nombresArticulo = articulos.forEach(function(articulo){
    return articulo.nombre;
})
console.log(nombresArticulo);
/*Metodo find*/
var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Audifonos";
})
console.log(encuentraArticulo);
/*Metodo map*/
var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre
})
console.log(nombreArticulos);

/*Metodo filter*/
var articulosFiltrados = articulos.filter(function(articulo){
     return articulo.costo <= 500;
 })

var articulosFiltrados = articulos.filter(e => {
    return e.costo <= 500}
)
console.log(articulosFiltrados)
