var Alumnos = [];
Alumnos.push({ nombre: "Juan", apellido: "Perez" });
Alumnos.push({ nombre: "Manuel", apellido: "Castillo" });
Alumnos.push({ nombre: "Pedrito", apellido: "Perez" });
Alumnos.forEach(function (alumno) {
    console.log(alumno.nombre);
});
