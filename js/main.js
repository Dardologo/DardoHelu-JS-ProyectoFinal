// Productos

const productos = [
    //Accesorios
    {
        id: 'a1',
        titulo: 'Accesorio 01',
        imagen: "./img/accesorios/a1.jpg",
        categoria: {
            nombre: "Accesorios",
            id: "accesorios"
        },
        precio: 1000

    },
    {
        id: 'a2',
        titulo: 'Accesorio 02',
        imagen: "./img/accesorios/a2.jpg",
        categoria: {
            nombre: "Accesorios",
            id: "accesorios"
        },
        precio: 1000

    },
    {
        id: 'a3',
        titulo: 'Accesorio 03',
        imagen: "./img/accesorios/a3.jpg",
        categoria: {
            nombre: "Accesorios",
            id: "accesorios"
        },
        precio: 1000

    },
    {
        id: 'a4',
        titulo: 'Accesorio 04',
        imagen: "./img/accesorios/a4.jpg",
        categoria: {
            nombre: "Accesorios",
            id: "accesorios"
        },
        precio: 1000

    },
    {
        id: 'a5',
        titulo: 'Accesorio 05',
        imagen: "./img/accesorios/a5.jpg",
        categoria: {
            nombre: "Accesorios",
            id: "accesorios"
        },
        precio: 1000

    },
    {
        id: 'a6',
        titulo: 'Accesorio 06',
        imagen: "./img/accesorios/a6.jpg",
        categoria: {
            nombre: "Accesorios",
            id: "accesorios"
        },
        precio: 1000

    },
    {
        id: 'a7',
        titulo: 'Accesorio 07',
        imagen: "./img/accesorios/a7.jpg",
        categoria: {
            nombre: "Accesorios",
            id: "accesorios"
        },
        precio: 1000

    },
    {
        id: 'a8',
        titulo: 'Accesorio 08',
        imagen: "./img/accesorios/a8.jpg",
        categoria: {
            nombre: "Accesorios",
            id: "accesorios"
        },
        precio: 1000

    },
    {
        id: 'a9',
        titulo: 'Accesorio 09',
        imagen: "./img/accesorios/a9.jpg",
        categoria: {
            nombre: "Accesorios",
            id: "accesorios"
        },
        precio: 1000

    },
    //Basquet
    {
        id: 'b1',
        titulo: 'Basquet 01',
        imagen: "./img/basquet/b1.jpg",
        categoria: {
            nombre: "Basquet",
            id: "basquet"
        },
        precio: 1000

    },
    {
        id: 'b2',
        titulo: 'Basquet 02',
        imagen: "./img/basquet/b2.jpg",
        categoria: {
            nombre: "Basquet",
            id: "basquet"
        },
        precio: 1000

    },
    {
        id: 'b3',
        titulo: 'Basquet 03',
        imagen: "./img/basquet/b3.jpg",
        categoria: {
            nombre: "Basquet",
            id: "basquet"
        },
        precio: 1000

    },
    {
        id: 'b4',
        titulo: 'Basquet 04',
        imagen: "./img/basquet/b4.jpg",
        categoria: {
            nombre: "Basquet",
            id: "basquet"
        },
        precio: 1000

    },
    {
        id: 'b5',
        titulo: 'Basquet 05',
        imagen: "./img/basquet/b5.jpg",
        categoria: {
            nombre: "Basquet",
            id: "basquet"
        },
        precio: 1000

    },
    {
        id: 'b6',
        titulo: 'Basquet 06',
        imagen: "./img/basquet/b6.jpg",
        categoria: {
            nombre: "Basquet",
            id: "basquet"
        },
        precio: 1000

    },

    //Futbol
    {
        id: 'f1',
        titulo: 'Futbol 01',
        imagen: "./img/futbol/f1.jpg",
        categoria: {
            nombre: "Futbol",
            id: "futbol"
        },
        precio: 1000

    },
    {
        id: 'f2',
        titulo: 'Futbol 02',
        imagen: "./img/futbol/f2.jpg",
        categoria: {
            nombre: "Futbol",
            id: "futbol"
        },
        precio: 1000

    },
    {
        id: 'f3',
        titulo: 'Futbol 03',
        imagen: "./img/futbol/f3.jpg",
        categoria: {
            nombre: "Futbol",
            id: "futbol"
        },
        precio: 1000

    },
    {
        id: 'f4',
        titulo: 'Futbol 04',
        imagen: "./img/futbol/f4.jpg",
        categoria: {
            nombre: "Futbol",
            id: "futbol"
        },
        precio: 1000

    },
    {
        id: 'f5',
        titulo: 'Futbol 05',
        imagen: "./img/futbol/f5.jpg",
        categoria: {
            nombre: "Futbol",
            id: "futbol"
        },
        precio: 1000

    },
    {
        id: 'f6',
        titulo: 'Futbol 06',
        imagen: "./img/futbol/f6.jpg",
        categoria: {
            nombre: "Futbol",
            id: "futbol"
        },
        precio: 1000

    },
    {
        id: 'f7',
        titulo: 'Futbol 07',
        imagen: "./img/futbol/f7.jpg",
        categoria: {
            nombre: "Futbol",
            id: "futbol"
        },
        precio: 1000

    },
    {
        id: 'f8',
        titulo: 'Futbol 08',
        imagen: "./img/futbol/f8.jpg",
        categoria: {
            nombre: "Futbol",
            id: "futbol"
        },
        precio: 1000

    },
    {
        id: 'f9',
        titulo: 'Futbol 09',
        imagen: "./img/futbol/f9.jpg",
        categoria: {
            nombre: "Futbol",
            id: "futbol"
        },
        precio: 1000

    },

]

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
   //console.log(productosEnCarrito);
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
    console.log(botonesAgregar);
}


cargarProductos(productos);

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
console.log(botonesAgregar);

