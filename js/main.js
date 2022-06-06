DESAFIOentregrable


let total = 0;
let bievenida;
let producto;
let cantidad;
let seguirComprando;


do {
    bievenida = prompt ("Bienvenidos a PUERTO BLEST. VIVI TU PROPIA EXPERIENCIA SENSORIAL!");
    producto = prompt ("¿En donde te gustaria sentirte? ¿Colombia, Etiopia, Guatemala, Kenia, Nicaragua o Peru?");
    cantidad = parseInt (prompt("¿Cuantos agregamos?"))

    let precio;

    switch (producto) {
        case "Colombia":
            precio = 1550;
            break;
        case "Etiopia":
            precio = 1650;
            break;
        case "Guatemala":
            precio = 1500
            break;
        case "Kenia":
            precio = 1600;
            break;
        case "Nicaragua":
            precio = 1500;
            break;
        case "Peru":
            precio = 1550;
            break;
        default:
            alert ("Se agotaron!!!");
            precio = 0;
            cantidad = 0;
            break;
    }

    total += precio * cantidad;
    seguirComprando = confirm ("Queres agregar otro producto?");   
} while (seguirComprando)

let finalizarCompra = confirm ("EL TOTAL DE SU COMPRA ES: "+total+"\n\n¿Desea finalizar su compra?")

if (finalizarCompra) {
    alert ("Gracias por su compra :)")
} else  {
    alert ("Gracias por comprar en PuertoBlest. Te esperamos pronto!")
}

