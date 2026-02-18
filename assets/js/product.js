/* ==============================
   DATA
============================== */

const productos = [
    {
        id: 1,
        nombre: "Top Deportivo Negro",
        precio: 899,
        imagen: "../assets/images/products/black_top.jpeg"
    },
    {
        id: 2,
        nombre: "Top Deportivo Gris",
        precio: 899,
        imagen: "../assets/images/products/grey_top.jpeg"
    },
    {
        id: 3,
        nombre: "Top Deportivo Rosado",
        precio: 899,
        imagen: "../assets/images/products/pink_top.jpeg"
    }
];

/* ==============================
   UTILIDADES
============================== */

function obtenerProductoPorId(id) {
    return productos.find(p => p.id === id);
}

function obtenerIdDesdeURL() {
    const params = new URLSearchParams(window.location.search);
    return parseInt(params.get("id"));
}

/* ==============================
   RENDER PRODUCTO
============================== */

function renderizarProducto(producto) {
    if (!producto) {
        document.body.innerHTML = "<h1>Producto no encontrado</h1>";
        return;
    }

    document.title = `${producto.nombre} | LINCE`;

    const nombreEl = document.getElementById("nombre");
    const precioEl = document.getElementById("precio");
    const imagenEl = document.getElementById("imagen");

    if (nombreEl) nombreEl.textContent = producto.nombre;
    if (precioEl) precioEl.textContent = `$${producto.precio}`;
    if (imagenEl) {
        imagenEl.src = producto.imagen;
        imagenEl.alt = producto.nombre;
    }
}

/* ==============================
   LÓGICA DE TALLES
============================== */

function inicializarTalles() {
    let talleSeleccionado = null;

    const botones = document.querySelectorAll(".talles button");

    botones.forEach(boton => {
        boton.addEventListener("click", () => {
            botones.forEach(b => b.classList.remove("activo"));
            boton.classList.add("activo");
            talleSeleccionado = boton.textContent;
        });
    });

    return () => talleSeleccionado;
}

/* ==============================
   BOTÓN COMPRAR
============================== */

function inicializarBotonComprar(producto, obtenerTalle) {
    const boton = document.querySelector(".btn-comprar");
    if (!boton) return;

    boton.addEventListener("click", () => {
        const talle = obtenerTalle();

        if (!talle) {
            alert("Por favor seleccioná un talle.");
            return;
        }

        const mensaje = `Hola! Me interesa la prenda ${producto.nombre} en talle ${talle}.`;
        const numero = "59894971183";
        const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

        window.open(url, "_blank");
    });
}

/* ==============================
   INICIALIZACIÓN
============================== */

function init() {
    const id = obtenerIdDesdeURL();
    const producto = obtenerProductoPorId(id);

    renderizarProducto(producto);

    if (!producto) return;

    const obtenerTalle = inicializarTalles();
    inicializarBotonComprar(producto, obtenerTalle);
}

document.addEventListener("DOMContentLoaded", init);
