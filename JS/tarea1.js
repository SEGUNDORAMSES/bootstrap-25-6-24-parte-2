//1-Crear una función que salude
// Crear una función llamada 'saludar' que tome un parámetro 'nombre' y retorne un saludo
// Solicitar al usuario ingresar su nombre y mostrar el saludo en la consola

function saludar(nombre) {
   
    console.log("hola: "+nombre)
    
}
let nombre=prompt("ingresa tu nombre")
saludar(nombre);

//2-Determinar si una persona es mayor de edad

// Solicitar al usuario ingresar su edad
let edad = parseInt(prompt("Ingresa tu edad:"));
    if (edad >=18) {
        console.log("eres mayor de edad");
        
    } else {
        console.log("eres menor de edad");
        
    }
    
//3-Crear un objeto con información de un libro y mostrar una propiedad
// Crear un objeto llamado 'libro' con propiedades 'titulo', 'autor' y 'anio'

let libro={
    titulo:"lupin",
    autor:"arsene",
    anio:1825
}

console.log("el libro fue escrito por:  "+libro.autor);

//4-Verificar si una cadena está vacía

// Solicitar al usuario ingresar una cadena o string 

let cadena = prompt("Ingresa una cadena:");

if (cadena=="") {
    console.log("la cadena esta vacia")
    
} else {
    console.log("la cadena no esta vacia")
    
}


//5-Usar un switch para mostrar el día de la semana

// Solicitar al usuario ingresar un número del 1 al 7

let dia = parseInt(prompt("Ingresa un número del 1 al 7:"));

switch (dia) {
    case 1:
        
        console.log("ES LUNES")
        break;

        case 2:
            console.log("ES MARTES")
        
        break;

        case 3:
        
        console.log("ES MIERCOLES")
        break;
    
        case 4:
            console.log("ES JUEVES")
        
        break;
        
        case 5:
            console.log("ES VIERNES")
        
        break;

        case 6:
        
        console.log("ES SABADO")
        break;
        

        case 7:
        
        console.log("ES DOMINGO")
        break;
        
        default :
    
        break;
}

//6-Crear un array y mostrar la posicion 7 y 0
// Crear un array llamado 'Pokemones' con al menos 10 Especies


let Pokemones=["BICHO","DRAGON","HADA","LUCHA","PLANTA","TIERRA","ROCA","ACERO","HIELO","NORMAL"]

console.log(Pokemones[0,7])


//7-Usar un operador lógico para verificar si un número está en un rango
// Solicitar al usuario ingresar un número
let numero = parseFloat(prompt("Ingresa un número:"));
if (numero >=1 && numero <=10) {
    console.log("es correcto")
} else {
    console.log("es incorrecto")
}

//8 Sumar dos números ingresados por el usuario
let numero1 = parseFloat(prompt("Ingresa el primer número:"));
let numero2 = parseFloat(prompt("Ingresa el segundo número:"));

let suma= numero1+numero2;

console.log("el resultado es:  "+suma)

//9 Crear una constante y mostrarla en consola
const pi=3.14;
console.log("el valor de pi es:  "+pi)

// 10 Verificar si una persona puede votar
// Instrucción: Solicitar al usuario ingresar su edad y nacionalidad. Crear una función que verifique si la persona puede votar. La persona puede votar si tiene 18 años o más y es de nacionalidad 'peruana' o 'colombiana'.

let age = parseInt(prompt("Ingresa tu edad:"));
let nacionalidad = prompt("Ingresa tu nacionalidad:");

function puedevotar(nacionalidad,age) {
    if (age >= 18 && nacionalidad== "peruana" || nacionalidad=="colombiana") {
        console.log("puede votar")
    } else {
        console.log("no puede votar")
    }
    
}

puedevotar(nacionalidad,age)


//11  Determinar si una persona está en edad escolar
// Instrucción: Solicitar al usuario ingresar su edad y verificar si la persona está en edad escolar (de 6 a 18 años) o si es un adulto mayor (65 años o más).
// Solicitar al usuario ingresar su edad

let ages = parseInt(prompt("Ingresa tu edad:"));

function verificaredad(ages) {
    
    if (ages >=6 && ages <=18) {
        console.log("esta en edad escolar")

    if (ages >=65) {
        console.log("es un adulto mayor")
    }

    
    } else {
        
    }
}

verificaredad(ages)