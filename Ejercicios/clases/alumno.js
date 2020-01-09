//Start class
var Alumno = /** @class */ (function () {
    function Alumno() {
    }
    Alumno.prototype.Asignar = function (nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    };
    Alumno.prototype.MostrarMensaje = function () {
        console.log('Hola', this.nombre + ' ' + this.apellido);
    };
    return Alumno;
}());
//End class
var alumno1 = new Alumno();
alumno1.Asignar('Cristhian', 'Briceño', 29);
alumno1.MostrarMensaje();
var alumno2 = new Alumno();
alumno2.Asignar('Lesly', 'Valle', 24);
alumno2.MostrarMensaje();
