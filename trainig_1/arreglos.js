
/// 1.-
let array = ["Carro","Tren","Trailer","Moto","Camion"]
console.log(array.length)  /// 5

/// 2.-
console.log(array[0]," ",array[4])

/// 3.-
array[2] = "Tracto Camion"
console.log("3: ",array)

/// 4.-
array.push("Avión")
console.log("4: ",array)

/// 5.-
array.pop()
console.log("5: ",array)

/// 6.-
console.log("6.-")
for(let arra of array){
    console.log(arra)
}

/// 7.-
console.log("7.-")
array.forEach(element => console.log(element));

/// 8.-
let numb = [20,5,15,9,30,7,4,18,11,10]
let numFilter = numb.filter(elem => elem>10)
console.log(numFilter)

/// 9.-
let numbMap = numb.map(function(x){
    return x * 10
})
console.log(numbMap)

/// 10.-
let numbReduce = numb.reduce(function(x, y, indice, vector){
    return x + y;
  });
console.log(numbReduce)