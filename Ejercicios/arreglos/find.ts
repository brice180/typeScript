interface Alumno{
    id:number;
    nombre: string;
    apellido: string;
}

var Alumnos: Alumno[] = [];

Alumnos.push({id: 1, nombre: "Juan", apellido: "Perez"});
Alumnos.push({id: 2, nombre: "Manuel", apellido: "Castillo"});
Alumnos.push({id: 3, nombre: "Pedrito", apellido: "Perez"});

var alumnoEncontrado = Alumnos.find((alumno)=>{
    //return alumno.id == 3;
    return alumno.nombre.includes('uel');
});

console.log(alumnoEncontrado);