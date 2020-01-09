interface alumno {
    nombre:string;
    apellido:string;
}

var alumnos: alumno[] = []; //Array empty

var a1:alumno = {
    nombre : 'Juan',
    apellido : 'Perez'
}

var a2:alumno = {
    nombre : 'Pepito',
    apellido : 'Perez'
}

alumnos.push(a1);
alumnos.push(a2);

console.log(alumnos);