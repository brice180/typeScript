enum tipoMenu{
    Canciones = 1,
    Albums = 2,
    Perfiles = 3
}

var opcion:number = 4;

switch(opcion){
    case tipoMenu.Canciones: {
        console.log("Entrando a canciones");
        break;
    }
    case tipoMenu.Albums: {
        console.log("Entrando a álbunes");
        break;
    }
    case tipoMenu.Perfiles: {
        console.log("Entrando a perfiles");
        break;
    }
    default: {
        console.log("No existe menu");
    }
}