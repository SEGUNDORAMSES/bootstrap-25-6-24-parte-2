//alert("it is done")

function calcularIMC(event) {
    event.preventDefault();

    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value);
    let resultado = document.getElementById("resultado");

    let IMC = peso / (altura * altura)

    if (IMC < 18.5) {
        alert("bajo peso")
    }

    else if (18.5 <= IMC &&  IMC < 24.9) {
        alert("peso normal")
    }
 
    else if (25 <= IMC && IMC < 29.9) {
        alert("sobrepeso")
    }

    else if (IMC >= 30) {
        alert("obesidad")
    }

    else {

    }

    resultado.textContent = ("el IMC es: " + IMC)

}
