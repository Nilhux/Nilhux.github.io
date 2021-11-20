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


const quintana = {
    nombre: "Kevin",
    apellido: "Quintana",
    edad: 13,
    clasesAprobadas: [
        "Matemáticas",
        "Lenguaje",
        "Ingles"
    ],
    aprobarCurso(claseAprobada){
        this.clasesAprobadas.push(claseAprobada)
    }
}
function estudiante(nombre,edad,clasesAprobadas){
    this.nombre = nombre;
    this.edad = edad;
    this.clasesAprobadas = clasesAprobadas;
}
estudiante.prototype.aprobarClase = function(claseAprobada){
    this.clasesAprobadas.push(claseAprobada)
}
var nis = new estudiante("Nicolas Sua Cruz", 16,["Ingles", "Matemáticas", "Lenguaje", "Ingles", "Sociales"])