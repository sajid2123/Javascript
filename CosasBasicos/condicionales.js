var edad = 18;

if(edad === 18){
    console.log("Puedes votar ");
}else if(edad > 18){
    console.log("Puedes votar de nuevo");
}
else{
    console.log("Aun no puedes votar");
}

//Ternario 
var a = 18;
a === 18? "Si" : "No";

function fun(jugador,otroJugador){
    var maquina = otroJugador;
    var resultado;
    if(jugador === "piedra" && maquina === "papel") {
        resultado = "Perdiste"
    }else if(jugador === "piedra" && maquina === "tijeras") {
        resultado = "Ganaste"
    }else if(jugador === "papel" && maquina === "piedra") {itch
        resultado = "ganaste"
    }else if(jugador === "papel" && maquina === "tijeras") {
        resultado = "Perdiste"
    }else if(jugador === "tijeras" && maquina === "papel") {
        resultado = "Ganaste"
    }else if(jugador === "tijeras" && maquina === "piedra") {
        resultado = "Perdiste"
    }else{
        resultado = "empate";
    }
    return resultado;
}
fun("piedra","tijeras")