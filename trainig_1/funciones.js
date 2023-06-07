
/// 1.-
function concatena(a,b){
    return a+" "+b
}

let suma = function(a,b){
    return a+b
}
console.log("Mi nombre es: ", concatena("Omar","Daniel"))
console.log("suma : ", suma(12,30))

/// 2.-
console.log("2.- suma : ", suma(8,8))

/// 3.-
let longitud = function(cadena){
    return cadena.length
}
console.log("3.- ",longitud("Usuario"))

/// 4.-
let longitud2 = (cadena) => {
    return cadena.length
}
console.log("4.- ",longitud2("contraseña"))

/// 5.-
let nombreLong = (concatena) => {
    return longitud(concatena)
}
console.log("5.-", nombreLong(concatena("Juan","Perez Her")))

/// 6.-

/// 7.-
let mascota = {
    nombre:"Felix",
    meses: 3,
    enunciado: function(){
        const enun= "Mi mascota " +this.nombre+" tiene "+this.meses+" meses"
        console.log(enun)
    }
}
console.log(mascota.enunciado())

/// 8.-
let multi = (a,b) => {
    let multi =  a*b
    let rango = (multi) =>{
        if(multi > 100) return true 
        else return false
    }
    console.log(rango(multi))
    return multi
}
console.log(multi(14,6))

/// 9.-
function producto(nombre,precio) {
    this.nombre = nombre;
    this.precio = precio;
    let mensaje
    if (precio <= 0)
      mensaje = "Error en captura de "+ nombre
    return mensaje
  }

console.log(mascota.enunciado())
console.log(producto("galletas",0))

