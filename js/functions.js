// Funciones

const numero1 = 20
const numero2 = "20"

console.log( parseInt(numero2) ) // parseInt() es una función 
console.log( numero1.toString() ) // toString es un método 


const sumar = (n1, n2) => {
    console.log(n1 + n2)
}

sumar(10, 70)
sumar (6, 9)


// ||||| //

// Retorna el valor en una variable y la guarda ahi

function sumar2(n1, n2) {
    return n1 + n2
}

const resultado = sumar2(5, 9)
console.log(resultado)


// ||||| //

// creacion rapida de un carrito de compras 

let total = 0

function agregarCarrito(producto) {
    return total += producto
}

total = agregarCarrito(500)
total = agregarCarrito(700)
total = agregarCarrito(300)


console.log(total)