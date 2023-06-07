/// 1.-
var x = "Hola";
let  y = true;
const z = 15;

/// 2.-
x = "Mundo";
y = 16;
//z = false;  /// Uncaught TypeError: Assignment to constant variable.

/// 3.-
function alcance (){
    let varAlcan = "Hola Mundo"
}
//console.log(varAlcan)   /// Uncaught ReferenceError: varAlcan is not defined

/// 4.-
function alcance (){
    var varAlcan2 = "Hola Mundo"
}
//console.log(varAlcan2)    /// Uncaught ReferenceError: varAlcan2 is not defined

/// 5.-
function nombrePer5(nombre) {
    console.log("El nombre de la persona es: " + nombre)  // Se ejecuta 
}
var nombre_1 = "Daniel"
nombrePer5(nombre_1)

/// 6.-
function nombrePer6(nombre) {
    console.log("El nombre de la persona es: " + nombre)  // Se ejecuta 
}
let nombre_2 = "Daniel Mtz"
nombrePer6(nombre_2)

/// 7.-
function nombrePer7() {
    let nombre = "Omar Daniel"
    console.log("El nombre de la persona es: " + nombre + apellido())  // Se ejecuta 
}
nombrePer7()

function apellido() {
    let apellido = " Mtz"
    return apellido
}

/// 8.-
var nombre = "Hola";
let  activo = true;
const date = 2018/07/22;
console.log(typeof nombre)   /// string
console.log(typeof activo)   /// boolean
console.log(typeof date)     /// number

/// 9.-
let num = "687425"
console.log(Number(num))    /// 687425

/// 10.-
let obje = {
    nombre:"Daniel",
    apellido:"Martínez"
}
let arr10 = ["Gato","perro"]

obje["date"] = "94/04/04"
obje.apellido = "González"
obje["pais"] = "México"
delete obje.pais

arr10.push("conejo")
arr10.pop()

console.log(obje)
console.log(arr10)