//console.log("working")

function Calculadora2(event) {
  event.preventDefault();

  let number1 = parseFloat(document.getElementById("Num1").value);
  let number2 = parseFloat(document.getElementById("Num2").value);
  let operaciones = document.getElementById("operaciones").value;
  let resultado = document.getElementById("Resultado");

  let valor;
  switch (operaciones) {
    case "-":
      valor = number1 - number2;
      break;

    case "*":
      valor = number1 * number2;
      break;

    case "+":
      valor = number1 + number2;
      break;

    case "/":
      valor= number1 / number2;
      break;

    default:
      valor="la operacion es invalida"
    
    break;
}
alert("EL RESULTADO ES:  "+valor )

}
