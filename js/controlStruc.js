// control structure

const puntaje = 1000

//   === es igual
// y !== es distinto

if(puntaje !== 1050 ) {
    console.log("todo bien")
} else {
    console.log("todo mal")
}

// ||||| //

// switch

const metodoPago = "";

switch(metodoPago) {
    case "tarjeta":
        console.log("pagaste con tarjeta")
        break;
    case "efectivo":
        console.log("pagaste con efectivo")
        break;
    case "otro":
        console.log("pagaste con otra cosa")
        break;
    default:
        console.log("paga rata")
        break;
}