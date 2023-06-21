//Crear objetos
var miAuto = {
    marca: "Toyata",
    modelo: "Carola",
    anyo: 2020,
    detalleDelAuto: function(){
        console.log(`Auto ${this.modelo} ${this.anyo}`)
    }
};
//Crear objetos con parametros
function Auto(brand, model, year){
    this.marca = brand
    this.modelo = model
    this.año = year
    this.detalle = function () {
        console.log(`Auto ${this.modelo} del ${this.año}.`)
    }
}