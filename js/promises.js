// promises

const usuarioAutenticado = new Promise ( (resolve, reject) => {
    const auth = true

    if(auth) {
        resolve("usuario autenticado");
    } else {
        reject("hubo un error");
    }
})

usuarioAutenticado 
    .then (function(resultado) {
        console.log(resultado)
    })
    .catch(function(error) {
        console.log(error)
    })

// en los promises existen 3 valores;
// Pending : no se cumplio pero tampoco se rechazo
// Fulfilled : ya se cumplio
// Rejected : se rechazo