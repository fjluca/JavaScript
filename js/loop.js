// For loop

// for( let i = 0; i <= 10; i++) {
//     console.log(i)
// }

// for( let i = 0; i <= 10; i++) {
//     if (i % 2 == 0) {
//         console.log(i + " Es par")
//     }
//     else {
//         console.log(i + " Es impar")
//     }
// }

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

for(let i = 0; i <= carrito.length; i++) {
    console.log(carrito[i])
}



// While loop

// let i = 0;

// while(i < 10) {
//     i++
// }

// console.log(i)



// Do While loop
// En el do while, el codigo por fuera del do se ejecuta una vez, luego se evalua la condicion while, contrario al while loop común

let i = 0

do {
    console.log(i)

    i++
} while( i < 10)

// forEach

carrito.forEach((producto) => {
    console.log(producto)
})



// Map
// map te crea un nuevo array mientras for each solo recorre el arreglo

carrito.map((producto) => {
    console.log(producto)
})