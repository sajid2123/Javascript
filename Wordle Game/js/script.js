window.onload = function(){

    // Variable para almacenar la palabra elegida aleatoriamente
    let palabraElegida;


    // Teclas disponibles en el teclado del juego
    const teclas = ["Q","W","E","R","T","Y","U","I","O","BORRAR","P","A","S","D","F","G","H","J","K","ENTER","L","Z","X","C","V","B","N","M"];
    
    // Matriz para almacenar las letras introducidas por el usuario
    const matriz = [
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""]
  
    ];

    // Obtener referencias a elementos HTML relevantes
    const teclado = document.getElementById("teclado");
    const tabla = document.getElementById("tabla");
    const gameOver = document.getElementById("gameOver");
    const juego = document.getElementById("juego");


     // Inicializar variables para controlar la posición en la matriz
    let columna = 0;
    let fila = 0;



    /**
     * Función para generar una palabra aleatoria en español de 5 letras sin caracteres especiales ni acentos, y lo asigna al variable palabraElegida.
     */
    const generarPalabra = () => {
        fetch("https://random-word-api.herokuapp.com/all?lang=es")
        .then(response=> {
            if (response.ok) {
                return response.json();
              }
              throw Response;
        })
        .then(datos=> {
            let palabras = [];
            let palabra = datos.filter(palabra => palabra.length === 5 && !/[áéíóúñ]/.test(palabra));
            palabras.push(palabra);
            palabras = palabras[0];
            palabraElegida = elegirPalabra();

            /**
            * Elige una palabra aleatoria de la lista de palabras disponibles.
            * @returns {string} - Palabra aleatoria elegida de la lista.
            */
            function elegirPalabra(){
                let pos = Math.floor(Math.random() * palabras.length); 
                return palabras[pos];
            }
            palabraElegida = palabraElegida.toUpperCase();
            console.log(palabraElegida);
        })
        .catch(err => console.log(err));
    }
    generarPalabra(); // Llamar a la función para generar una palabra al cargar la ventana
    
    /**
     * Genera dinámicamente una tabla de inputs según la matriz proporcionada.
     * @param {array} matriz - La matriz donde el usuario coloca las letras.
     * @returns {void}
     */
    const generarTablaDeInputs = matriz => {
            matriz.forEach((bloque,i) => {
            let fila = document.createElement("div");
            fila.setAttribute("id","columna-"+i);
            fila.classList.add("columna")
            bloque.forEach((elemento,i) => {
                let span = document.createElement("span");
                span.setAttribute("id","elemento-"+i);
                span.innerHTML = elemento;
                span.classList.add("elemento");
                fila.append(span);
            })
            tabla.append(fila);
        })
    }
    /**
     * Limpia los valores y las clases de estilo de la tabla de inputs según la matriz proporcionada.
     * @param {array} matriz - La matriz de inputs.
     * @returns {void}
     */
    const limpiarTablaDeInputs = matriz => {
        matriz.forEach((nada,i) =>{
            const hijos = document.getElementById("columna-"+i).childNodes;
            hijos.forEach((hijo) =>{
                    hijo.innerHTML = "";
                    hijo.classList.remove("green");
                    hijo.classList.remove("yellow");
                    hijo.classList.remove("grey");
            })
        })
    }
    /**
     * Genera dinámicamente un teclado segun las teclas proporcionada.
     * @param {array} teclas - Array de las teclas.
     * @returns {void}
     */
    const generarTeclado = teclas => {
        teclas.forEach(tecla => {
            let button = document.createElement("button");
            button.setAttribute("id",tecla)
            if(tecla == "BORRAR"){
                button.innerHTML = tecla;
                button.classList.add("btnBorrar");
            }else if(tecla == "ENTER"){
                button.innerHTML = tecla;
                button.classList.add("btnEnter");
            }else {
                button.innerHTML = tecla;
                button.classList.add("btn");
            }
            button.addEventListener("click" , handleClickTeclado);
            teclado.append(button);
        })
    }
     /**
     * Limpia las clases de estilo de las teclas.
     * @param {array} teclas - Array de teclas.
     * @returns {void}
     */
    const limpiarClassesDeTeclado = teclas => {
        teclas.forEach(letra => {
            const tecla = document.getElementById(letra);
            tecla.classList.remove("green");
            tecla.classList.remove("yellow");
            tecla.classList.remove("grey");

        })
    }


    /**
     * Añade una letra a la posición actual en la tabla.
     * @param {string} letra - La letra a añadir.
     * @returns {void}
     */
    const anyadirLetra = letra => {
        const columnaActual = document.getElementById("columna-"+columna);
        const span = columnaActual.children[fila];
        span.innerHTML = letra;
        fila++;
    }


    /**
     * Borra la última letra ingresada en la tabla.
     * @returns {void}
     */
    const borrarLetra = () =>{
        const columnaActual = document.getElementById("columna-"+columna);
        const span = columnaActual.children[fila-1];
        span.innerHTML = "";
        fila--;
    }


    /**
     * Agrega un color específico a las teclas.
     * @param {string} letra - La letra para la que se cambia el color.
     * @param {string} color - El color a agregar.
     * @returns {void}
     */
    const ponerColorATeclas = (letra,color) => {
        document.getElementById(letra).classList.add(color);
    }


    /**
     * Verifica si la palabra ingresada coincide con la palabra elegida y aplica estilos en consecuencia.
     * @returns {void}
     */
    const comprobarPalabra = () => {
        const palabraIntroducida = document.getElementById("columna-"+columna).textContent;
        const elementosDeFila = document.getElementById("columna-"+columna).childNodes;
        let auxPalabraElegida = palabraElegida;
        if(palabraIntroducida == palabraElegida){
            elementosDeFila.forEach(elemento =>{
                const letra = elemento.textContent;
                elemento.classList.add("green");
                ponerColorATeclas(letra,"green");
            })
            juegoTerminado("hasGanado");
        }else if(palabraIntroducida != palabraElegida){
            elementosDeFila.forEach((elemento,i) =>{
                const letra = elemento.textContent;
                if(letra == palabraElegida[i]){ 
                    elemento.classList.add("green");
                    ponerColorATeclas(letra,"green");
                    auxPalabraElegida = auxPalabraElegida.replace(letra,"");
                }
            })
            elementosDeFila.forEach((elemento,i) =>{
                if(!elemento.classList.contains("green")){
                    const letra = elemento.textContent;
                    if(auxPalabraElegida.includes(letra)){
                       elemento.classList.add("yellow");
                       ponerColorATeclas(letra,"yellow");
                       auxPalabraElegida = auxPalabraElegida.replace(letra,"");
                       
                   }else{
                       elemento.classList.add("grey");
                       ponerColorATeclas(letra,"grey");
                   }
                }
            })
            if(columna != 5){
                columna++;
                fila = 0;
            }else{
                juegoTerminado("hasPerdido");
            }
        }
    }


     /**
     * Maneja el clic en el teclado.
     * @param {object} event - Evento de clic.
     * @returns {void}
     */
    const handleClickTeclado = event => {
        const input = event.srcElement.id;
        if(input == "BORRAR" && fila != 0){
            borrarLetra();
        }else if(input == "ENTER" && fila == 5){
            comprobarPalabra();
        }else if(fila != 5 && input != "BORRAR" && input != "ENTER"){
            anyadirLetra(input);
        }
      
    }


    /**
     * Maneja las pulsaciones de teclas.
     * @param {object} event - Evento de pulsación de tecla.
     * @returns {void}
     */
    const handlePress = (event) => {
        let letra =  String.fromCharCode(event.charCode);
        letra = letra.toUpperCase();
        if(validarInput(letra) == true && fila != 5){
            anyadirLetra(letra);
        }else if(event.keyCode == 13  && fila == 5){
            comprobarPalabra();
        }else if(event.keyCode == 8 && fila != 0){
            borrarLetra();
        }
    }


     /**
     * Valida si la entrada es una letra válida.
     * @param {string} letra - La letra a validar.
     * @returns {boolean} - Verdadero si la letra es válida, falso de lo contrario.
     */
    const validarInput = (letra) =>{
        let inputValido = false;
        let alfabetos = /^[A-Z]+$/;
        if(alfabetos.test(letra)){
            inputValido = true;
        }
        return inputValido;
    }



    /**
     * Agrega el resultado del juego y muestra el mensaje correspondiente.
     * @param {string} resulatado - El resultado del juego.
     * @returns {void}
     */
    const juegoTerminado = resulatado => {
        if(resulatado == "hasGanado"){
            setTimeout(function () {
                document.getElementById("mensajeSiHasAdivinadoONo").innerHTML = `Has adivinado la palabra exitosamente.<br>La palabra era ${palabraElegida}`;
                gameOver.style.display = "flex";
                juego.style.display = "none";
            }, 200);
        }else{
            setTimeout(function () {
                document.getElementById("mensajeSiHasAdivinadoONo").innerHTML = `No has podido adivinar la palabra.<br>La palabra era ${palabraElegida}`;
                gameOver.style.display = "flex";
                juego.style.display = "none";
            }, 200);
        }
        

    }
    /**
    * Función para mostrar las reglas del juego.
    */

    const mostrarReglas = () => {
        document.getElementById("juego").style.display = "none";
        document.getElementById("reglas").style.display = "flex";
    }
    /**
    * Función para quitar el mensaje de las reglas del juego.
    * @param {object} event - Evento de teclado o clic.
    */

    const quitarMensajeReglas = () => {
            document.getElementById("juego").style.display = "flex";;
            document.getElementById("reglas").style.display = "none";
    }

     /**
     * Reinicia el juego.
     * @returns {void}
     */
    const reiniciarJuego = () => {
        gameOver.style.display = "none";
        juego.style.display = "flex";
        columna = 0;
        fila = 0;
        limpiarTablaDeInputs(matriz);
        limpiarClassesDeTeclado(teclas);
        generarPalabra();
    }

    // Agregar evento click al botón de reinicio
    document.getElementById("reiniciar").addEventListener("click", reiniciarJuego);
    
     // Agregar eventos de pulsación de teclas
    document.addEventListener('keypress', handlePress);
    onkeyup = handlePress;

    document.getElementById("botonReglas").addEventListener('click', mostrarReglas);
    document.getElementById("vale").addEventListener('click',quitarMensajeReglas);

    // Generar la tabla de inputs y el teclado
    generarTablaDeInputs(matriz);
    generarTeclado(teclas);
}
    