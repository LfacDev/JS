/* Funcion como expresion o guardada en una expresion o variable */
let mensaje = "Hola";

const saludo = function(cad){
    console.log(cad + " Estudiantes");
    //otra manera 
}

function saludar(callback, msm){
    callback(msm);
}

//invocar callback o funcion de retrollamada
saludar(saludo, mensaje);