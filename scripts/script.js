// alert("ver si el js esta conectado");

//para almacenar datos del formulario
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
    let item1 = localStorage.getItem("Nombre");
    let item2 = localStorage.getItem("Tarjeta");
    let item3 = localStorage.getItem("Correo");
    let item4 = localStorage.getItem("Telefono");
    console.log(item1, item2, item3, item4)

}

//para el carrito
var cantidad = 0;
var valorInicial = 0;
var valorDescuento = 0;
var valorPagar = 0;

function ValorTotal() {
    cantidad = document.getElementById("idcantidad").value;
    valorInicial = cantidad * 820000;

    if (valorInicial == 820000) {
        alert("Solo una? Lo sentimos, el descuento aplica para compras superiores");
    }

    if (1640000 <= valorInicial && valorInicial <= 3280000) {
        valorDescuento = valorInicial * 0.15;
        valorPagar = valorInicial - valorDescuento;
        document.getElementById('valorPagar').value = valorPagar;
        document.getElementById('valorPagar').style.fontSize = '30px';
        document.getElementById('valorInicial').value = valorInicial;
        document.getElementById('valorInicial').style.fontSize = '30px'
        document.getElementById('valorDescuento').value = valorDescuento;
        document.getElementById('valorInicial').style.fontSize = "30px";
        alert("Tu super descuento es del 15%");

    } else {

        if (3280000 < valorInicial && valorInicial <= 6560000) {
            valorDescuento = valorInicial * 0.25;
            valorPagar = valorInicial - valorDescuento;
            document.getElementById('valorPagar').value = valorPagar;
            document.getElementById('valorPagar').style.fontSize = '30px';
            document.getElementById('valorInicial').value = valorInicial;
            document.getElementById('valorInicial').style.fontSize = '30px'
            document.getElementById('valorDescuento').value = valorDescuento;
            document.getElementById('valorInicial').style.fontSize = "30px";
            alert("Tu super descuento es del 25%");
        } else {
            if (6560000 < valorInicial && valorInicial <= 9840000) {
                valorDescuento = valorInicial * 0.35;
                valorPagar = valorInicial - valorDescuento;
                document.getElementById('valorPagar').value = valorPagar;
                document.getElementById('valorPagar').style.fontSize = '30px';
                document.getElementById('valorInicial').value = valorInicial;
                document.getElementById('valorInicial').style.fontSize = '30px'
                document.getElementById('valorDescuento').value = valorDescuento;
                document.getElementById('valorInicial').style.fontSize = "30px";
                alert("Tu super descuento es del 35%");
            } else {
                if (9840000 < valorInicial) {
                    alert("Tu compra no tiene descuento. Lo sentimos. Luego será");
                }
            }
        }
    }
}

//cantidad de productos por categoria
const enviar = document.getElementById('hacerPago');

enviar.addEventListener('click', e => {
    precioTotal();
})



var cantidadMouse = 0;
var totalMouse = 0;


function precioTotal() {
    cantidadMouse = document.getElementById("cantidadMouse").value;
    totalMouse = cantidadMouse * 27000;

    console.log(totalMouse);
    alert(totalMouse);
}