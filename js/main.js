
fetch("../json/productos.json")
.then(respuesta => respuesta.json())
.then(respuesta => {
    productos = respuesta;
    cargarProductos(productos);
}
)
.catch((e) => {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Los productos no han podido ser cargados',
      })
})

//Elementos DOM
const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias= document.querySelectorAll(".boton-cat");
const tituloPrincipal= document.querySelector("#titulo-principal");
const numero = document.querySelector('#numero');

//Funciones
const actualizarBotonesAgregar = () =>{
    botonesAgregar = document.querySelectorAll(".producto-agregar");
    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito)
    })
} 
//Actualiza cantidad del carrito

const actualizarNumero = () => {
    let nuevoNumero = productosEnCarrito.reduce((acumulador, producto) => acumulador + producto.cantidad, 0);
    numero.innerText = nuevoNumero;
}
//Agrega productos al carrito 
let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");
//const productosEnCarritoLS = JSON.parse(localStorage.getItem("productos-en-carrito"));

if(productosEnCarritoLS){
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumero();
} else {
    productosEnCarrito = [];
}

const agregarAlCarrito = (e)=> {
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id ===idBoton);

    if(productosEnCarrito.some(producto => producto.id ===idBoton)){
       const index = productosEnCarrito.findIndex(producto => producto.id ===idBoton);
        productosEnCarrito[index].cantidad++;
    }else{
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }
    Toastify({
        text: "Producto agreado",
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
          },
        offset: {
          x: 50, // horizontal axis - can be a number or a string indicating unity. eg: '2em'
          y: 10 // vertical axis - can be a number or a string indicating unity. eg: '2em'
        },
      }).showToast();
    actualizarNumero();
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}


//Carga los productos recorriendo el array y los inyecta en mi div de productos
const cargarProductos = (productosElegidos) => {
    contenedorProductos.innerHTML = "";
    productosElegidos.forEach(producto => {
        const div = document.createElement("div")
        div.classList.add("productos");
        div.innerHTML = `
        <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
        <div class="productos-detalles">
        <h3 class="producto-titulo">${producto.titulo}</h3>
        <p class="producto-precio">${producto.precio}</p>
        <button class="producto-agregar" id="${producto.id}">Agregar</button>

        `;

        contenedorProductos.append(div);

    })
    actualizarBotonesAgregar();
 
}

function compra(){
    Swal.fire({
      icon: 'information',
      title: 'Compra Exitosa',
      text: 'Perfecto, has comprado los productos',
    })
  }
//cargarProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");
        if (e.currentTarget.id !="todos"){
            const productoCategoria = productos.find(producto => producto.categoria.id ===e.currentTarget.id);
            tituloPrincipal.innerText= productoCategoria.categoria.nombre;
            const productosBoton= productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        }else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }

    })
})


