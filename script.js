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

// console.log(mostrarPrimeiroeUltimoElemento(array));

// 12
const obj = { nome: "teste", idade: 20, teste: "remover" };

function removerProp(obj, prop) {
  delete obj[prop];
  return obj;
}

// console.log(removerProp(obj, 'teste'));

// 13
const arr = ["a", 12, "b", "c", 20];

function retornaArrayNumbers(arr) {
  let novaArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      novaArr.push(arr[i]);
    }
  }
  return novaArr;
}

// console.log(retornaArrayNumbers(arr));

// 14
const objArray = { nome: "teste", sobrenome: "Teste", idade: 12, altura: 1.6 };

function objToArray(obj) {
  return Object.entries(objArray);
}

// console.log(objToArray(objArray));

// 15
const arrFilterPares = [2, 4, 536, 3546, 457, 2, 876, 72, 5, 654, 523, 5, 87];
let arrAjustada = [];

function selectKeyParandNumPar(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 == 0) {
      if (arr[i] % 2 == 0) {
        arrAjustada.push(arr[i]);
      }
    }
  }
  return arrAjustada;
}
// console.log(selectKeyParandNumPar(arrFilterPares));

// 16
function calculaAnoBissexto(ano) {
  if (ano % 4 == 0) {
    if (ano % 400 == 0) {
      if (ano % 100 == 0) {
        console.log("É bissexto");
      }
    }
  }
}

// calculaAnoBissexto(2000);

// 17
const arr3 = [1, 2, 3];

function somaArray(arr) {
  let somaElementosArray = arr.reduce((atual, prox) => atual + prox);
  return somaElementosArray;
}

// console.log(somaArray(arr3));

// 18
const arrDespesas = [
  { nome: "Produto 1", ano: 2020, preco: 4.2 },
  { nome: "Produto 2", ano: 2015, preco: 4.6 },
  { nome: "Produto 3", ano: 2018, preco: 6.8 },
  { nome: "Produto 4", ano: 2019, preco: 16.12 },
];

function retornaDespesas(arrObj) {
  let somaArrayObj;
  somaArrayObj = arrObj
    .map((e) => e.preco)
    .reduce((atual, prox) => atual + prox);
  console.log(
    "Total de despesas: R$" +
      somaArrayObj.toFixed(2).toString().replace(".", ",")
  );
}

// retornaDespesas(arrDespesas);

// 19
function retonarMediaArray(arr) {
  let somaResultado = arr.reduce((atual, prox) => atual + prox);
  let resultadoFinal = somaResultado / arr.length;
  return resultadoFinal;
}
// console.log(retonarMediaArray([1, 2, 3]));

// 20
function calculaAreaTriangulo(base, altura) {
  let area = (base * altura) / 2;
  return area;
}

// console.log(calculaAreaTriangulo(2, 2));

// 21
function retornaMin(arr) {
  let ordenaArray = arr.sort();
  let numMin = ordenaArray[0];
  return numMin;
}

// console.log(retornaMin([2, 1, 5, 9, 7]));

// 22
function sorteiaNum(num) {
  let sorteadoNumero = Math.floor(Math.random() * 10);
  if (num === sorteadoNumero) {
    console.log("PARABENS! O numero sorteado foi o " + sorteadoNumero);
  } else {
    console.log("Que pena o numero sorteado foi o " + sorteadoNumero);
  }
  return sorteadoNumero;
}

// console.log(sorteiaNum(3));

// 23
function contaPalavra(string) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] == " ") {
      count++;
    }
  }
  return "Existem " + (count + 1) + " palavras nessa frase.";
}

// console.log(contaPalavra("Teste de espaços ok"));

// 24
function contaOcorrenciaDeLetra(char, sentence) {
  let countLetter = 0;
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] == char) {
      countLetter++;
    }
  }
  return countLetter;
}

// console.log(contaOcorrenciaDeLetra("A", " aa a  aa b bdkdp a efki a"));

// 25
function buscarPalavrasSemelhantes(str, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes(str) == true) {
      console.log(arr[i]);
    }
  }
}

// buscarPalavrasSemelhantes("tes", ["teste", "tesDe", "palavratess"]);

// 26
function removerVogais(phrase) {
  const regex = /[aeiouà-ú]/gi;
  return phrase.replace(regex, "");
}

// console.log(removerVogais("Teste de remoção de caractéres"));

// 27(REVER)
let objToInvert = { a: 1, b: 2, c: 3 };

function invertObj(obj) {
  let newObj = {};
  for (let key in obj) {
    newObj[obj[key]] = key;
  }
  return newObj;
}

// console.log(invertObj(objToInvert));

// 28
function somenteDoisDigitos(arr, digitos) {
  let arrDigitoString = [];
  let novaArrFiltered = [];
  for (let i = 0; i < arr.length; i++) {
    novaArrFiltered.push(arr[i].toString());
  }
  for (let x = 0; x < novaArrFiltered.length; x++) {
    if (novaArrFiltered[x].length == digitos) {
      arrDigitoString.push(novaArrFiltered[x]);
    }
  }

  return arrDigitoString;
}

// console.log(somenteDoisDigitos([12, 10, 100, 40, 22, 9, 100], 2));

// 29
function selecionaOSegundoMaior(arr) {
  let arrNumOrder = arr.sort((a, b) => a - b);
  let indice = arrNumOrder.length;
  return arrNumOrder[indice - 2];
}

// console.log(selecionaOSegundoMaior([2, 8, 2, 4, 356, 743, 36, 246, 7, 8, 6]));

// 30
const estudantes = {
  joao: [2, 10, 8, 3.75],
  carla: [10, 10, 10, 10],
  carmen: [10, 2, 9, 8],
};

let melhorDesempenho = {
  nome: "",
  media: 0.0,
};

function calculaMedia(estudantes) {
  let media = 0.0;
  let comparacao = 0.0;

  for (let estudante in estudantes) {
    media = comparacao;

    comparacao =
      estudantes[estudante].reduce((a, b) => a + b, 0) /
      estudantes[estudante].length;

    if (comparacao > media) {
      media = comparacao;

      melhorDesempenho.nome = estudante;
      melhorDesempenho.media = media;
    }
  }
  return melhorDesempenho;
}

console.log(calculaMedia(estudantes));
