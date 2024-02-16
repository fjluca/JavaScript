async function obtenerEmpleados(){

    const url = "empleados.json"

    // fetch(url)
    // .then( result => {
    //     return result.json();
    // })
    // .then( datos => {
    //     // console.log(datos)
    //     const {empleados} = datos;

    //     // console.log(empleados)
    //     empleados.map( empleado => {
    //         console.log(empleado)
    //     })
    // })

    const result = await fetch(url);
    const datos = await result.json()
    console.log(datos)

}
obtenerEmpleados()