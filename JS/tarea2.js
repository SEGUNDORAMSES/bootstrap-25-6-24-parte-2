console.log("working")

function enviarSolicitud(event) {
    event.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let asunto = document.getElementById("asunto").value;
    let mensaje = document.getElementById("mensaje").value;
    let resultado = document.getElementById("resultado");

    alert(`el nombre es:  ${nombre},  el correo electronico es: ${email}, el asunto es: ${asunto}, el mensaje es: ${mensaje}`)

    resultado.textContent = (`el nombre es:  ${nombre},  el correo electronico es: ${email}, el asunto es: ${asunto}, el mensaje es: ${mensaje}`)

    let respuesta;

    switch (copia) {
        case "si":
            respuesta = "Sí"

            break;

        case "no":
            respuesta = alert("no se envia nada")
        
            break;


        default:

            break;
    }

    alert(`se enviará una copia de la solicitud a su correo electrónico`)
}