var tipoMenu;
(function (tipoMenu) {
    tipoMenu[tipoMenu["Canciones"] = 1] = "Canciones";
    tipoMenu[tipoMenu["Albums"] = 2] = "Albums";
    tipoMenu[tipoMenu["Perfiles"] = 3] = "Perfiles";
})(tipoMenu || (tipoMenu = {}));
var opcion = 4;
switch (opcion) {
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
