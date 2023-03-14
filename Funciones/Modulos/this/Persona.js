
//una clase tambien es un modulo 
class Persona{
    //atributos, caracteristicas, propiedades


    //contructor: da valores iniciales a los atributos 
    //en js en el contructor se dan los atributos

    constructor(nombre, apellido, promedio){
        this.Nombres= nombre;
        this.Apellidos = apellido;
        this.Promedios = promedio
    }

    //metodos para retornar atributos o darle un nuevo valor 

    get getNombres(){
        return this.Nombres
    }

    set setNombres(nombre){
        this.Nombres=nombre;
    }

    //Metodos
    getdata(){
        const data = `Nombres ${this.Nombres}, Apellidos ${this.Apellidos}, promedio ${this.Promedios} `;

        return data; 
    }

    getValorarPromedio(){
        let response = (this.Promedios >=3) ? "promedio Aprobado" : "Promedio Reprobado";
        return response;
    }

}

export{Persona};