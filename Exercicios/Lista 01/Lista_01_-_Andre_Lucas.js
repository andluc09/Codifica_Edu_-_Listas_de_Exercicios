
//* Programa +PraTi
//* /CODIFICA - Formação Desenvolvedor Full Stack Júnior

//* André Lucas de Macedo Santos

const prompt = require('prompt-sync')();

let exerciseNumber = 1;
let input;

while (exerciseNumber <= 16) {
     console.log(`\n< Exercício ${exerciseNumber} />\n`);
     switch (exerciseNumber) {
          case 1:
          //* 1

               let grausCelsius = Number(prompt("\n Digite aqui a temperatura em graus Celsius (°C) : "));

               let grausFahrenheit = 0;

               grausFahrenheit = (grausCelsius * 9/5) + 32;

               console.log(`\n Temperatura em graus Fahrenheit: ${grausFahrenheit} °F`);
          
               break;

          case 2:
          //* 2

               let totalEleitores = Number(prompt(" Insira o número total de eleitores do município: "));

               let votosBrancos = Number(prompt(" Insira o número de votos brancos: "));

               let votosNulos = Number(prompt(" Insira o número de votos nulos: "));

               let votosValidos = Number(prompt(" Insira o número de votos válidos: "));

               function percentual(num, total){
                    let percentual = 0;

               percentual = (num / total) * 100;

                    return percentual.toFixed(2);
               }

               console.log(`\n Percentual de votos brancos: ${percentual(votosBrancos, totalEleitores)}%`);
               console.log(`\n Percentual de votos brancos: ${percentual(votosNulos, totalEleitores)}%`);
               console.log(`\n Percentual de votos brancos: ${percentual(votosValidos, totalEleitores)}%`);

               break;

          case 3:
          //* 3

               let num1 = Number(prompt(" Insira o primeiro número: "));
               let num2 = Number(prompt(" Insira o segundo número: "));
               let num3 = Number(prompt(" Insira o terceiro número: "));
               let num4 = Number(prompt(" Insira o quarto número: "));

               num1 = num1 + 25;

               num2 = num2 * 3;

               aux = num3;
               num3 = (num3*12)/100;

               num4 = (num1 - 25) + (num2 / 3) + (num3 + ((aux*88)/100));

               console.log(`\n Resultado das operações: ${num1}, ${num2}, ${num3}, ${num4}`);

               break;

          case 4:
          //* 4

               let nota1Avaliacao = Number(prompt(" Insira a nota da 1ª primeira avaliação: "));
               let nota2Avaliacao = Number(prompt(" Insira a nota da 2ª segunda avaliação: "));

               let mediaFinal;
               mediaFinal = (nota1Avaliacao + nota2Avaliacao)/2;

               if (mediaFinal >= 6){
                    console.log(`\n Média semestral: ${mediaFinal} \n PARABÉNS! Você foi aprovado`);
               }

               break;

          case 5:
          //* 5

               let nota1 = Number(prompt(" Insira a nota da 1ª primeira avaliação: "));
               let nota2 = Number(prompt(" Insira a nota da 2ª segunda avaliação: "));

               let media;
                    media = (nota1 + nota2)/2;

               if (media >= 6){
                    console.log(`\n Média semestral: ${media} \n PARABÉNS! Você foi aprovado`);
               }else{
                    console.log(`\n Média semestral: ${media} \n Você foi REPROVADO! Estude mais`);
               }

               break;

          case 6:
          //* 6

               let ladoA = Number(prompt(" Insira um valor para o lado A do triângulo: "));
               let ladoB = Number(prompt(" Insira um valor para o lado B do triângulo: "));
               let ladoC = Number(prompt(" Insira um valor para o lado C do triângulo: "));

               if ((ladoA < (ladoB + ladoC)) && (ladoB < (ladoA + ladoC)) && (ladoC < ladoA + ladoB)){
                    if (ladoA === ladoB && ladoB === ladoC){
                         console.log("\n Triângulo Equilátero");
                    }else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC){
                         console.log("\n Triângulo Isósceles");
                    }else{
                         console.log("\n Triângulo Escaleno");
                    }
               } else {
                    console.log("\n Os valores fornecidos não formam um triângulo!")
               }

               break;

          case 7:
          //* 7

               let quantidadeMacas = Number(prompt("\n Insira a quantidade de maçãs: "));
               let precoUnitario;

               if (quantidadeMacas < 12) {
                    precoUnitario = 0.30;
               } else {
                    precoUnitario = 0.25;
               }

               let valorTotal = quantidadeMacas * precoUnitario;
               console.log(`\n O preço unitário de cada maçã é R$ ${precoUnitario.toFixed(2)}.`);
               console.log(`\n Valor total da compra: R$ ${valorTotal.toFixed(2)}`);

               break;

          case 8:
          //* 8

               let valor1 = Number(prompt("\n Insira o primeiro valor: "));
               let valor2 = Number(prompt("\n Insira o segundo valor: "));

               if (valor1 < valor2) {
                    console.log(`\n ${valor1}\n ${valor2}`);
               } else {
                    console.log(`\n ${valor2}\n ${valor1}`);
               }

               break;

          case 9:
          //* 9

               let codigoOrigem = Number(prompt("\n Insira um código numérico de um produto: "));

               switch (codigoOrigem) {
                    case 1:
                         console.log(`\n Sul`);
                         break;
                    case 2:
                         console.log(`\n Norte`);
                         break;
                    case 3:
                         console.log(`\n Leste`);
                         break;
                    case 4:
                         console.log(`\n Oeste`);
                         break;
                    case 5:
                    case 6:
                         console.log(`\n Nordeste`);
                         break;
                    case (codigoOrigem >= 7 && codigoOrigem <= 9) ? codigoOrigem : 0:
                         console.log(`\n Sudeste`);
                         break;
                    case (codigoOrigem >= 10 && codigoOrigem <= 20) ? codigoOrigem : 0:
                         console.log(`\n Centro-Oeste`);
                         break;
                    case (codigoOrigem >= 25 && codigoOrigem <= 50) ? codigoOrigem : 0:
                         console.log(`\n Nordeste`);
                         break;
                    default:
                         console.log(`\n Produto Importado`);
                         break;
               }

               break;

          case 10: 
          //* 10

               let numeroInteiro = Number(prompt("Insira um número inteiro: "));

               for (let contador = 1; contador <= 10; contador++) {
                    console.log(`${contador}º : ${numeroInteiro}`);
               } 

               break;

          case 11:
          //* 11

               let valorInteiro = Number(prompt("Insira um valor inteiro (positivo para continuar, 0 ou negativo para encerrar): "));

               while (valorInteiro > 0) {
                    if (valorInteiro % 2 === 0) {
                         console.log("O valor é PAR");
                    } else {
                         console.log("O valor é ÍMPAR");
                    }
                    
                    valorInteiro = Number(prompt("Insira um valor inteiro (positivo para continuar, 0 ou negativo para encerrar): "));
               }

               console.log("O valor fornecido não é válido.");

               break;

          case 12:
          //* 12

               for (let num = 1000; num <= 1999; num++) {
                    if (num % 11 === 5){
                         console.log(`Números divididos por 11 que possuem resto igual a 5: ${num}`);
                    }
               }

               break;

          case 13:
          //* 13

               //* Versão 1

               let n = Array();

               for (let cont = 1; cont <= 5; cont++){
                    n[cont] = Number(prompt(`\n Insira o ${cont}º valor: `));
               }

               for (let index = 1; index < n.length; index++) {
                    console.log(`\n Tabuada ${n[index]}`);
                    for (let i = 1; i <= n[index]; i++) {
                         let resultado = n[index] * i;
                         console.log(` ${i} x ${n[index]} = ${resultado}`);
                    }
               }

               break;

               //* Versão 2

               for (let contagem = 1; contagem <= 5; contagem++) {
                    let nTabuada = Number(prompt(` Insira o ${contagem}º valor: `));
                    console.log(`\n Tabuada do ${nTabuada}:`);
                    for (let indice = 1; indice <= nTabuada; indice++) {
                         let result = nTabuada * indice;
                         console.log(` ${indice} x ${nTabuada} = ${result}`);
                    }
                    console.log("\n");
               }

               break;

          case 14:
          //* 14

               let somatorio = 0;
               let contNum = 0;
               let numbers = Number(prompt(" Insira um número (caso deseje encerrar digite 0): "));

               while (numbers !== 0){
                    contNum++;
                    somatorio += numbers;
                    numbers = Number(prompt("\n Insira um número (caso deseje encerrar digite 0): "));
               }

               if (somatorio !== 0) {
                    let media = somatorio/ contNum;
                    console.log(`\n Média: ${media.toFixed(2)}`);
               } else {
                    console.log("\n Nenhum número foi inserido");
               }

               break;

          case 15:
          //* 15

               let somatorioNum = 0;
               let somatorioPeso = 0;
               let numeros = Number(prompt(" Insira um número (caso deseje encerrar digite 0): "));

               while (numeros !== 0){
                    let peso = Number(prompt(" Insira o peso para o número digitado: "));
                    somatorioNum += numeros * peso;
                    somatorioPeso += peso;
                    numeros = Number(prompt("\n Insira um número (caso deseje encerrar digite 0): "));
               }

               if (somatorioPeso !== 0) {
                    let media = somatorioNum/ somatorioPeso;
                    console.log(`\n Média: ${media.toFixed(2)}`);
               } else {
                    console.log("\n Nenhum peso foi fornecido. Não é possível calcular a média ponderada!");
               }

               break;

          case 16:
          //* 16

               let contador = 0;
               let numero = 101; 

               while (contador < 50) {
                    let ehPrimo = true;

                    for (let i = 2; i <= Math.sqrt(numero); i++) { //? O limite máximo poderia ser metade (i <= numero/2)
                         if (numero % i === 0) {
                              ehPrimo = false;
                              break;
                         }
                    }

                    if (ehPrimo) {
                         contador++;
                         console.log(` ${contador}º  número primo (> 100):  ${numero}\n`);
                    }

                    numero++;
               }

          default:
               console.log("\n           Fim da lista!\n");
               process.exit(0);
          }

     console.log("\nPressione Enter para o próximo exercício...");
     input = prompt("");
     exerciseNumber++;
}
