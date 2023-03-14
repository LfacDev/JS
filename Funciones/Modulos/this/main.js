'use strict'
import{potencia,rCuadrada} from "./calculo.js";
import{Persona} from "./Persona.js";

console.log(potencia(2,4));
console.log(rCuadrada(9));

//instanciar y crear objeto 

const Luisa = new Persona("Luisa", "Alarcon", 4.0);
console.log(Luisa); 


console.info(Luisa.getdata());
console.error(Luisa.getValorarPromedio(), Luisa.Apellidos);