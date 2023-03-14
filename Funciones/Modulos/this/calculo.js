'use strict'

//se usa mas que todo en angular, node js express

//import - export se usan con modulos 

const potencia = (base, potencia)=>{
    return(Math.pow(base, potencia));
};

const raizCuandrada =(num) =>{
    return(Math.sqrt(num)); 
};

export{potencia, raizCuandrada as rCuadrada};