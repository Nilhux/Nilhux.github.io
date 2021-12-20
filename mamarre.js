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

// const juan = {
//     nombre: "juanito",
//     edad: 18,
//     cursosAprovados: ["Curso x"],
//     aprovarCurso(cursoAprovado){
//         this.cursosAprovados.push(cursoAprovado)
//     }
// }
// Object.defineProperty(juan, "sexo",{
//     value: "hombre",
//     writable: false,
//     configurable: false,
//     enumerable: true,
// })

// const mamarre = (lastNumber)=>{
//     number = 1;
//     pastAnswer = 1
//     console.log(`${number}! = ${pastAnswer}`)
//     while (number < lastNumber){
//         number++
//         answer = pastAnswer * number
//         pastAnswer = answer
//         console.log(`${number}! = ${answer}`)

//     }
// }
// class students{
//     constructor({
//         name,
//         age,
//         twitter,
//         instagram,
//         facebook,
//         approvedClasses = []

//     }){
//         this.socialMedia = {
//             twitter,
//             instagram,
//             facebook
//         };
//         this.name = name
//         this.age = age

//         // let private = {
//         //     "_approvedClasses":approvedClasses
//         // }

//         Object.defineProperty(this, "approvedClasses",{
//             get(){
//                 return private["_approvedClasses"]
//             },
//             set(approvedClass){
//                 private["_approvedClasses"].push(approvedClass)
//             }
//         })
//     }
//     get name(){
//         return this._name
//     }

//     set age(newAge){
//         if (newAge > this.age){
//             this.age = newAge
//         }
    
//         else{
//             console.error(":v")
//         }
//     }
// }
function estudiante({
    nombre,edad
}){
    Object.defineProperty
    return 
}

// const peter = new students({
//     name:"Peter Parker",
//     age: 13,
//     socialMedia:{
//         facebook: "joemamagay",
//         twitter: "hatersKevinQuintana"
//     }
// })

    // Cambio de sintaxis para crear instancias, nose lol

class Person{
    constructor({
        name,
        age,
        email,
        whatsapp,
        instagram,
        twitter
    }){
        this.name = name,
        this.age = age,
        this.email = email
        this.socialMedia = {
            whatsapp,
            instagram,
            twitter
        }
        Object.defineProperty(this, "name",{
            writable: false,
            configurable: false
        })
    }

    
}

class Teacher extends Person{
    constructor(props,classes){
        super(props)
        this.classes = [classes]
    }
}

class Student extends Person{
    constructor(props,approvedClasses){
        super(props)
        this.approvedClasses = approvedClasses

        Object.defineProperty(this, "approvedClasses",{
            configurable: false,
            writable: false
        })
    }
}

class Classes{
    constructor({
        name,
        description
    }){
        this.name = name,
        this.description = description
    }
}

const Artes = new Classes({
    name:"Artes",
    description: "clase para hacer cosas artisticas jaja i critica"
})

const Etica = new Classes({
    name: "Etica"
})

const DianaGomez = new Teacher({
    name: "Diana Gomez",
    age: 93,
    email: "Dianasex@gmail.com",
    classes: [
        Artes
    ]
    
})

class Classroom{
    constructor({
        teacher,
        students
    }){
        this.teacher = teacher
        this.students = students
    }
}

