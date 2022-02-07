const calcularPerimetro =(x,y)=>{
    return (x+y)*2;
}

const calcularArea =(x,y)=>{
    return x*y;
}

const calcularPerimetroCuadrado =()=>{
    let etiqueta1= document.getElementById("valor1")
    let etiqueta2= document.getElementById("valor2")
    let valor1 = parseInt(etiqueta1.value);
    let valor2 = parseInt(etiqueta2.value);
    let perimetro = calcularPerimetro(valor1,valor2);
    if(valor1 = undefined){
        alert("gay")
    }
  alert(`Tu perimetro es de ${perimetro} cm`)
}

const calcularAreaCuadrada =()=>{
    let etiqueta1= document.getElementById("valor1")
    let etiqueta2= document.getElementById("valor2")
    let valor1 = parseInt(etiqueta1.value);
    let valor2 = parseInt(etiqueta2.value);
    let area = calcularArea(valor1,valor2);
    alert(`Tu area es de ${area} cm2`)
}

guardarNombre="a";

