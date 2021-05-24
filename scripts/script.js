// alert("ver si el js esta conectado");
// const botonAdd = document.querySelectorAll('.product');
// botonAdd.forEach((addProduct) => {
//     addProduct.addEventListener('click')

// })

const boton = document.getElementById('botonEnviar');

document.addEventListener('DOMContentLoaded', () => {
    obtenerObj();
})

boton.addEventListener('click', e => {
    capturaDatos();
})

function capturaDatos() {
    let nombreApellido = document.querySelector('#nombre').value;
    let numeroTarjeta = document.querySelector('#tarjeta').value;
    let correo = document.querySelector('#email').value;
    let telefono = document.querySelector('#tel').value;
    guardarObj(nombreApellido, numeroTarjeta, correo, telefono);

}

function guardarObj(nombreApellido, numeroTarjeta, correo, telefono) {

    let cliente = { item1: nombreApellido, item2: numeroTarjeta, item3: correo, item4: telefono }

    localStorage.setItem("Cliente", JSON.stringify(cliente));
    localStorage.setItem("Nombre", cliente.item1);
    localStorage.setItem("Tarjeta", cliente.item2);
    localStorage.setItem("Correo", cliente.item3);
    localStorage.setItem("Telefono", cliente.item4);
}

function obtenerObj() {

}