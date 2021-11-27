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

const juan = {
    nombre: "juanito",
    edad: 18,
    cursosAprovados: ["Curso x"],
    aprovarCurso(cursoAprovado){
        this.cursosAprovados.push(cursoAprovado)
    }
}
Object.defineProperty(juan, "sexo",{
    value: "hombre",
    writable: false,
    configurable: false,
    enumerable: true,
})
