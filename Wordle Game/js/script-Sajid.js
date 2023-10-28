window.onload = function(){
    const palabras = [
        "COCHE", 
        "MOTOR",
        "PIZZA",
        "SOLAR", 
        "FLORE"];
    const teclas = ["Q","W","E","R","T","Y","U","I","O","BORRAR","P","A","S","D","F","G","H","J","K","ENTER","L","Ñ","Z","X","C","V","B","N","M"];
    const matriz = [
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""]

        
    ];
    const teclado = document.getElementById("teclado");
    const tabla = document.getElementById("tabla");
    let columna = 0;
    let fila = 0;
    matriz.forEach((bloque,i) => {
        let fila = document.createElement("div");
        fila.setAttribute("id","columna"+i);
        fila.classList.add("columna")
        bloque.forEach(elemento => {
            let span = document.createElement("span");
            span.innerHTML = elemento;
            span.classList.add("elemento");
            fila.append(span);
        })
        tabla.append(fila);
    })
    let palabraElegida = "SAJID";
    function elegirPalabra(){
        let pos = Math.floor(Math.random() * palabras.length); 
        return palabras[pos];
    }
    const anyadirLetra = letra => {
        const columnaActual = document.getElementById("columna"+columna);
        const span = columnaActual.children[fila];
        
        span.innerHTML = letra;
        fila++;
    }
    const borrarLetra = () =>{
        const columnaActual = document.getElementById("columna"+columna);
        const span = columnaActual.children[fila-1];
        span.innerHTML = "";
        fila--;
    }
    const comprobarPalabra = () =>{
        const palabraMostra = document.getElementById("columna"+columna).textContent;
        if(palabraMostra == palabraElegida){
            
        }else {
            fila = 0;
            columna++;
        }
        // const span = columnaActual.chidren[0];
        // // const letra1 = columnaActual.chidren[1].innerText;
        // // const letra2 = columnaActual.chidren[2].innerText;
        // // const letra3 = columnaActual.chidren[3].innerText;
        // // const letra4 = columnaActual.chidren[4].innerText;
        // // palabraMostrada = letra0 + letra1 +letra2 +letra3 +letra4 ;
        // console.log(span.innerText);
        
        
    }

    const handleClick = event => {
        const input = event.srcElement.id;
        if(input == "BORRAR" && fila != 0){
            borrarLetra();
        }else if(input == "ENTER" && fila == 5){
            comprobarPalabra();
        }else if(fila != 5 && input != "BORRAR" && input != "ENTER"){
            anyadirLetra(input);
        }
      
    }
    
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
        button.addEventListener("click" , handleClick);
        teclado.append(button);
    })
    
   
   
   
    

}



