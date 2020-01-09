var ListaUsuarios = [
    {
        nombre: "Cristhian",
        apellido: "Brice"
    },
    {
        nombre: 'Juan',
        apellido: 'Perez'
    },
    {
        nombre: 'Pepito',
        apellido: 'Pilotes'
    }
];
for (var index in ListaUsuarios) {
    console.log(ListaUsuarios[index].nombre);
    console.log(ListaUsuarios[index].apellido);
}
