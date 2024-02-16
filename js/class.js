// Classes
// las clases deben empezar si o si con mayuscula, son como los prototypes pero mejor ordenadas 

class Product {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

    formatearProducto() {
        return `El producto ${this.nombre} tiene un precio de ${this.precio}`
    }
}   

const product2 = new Product("Teclado logitech K120", 120)
const product3 = new Product("Mouse logitech Kuka", 190)

// herencia 
// la herencia sirve para heredad valores de otra clase, asi se evita la redundancia de codigo :)

class Libro extends Product {
    constructor(nombre, precio, isbn) {
        super(nombre, precio);
        this.isbn = isbn;
    }
    formatearProducto() {
        return `${super.formatearProducto() } y du isbn es ${this.isbn}`
    }
}

const libro = new Libro("javascript", 150, "9198398269402")

console.log(product2.formatearProducto())
console.log(product3)
console.log(libro.formatearProducto())