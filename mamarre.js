const calcularPrecioConDescuento = (precio, descuento)=>{
    const porcentajeAPagar = 100 - descuento;
    const precioAPagar = (precio * porcentajeAPagar)/100;
    return precioAPagar

}   

const funcionDescuento = ()=>{
    const etiquetaPrecio = document.getElementById("precio");
    const precioOriginal = etiquetaPrecio.value;

    const etiquetaDescuento = document.getElementById("descuento");
    let valorDescuento = parseInt(etiquetaDescuento.value);

    const cupones =[
        "elsingueson",
        "quintanoso",
        "da sus"
    ]
    const etiquetaCupones = document.getElementById("cupones")
    const valorCupones = etiquetaCupones.value;
    let descuento;
    
    switch(valorCupones){
        case cupones[0]:
            descuento = 5;
            valorDescuento = valorDescuento + descuento;
            break;          
        case cupones[1]:
            descuento = 15;
            valorDescuento = valorDescuento + descuento;
            break;
        case cupones[2]:
            descuento = 25;
            valorDescuento = valorDescuento + descuento;
            break;
    }
    const textoSocial = document.getElementById("textoSocial")
    if(precioOriginal >= 0 && valorDescuento >= 0){
        const precioTotal = calcularPrecioConDescuento(precioOriginal, valorDescuento);
        textoSocial.innerText = `El total a pagar es de $${precioTotal}`
    }
}

class estudiante{
    constructor({
        nombre,
        email,
        usuario,
        twitter = undefined,
        instagram = undefined,
        cursosAprovados = [],
        rutasDeAprendizaje = []
    }){
        this.nombre = nombre;
        this.email = email;
        this.usuario = usuario;
        this.redesSociales = {
            twitter,
            instagram,
        }
        this.cursosAprovados = cursosAprovados;
        this.rutasDeAprendizaje = rutasDeAprendizaje;
    }
}
class rutasDeAprendizaje{
    constructor({
        id,
        nombre,
        cursos = []
    }){
        this.id = id;
        this.nombre = nombre;
        this.cursos = cursos;
    }
}
class cursos{
    constructor( id, nombre,profesor ){
        this.id = id,
        this.nombre = nombre;
        this.profesor = profesor;
    }
}
const python = new cursos({
    id: "python",
    nombre: "python",
    profesor: "Kevin Quintana"
})
const rutaPython = new rutasDeAprendizaje({
    id: "Ruta python",
    name: "Ruta python",
    cursos: [python]
})

const Alfredo = new estudiante({
    nombre: "Alfredo",
    usuario: "AlonsoGamer666",
    email: "bruh@gmail.com",
    instagram: "supernene.elsingueson",
    rutasDeAprendizaje: [rutaPython]
})