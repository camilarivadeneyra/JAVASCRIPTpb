// class Producto {
//     constructor(nombre, precio, stock) {
//         this.nombre = nombre,
//         this.precio = Number(precio),
//         this.stock = stock
//     }
//     actualizarStock(cantidad) {
//         this.stock = this.stock - cantidad
//     }
// }

// const arrayProductos = [];

// arrayProductos.push(new Producto("Cafe Colombia", 1550, 20));
// arrayProductos.push(new Producto("Cafe Etiopia", 1650, 10));
// arrayProductos.push(new Producto("Cafe Kenia", 1600, 10));
// arrayProductos.push(new Producto("Cafe Nicaragua", 1500, 10));


// const ordenarMenorMayor = () => {
//     arrayProductos.sort( (a,b,c) => a.precio - b.precio - c.precio);
//     mostrarListaOrdenada();
// };

// const ordenarMayorMenor = () => {
//     arrayProductos.sort( (a,b,c) => c.precio - b.precio - a.precio);
//     mostrarListaOrdenada();
// };

// const mostrarListaOrdenada = () => {
//     const array = [];
//     arrayProductos.forEach( producto => array.push(producto.nombre+" $"+producto.precio));
//     alert("Lista de precios: "+"\n"+array.join("\n"));
// };



// let total = 0;

// const agregarProductoCarrito = () => {
//     let otroProducto;
//     let producto = "";
//     let cantidad = 0;
//     let precio = 0;
//     let bienvenida;

//     do {
//         bienvenida = prompt ("Bienvenidos a PUERTO BLEST. VIVI TU PROPIA EXPERIENCIA SENSORIAL!");
//         producto = prompt("Que sabor te gustaria sentir? Colombia, Etiopia o Kenia?");
//         cantidad = parseInt(prompt("Que cantidad desea agregar?"));

//         switch(producto) {
//             case arrayProductos[0].nombre:
//                 arrayProductos[0].actualizarStock(cantidad);
//                 if (arrayProductos[0].stock < 0 || isNaN(cantidad)) {
//                     alert("Lo sentimos. Este producto se agoto!");
//                     precio = 0;
//                     cantidad = 0;
//                 } else {
//                     precio = arrayProductos[0].precio;
//                 }
//                 break;
//             case arrayProductos[1].nombre:
//                 arrayProductos[1].actualizarStock(cantidad);
//                 if (arrayProductos[1].stock < 0 || isNaN(cantidad)) {
//                     alert("Lo sentimos. Este producto se agoto!");
//                     precio = 0;
//                     cantidad = 0;
//                 } else {
//                     precio = arrayProductos[1].precio;
//                 }
//                 break;
//             case arrayProductos[2].nombre:
//                 arrayProductos[2].actualizarStock(cantidad);
//                 if (arrayProductos[2].stock < 0 || isNaN(cantidad)) {
//                     alert("Lo sentimos. Este producto se agoto!");
//                     precio = 0;
//                     cantidad = 0;
//                 } else {
//                     precio = arrayProductos[2].precio;
//                 }
//                 break;
//             case arrayProductos[2].nombre:
//                 arrayProductos[2].actualizarStock(cantidad);
//                 if (arrayProductos[2].stock < 0 || isNaN(cantidad)) {
//                     alert("Lo sentimos. Este producto se agoto!");
//                     precio = 0;
//                     cantidad = 0;
//                 } else {
//                     precio = arrayProductos[2].precio;
//                 }
//                 break;
//             default:
//                 alert("El campo ingresado no es valido.");
//                 precio = 0;
//                 cantidad = 0;
//         }

//         total = total + precio * cantidad;
//         otroProducto = confirm("Desea agregar algun otro producto?");
//     } while (otroProducto);
// };



// const obtenerDescuento = (total) => {
//     if ( total >= 6500 ) {
//         total = total * 0.8;
//         alert(" TENES UN 15% DE DESCUENTO EN TU COMPRA");
//     }
//     return total;
// };



// const precioDeEnvio = (total) => {
//     let confirmacion = confirm("Lo enviamos a tu domicilio?");
//     if ( confirmacion && total >= 3000 ) {
//         alert("NEVIOS GRATIS, el total de tu compra es de "+total);
//     } else if ( confirmacion && total < 3000 && total != 0 ) {
//         total = total + 680;
//     } else {
//         alert("El total de tu compra es de "+total);
//     }
//     return total;
// };



// const obtenerTotal = (total, envio) => {
//     console.log(total);
//     console.log(envio)
//     total = total + envio;
//     alert("EL TOTAL DE SU COMPRA ES "+total);
// };


// const comprarProductos = () => {
//     if ( confirm("Queres ver los productos de menor a mayor precio?")) {
//         ordenarMenorMayor();
//     } else {
//         ordenarMayorMenor();
//     }
//     agregarProductoCarrito();
//     obtenerTotal(precioDeEnvio(obtenerDescuento(total)));
// };

// comprarProductos();




const nombre = document.getElementById("firstName");
const email = document.getElementById("email");
const monto = document.getElementById("amount");
const cuotas = document.getElementById("fees");

const formulario = document.getElementById("form");

const montoFinal = document.getElementById("finalAmount");
const cuotasFinales = document.getElementById("finalFees");
const intereses = document.getElementById("interests");
const totalADevolver = document.getElementById("totalAmount");

const tasa = 0.01; // 1%

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  obtenerCuotaCompra();

});


const obtenerCuotaCompra = () => {
  const cuotaCompra = tasa * monto.value / (1 - (1+tasa) ** - cuotas.value);
  obtenerTotal(cuotaCompra);
};

const obtenerTotal = (cuotaCompra) => {
  const total = Math.ceil(cuotaCompra) * cuotas.value;
  finalizarCompra(total);
}

const finalizarCompra = (total) => {
  montoFinal.textContent = monto.value;
  cuotasFinales.textContent = cuotas.value;
  intereses.textContent = total - monto.value;
  totalADevolver.textContent = total;
};




(() => {
  'use strict'

  const forms = document.querySelectorAll('.needs-validation')

  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()



(() => {
  'use strict'


  const forms = document.querySelectorAll('.needs-validation')


  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()








/*SWEET ALERT */

function myFunction() {
  swal.fire ({
    icon: 'success',
    title: 'BIENVENIDO!',
    text: 'Te contamos nuestra historia',
    confirmButtonText: 'Vamos',
    duration: '10000',
    destinatation: './pages/img.html'
  })
}


/* TOASTIFY */

const btn = document.getElementById ("btn-añadir");

btn.addEventListener ("añadir", () => {
  Toastify ({
    text: "Producto agregado",
    duration: 3000
  }).showToast();
})
