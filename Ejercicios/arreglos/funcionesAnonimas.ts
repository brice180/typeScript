interface Alumno{
    nombre: string;
    apellido: string;
}

var Alumnos: Alumno[] = [];

Alumnos.push({nombre: "Juan", apellido: "Perez"});
Alumnos.push({nombre: "Manuel", apellido: "Castillo"});
Alumnos.push({nombre: "Pedrito", apellido: "Perez"});

Alumnos.forEach((alumno)=>{
    console.log(alumno.nombre);
});