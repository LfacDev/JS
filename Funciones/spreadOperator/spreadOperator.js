'use strict'

//expandir valor 
//valoe de propagacion (...)

const myArray = [2,4,6,7,8];

console.log(...myArray);

let myArray2 = [1,7,8,9, myArray];

console.log(...myArray2);

let myArray3 = [1,7,8,9,...myArray];

console.log(...myArray3);

//propagacion con una funcion 

let lenguajes = ["35", "php", "JAVA", "C#"];

const myPrint = (lg1, lg2,...resto) => {
    console.log(`*** lenguajes de programacion 
                    1.${lg1}
                    2.${lg2}
                    3.${resto}`);
}

myPrint("c++", "c#");
myPrint(...lenguajes, "cobol", "dart");

