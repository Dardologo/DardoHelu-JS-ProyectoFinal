let productosEnCarrito = localStorage.getItem("productos-en-carrito");
productosEnCarrito= JSON.parse(productosEnCarrito);
const contenedorCarritoVacio = document.querySelector('#carrito-vacio');
const contenedorCarritoProductos = document.querySelector('#carrito-productos');
const contenedorCarritoAcciones = document.querySelector('#carrito-acciones');
const contenedorCarritoComprado = document.querySelector('#carrito-comprado');
const botonVaciar = document.querySelector("#carrito-acciones-vaciar");
let botonesEliminar;
const contenedorTotal = document.querySelector('#total')
const botonComprar = document.querySelector("#carrito-acciones-comprar");


const cargarProductosCarrito = () => {
    if (productosEnCarrito && productosEnCarrito.length >0) {

       
        contenedorCarritoVacio.classList.add("disabled");
        contenedorCarritoProductos.classList.remove("disabled");
        contenedorCarritoAcciones.classList.remove("disabled");
        contenedorCarritoComprado.classList.add("disabled");

        contenedorCarritoProductos.innerHTML = "";

        productosEnCarrito.forEach(producto => {
            const div = document.createElement("div");
            div.classList.add("carrito-producto");
            div.innerHTML = `
                <img class="carrito-producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
                <div class="carrito-producto-titulo">
                    <small>Titulo</small>
                    <h3>${producto.titulo}</h3>
                </div>
                <div class="carrito-producto-cantidad">
                    <small>Cantidad</small>
                    <p>${producto.cantidad}</p>
                </div>
                <div class="carrito-producto-precio">
                    <small>Precio</small>
                    <p>${producto.precio}</p>
                </div>
                <div class="carrito-producto-subtotal">
                    <small>Subtotal</small>
                    <p>${producto.precio * producto.cantidad}</p>
                </div>
                <button class="carrito-producto-eliminar" id="${producto.id}" ><i class="bi bi-trash"></i></button>
            `;
            contenedorCarritoProductos.append(div);
        });

        botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");
        actualizarBotonesEliminar(); 
        actualizarTotal();
    } else {
        contenedorCarritoVacio.classList.remove("disabled");
        contenedorCarritoProductos.classList.add("disabled");
        contenedorCarritoAcciones.classList.add("disabled");
        contenedorCarritoComprado.classList.add("disabled");
    }
}

const eliminarDelCarrito = (e) => {
    const idBoton = e.currentTarget.id;
    const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
    productosEnCarrito.splice(index, 1);
    cargarProductosCarrito();
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
    Toastify({
        text: "Producto Eliminado",
        style: {
          background: "linear-gradient(to right, #c1121f, #f48c06)",
        },
        offset: {
          x: 50, // horizontal axis - can be a number or a string indicating unity. eg: '2em'
          y: 10 // vertical axis - can be a number or a string indicating unity. eg: '2em'
        },
      }).showToast();

}

const actualizarBotonesEliminar = () => {
    botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");
    botonesEliminar.forEach(boton => {
        boton.addEventListener("click", eliminarDelCarrito);
    })
}
const actualizarTotal = () => {
    const totalCalculado = productosEnCarrito.reduce((acumulador, producto) => acumulador + (producto.precio * producto.cantidad), 0);
    total.innerText = `$${totalCalculado}`;
}
cargarProductosCarrito();
const vaciarCarrito = () => {
    productosEnCarrito.length = 0;
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
    cargarProductosCarrito();
}
botonVaciar.addEventListener("click", vaciarCarrito);

const comprarCarrito = () =>{
    productosEnCarrito.length = 0;
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
    contenedorCarritoVacio.classList.add("disabled");
    contenedorCarritoProductos.classList.add("disabled");
    contenedorCarritoAcciones.classList.add("disabled");
    contenedorCarritoComprado.classList.remove("disabled");
    Toastify({
        text: "¡Ha realizado la compra con éxito!",
        style: {
            background: "linear-gradient(to right, #28a745, #218838)",
        },
        offset: {
            x: 50,
            y: 10
        },
    }).showToast();
}

botonComprar.addEventListener("click", comprarCarrito);
//botonComprar.addEventListener("click", compra);





