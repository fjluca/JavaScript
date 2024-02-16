// This

// el this hace referencia a variables que estan dentro de un objeto como es el caso, sin este this, la funcion no leeria el valor
// se debe hacer si o si con una function normal, ya que con la arrow, da undefined ya que esta ultima busca por fuera del objeto

const reserva = {
    nombre: "Luca",
    apellido: "Feijoo",
    total: 3000,
    pagado: false,
    informacion: function() {
        console.log(`el cliente ${this.nombre} reservo y su cantidad a pagar es de ${this.total}`)
    }
}

reserva.informacion()