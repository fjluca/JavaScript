// Try Catch
// el try lo usamos cuando queremos que pruebe algo del codigo, el catch es lo que devuelve si es que hay un error, haciendo esto el codigo se sigue mostrando 
// se usa ya que en js, aunque hayan 100 lineas de codigo buenas y una mala, todas dejan de funcionar a partir de la linea erronea
// con un try catch, podemos mostrar este error y hacer que las demas lineas lo ignoren

const numero1 = 20
const numero3 = 30

try {
    console.log(numero2)
} catch (error) {
    console.log(error)
}

console.log(numero1)

console.log(numero3)