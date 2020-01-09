interface usuario{
    nombre:string,
    apellido:string
}

var ListaUsuarios:Array<usuario> = [
    {
        nombre: "Cristhian",
        apellido: "Brice"
    },
    {
        nombre: 'Juan',
        apellido: 'Perez'
    },
    {
        nombre:'Pepito',
        apellido: 'Pilotes'
    }
];

for(let index in ListaUsuarios){
    console.log(ListaUsuarios[index].nombre);
    console.log(ListaUsuarios[index].apellido);
}