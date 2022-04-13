
// Ejercicio Calculator:

let num1 = prompt("Inserta el primer numero");
if (isNaN(num1)) {
  alert("Numero no seleccionado");
  let num1 = prompt("Inserta el primer numero de nuevo");
}

let num2 = prompt("Inserta el segundo numero");
if (isNaN(num2)) {
  alert("Numero no seleccionado");
  let num2 = prompt("Inserta el segundo numero de nuevo");
}

function calculator(num1, num2) {

  let results = [];

  if (num1 && num2) {


    const resultSum = +num1 + +num2;
    const resultRest = num1 - num2;
    const resultMult = (num1 * num2).toFixed(3);
    const resultDiv = (num1 / num2).toFixed(3);

    results.push(resultSum, resultRest, resultMult, resultDiv);


    console.log('El resultado de la suma es: ' + resultSum);
    console.log('El resultado de la resta es: ' + resultRest);
    console.log('El resultado de la multiplicacion es:' + resultMult);
    console.log('El resultado de la division es: ' + resultDiv);

    console.log(results);


  }

  else if (num1 && !num2) {

    const resultnum1 = ('El resultado de la raíz cuadrada de ' + num1 + ' es ' + (Math.sqrt(num1)).toFixed(3));

    results.push(resulnum1);
    console.log(results);

  }

  else if (num1 && !num1) {

    const resultnum2 = ('El resultado de la raíz cuadrada de' + num2 + ' es ' + (Math.sqrt(num2)).toFixed(3));

    results.push(resultnum2);
    console.log(results);
  }
}


calculator(num1, num2);




const mayuscula = (nombre) => nombre.toUpperCase()

let nombre = mayuscula("tomás")

console.log(nombre)


function saludar() {
  console.log("Hola mundo")
}


