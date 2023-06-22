//Scope Global
var nombre = "Sajid";

function fun(){
    var apellido = "Ahmad"
    return nombre + " " + apellido;
}
//Deja llamar a nombre porque es scope global y no a apellido porque es scope local(DECLARADO DENTRO DE LA FUNCION)