
/// 1.-

let libro = {
    titulo:"Origen",
    autor:"Dan Brown",
    año:2019
}

/// 2.-
console.log("titulo: ", libro.titulo)
console.log("autor: ", libro.autor)
console.log("año: ",libro.año)

/// 3.-
libro.año = 2020
console.log("3.- ",libro)

/// 4.-
libro["páginas"] = 640
console.log("4.- ",libro)

/// 5.-
delete libro.páginas
console.log("5.- ",libro)

/// 6.-
for(let ind in libro){
    console.log(ind,": ",libro[ind])
}

/// 7.-
libro = function descripcion() { 
    const descr = "El libro " +this.titulo +", genera consiencias sobre como los cambios que se viven día a dia"
    console.log(descr)
}

console.log(libro)

/// 8.-


/// 9.-
let carro = {
    color:"Rojo",
    marca:"Ford",
    modelo:2015,
    pickup:false,
    accesorios:{
        bolsaAire: true,
        rines:"deportivos",
        sistemaFrenado:"ABS"
    }
}
console.log(carro.accesorios?.bolsaAire)  /// true 
console.log(carro.detalles?.dimension)    /// undefined

/// 10.-
carro.accesorios.bolsaAire = null
console.log(carro.accesorios.bolsaAire??="No agregado")
