interface amigos{
    nombre:string,
    edad:number
}

var listaNombre: Array<string> = [
    "Cristhian", 
    "Karol",
    "Dan",
    "Felipe",
    "Percy"
];

var listaAmigos: Array<amigos> = [
    {
        nombre: "Isaac",
        edad: 33
    },
    {
        nombre: "Fredy",
        edad: 36
    },
    {
        nombre: "Adolfo",
        edad: 28
    }
]

console.log(listaNombre);
console.log(listaAmigos[2].nombre);