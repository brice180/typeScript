//Start class
class Alumno {
    private nombre:string;
    private apellido:string;
    private edad:number;

    Asignar(nombre:string, apellido:string, edad:number){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }

    MostrarMensaje(){
        console.log('Hola', this.nombre + ' ' + this.apellido);
    }
}

//End class

var alumno1: Alumno = new Alumno();
alumno1.Asignar('Cristhian', 'Briceño', 29);
alumno1.MostrarMensaje();

var alumno2: Alumno = new Alumno();
alumno2.Asignar('Lesly', 'Valle', 24);
alumno2.MostrarMensaje();
