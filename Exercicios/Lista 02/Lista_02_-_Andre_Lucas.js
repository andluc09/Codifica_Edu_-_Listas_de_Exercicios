
//* Programa +PraTi
//* /CODIFICA - Formação Desenvolvedor Full Stack Júnior

//* André Lucas de Macedo Santos


let prompt = require('prompt-sync')();

//* 1

let cigarrosPorDia = parseInt(prompt("\nQuantos cigarros você fuma por dia? "));
let anosFumados = parseInt(prompt("\nHá quantos anos você fuma? "));

let diasFumados = anosFumados * 365;

let totalCigarrosFumados = cigarrosPorDia * diasFumados;

let minutosPerdidos = totalCigarrosFumados * 10;

let diasPerdidos = minutosPerdidos / 1440;

console.log(`\nVocê perderá aproximadamente ${diasPerdidos.toFixed(2)} dias de vida devido ao hábito de fumar.\n`);

//* 2

let velocidade = Number(prompt("\nQual é a velocidade do carro em km/h? "));

if (velocidade > 80) {
      let excesso = velocidade - 80;
    let multa = excesso * 5;

      console.log(`\nVocê foi multado! O valor da multa é R$ ${multa.toFixed(2)}.`);
} else {
      console.log("\nVelocidade dentro do limite permitido.");
}

//* 3

let distancia = Number(prompt("\nQual a distância que deseja percorrer em km? "));

let preco;

if (distancia <= 200) {
    preco = distancia * 0.50;
} else {
    preco = distancia * 0.45;
}

console.log(`\nO preço da passagem é R$ ${preco.toFixed(2)}.`);

//* 4

let ladoA = Number(prompt("\nInforme o comprimento do primeiro segmento de reta: "));
let ladoB = Number(prompt("\nInforme o comprimento do segundo segmento de reta: "));
let ladoC = Number(prompt("\nInforme o comprimento do terceiro segmento de reta: "));


if (ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB) {
      console.log("\nOs segmentos podem formar um triângulo.");
} else {
      console.log("\nOs segmentos não podem formar um triângulo.");
}

//* 5

function gerarEscolhaAleatoria() {
    return Math.floor(Math.random() * 3) + 1; 
}

console.log("\nEscolha uma opção:");
console.log("1: Pedra");
console.log("2: Papel");
console.log("3: Tesoura");

let escolhaUsuario = Number(prompt("\nSua escolha (1, 2, 3): "));

let escolhaComputador = gerarEscolhaAleatoria();

console.log(`\nUsuário escolheu: ${escolhaUsuario}`);
console.log(`Computador escolheu: ${escolhaComputador}`);

if (escolhaUsuario === escolhaComputador) {
      console.log("\nEmpate!");
} else if (
      (escolhaUsuario === 1 && escolhaComputador === 3) ||
      (escolhaUsuario === 2 && escolhaComputador === 1) ||
      (escolhaUsuario === 3 && escolhaComputador === 2)
) {
      console.log("\nUsuário vence!");
} else {
      console.log("\nComputador vence!");
}

//* 6

function gerarNumeroAleatorioEntreUmECinco() {
    return Math.floor(Math.random() * 5) + 1; 
}

console.log("\nBem-vindo ao Jogo de Adivinhação!");
console.log("O computador irá sortear um número entre 1 e 5.");

let numeroSorteado = gerarNumeroAleatorioEntreUmECinco();

let escolhaJogador = Number(prompt("\nTente adivinhar qual número foi sorteado (entre 1 e 5): "));

if (escolhaJogador === numeroSorteado) {
      console.log("\nParabéns! Você acertou!");
} else {
      console.log(`\nQue pena! O número sorteado foi ${numeroSorteado}.`);
}

//* 7

let tipoCarro = prompt("\nDigite o tipo de carro (popular ou luxo): ");
let quantidadeDias = Number(prompt("\nDigite a quantidade de dias de aluguel: "));
let quilometrosPercorridos = Number(prompt("\nDigite a quantidade de quilômetros percorridos: "));

let precoDia;
let precoKm;

if (tipoCarro === "popular") {
   precoDia = 90;
   if (quilometrosPercorridos <= 100) {
      precoKm = 0.20;
   } else {
      precoKm = 0.10;
   }
} else if (tipoCarro === "luxo") {
   precoDia = 150;
   if (quilometrosPercorridos <= 200) {
      precoKm = 0.30;
   } else {
      precoKm = 0.25;
   }
} else {
   console.log("\nTipo de carro inválido. Use 'popular' ou 'luxo'.");
   process.exit(1);
}

let precoTotal = (precoDia * quantidadeDias) + (precoKm * quilometrosPercorridos);

console.log(`\nO preço a ser pago é R$ ${precoTotal.toFixed(2)}.`);

//* 8

let horasAtividade = Number(prompt("\nDigite o número de horas de atividade física realizadas no mês: "));

let pontos;
if (horasAtividade <= 10) {
    pontos = horasAtividade * 2;
} else if (horasAtividade <= 20) {
    pontos = horasAtividade * 5;
} else {
    pontos = horasAtividade * 10;
}

let valorGanho = pontos * 0.05; 

console.log(`\nVocê ganhou ${pontos} pontos.`);
console.log(`\nIsso corresponde a R$ ${valorGanho.toFixed(2)}.`);

//* 9

let totalSalarioHomens = 0;
let totalSalarioMulheres = 0;
let continuar = true;

while (continuar) {
   let salario = Number(prompt("\nDigite o salário do funcionário: "));
   let sexo = prompt("\nDigite o sexo do funcionário (M/F): ").toUpperCase();

   if (sexo === "M") {
      totalSalarioHomens += salario;
   } else if (sexo === "F") {
      totalSalarioMulheres += salario;
   } else {
      console.log("\nSexo inválido. Use 'M' para masculino ou 'F' para feminino.");
   }

   let resposta = prompt("\nDeseja continuar? (S/N): ").toUpperCase();
   continuar = resposta === "S";
}

console.log(`\nTotal de salário pago aos homens: R$ ${totalSalarioHomens.toFixed(2)}`);
console.log(`\nTotal de salário pago às mulheres: R$ ${totalSalarioMulheres.toFixed(2)}`);

//* 10

let somatorio = 0;
let menorValor = Infinity;
let quantidadePares = 0;
let quantidadeValores = 0;
let prosseguir = true;

do {
   let numero = Number(prompt("\nDigite um número: "));
   somatorio += numero;
   if (numero < menorValor) {
      menorValor = numero;
   }
   if (numero % 2 === 0) {
      quantidadePares++;
   }
   quantidadeValores++;

   let resposta = prompt("\nDeseja continuar? (S/N): ").toUpperCase();
   prosseguir = resposta === "S";
} while (prosseguir);

let media = somatorio / quantidadeValores;

console.log(`\nSomatório dos valores: ${somatorio}`);
console.log(`\nMenor valor digitado: ${menorValor}`);
console.log(`\nMédia dos valores: ${media.toFixed(2)}`);
console.log(`\nQuantidade de valores pares: ${quantidadePares}`);

//* 11

function calcularPA() {
   let primeiroTermo = parseInt(prompt("\nDigite o primeiro termo da PA: "));
   let razao = parseInt(prompt("\nDigite a razão da PA: "));
   let soma = 0;
   let pa = '';

   for (let n = 1; n <= 10; n++) {
      let elemento = primeiroTermo + (n - 1) * razao;
      soma += elemento;
      pa += elemento + ', ';
   }

   console.log(`\nPA: ${pa.slice(0, -2)}`);
   console.log(`\nSoma dos elementos: ${soma}`);
}

calcularPA();

//* 12

function calcularFibonacci(n) {
   let fibonacci = [1, 1];

   for (let i = 2; i < n; i++) {
      fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
   }

   return fibonacci;
}

let elementosFibonacci = calcularFibonacci(10);
console.log("\nOs 10 primeiros elementos da Sequência de Fibonacci:\n");
console.log(elementosFibonacci.join(", "));

//* 13

let fibonacci = new Array(15);

fibonacci[0] = 1;
fibonacci[1] = 1;
for (let i = 2; i < 15; i++) {
   fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}

console.log("\nVetor com os primeiros 15 elementos da sequência de Fibonacci:\n");
console.log(fibonacci.join(", "));

//* 14

let nomes = [];

for (let i = 0; i < 7; i++) {
   let nome = prompt(`\nDigite o ${i + 1}º nome: `);
   nomes.push(nome);
}

console.log("\nNomes na ordem inversa:");
for (let i = 6; i >= 0; i--) {
   console.log(nomes[i]);
}

//* 15

let numeros = [];

for (let i = 0; i < 10; i++) {
   let numero = parseInt(prompt(`\nDigite o ${i + 1}º número inteiro: `));
   numeros.push(numero);
}

console.log("\nNúmeros pares e suas posições:");
for (let i = 0; i < 10; i++) {
   if (numeros[i] % 2 === 0) {
      console.log(`\nNúmero ${numeros[i]} na posição ${i}`);
   }
}

//* 16

let numerosArray = [];

for (let i = 0; i < 20; i++) {
   let numeroAleatorio = Math.floor(Math.random() * 100); 
   numerosArray.push(numeroAleatorio);
}

console.log("\nNúmeros gerados:");
console.log(numerosArray.join(", "));

for (let i = 0; i < numerosArray.length; i++) {
   for (let j = 0; j < numerosArray.length - i - 1; j++) {
      if (numerosArray[j] > numerosArray[j + 1]) {
         [numerosArray[j], numerosArray[j + 1]] = [numerosArray[j + 1], numerosArray[j]];
      }
   }
}

console.log("\nNúmeros ordenados:");
console.log(numerosArray.join(", "));

//* 17

let nomesPessoas = [];
let idades = [];

for (let i = 0; i < 9; i++) {
   let nome = prompt(`\nDigite o nome da ${i + 1}ª pessoa: `);
   nomesPessoas.push(nome);

   let idade = parseInt(prompt(`\nDigite a idade de ${nomesPessoas[i]}: `));
   idades.push(idade);
}

console.log("\nPessoas menores de idade:");
for (let i = 0; i < 9; i++) {
   if (idades[i] < 18) {
      console.log(`\n${nomesPessoas[i]} - ${idades[i]} anos`);
   }
}

//* 18

let funcionario = {
   nome: "",
   cargo: "",
   salario: 0,
};

funcionario.nome = prompt("\nDigite o nome do funcionário: ");
funcionario.cargo = prompt("\nDigite o cargo do funcionário: ");
funcionario.salario = parseFloat(prompt("\nDigite o salário do funcionário: "));

console.log("\nDados do funcionário:");
console.log(`\nNome: ${funcionario.nome}`);
console.log(`\nCargo: ${funcionario.cargo}`);
console.log(`\nSalário: R$ ${funcionario.salario.toFixed(2)}`);

//* 19

function criarHorario(horas, minutos, segundos) {
   return {
      horas: horas,
      minutos: minutos,
      segundos: segundos,
   };
}

let horarios = [];
for (let i = 0; i < 5; i++) {
   let horas, minutos, segundos;
   do {
      horas = parseInt(prompt(`\nDigite as horas do ${i + 1}º horário (0 a 23):`));
   } while (horas < 0 || horas > 23);

   do {
      minutos = parseInt(prompt(`\nDigite os minutos do ${i + 1}º horário (0 a 59): `));
   } while (minutos < 0 || minutos > 59);

   do {
      segundos = parseInt(prompt(`\nDigite os segundos do ${i + 1}º horário (0 a 59): `));
   } while (segundos < 0 || segundos > 59);

   horarios.push(criarHorario(horas, minutos, segundos));
}

console.log("\nHorários no formato HH.MM.SS:");
for (let horario of horarios) {
   console.log(`\n${horario.horas}:${horario.minutos}:${horario.segundos}`);
}

//* 20

function criarFuncionario(matricula, nome, salarioBruto) {
   return {
      matricula: matricula,
      nome: nome,
      salarioBruto: salarioBruto,
   };
}

let funcionarios = [];
for (let i = 0; i < 2; i++) {
   let matricula, nome, salarioBruto;
   do {
      matricula = prompt(`\nDigite a matrícula do ${i + 1}º funcionário: `);
   } while (!matricula);

   do {
      nome = prompt(`\nDigite o nome do funcionário de matrícula ${matricula}: `);
   } while (!nome);

   do {
      salarioBruto = parseFloat(prompt(`\nDigite o salário bruto do funcionário de matrícula ${matricula}: `));
   } while (isNaN(salarioBruto) || salarioBruto <= 0);

   funcionarios.push(criarFuncionario(matricula, nome, salarioBruto));
}

for (let funcionario of funcionarios) {
   let deducaoINSS = funcionario.salarioBruto * 0.12;
   let salarioLiquido = funcionario.salarioBruto - deducaoINSS;

   console.log(`\nMatrícula: ${funcionario.matricula}`);
   console.log(`\nNome: ${funcionario.nome}`);
   console.log(`\nSalário bruto: R$ ${funcionario.salarioBruto.toFixed(2)}`);
   console.log(`\nDedução INSS: R$ ${deducaoINSS.toFixed(2)}`);
   console.log(`\nSalário líquido: R$ ${salarioLiquido.toFixed(2)}`);
   console.log("\n");
}

//* 21

function calcularPesoIdeal(altura, sexo) {
   if (sexo === "masculino") {
       return 72.7 * altura - 58;
   } else if (sexo === "feminino") {
       return 62.1 * altura - 44.7;
   } else {
      return "Sexo não especificado corretamente.";
   }
}

let sexo = prompt('\nInforme o sexo (masculino ou feminino): ');
let altura = parseFloat(prompt('\nInforme a altura em metros: '));
let pesoIdeal = calcularPesoIdeal(altura, sexo);
console.log(`\nO peso ideal para uma pessoa de ${altura} m e sexo ${sexo} é aproximadamente ${pesoIdeal.toFixed(2)} kg.`);

//* 22

function analisePopulacional() {
   let somaSalarios = 0;
   let somaFilhos = 0;
   let numPessoasAte350 = 0;
   let maiorSalario = 0;
   let numPessoas = 0;

   do {
      let salario = parseFloat(prompt('\nInforme o salário da pessoa: '));
      let numFilhos = parseInt(prompt('\nInforme o número de filhos da pessoa: '));

      somaSalarios += salario;
      somaFilhos += numFilhos;

      if (salario <= 350) {
         numPessoasAte350++;
      }

      if (salario > maiorSalario) {
         maiorSalario = salario;
      }

      numPessoas++;

      let continuar = prompt('\nDeseja continuar? (S/N)').toUpperCase();
      if (continuar !== 'S') {
         break;
      }
   } while (true);

   let mediaSalario = somaSalarios / numPessoas;
   let mediaFilhos = somaFilhos / numPessoas;
   let percentualAte350 = (numPessoasAte350 / numPessoas) * 100;

   console.log(`\nMédia de salário: R$ ${mediaSalario.toFixed(2)}`);
   console.log(`\nMédia de filhos: ${mediaFilhos.toFixed(2)}`);
   console.log(`\nMaior salário: R$ ${maiorSalario.toFixed(2)}`);
   console.log(`\nPercentual de pessoas com salário até R$ 350,00: ${percentualAte350.toFixed(2)}%`);
}

analisePopulacional();

//* 23

function criarMatrizIdentidade(ordem) {
   let matriz = [];

   for (let i = 0; i < ordem; i++) {
      matriz[i] = new Array(ordem).fill(0);
   }

   for (let i = 0; i < ordem; i++) {
      matriz[i][i] = 1;
   }

   return matriz;
}

function imprimirMatriz(matriz) {
   for (let i = 0; i < matriz.length; i++) {
      for (let j = 0; j < matriz[i].length; j++) {
         process.stdout.write(matriz[i][j] + ' ');
      }
      console.log(); 
   }
}

let ordemMatriz = Number(prompt('\nInsira um número de elementos para gerar a Matriz Identidade [1..n,1..n]: '));
let matrizIdentidade = criarMatrizIdentidade(ordemMatriz);
imprimirMatriz(matrizIdentidade);

//* 24

function criarMatrizAleatoria(linhas, colunas) {
   let matriz = [];
   for (let i = 0; i < linhas; i++) {
      matriz[i] = [];
      for (let j = 0; j < colunas; j++) {
         matriz[i][j] = Math.floor(Math.random() * 101) - 50;
      }
   }
   return matriz;
}

function contarNegativosPorLinha(matriz) {
   let vetorC = [];
   for (let i = 0; i < matriz.length; i++) {
      let countNegativos = 0;
      for (let j = 0; j < matriz[i].length; j++) {
         if (matriz[i][j] < 0) {
            countNegativos++;
         }
      }
      vetorC.push(countNegativos);
   }
   return vetorC;
}

let matrizGeralM = criarMatrizAleatoria(6, 8); // 6 Linhas e 8 Colunas

let vetorNegativos = contarNegativosPorLinha(matrizGeralM);

console.log('\nMatriz M:', matrizGeralM);
console.log('\nQuantidade de elementos negativos por linha:', vetorNegativos);

//* 25

function criarMatrizAleatoria(linhas, colunas) {
   let matriz = [];
   for (let i = 0; i < linhas; i++) {
      matriz[i] = [];
      for (let j = 0; j < colunas; j++) {
         matriz[i][j] = (Math.random() * 100).toFixed(2);
      }
   }
   return matriz;
}

function calcularSomaColunas(matriz) {
   let somaColunas = new Array(matriz[0].length).fill(0);

   for (let j = 0; j < matriz[0].length; j++) {
      for (let i = 0; i < matriz.length; i++) {
         somaColunas[j] += Number(matriz[i][j]);
      }
   }

   return somaColunas;
}

let matrizReal = criarMatrizAleatoria(15, 20);

console.log('\nMatriz M:', matrizReal);

let somaColunas = calcularSomaColunas(matrizReal);

for (let j = 0; j < somaColunas.length; j++) {
   console.log(`\nSoma da coluna ${j + 1}: ${somaColunas[j].toFixed(2)}`);
}

//* 26

function criarMatrizAleatoria(linhas, colunas) {
   let matriz = [];
   for (let i = 0; i < linhas; i++) {
      matriz[i] = [];
      for (let j = 0; j < colunas; j++) {
         matriz[i][j] = (Math.random() * 21 - 10).toFixed(2);
      }
   }
   return matriz;
}

function criarMatrizProduto(matrizA, matrizB) {
   let matrizP = [];
   for (let i = 0; i < matrizA.length; i++) {
      matrizP[i] = [];
      for (let j = 0; j < matrizA[i].length; j++) {
         matrizP[i][j] = (matrizA[i][j] * matrizB[i][j]).toFixed(2);
      }
   }
   return matrizP;
}

let matrizA = criarMatrizAleatoria(3, 5);
let matrizB = criarMatrizAleatoria(3, 5);

let matrizProduto = criarMatrizProduto(matrizA, matrizB);

console.log('Matriz A:', matrizA);
console.log('Matriz B:', matrizB);
console.log('Matriz Produto (P):', matrizProduto);

//* 27

function criarMatrizAleatoria(linhas, colunas) {
   let matriz = [];
   for (let i = 0; i < linhas; i++) {
      matriz[i] = [];
      for (let j = 0; j < colunas; j++) {
         matriz[i][j] = (Math.random() * 21 - 10).toFixed(2);
      }
   }
   return matriz;
}

function multiplicarMatrizPorValor(matriz, valor) {
   let vetorV = [];
   for (let i = 0; i < matriz.length; i++) {
      for (let j = 0; j < matriz[i].length; j++) {
         let resultado = (matriz[i][j] * valor).toFixed(2);
         vetorV.push(resultado);
      }
   }
   return vetorV;
}

let matrizGeradaM = criarMatrizAleatoria(6, 6);

let valorA = 2;

let vetorV = multiplicarMatrizPorValor(matrizGeradaM, valorA);

console.log('\nMatriz M:', matrizGeradaM);
console.log('\nValor A:', valorA);
console.log('\nVetor V:', vetorV);

//* 28

function criarMatrizAleatoria(linhas, colunas) {
   let matriz = [];
   for (let i = 0; i < linhas; i++) {
      matriz[i] = [];
      for (let j = 0; j < colunas; j++) {
         matriz[i][j] = (Math.random() * 21 - 10).toFixed(2);
      }
   }
   return matriz;
}

function calcularSomaAcimaDiagonal(matriz) {
   let somaAcima = 0;
   for (let i = 0; i < matriz.length; i++) {
      for (let j = i + 1; j < matriz[i].length; j++) {
         somaAcima += parseFloat(matriz[i][j]);
      }
   }
   return somaAcima;
}

function calcularSomaAbaixoDiagonal(matriz) {
   let somaAbaixo = 0;
   for (let i = 1; i < matriz.length; i++) {
      for (let j = 0; j < i; j++) {
         somaAbaixo += parseFloat(matriz[i][j]);
      }
   }
   return somaAbaixo;
}

function somarElementosAcimaEAbixoDiagonal(matriz) {
   let somaAcima = 0;
   let somaAbaixo = 0;

   for (let i = 0; i < matriz.length; i++) {
      for (let j = 0; j < matriz[i].length; j++) {
         if (i < j) {
            somaAcima += parseFloat(matriz[i][j]);
         } else if (i > j) {
            somaAbaixo += parseFloat(matriz[i][j]);
         }
      }
   }

   return  somaAcima + somaAbaixo;
}

let matrizDiagonalM = criarMatrizAleatoria(10, 10);

let somaAcima = calcularSomaAcimaDiagonal(matrizDiagonalM);
let somaAbaixo = calcularSomaAbaixoDiagonal(matrizDiagonalM);

let somaTotalExcetoDiagonal = somarElementosAcimaEAbixoDiagonal(matrizDiagonalM);

console.log('\nMatriz M:', matrizDiagonalM);
console.log('\nSoma dos elementos acima da diagonal principal:', somaAcima.toFixed(2));
console.log('\nSoma dos elementos abaixo da diagonal principal:', somaAbaixo.toFixed(2));
console.log('\nSoma dos elementos abaixo e acima da diagonal principal:', somaTotalExcetoDiagonal.toFixed(2));

//* 29

function criarMatrizAleatoria(linhas, colunas) {
   let matriz = [];
   for (let i = 0; i < linhas; i++) {
      matriz[i] = [];
      for (let j = 0; j < colunas; j++) {
         matriz[i][j] = (Math.random() * 21 - 10).toFixed(2);
      }
   }
   return matriz;
}

function calcularSomaLinha4(matriz) {
   let somaLinha4 = 0;
   for (let j = 0; j < matriz[3].length; j++) {
      somaLinha4 += parseFloat(matriz[3][j]);
   }
   return somaLinha4;
}

function calcularSomaColuna2(matriz) {
   let somaColuna2 = 0;
   for (let i = 0; i < matriz.length; i++) {
      somaColuna2 += parseFloat(matriz[i][1]);
   }
   return somaColuna2;
}

function calcularSomaDiagonalPrincipal(matriz) {
   let somaDiagonal = 0;
   for (let i = 0; i < matriz.length; i++) {
      somaDiagonal += parseFloat(matriz[i][i]);
   }
   return somaDiagonal;
}

function calcularSomaTotal(matriz) {
   let somaTotal = 0;
   for (let i = 0; i < matriz.length; i++) {
      for (let j = 0; j < matriz[i].length; j++) {
         somaTotal += parseFloat(matriz[i][j]);
      }
   }
   return somaTotal;
}

let matrizCriadaM = criarMatrizAleatoria(5, 5);

let somaLinha4 = calcularSomaLinha4(matrizCriadaM);
let somaColuna2 = calcularSomaColuna2(matrizCriadaM);
let somaDiagonal = calcularSomaDiagonalPrincipal(matrizCriadaM);
let somaTotal = calcularSomaTotal(matrizCriadaM);

console.log('\nMatriz M:', matrizCriadaM);
console.log('\nSoma da linha 4:', somaLinha4.toFixed(2));
console.log('\nSoma da coluna 2:', somaColuna2.toFixed(2));
console.log('\nSoma da diagonal principal:', somaDiagonal.toFixed(2));
console.log('\nSoma de todos os elementos:', somaTotal.toFixed(2));

//* 30

function criarMatrizAleatoria(linhas, colunas) {
   let matriz = [];
   for (let i = 0; i < linhas; i++) {
      matriz[i] = [];
      for (let j = 0; j < colunas; j++) {
         matriz[i][j] = (Math.random() * 21 - 10).toFixed(2);
      }
   }
   return matriz;
}

function calcularSomasLinhasColunas(matriz) {
   let SL = new Array(5).fill(0); 
   let SC = new Array(5).fill(0);

   for (let i = 0; i < matriz.length; i++) {
      for (let j = 0; j < matriz[i].length; j++) {
         SL[i] += parseFloat(matriz[i][j]); 
         SC[j] += parseFloat(matriz[i][j]); 
      }
   }

   return { SL, SC };
}

let matrizM = criarMatrizAleatoria(5, 5);

let { SL, SC } = calcularSomasLinhasColunas(matrizM);

console.log('\nMatriz M:', matrizM);
console.log('\nVetor SL (somas das linhas):', SL);
console.log('\nVetor SC (somas das colunas):', SC);

//* 31

function criarMatrizAleatoria(linhas, colunas) {
   let matriz = [];
   for (let i = 0; i < linhas; i++) {
      matriz[i] = [];
      for (let j = 0; j < colunas; j++) {
         matriz[i][j] = Math.floor(Math.random() * 100) + 1;
      }
   }
   return matriz;
}

function contarValoresIguais(matriz, valor) {
   let contagem = 0;
   for (let i = 0; i < matriz.length; i++) {
      for (let j = 0; j < matriz[i].length; j++) {
         if (matriz[i][j] === valor) {
            contagem++;
         }
      }
   }
   return contagem;
}

function criarMatrizX(matriz, valor) {
   let matrizX = [];
   for (let i = 0; i < matriz.length; i++) {
      matrizX[i] = matriz[i].filter(elemento => elemento !== valor);
   }
   return matrizX;
}

let A = parseInt(prompt("\nInsira um número inteiro: "));

let matrizV = criarMatrizAleatoria(30, 30);

let quantidadeA = contarValoresIguais(matrizV, A);

let matrizX = criarMatrizX(matrizV, A);

console.log('\nMatriz V:', matrizV);
console.log(`\nQuantidade de valores iguais a ${A} na matriz V:`, quantidadeA);
console.log(`\nMatriz X (elementos diferentes de ${A}):`, matrizX);

//* 32

function criarMatrizAleatoria(linhas, colunas) {
   let matriz = [];
   for (let i = 0; i < linhas; i++) {
      matriz[i] = [];
      for (let j = 0; j < colunas; j++) {
         matriz[i][j] = (Math.random() * 21 - 10).toFixed(2);
      }
   }
   return matriz;
}

function encontrarMaiorElementoModulo(linha) {
   let maior = Math.abs(linha[0]);
   for (let i = 1; i < linha.length; i++) {
      let elementoModulo = Math.abs(linha[i]);
      if (elementoModulo > maior) {
         maior = elementoModulo;
      }
}
   return maior;
}

function dividirElementosPeloMaiorModulo(matriz) {
   let matrizModificada = [];
   for (let i = 0; i < matriz.length; i++) {
      let maiorModulo = encontrarMaiorElementoModulo(matriz[i]);
      matrizModificada[i] = matriz[i].map(elemento => (elemento / maiorModulo).toFixed(2));
   }
   return matrizModificada;
}

let matrizOriginalM = criarMatrizAleatoria(12, 13);

let matrizModificada = dividirElementosPeloMaiorModulo(matrizOriginalM);

console.log('\nMatriz M original:', matrizOriginalM);
console.log('\nMatriz M modificada:', matrizModificada);

//* 33

function criarMatrizAleatoria(linhas, colunas) {
   let matriz = [];
   for (let i = 0; i < linhas; i++) {
      matriz[i] = [];
      for (let j = 0; j < colunas; j++) {
         matriz[i][j] = (Math.random() * 21 - 10).toFixed(2);
      }
   }
   return matriz;
}

function calcularMediaDiagonalSecundaria(matriz) {
   let somaDiagonalSecundaria = 0;
   for (let i = 0; i < matriz.length; i++) {
      somaDiagonalSecundaria += parseFloat(matriz[i][matriz.length - 1 - i]);
   }
   return somaDiagonalSecundaria / matriz.length;
}

function multiplicarElementosDiagonalPrincipal(matriz, mediaDiagonalSecundaria) {
   let matrizModificada = matriz.map(linha => {
      return linha.map((elemento, j) => {
         if (j === matriz.indexOf(linha)) {
            return (elemento * mediaDiagonalSecundaria).toFixed(2);
         }
         return elemento;
      });
   });
   return matrizModificada;
}

let matrizGeradaOriginalM = criarMatrizAleatoria(3, 3);

let mediaDiagonalSecundaria = calcularMediaDiagonalSecundaria(matrizGeradaOriginalM);

let matrizModificadaM = multiplicarElementosDiagonalPrincipal(matrizGeradaOriginalM, mediaDiagonalSecundaria);

console.log('\nMatriz M original:', matrizGeradaOriginalM);
console.log('\nMatriz M modificada:', matrizModificadaM);

//* 34

function criarMatrizAleatoria(linhas, colunas) {
   let matriz = [];
   for (let i = 0; i < linhas; i++) {
      matriz[i] = [];
      for (let j = 0; j < colunas; j++) {
         matriz[i][j] = (Math.random() * 21 - 10).toFixed(2);
      }
   }
   return matriz;
}

function mostraDiagonalPrincipal(matriz) {
   let diagonal = [];
   for (let i = 0; i < matriz.length; i++) {
      diagonal.push(matriz[i][i]);
   }
   return diagonal;
}

function multiplicarLinhaPelaDiagonalPrincipal(matriz, diagonal) {
   let matrizModificada = [];
   for (let i = 0; i < matriz.length; i++) {
      let linhaModificada = matriz[i].map((elemento, j) => elemento * diagonal[i]);
      matrizModificada.push(linhaModificada);
   }
   return matrizModificada;
}

let matrizOriginal = criarMatrizAleatoria(50,50);

let diagonalPrincipal = mostraDiagonalPrincipal(matrizOriginal);

let matrizModificadaDiagonalPrincipal = multiplicarLinhaPelaDiagonalPrincipal(matrizOriginal, diagonalPrincipal);

console.log("\nMatriz original: ", matrizOriginal);
console.log("\nVetor da diagonal principal: ", diagonalPrincipal);
console.log("\nMatriz modificada:", matrizModificadaDiagonalPrincipal);

//* 35

let vetorPares = [];
let vetorImpares = [];

function ehPar(numero) {
   return numero % 2 === 0;
}

function lerValores() {
   let contadorPares = 0;
   let contadorImpares = 0;

   for (let i = 1; i <= 30; i++) {
      let valor = parseFloat(prompt(`\nDigite o ${i}º valor: `));

      if (ehPar(valor)) {
         if (contadorPares < 5) {
               vetorPares.push(valor);
               contadorPares++;
         } else {
               console.log("\nVetor de pares está cheio: ", vetorPares);
               vetorPares.length = 0; 
         }
      } else {
         if (contadorImpares < 5) {
               vetorImpares.push(valor);
               contadorImpares++;
         } else {
               console.log("\nVetor de ímpares está cheio: ", vetorImpares);
               vetorImpares.length = 0; 
         }
      }
   }
}

lerValores();

console.log("\nVetor de pares: ", vetorPares);
console.log("\nVetor de ímpares: ", vetorImpares);

//* 36

let gabarito = [7, 14, 23, 84, 35, 6, 37, 68, 19, 10, 31, 42, 53];

function verificarAcertos(apostadorNumero, respostas) {
   let acertos = 0;

   for (let i = 0; i < 13; i++) {
      if (respostas[i] === gabarito[i]) {
         acertos++;
      }
   }

   console.log(`Apostador ${apostadorNumero}: ${acertos} acertos`);

   if (acertos === 13) {
      console.log("\nParabéns, você foi o GANHADOR!\n");
   }
}

function gerarVetorInteiro() {
   return Array.from({ length: 13 }, (_, i) => i = parseInt(Math.random() * 101));
}

for (let index = 1; index <= 100; index++) {
   if(index === 75) {
      verificarAcertos(index, [7, 14, 23, 84, 35, 6, 37, 68, 19, 10, 31, 42, 53])
   } else {
      verificarAcertos(index, gerarVetorInteiro());
   }
}

//* 37 

let gabaritoFinal = ['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'A', 'B', 'C', 'D'];

function corrigirProva(respostas) {
   let acertos = 0;

   for (let i = 0; i < 20; i++) {
      if (respostas[i] === gabaritoFinal[i]) {
         acertos++;
      }
   }

   console.log(`\nNúmero de acertos: ${acertos}`);

   if (acertos >= 12) {
      console.log("\nAPROVADO");
   } else {
      console.log("\nREPROVADO");
   }
}

function geraRespostasAluno(tamanho) {
   let letras = ['A', 'B', 'C', 'D'];
   let respostas = [];

   for (let i = 0; i < tamanho; i++) {
      let indiceAleatorio = Math.floor(Math.random() * letras.length);
      respostas.push(letras[indiceAleatorio]);
   }

   return respostas;
}

for (let index = 1; index <= 50; index++) {
   if(index === 45) {
      corrigirProva(['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'A', 'B', 'C', 'D'])
   } else {
      corrigirProva(geraRespostasAluno(20));
   }
}

//* 38

function lerVetor() {
   let vetor = [];
   for (let i = 0; i < 6; i++) {
      let valor = parseFloat(prompt(`\nDigite o ${i + 1}º valor: `));
      vetor.push(valor);
   }
   return vetor;
}

function calcularSoma(vetor) {
   return vetor.reduce((acc, curr) => acc + curr, 0);
}

function calcularProduto(vetor) {
   return vetor.reduce((acc, curr) => acc * curr, 1);
}

function calcularMedia(vetor) {
   let soma = calcularSoma(vetor);
   return soma / vetor.length;
}

function ordenarVetor(vetor) {
   return vetor.slice().sort((a, b) => a - b);
}

function main() {
   let meuVetor = lerVetor();
   let operacao = parseInt(prompt("\nEscolha a operação (1 a 5):\n\n1. Soma\n\n2. Produto\n\n3. Média\n\n4. Ordenar\n\n5. Mostrar vetor\n\n"));

   switch (operacao) {
      case 1:
         console.log("\nSoma dos elementos: ", calcularSoma(meuVetor));
         break;
      case 2:
         console.log("\nProduto dos elementos: ", calcularProduto(meuVetor));
         break;
      case 3:
         console.log("\nMédia dos elementos: ", calcularMedia(meuVetor));
         break;
      case 4:
         console.log("\nVetor ordenado: ", ordenarVetor(meuVetor));
         break;
      case 5:
         console.log("\nVetor: ", meuVetor);
         break;
      default:
         console.log("\nOpção inválida.");
   }
}

main();

//* 39

function lerVetor() {
   let vetor = [];
   for (let i = 0; i < 100; i++) {
      let valor = parseFloat(prompt(`\nDigite o ${i + 1}º valor: `));
      vetor.push(valor);
   }
   return vetor;
}

function compactarVetor(vetor) {
   let vetorCompactado = vetor.filter(elemento => elemento > 0);
   return vetorCompactado;
}

function main() {
   let meuVetor = lerVetor();
   let vetorCompactado = compactarVetor(meuVetor);

   console.log("\nVetor compactado: ", vetorCompactado);
}

main();

//* 40

function lerResultadoOficial() {
   let resultadoOficial = [];
   for (let i = 0; i < 5; i++) {
      let numero = parseInt(prompt(`\nDigite o ${i + 1}º número do resultado oficial: `));
      resultadoOficial.push(numero);
   }
   return resultadoOficial;
}

function lerAposta() {
   let resultadoAposta = [];
   for (let i = 0; i < 5; i++) {
      let numero = parseInt(prompt(`\nDigite o ${i + 1}º número de sua aposta: `));
      resultadoAposta.push(numero);
   }
   return resultadoAposta;
}

function verificarApostas(resultadoOficial) {
   for (let i = 1; i <= 50; i++) {
      let aposta = lerAposta();
      let todosIguais = aposta.every(numero => resultadoOficial.includes(numero));

      if (todosIguais) {
         console.log(`\nApostador(a) ${i} é Ganhador(a)!`);
         resultadoOficial.pop()
      }
   }
}

verificarApostas(lerResultadoOficial());

//* 41 

let pessoa = {
   nome: "João",
   idade: 30,
};

console.log("\nIdade:", pessoa.idade);

pessoa.email = "joao@mail.com";

console.log("\nObjeto pessoa:", pessoa);

//* 42

let dados = {
   nome: "Alice",
   idade: 25,
   numeros: [1, 2, 3],
   cidade: "São Paulo",
   cores: ["vermelho", "azul"],
};

function filtrarArrays(objeto) {
   let resultado = {};

   for (let propriedade in objeto) {
      if (Array.isArray(objeto[propriedade])) {
         resultado[propriedade] = objeto[propriedade];
      }
   }

   return resultado;
}

let novoObjeto = filtrarArrays(dados);

console.log("\nNovo objeto:", novoObjeto);

//* 43

function combinarObjetos(obj1, obj2) {
   let objetoCombinado = { ...obj1, ...obj2 };
   return objetoCombinado;
}

let obj1 = { nome: "Alice", idade: 25 };
let obj2 = { idade: 30, email: "alice@mail.com" };

console.log("\nObjeto 1: ",obj1);

console.log("\nObjeto 2: ",obj2);

let novoObjetoCombinado = combinarObjetos(obj1, obj2);

console.log("\nNovo objeto combinado: ", novoObjetoCombinado);

//* 44

function contarPropriedadesString(objeto) {
   let contador = 0;

   for (let propriedade in objeto) {
      if (typeof objeto[propriedade] === "string") {
         contador++;
      }
   }

   return contador;
}

let meuObjeto = {
   nome: "Alice",
   idade: 25,
   email: "alice@mail.com",
};

let numeroDeStrings = contarPropriedadesString(meuObjeto);

console.log("\nObjeto: ", meuObjeto);

console.log("\nNúmero de propriedades do tipo string:", numeroDeStrings);

//* 45

function contarOcorrencias(strings) {
   let contador = {};

   for (let string of strings) {
      if (contador[string]) {
         contador[string]++;
      } else {
         contador[string] = 1;
      }
   }

   return contador;
}

let meuArray = ["maça", "banana", "maça", "laranja", "banana", "maça"];

let resultado = contarOcorrencias(meuArray);

console.log(`\nTipo da variável: ${typeof resultado}`);

console.log("\nObjeto de contagem:", resultado);

//* 46

function sumarizarVendasPorVendedor(vendas) {
   let sumarioVendas = {};

   for (let venda of vendas) {
      let vendedor = venda.vendedor;
      let valorVenda = venda.valor;

      if (sumarioVendas[vendedor]) {
         sumarioVendas[vendedor] += valorVenda;
      } else {
         sumarioVendas[vendedor] = valorVenda;
      }
   }

   return sumarioVendas;
}

let vendas = [
   { vendedor: "João", valor: 100 },
   { vendedor: "Maria", valor: 200 },
   { vendedor: "João", valor: 150 },
   { vendedor: "Pedro", valor: 180 },
   { vendedor: "Maria", valor: 500 },
];

console.log("\nArray de objetos:\n", vendas);

let resultadoSumario = sumarizarVendasPorVendedor(vendas);
console.log("\nSumário de vendas por vendedor: \n", resultadoSumario);

//* 47

function transformarObjeto(objeto, funcao) {
   let objetoTransformado = {};

   for (let propriedade in objeto) {
      objetoTransformado[propriedade] = funcao(objeto[propriedade]);
   }

   return objetoTransformado;
}

let meuObjetoOriginal = { altura: 10, largura: 20, comprimento: 30 };

function multiplicarPor2(valor) {
   return valor * 2;
}

console.log("\nObjeto original:\n", meuObjetoOriginal);

let novoObjetoAtualizado = transformarObjeto(meuObjetoOriginal, multiplicarPor2);
console.log("\nNovo objeto transformado: \n", novoObjetoAtualizado);

//* 48

function combinarInventarios(inventarioLojaA, inventarioLojaB) {
   let inventarioCombinado = { ...inventarioLojaA };

   for (let item in inventarioLojaB) {
      if (inventarioCombinado[item]) {
         inventarioCombinado[item] += inventarioLojaB[item];
      } else {
         inventarioCombinado[item] = inventarioLojaB[item];
      }
   }

   return inventarioCombinado;
}

let inventarioLojaA = { martelo: 10, alicate: 15, parafuso: 20 };
let inventarioLojaB = { alicate: 5, serrote: 8, parafuso: 12 };

let inventarioFinal = combinarInventarios(inventarioLojaA, inventarioLojaB);
console.log("\nInventário combinado: \n", inventarioFinal);

//* 49

function agruparTransacoesPorCategoria(transacoes) {
   let resultado = {};

   for (let transacao of transacoes) {
      let { categoria, valor } = transacao;

      if (!resultado[categoria]) {
         resultado[categoria] = {
            transacoes: [],
            subtotal: 0,
         };
      }

      resultado[categoria].transacoes.push(transacao.constructor.name);
      resultado[categoria].subtotal += valor;
   }

   return resultado;
}

let transacoes = [
   { id: 0, valor: 69, categoria: "Luz" },
   { id: 1, valor: 100, categoria: "Alimentação" },
   { id: 2, valor: 50, categoria: "Transporte" },
   { id: 3, valor: 200, categoria: "Alimentação" },
   { id: 4, valor: 650, categoria: "Transporte" },
   { id: 5, valor: 400, categoria: "Alimentação" },
   { id: 6, valor: 150, categoria: "Água" },
   { id: 7, valor: 75, categoria: "Água" },
   { id: 8, valor: 290, categoria: "Luz" },
];

let resultadoFinal = agruparTransacoesPorCategoria(transacoes);
console.log("Transações agrupadas por categoria:", resultadoFinal);

//* 50

let hotels = [];
let reservas = [];

function adicionarHotel() {
   let id = prompt("Digite o ID do hotel: ");
   let nome = prompt("Digite o nome do hotel: ");
   let cidade = prompt("Digite a cidade do hotel: ");
   let quartosTotais = parseInt(prompt("Digite o número total de quartos: "));
   let quartosDisponiveis = quartosTotais;

   if (isNaN(quartosTotais) || quartosTotais <= 0) {
      console.log("Número de quartos inválido.");
      return;
   }

   let hotel = {
      id,
      nome,
      cidade,
      quartosTotais,
      quartosDisponiveis
   };

   hotels.push(hotel);
   console.log("Hotel adicionado com sucesso!");
}

function buscarHoteisPorCidade() {
   let cidade = prompt("Digite a cidade para buscar hotéis: ");
   let hoteisEncontrados = hotels.filter(hotel => hotel.cidade.toUpperCase() === cidade.toUpperCase());

   if (hoteisEncontrados.length > 0) {
      console.log("Hotéis encontrados na cidade de " + cidade + ": ");
      hoteisEncontrados.forEach(hotel => {
         console.log(`- ${hotel.nome} (${hotel.quartosDisponiveis} quartos disponíveis)`);
      });
   } else {
      console.log("Nenhum hotel encontrado na cidade de " + cidade);
   }
}

function fazerReserva() {
   let idHotel = prompt("Digite o ID do hotel: ");
   let nomeCliente = prompt("Digite o nome do cliente: ");

   let hotel = hotels.find(h => h.id === idHotel);

   if (hotel) {
      if (hotel.quartosDisponiveis > 0) {
         let idReserva = gerarIdReservaUnico();
         let reserva = {
               idReserva,
               idHotel,
               nomeCliente
         };
         reservas.push(reserva);
         hotel.quartosDisponiveis--;
         console.log("Reserva feita com sucesso!\n Código identificador da reserva: ", idReserva);
      } else {
         console.log("Não há quartos disponíveis neste hotel.");
      }
   } else {
      console.log("Hotel não encontrado. Verifique o ID informado.");
   }
}

function cancelarReserva() {
   let idReserva = Number(prompt("Digite o ID da reserva: "));

   if (isNaN(idReserva)) {
      console.log("ID de reserva inválido.");
      return;
   }

   let reservaIndex = reservas.findIndex(r => r.idReserva === idReserva);

   if (reservaIndex !== -1) {
      let reserva = reservas.splice(reservaIndex, 1)[0];
      let hotel = hotels.find(h => h.id === reserva.idHotel);
      hotel.quartosDisponiveis++;
      console.log("Reserva cancelada com sucesso!");
   } else {
      console.log("Reserva não encontrada. Verifique o ID informado.");
   }
}

function listarReservas() {
   console.log("Lista de reservas: ");
   for (let reserva of reservas) {
      let hotel = hotels.find(h => h.id === reserva.idHotel);
      console.log(`- Reserva: ${reserva.idReserva}, Cliente: ${reserva.nomeCliente}, Hotel: ${hotel.nome}, Cidade: ${hotel.cidade}`);
   }
}

function gerarIdReservaUnico() {
   return reservas.length > 0 ? reservas[reservas.length - 1].idReserva + 1 : 1;
}

function fazerCheckIn(idReserva) {
   let reserva = reservas.find(r => r.idReserva === idReserva);

   if (reserva) {
      if (!reserva.checkIn) {
         reserva.checkIn = true;
         let hotel = hotels.find(h => h.id === reserva.idHotel);
         if (hotel) {
               hotel.quartosDisponiveis--;
               console.log("Check-in realizado com sucesso!");
         } else {
               console.log("Hotel não encontrado. Verifique o ID informado.");
         }
      } else {
         console.log("Esta reserva já foi realizada o check-in.");
      }
   } else {
      console.log("Reserva não encontrada. Verifique o ID informado.");
   }
}

function fazerCheckOut(idReserva) {
   let reserva = reservas.find(r => r.idReserva === idReserva);

   if (reserva) {
      if (reserva.checkIn && !reserva.checkOut) {
         reserva.checkOut = true;
         let hotel = hotels.find(h => h.id === reserva.idHotel);
         if (hotel) {
               hotel.quartosDisponiveis++;
               console.log("Check-out realizado com sucesso!");
         } else {
               console.log("Hotel não encontrado. Verifique o ID informado.");
         }
      } else if (!reserva.checkIn) {
         console.log("É necessário realizar o check-in antes de fazer o check-out.");
      } else {
         console.log("Esta reserva já foi realizada o check-out.");
      }
   } else {
      console.log("Reserva não encontrada. Verifique o ID informado.");
   }
}

function gerarRelatorioOcupacao(idHotel) {
   let hotel = hotels.find(h => h.id === idHotel);

   if (hotel) {
      let ocupacaoPercentual = ((hotel.quartosTotais - hotel.quartosDisponiveis) / hotel.quartosTotais) * 100;
      console.log(`Relatório de ocupação para o hotel ${hotel.nome}:`);
      console.log(`- Quartos totais: ${hotel.quartosTotais}`);
      console.log(`- Quartos ocupados: ${hotel.quartosTotais - hotel.quartosDisponiveis}`);
      console.log(`- Percentual de ocupação: ${ocupacaoPercentual.toFixed(2)}%`);
   } else {
      console.log("Hotel não encontrado. Verifique o ID informado.");
   }
}

function avaliarHotel(idHotel, avaliacao) {
   let hotel = hotels.find(h => h.id === idHotel);

   if (hotel) {
      if (!hotel.avaliacoes) {
         hotel.avaliacoes = [];
      }
      hotel.avaliacoes.push(avaliacao);
      console.log("Avaliação registrada com sucesso!");
   } else {
      console.log("Hotel não encontrado. Verifique o ID informado.");
   }
}

function menuDesenvolvedor() {
   let opcao;
   do {
      console.log("\n====== Menu Desenvolvedor ======\n");
      console.log("1. Mostrar hotéis");
      console.log("2. Mostrar reservas");
      console.log("3. Voltar ao menu principal");
      console.log("\n====== Menu Desenvolvedor ======\n");
      console.log("1. Mostrar hotéis");
      console.log("2. Mostrar reservas");
      console.log("3. Voltar ao menu principal");

      opcao = Number(prompt("Escolha uma opção: "));

         switch (opcao) {
         case 1:
            console.log("\nLista de Hotéis:");
            hotels.forEach(hotel => {
               console.log(`ID: ${hotel.id}, Nome: ${hotel.nome}, Cidade: ${hotel.cidade}, Quartos Totais: ${hotel.quartosTotais}, Quartos Disponíveis: ${hotel.quartosDisponiveis}`);
               if (hotel.avaliacoes) {
                     console.log("Avaliações: ", hotel.avaliacoes);
               }
            });
            break;
         case 2:
            console.log("\nLista de Reservas:");
            reservas.forEach(reserva => {
               console.log(`ID Reserva: ${reserva.idReserva}, ID Hotel: ${reserva.idHotel}, Nome Cliente: ${reserva.nomeCliente}, Check-In: ${reserva.checkIn}, Check-Out: ${reserva.checkOut}`);
            });
            break;
         case 3:
            console.log("\nVoltando ao menu principal...");
            Main();
            break;
         default:
            console.log("Opção inválida. Por favor, escolha uma opção válida.");
      }
   } while (opcao !== 3);
}

function Main() {
   let opcao;
   do {
      console.log("\n====== Menu ======\n");
      console.log("1. Adicionar hotéis");
      console.log("2. Buscar hotéis por cidade");
      console.log("3. Fazer reserva");
      console.log("4. Cancelar reserva");
      console.log("5. Listar reservas");
      console.log("6. Check-in");
      console.log("7. Check-out");
      console.log("8. Relatórios de ocupação");
      console.log("9. Avaliações de hotéis");
      console.log("10. Menu Desenvolvedor");
      console.log("11. Sair");

      opcao = parseInt(prompt("\nEscolha uma opção: "));

      switch (opcao) {
         case 1:
               adicionarHotel();
               break;
         case 2:
               buscarHoteisPorCidade();
               break;
         case 3:
               fazerReserva();
               break;
         case 4:
               cancelarReserva();
               break;
         case 5:
               listarReservas();
               break;
         case 6:
               let reservaCheckInID = Number(prompt("Digite o ID da sua reserva para realizar check-in: "));
               if (!isNaN(reservaCheckInID)) {
                  fazerCheckIn(reservaCheckInID);
               } else {
                  console.log("ID de reserva inválido.");
               }
               break;
         case 7:
               let reservaCheckOutID = Number(prompt("Digite o ID da sua reserva para realizar check-out: "));
               if (!isNaN(reservaCheckOutID)) {
                  fazerCheckOut(reservaCheckOutID);
               } else {
                  console.log("ID de reserva inválido.");
               }
               break;
         case 8:
               let idHotel = prompt("Digite o ID do hotel para gerar o relatório de ocupação: ");
               gerarRelatorioOcupacao(idHotel);
               break;
         case 9:
               let idHotelAvaliacao = prompt("Digite o ID do hotel para avaliação: ");
               let avaliacao = prompt("Digite a avaliação: ");
               avaliarHotel(idHotelAvaliacao, avaliacao);
               break;
         case 10:
               menuDesenvolvedor();
               break;
         case 11:
               console.log("\nSaindo...");
               break;
         default:
               console.log("Opção inválida. Por favor, escolha uma opção válida.");
      }
   } while (opcao !== 11);
}

Main();

function executarQuestao() {
   const numeroQuestao = parseInt(prompt("Digite o número da questão que deseja executar (1-50):"));

   switch (numeroQuestao) {
      case 1:
         questao1();
         break;
      case 2:
         questao2();
         break;
      case 3:
         questao3();
         break;
      case 4:
         questao4();
         break;
         break;
      case 5:
         questao5();
         break;
      case 6:
         questao6();
         break;
      case 7:
         questao7();
         break;
      case 8:
         questao8();
         break;
      case 9:
         questao9();
         break;
      case 10:
         questao10();
         break;
      case 11:
         questao11();
         break;
      case 12:
         questao12();
         break;
      case 13:
         questao13();
         break;
      case 14:
         questao14();
         break;
      case 15:
         questao15();
         break;
      case 16:
         questao16();
         break;
      case 17:
         questao17();
         break;
      case 18:
         questao18();
         break;
      case 19:
         questao19();
         break;
      case 20:
         questao20();
         break;
      case 21:
         questao21();
         break;
      case 22:
         questao22();
         break;
      case 23:
         questao23();
         break;
      case 24:
         questao24();
         break;
      case 25:
         questao25();
         break;
      case 26:
         questao26();
         break;
         break;
      case 27:
         questao27();
         break;
      case 28:
         questao28();
         break;
      case 29:
         questao29();
         break;
      case 30:
         questao30();
         break;
      case 31:
         questao31();
         break;
      case 32:
         questao32();
         break;
      case 33:
         questao33();
         break;
      case 34:
         questao34();
         break;
      case 35:
         questao35();
         break;
      case 36:
         questao36();
         break;
      case 37:
         questao37();
         break;
      case 38:
         questao38();
         break;
      case 39:
         questao39();
         break;
      case 40:
         questao40();
         break;
      case 41:
         questao41();
         break;
      case 42:
         questao42();
         break;
      case 43:
         questao43();
         break;
      case 44:
         questao44();
         break;
      case 45:
         questao45();
         break;
      case 46:
         questao46();
         break;
      case 47:
         questao47();
         break;
      case 48:
         questao48();
         break;
      case 49:
         questao49();
         break;
      case 50:
         questao50();
         break;
      default:
         console.log("Número de questão inválido. Por favor, escolha um número entre 1 e 50.");
   }
}

executarQuestao();
