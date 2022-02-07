//media (venta1 +venta2 + venta3)/ cantidad de ventas
//mediana sueldo1 ((sueldo2 + sueldo3)/2) sueldo4 es el del medio
//moda el que mas se repite
const lista1 = [100, 150, 200, 350, 400, 425, 500];



function calcularMedia(lista){
    let sumaLista = 0;
    for (let i = 0; i < lista.length;i++){
        sumaLista = sumaLista + lista[i]
    }

    const promedioLista = sumaLista / lista.length
    return promedioLista
}

switch(false){
    case false: console.log("soy falso");
    case true: console.log("soy true")
}

function crearPersona({
    nombre,
    edad,
    sexo,
}){
    const private = {
        "_nombre" : nombre,
    };
    const public = {
        edad: edad,
        sexo: sexo
    };

    
    return public
}
