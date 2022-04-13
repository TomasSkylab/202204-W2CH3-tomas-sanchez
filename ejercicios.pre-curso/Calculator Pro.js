
//CALCULATOR-PRO

function calculatorPro() {

  let newNumber;
  let numberList = [];

  do {
    newNumber = prompt('Selecciona un numero o presiona cancelar para pararlo');

    if (isNaN(newNumber)) {
      alert('Se ingresó un carácter no válido');
    } else if (newNumber === ' ') {
      alert('Se ingresó un carácter no válido');
    } else if (newNumber !== null) {
      console.log('Numero = ' + newNumber),
        numberList.push(Number.parseFloat(newNumber));
    }
  } while (newNumber !== null);

  let results = [];

  if (numberList.length === 1) {
    let raizCuadrada = Math.sqrt(numberList[0]).toFixed(3);
    results.push(raizCuadrada);

    console.log("La raiz cuadrada es: " + raizCuadrada)

  } else if (numberList.length > 1) {
    let sum = 0;
    for (let i = 0; i < numberList.length; i++) {
      sum += numberList[i];
    }

    let res = 0;
    for (let i = 0; i < numberList.length; i++) {
      res -= numberList[i];
    }

    let mult = 1;
    for (let i = 0; i < numberList.length; i++) {
      mult *= numberList[i];
    }

    let div = 1;
    for (let i = 0; i < numberList.length; i++) {
      div /= numberList[i];
    }

    results.push(Number(sum.toFixed(3)));
    results.push(Number(res.toFixed(3)));
    results.push(Number(mult.toFixed(3)));
    results.push(Number(div.toFixed(3)));

    console.log("El resultado de la suma es: " + Number(sum.toFixed(3)));
    console.log("El resultado de la resta es: " + Number(res.toFixed(3)));
    console.log("El resultado de la multiplicacion es: " + Number(mult.toFixed(3)));
    console.log("El resultado de la division es: " + Number(div.toFixed(3)));

  }

}

calculatorPro();

function askForStartAgain() {
  let ask = prompt('Quieres agregar nuevos numeros? \n escribe "Si/No" a continuacion: ')
  if (ask.toUpperCase() === "SI") {
    calculatorPro();
  } else if (ask.toUpperCase() === "NO") {
    alert("See you later alligator, see you in a while crocodile")
  }

}

askForStartAgain();