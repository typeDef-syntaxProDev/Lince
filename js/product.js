const productos = [
    {
        id: 1,
        nombre: "Top Deportivo Negro",
        precio: 899,
        imagen: "src/black.jpeg"
    },
    {
        id: 2,
        nombre: "Top Deportivo Gris",
        precio: 899,
        imagen: "src/grey.jpeg"
    },
    {
        id: 3,
        nombre: "Top Deportivo Rosado",
        precio: 899,
        imagen: "src/pink.jpeg"
    }
];

// creacion de la pagina con el producto seleccionado
const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get("id"));
const producto = productos.find(p => p.id === id);
if (producto) {
    document.title = producto.nombre + " | LINCE";
    document.getElementById("nombre").textContent = producto.nombre;
    document.getElementById("precio").textContent = "$" + producto.precio;
    document.getElementById("imagen").src = producto.imagen;
}

// logica de seleccion de talle
let talleSeleccionado = null;
const botonesTalle = document.querySelectorAll(".talles button");
botonesTalle.forEach(boton => {
    boton.addEventListener("click", () => {
        // quitar selección anterior
        botonesTalle.forEach(b => b.classList.remove("activo"));
        // marcar seleccionado
        boton.classList.add("activo");
        talleSeleccionado = boton.textContent;
    });
});

// logica del boton comprar
const botonComprar = document.querySelector(".btn-comprar");
botonComprar.addEventListener("click", () => {
    if (!talleSeleccionado) {
        alert("Por favor seleccioná un talle.");
        return;
    }
    const mensaje = `Hola! Me interesa la prenda ${producto.nombre} en talle ${talleSeleccionado}.`;
    const numero = "59894971183"; // ← poné tu número con código país sin +
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
});




