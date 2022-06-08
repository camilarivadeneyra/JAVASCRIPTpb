
// class Producto {
//     constructor (nombre, precio, cantidad) {
//         this.nombre = nombre,
//         this.precio = Number (precio),
//         this.cantidad = cantidad
//     }
//     actualizarCantidad (stock) {
//         this.cantidad = this.cantidad - stock
//     }
// }


// const arrayProductos = [];

// arrayProductos.push (new Producto (" Cafe Colombia", 1550, 20));
// arrayProductos.push (new Producto ("Cafe Etiopia", 1650, 10));
// arrayProductos.push (new Producto ("Cafe Kenia", 1600, 10));
// arrayProductos.push (new Producto ("Cafe Nicaragua", 1500, 10));


// const menorMayor = () => {
//     arrayProductos.sort ((a,b,c,d) => a.precio - b.precio - c.precio - d.precio);
//     verListaEnOrden ();
// }

// const mayorMenor = () => {
//     arrayProductos.sort( (a,b,c,d) => d.precio - c.precio - b.precio - a.precio);
//     verListaEnOrden();
// };

// const verListaEnOrden = () => {
//     arrayProductos.forEach (producto => arrayProductos.push (producto.nombre + "$" + producto.precio));
//     alert ("LISTA DE PRECIOS: "+"\n"+array.join ("\n"));
// }

// //compra
 
// let total = 0;

// const agregarAlCarrito = () => {
//     let otroProducto;
//     let producto = "";
//     let cantidad = 0;
//     let precio = 0;


//     do {
//         bievenida = prompt ("Bienvenidos a PUERTO BLEST. VIVI TU PROPIA EXPERIENCIA SENSORIAL!");
//         producto = prompt ("¿En donde te gustaria sentirte? ¿Colombia, Etiopia, Guatemala, Kenia, Nicaragua o Peru?");
//         cantidad = parseInt (prompt("¿Cuantos desea comprar?"));

//        switch (producto) {
//         case arrayProductos [0].nombre:
//             arrayProductos [0].actualizarCantidad (stock);
//                 if (arrayProductos[0].stock < 0  || isNaN (stock)) {
//                     alert ("Lo sentimos! Este producto se agoto!");
//                     precio = 0;
//                     cantidad = 0;
//                 } else  {
//                     precio = arrayProductos[0].precio;
//                 }
//                 break;
//         case arrayProductos [1].nombre:
//             arrayProductos [1].actualizarCantidad (stock);
//                 if (arrayProductos[1].stock < 0  || isNaN (stock)) {
//                     alert ("Lo sentimos! Este producto se agoto!");
//                     precio = 0;
//                     cantidad = 0;
//                 } else {
//                     precio = arrayProductos [1].precio;
//                 }
//                 break;
//         case arrayProductos [2].nombre:
//             arrayProductos [2].actualizarCantidad (stock);
//                 if (arrayProductos[2].stock < 0  || isNaN (stock)) {
//                     alert ("Lo sentimos! Este producto se agoto!");
//                     precio = 0;
//                     cantidad = 0;
//                 } else {
//                     precio = arrayProductos [2].precio;
//                 }
//                 break;
//         case arrayProductos [3].nombre:
//             arrayProductos [3].actualizarCantidad (stock);
//                 if (arrayProductos[3].stock < 0  || isNaN (stock)) {
//                     alert ("Lo sentimos! Este producto se agoto!");
//                     precio = 0;
//                     cantidad = 0;
//                 } else {
//                         precio = arrayProductos [3].precio;
//                 }
//                     break;
//         default:
//             alert ("Lo ingresado no es valido.");
//             precio = 0;
//             cantidad = 0;
//     }

//     total += precio * cantidad;
//     otroProducto = confirm ("Desea agregar algun otro producto?");   
// } while (otroProducto);
// };


// const precioEnvio = (total) => {
//     let confirmarla = confirm ("Lo enviamos a tu domicilio?");
//     if (confirmarla && total >= 3000) {
//         alert ("ENVIO GRATIS! El total de tu compra es "+total);
//     } else if (confirmarla && total < 3000 && total != 0) {
//         total = total +600;
//     } else {
//         alert ("EL TOTAL DE SU COMPRA ES "+total);
//     } 
//     return total;
// }; 


// let finalizarCompra = confirm ("EL TOTAL DE SU COMPRA ES: "+total+"\n\n¿Desea finalizar su compra?")

// if (finalizarCompra) {
//     alert ("Gracias por su compra :)")
// } else  {
//     alert ("Gracias por comprar en PuertoBlest. Te esperamos pronto!")
// }




class Producto {
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre,
        this.precio = Number(precio),
        this.cantidad = cantidad
    }
    actualizarCantidad(stock) {
        this.cantidad = this.cantidad - stock
    }
}

const arrayProductos = [];

arrayProductos.push(new Producto("Cafe Colombia", 1550, 20));
arrayProductos.push(new Producto("Cafe Etiopia", 1650, 10));
arrayProductos.push(new Producto("Cafe Kenia", 1600, 10));



const ordenarMenorMayor = () => {
    arrayProductos.sort( (a,b) => a.precio - b.precio);
    mostrarListaOrdenada();
};

const ordenarMayorMenor = () => {
    arrayProductos.sort( (a,b) => b.precio - a.precio);
    mostrarListaOrdenada();
};

const mostrarListaOrdenada = () => {
    const array = [];
    arrayProductos.forEach( producto => array.push(producto.nombre+" $"+producto.precio));
    alert("Lista de precios: "+"\n"+array.join("\n"));
};


//COMPRA

let total = 0;

const agregarProducto = () => {
    let otroProducto;
    let producto = "";
    let cantidad = 0;
    let precio = 0;

    do {
        producto = prompt("¿En donde te gustaria sentirte? ¿Colombia, Etiopia o Kenia?");
        cantidad = parseInt(prompt("¿Cuantos desea comprar?"));

        switch(producto) {
            case arrayProductos[0].nombre:
                arrayProductos[0].actualizarCantidad(stock);
                if (arrayProductos[0].stock < 0 || isNaN(stock)) {
                    alert("Lo sentimos! Este producto se agoto!");
                    precio = 0;
                    cantidad = 0;
                } else {
                    precio = arrayProductos[0].precio;
                }
                break;
            case arrayProductos[1].nombre:
                arrayProductos[1].actualizarCantidad(stock);
                if (arrayProductos[1].stock < 0 || isNaN(stock)) {
                    alert("Lo sentimos! Este producto se agoto!");
                    precio = 0;
                    cantidad = 0;
                } else {
                    precio = arrayProductos[1].precio;
                }
                break;
            case arrayProductos[2].nombre:
                arrayProductos[2].actualizarCantidad(stock);
                if (arrayProductos[2].stock < 0 || isNaN(stock)) {
                    alert("Lo sentimos! Este producto se agoto!");
                    precio = 0;
                    cantidad = 0;
                } else {
                    precio = arrayProductos[2].precio;
                }
                break;
            default:
                alert("La informacion ingresada no es valida.");
                precio = 0;
                cantidad = 0;
        }

        total = total + precio * cantidad;
        otroProducto = confirm("¿Desea agregar algun otro producto?");
    } while (otroProducto);
};



const aplicarDescuento = (total) => {
    if ( total >= 6000 ) {
        total = total * 0.85;
        alert("15% de descuento !!!");
    }
    return total;
};



const costoDeEnvio= (total) => {
    let confirmacion = confirm("¿Lo enviamos a tu domicilio?");
    if ( confirmacion && total >= 3000 ) {
        alert("ENVIOS GRATIS. El total de tu compra es "+total);
    } else if ( confirmacion && total < 3000 && total != 0 ) {
        total = total + 690;
    } else {
        alert("El total de tu compra es de"+total);
    }
    return total;
};


let cuotas = 0;
const obtenerCantidadDeCuotas = () => {
    let confirmacion = confirm("¿Desea pagar en cuotas?");
    if (confirmacion) {
        cuotas = parseInt(prompt("¿Cuantas cuotas"));
        if ( cuotas == 0 ) {
            cuotas = 1;
        } else if ( isNaN(cuotas) ) {
            obtenerCantidadDeCuotas();
        }
    } else {
        cuotas = 1;
    }
    return cuotas;
};


const totalCompra = (total, cuotas) => {
    console.log(total);
    console.log(cuotas);
    total = total + cuotas;
    let importeCuota = total / cuotas;
    alert("El total a pagar es $ "+total+" en "+cuotas+" cuotas de $ "+Math.ceil(importeCuota));
};


const realizarCompra = () => {
    if (confirm ("Ordenamos la lista de menor a mayor?")) {
        ordenarMenorAMayor ();
    } else {
        ordenarMayorAMenor ();
    }

}


const comprarProductos = () => {
    if ( confirm("Queres ordenar la lista de productos del más barato al más caro?")) {
        ordenarMenorMayor();
    } else {
        ordenarMayorMenor();
    }
    agregarProductoCarrito();
    obtenerTotal(obtenerPrecioDeEnvio(aplicarDescuento(total), obtenerCantidadDeCuotas()));
};

comprarProductos();
