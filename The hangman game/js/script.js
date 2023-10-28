  /**
    @author Sajid Ahmad;
    */
window.onload = function(){
    let letrasCorrectas = [];
    let letrasIncorrectas = [];
    let vidas = 5;
    const palabras = [
        "COCHE", 
        "GUITARRA",
        "PIZZA",
        "SOLAR", 
        "FLORES"];
    const pistas = [
        "Medio de transporte con cuatro ruedas.",
        "Instrumento musical de cuerda.",
        "Comida italiana con queso y tomate.",
        "Relacionado con la energía del sol.",
        "Plantas con colores y aromas agradables."
    ];
    let puntuacion = 100;
    let palabraElegida = "";
    let pista = "";
    let palabraMostrada = "";


    /**
    *Función que se ejecuta al hacer click en empezar juego.
    */

    function empezarJuego(){
        let pos = random();
        palabraElegida = palabras[pos];
        pista = pistas[pos];
        document.getElementById("puntuacion").innerHTML = "PUNTUACIÓN: " + puntuacion; 
        document.getElementById("empezarJuego").style.display = "none"; 
        document.getElementById("juego").style.display = "flex"; 
        for(let i=0;i<palabraElegida.length;i++){
            palabraMostrada = palabraMostrada + "_"; 
        }
        document.getElementById("palabra").innerHTML = palabraMostrada;
        let corazones = "";
        for(let i=0; i<vidas;i++){
            corazones += "❤️";
        }
        document.getElementById("vidas").innerHTML= corazones;
        document.getElementById("letra").focus();
    }

    /**
    * Función para generar un número aleatorio.
    * @returns {number} Número aleatorio entre 0 y la longitud de la lista de palabras.
    */

    function random(){
        let pos = Math.floor(Math.random() * palabras.length); 
        return pos;
    }
    
    /**
    * Función para comprobar si una letra está en la palabra elegida.
    * @param {object} evento - Enter o clic.
    */

    function comprobarLetraEnPalabra(evento){
        let comprobarSiContenidoMostradoEsJuego = document.getElementById("juego").style.display;
        if((evento.keyCode == 13 && comprobarSiContenidoMostradoEsJuego == "flex") || evento.type == "click"){
            let letra = document.getElementById("letra").value; 
            letra = letra.toUpperCase();
            if(validarInput(letra) == true ){
                if(letraYaIngresada(letra) == false){
                    document.getElementById("letra").value = "";
                    let pos=[];
                    let encontrado = false;
                    let k=0;
                    for(let j=0;j<palabraElegida.length;j++){
                        if(palabraElegida[j] == letra){
                        encontrado=true;
                        pos[k]=j;
                        k++;
                        }
                    }
                    if(encontrado==true){
                        letrasCorrectas.push(letra);
                    }else{
                        letrasIncorrectas.push(letra); 
                        vidas = vidas - 1;
                        actualizarPuntuacion("intentoFallido");
                        actualizarVidas();
                    }
                    document.getElementById("letrasCorrectas").innerHTML = letrasCorrectas.toString();
                    document.getElementById("letrasIncorrectas").innerHTML = letrasIncorrectas.toString();   
                    for(let l=0;l<pos.length;l++){
                        let index = pos[l];
                        palabraMostrada = palabraMostrada.substr(0,index) + letra + palabraMostrada.substr(index + 1);
                    }
                    document.getElementById("palabra").innerHTML = palabraMostrada;
                    comprobarAcierto();
                }else{
                    document.getElementById("contenidoMensaje").innerHTML = "La letra (" + letra + ") ya fue introducida anteriormente.<br>Introduzca una letra diferente.";
                    document.getElementById("letra").value = "";
                    document.getElementById("juego").style.display = "none";
                    document.getElementById("mensaje").style.display = "flex";
                    
                }
            }else{
                document.getElementById("letra").value = "";
                document.getElementById("contenidoMensaje").innerHTML = "Porfavor, introduzca un input valido antes de probar.";
                document.getElementById("juego").style.display = "none";
                document.getElementById("mensaje").style.display = "flex";
    
            }
        }
    }

    /**
    * Función para validar la entrada de letra.
    * @param {string} letra - La letra ingresada.
    * @returns {boolean} True si la letra es válida (La letra es valida si es entre a y z),
    *  de lo contrario, false.
    */

    function validarInput(letra){
        let inputValido = false;
        let alfabetos = /^[A-Z]+$/;
        if(alfabetos.test(letra)){
            if(letra.length != 0){
                inputValido = true;
            }
        }
        return inputValido;
    }

    /**
    * Función para comprobar si una letra ya fue ingresada.
    * @param {string} letra - La letra ingresada.
    * @returns {boolean} True si la letra ya fue ingresada, 
    * de lo contrario, false.
    */

    function letraYaIngresada(letra){
        let letraIngresadaAnteriormente = false;
        for(let i=0;i<letrasCorrectas.length && letraIngresadaAnteriormente==false; i++){
            if(letrasCorrectas[i] == letra){
            
                letraIngresadaAnteriormente = true;
            }
        }
        for(let j=0;j<letrasIncorrectas.length && letraIngresadaAnteriormente==false; j++){
            if(letrasIncorrectas[j] == letra){
                letraIngresadaAnteriormente = true;
            }
        }
        return letraIngresadaAnteriormente;
    }

    /**
    * Función para comprobar si se adivinó la palabra o se 
    * acabaron las vidas.
    */

    function comprobarAcierto(){
        let palabraAdivinada = palabraMostrada.split(" ").join("");
        if (palabraAdivinada == palabraElegida) {
            setTimeout(function () {
                document.getElementById("mensajeSiHasAdivinadoONo").innerHTML = `🥇Has adivinado la palabra exitosamente.<br>Puntuación: ${puntuacion}`;
                document.getElementById("gameOver").style.display = "flex";
                document.getElementById("juego").style.display = "none";
            }, 100);
        }else if(vidas == 0){
            setTimeout(function () {
                document.getElementById("mensajeSiHasAdivinadoONo").innerHTML = `💔No has podido adivinar la palabra.<br>La palabra era: ${palabraElegida}.<br>Puntuacion: ${puntuacion} ` ;
                document.getElementById("gameOver").style.display = "flex";
                document.getElementById("juego").style.display = "none";
            }, 100);
        }
    }

    /**
    * Función para actualizar la visualización de las vidas.
    */

    function actualizarVidas(){
        let corazones = "";
        for(let i=0; i<vidas;i++){
            corazones += "❤️";
        }
        document.getElementById("vidas").innerHTML= corazones;
    }

    /**
    * Función para actualizar la puntuación.
    * @param {string} actualizar - Tipo de actualización:
    * ("intentoFallido"(-20 puntos) o "pistaUtilizada"(-10 puntos)).
    */

    function actualizarPuntuacion(actualizar){
        if(actualizar == "intentoFallido"){
            puntuacion = puntuacion - 20;
            if(puntuacion < 0){
                puntuacion = 0;
                document.getElementById("puntuacion").innerHTML = "PUNTUACIÓN: " + 0; 
            }else{
                document.getElementById("puntuacion").innerHTML = "PUNTUACIÓN: " + puntuacion; 
            } 
        }else if(actualizar == "pistaUtilizada"){
            puntuacion = puntuacion - 10;
            if(puntuacion < 0){
                puntuacion = 0;
                document.getElementById("puntuacion").innerHTML = "PUNTUACIÓN: " + 0;
            }else{
                document.getElementById("puntuacion").innerHTML = "PUNTUACIÓN: " + puntuacion; 
            } 
        }
    }

    /**
    * Función para reiniciar el juego.
    */

    function reiniciarJuego(){
        letrasCorrectas = [];
        letrasIncorrectas = [];
        document.getElementById("letrasCorrectas").innerHTML = "";
        document.getElementById("letrasIncorrectas").innerHTML = "";
        vidas = 5;
        puntuacion = 100;
        document.getElementById("puntuacion").innerHTML = "PUNTUACIÓN: " + puntuacion;
        let corazones = "";
        for(let i=0; i<vidas;i++){
            corazones += "❤️";
        }
        document.getElementById("vidas").innerHTML= corazones;
        palabraElegida = "";
        palabraMostrada = "";
        pista = "";
        let pos = random();
        palabraElegida = palabras[pos];
        pista = pistas[pos];
        for(let i=0;i<palabraElegida.length;i++){
            palabraMostrada = palabraMostrada + "_"; 
        }
        document.getElementById("palabra").innerHTML = palabraMostrada;
        document.getElementById("gameOver").style.display = "none";
        document.getElementById("juego").style.display = "flex";
        document.getElementById("letra").focus();
    }

    /**
    * Función para quitar mensaje de error.
    */

    function quitarMensajeDePantalla(){
        document.getElementById("juego").style.display = "flex";
        document.getElementById("mensaje").style.display = "none";
        document.getElementById("letra").focus();
    }

    /**
    * Función para mostrar las reglas del juego.
    */

    function mostrarReglas(){
        document.getElementById("empezarJuego").style.display = "none";
        document.getElementById("reglas").style.display = "flex";
    }
    /**
    * Función para quitar el mensaje de las reglas del juego.
    * @param {object} event - Evento de teclado o clic.
    */

    function quitarMensajeReglas(){
        let comprobarSiContenidoMostradoSonReglas = document.getElementById("reglas").style.display;
        if((event.keyCode == 13 && comprobarSiContenidoMostradoSonReglas == "flex") || event.type == "click"){
            document.getElementById("empezarJuego").style.display = "flex";;
            document.getElementById("reglas").style.display = "none";
        }
    }
    
    /**
    * Función para mostrar una pista.
    */

    function mostrarPista(){
        actualizarPuntuacion("pistaUtilizada");
        document.getElementById("tituloMensaje").innerHTML = "💡PISTA";
        document.getElementById("contenidoMensaje").innerHTML = pista;
        document.getElementById("juego").style.display = "none";
        document.getElementById("mensaje").style.display = "flex";

    }
    

    document.getElementById("jugar").addEventListener('click', empezarJuego);
    document.addEventListener('keypress', comprobarLetraEnPalabra);
    document.getElementById("probar").addEventListener('click', comprobarLetraEnPalabra);
    document.getElementById("reiniciar").addEventListener('click', reiniciarJuego);
    document.getElementById("ok").addEventListener('click',quitarMensajeDePantalla); 
    document.getElementById("botonReglas").addEventListener('click', mostrarReglas);
    document.getElementById("vale").addEventListener('click',quitarMensajeReglas); 
    document.getElementById("pista").addEventListener('click', mostrarPista);
}