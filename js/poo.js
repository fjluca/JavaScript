// POO

/** Object literal **/

const product = {
    valor: 600,
    nombre: "raul"
}

/* Object constructor */

function Product(nombre, precio, disponible) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = disponible;
}
  /* prototype */ //Gracias al prototype puedo llamar elementos dentro de un object constructor sin necesidad de repetir codigo
    Product.prototype.formatearProduct = function() {
        return `El producto ${this.nombre} tiene un precio de ${this.precio}`
    }

const product2 = new Product("Teclado logitech K120", 120)
const product3 = new Product("Mouse logitech Kuka", 190)
const product4 = new Product("Auris logitech kukatremil", 190, true)


function Cliente(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
}

    Cliente.prototype.mostrarCliente = function() { //aca hago el prototype y en la linea 41 a la 45 lo consologeo con el .formatear, .mostrar
        return `El cliente ${this.nombre} ${this.apellido} tiene una edad de ${this.edad} añetes`
    }

const cliente1 = new Cliente("Luca", "Feijoo", 22)



console.log(product2.formatearProduct()) //aca
console.log(product3.formatearProduct())
console.log(product4)
///
console.log(cliente1.mostrarCliente())

