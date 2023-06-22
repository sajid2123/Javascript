var estudiantes = ["Sajid","German","Viktor","David"];

function saludarestudiantes(estudiante){
    console.log(`Hola, ${estudiante}`);
}
while (estudiantes.length > 0){
    saludarestudiantes(estudiantes.shift);
}

/* bucle normal
for(var i = 0; i < estudiantes.length;i++){
    saludarestudiantes(estudiantes[i]);
}*/

/* for each
for(var estudiante of estudiantes){
    saludarestudiantes(estudiante);
}*/

