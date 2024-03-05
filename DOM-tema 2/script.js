function subtract() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  if (isNaN(num1) || isNaN(num2)) {
    document.getElementById("result").innerText =
      "Va rugam sa introduceti numere valide";
  } else {
    const result = num1 - num2;
    document.getElementById("result").innerText =
      "Rezultatul operatiei este: " + result;
  }
}
function add() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  if (isNaN(num1) || isNaN(num2)) {
    document.getElementById("result").innerText =
      "Va rugam sa introduceti numere valide";
  } else {
    const result = num1 + num2;
    document.getElementById("result").innerText =
      "Rezultatul operatiei este: " + result;
  }
}
function multiply() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  if (isNaN(num1) || isNaN(num2)) {
    document.getElementById("result").innerText =
      "Va rugam sa introduceti numere valide";
  } else {
    const result = num1 * num2;
    document.getElementById("result").innerText =
      "Rezultatul operatiei este: " + result;
  }
}
function divide() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  if (isNaN(num1) || isNaN(num2)) {
    document.getElementById("result").innerText =
      "Va rugam sa introduceti numere valide";
  } else {
    const result = num1 / num2;
    document.getElementById("result").innerText =
      "Rezultatul operatiei este: " + result;
  }
}
