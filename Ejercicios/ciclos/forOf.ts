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

for(let item of ListaUsuarios){
    console.log('Bienvenido ', item.nombre);
}