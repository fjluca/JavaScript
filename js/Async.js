// async / await

function descargarNuevosClientes() {
    return new Promise ( resolve => {
        console.log("descargando...") // el mensaje va a ser lo primero en aparecer, despues de 5 segundos se muestra el segundo
        
        setTimeout ( () => {
            resolve("listo papurri")
        }, 5000 ) // los segundos son 1000, ejemplo, 2000 son 2 sec, asi, es el tiempo que tarda en resolver el otro timeout 

    })
}

function descargarNuevosPedidos() {
    return new Promise ( resolve => {
        console.log("descargando...")
        
        setTimeout ( () => {
            resolve("listo papurriiii")
        }, 3000 )

    })
}



async function app() {
    try {
        const resultado = await Promise.all([ descargarNuevosClientes(), descargarNuevosPedidos() ]); 
        // esta es la forma correcta de hacer que dos o mas promesas actuen al mismo tiempo
        console.log(resultado[0])
        console.log(resultado[1])
    } catch(error) {
        console.log(error)
    }
}

app()



// setTimeout( function() {
//     console.log("listo...")
// }, 5000)