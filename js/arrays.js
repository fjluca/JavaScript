//ARRAY METHODS

const meses = ['Enero', 'Febrero', 'Marzo', 'Mayo'];

const carrito = [
    { nombre: "monitor 24 pulgadas", precio: 500 },  
    { nombre: "tv 50 pulgadas", precio: 700 },  
    { nombre: "tablet 12 pulgadas", precio: 400 },  
    { nombre: "auriculares razer", precio: 200 },  
    { nombre: "teclado logitech", precio: 300 },  
    { nombre: "mouse hyperX", precio: 100 },  
    { nombre: "Celu samsung", precio: 800 },  
    { nombre: "pc armada", precio: 500 },

];

// forEach - verifica que el mes elegido este dentro del array

meses.forEach(function(mes) {
    if(mes == "Marzo"){
        console.log("si existe")
    }
})

// el metodo includes es igual al codigo de arriba

const resultado = meses.includes("Marzo");
console.log(resultado)

// some es ideal para arrays de objetos, igual que el includes

const resultado2 = carrito.some(function(producto) {
    return producto.nombre === "Celu samsung"
})
console.log(resultado2)

// Reduce sirve para sumar numeros, en este caso, los precios de los productos en el carrito

const resultado3 = carrito.reduce(function(total, producto){
    return total + producto.precio
}, 0)

console.log(resultado3)

// Filter

const resultado4 = carrito.filter(function(producto) {
    return producto.precio > 400
})

const resultado5 = carrito.filter(function(producto) {
    return producto.nombre !== "Celu samsung"
})

console.log(resultado4)
console.log(resultado5)
