var estudiantes =["Pedro","Luis","Alonso"];


const agregarNombre =()=>{
    let etiqueta = document.getElementById("lista")
    let valor = etiqueta.value;
    estudiantes = estudiantes.push(valor);

    let etiqueta2 = document.getElementById("texto");
    let valor2= etiqueta2.value;
    
}
