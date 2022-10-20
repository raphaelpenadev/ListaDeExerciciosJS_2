//1
function falaNome(nome) {
  return "Olá " + nome + " !";
}

// console.log(falaNome("Raphael"));

//2
function calculaDiasPorAnos(idade) {
  return 365 * idade;
}

// console.log("Você tem: " + calculaDiasPorAnos(26) + " dias de vida.");

// 3
function calcularSalario(horas, valorHora) {
  return horas * valorHora;
}

let regulaSalario = calcularSalario(185, 3.96);
let salarioArrumado = regulaSalario.toFixed(2).toString().replace(".", ",");

// console.log("O salário é de: R$" + salarioArrumado);

//4
function retornaMes(numeroMes) {
  switch (numeroMes) {
    case 1:
      onsole.log("Janeiro");
      break;
    case 2:
      console.log("Fevereiro");
      break;
    case 3:
      console.log("Março");
      break;
    case 4:
      console.log("Abril");
      break;
    case 5:
      console.log("Maio");
      break;
    case 6:
      console.log("Junho");
      break;
    case 7:
      console.log("Julho");
      break;
    case 8:
      console.log("Agosto");
      break;
    case 9:
      console.log("Setembro");
      break;
    case 10:
      console.log("Outubro");
      break;
    case 11:
      console.log("Novembro");
      break;
    case 12:
      console.log("Dezembro");
      break;
    default:
      console.log("Informe um mês válido 1-12");
  }
}
// retornaMes(13);

// Mesma de cima de outra forma
// 4.1
function retornaMes($i) {
  const arrMeses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];
  return arrMeses[$i - 1];
}
// console.log(retornaMes(1));

// 5
function verificaPrimeiroMaior(num1, num2) {
  if (num1 >= num2) {
    return true;
  } else {
    return false;
  }
}
// console.log(verificaPrimeiroMaior(6, 2));

// 6
function inserirBoolouNum(param) {
  let verificar = typeof param;

  if (verificar == "boolean") return !param;
  if (verificar == "number") return param * -1;
  else
    return (
      "Esperado Boolean ou Number, porém o valor informado é: " + typeof param
    );
}

// console.log(inserirBoolouNum(Array));

// 7
function numExclusivoInclusivo(num1, num2, num3, inclusivo = false) {
  if (inclusivo == true) {
    if (num1 <= num2 && num1 >= num3) {
      return true;
    }
    if (num1 >= num2 && num1 <= num3) {
      return true;
    } else {
      return false;
    }
  } else {
    if (num1 < num2 && num1 > num3) {
      return true;
    }
    if (num1 > num2 && num1 < num3) {
      return true;
    } else {
      return false;
    }
  }
}

// console.log(numExclusivoInclusivo(2, 2, 3, false));

// 8
function somaNumeros(vezesMulti, num) {
  let resultado = 0;
  for (let i = 0; i < vezesMulti; i++) {
    resultado += num;
  }
  return resultado;
}

// console.log(somaNumeros(3, 8));

// 9
function retornaArray(numRepetir, vezesRepetir) {
  let arrResultado = [];
  for (let i = 0; i < vezesRepetir; i++) {
    arrResultado.push(numRepetir);
  }
  return arrResultado;
}

// console.log(retornaArray(3, 20));

// 10
function repeteMais(num) {
  return "+".repeat(num);
}

// console.log(repeteMais(1000));

// 11
let array = ["Railon", "Rainer", "Augusto", "Oliver", "Monica"];

function mostrarPrimeiroeUltimoElemento(arr) {
  let arrayResultado = [];
  let tamanhoArr = arr.length;
  arrayResultado.push(arr[0], arr[tamanhoArr - 1]);
  return arrayResultado;
}

console.log(mostrarPrimeiroeUltimoElemento(array));
