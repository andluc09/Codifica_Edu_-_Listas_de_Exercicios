
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
} while (continuar);

let media = somatorio / quantidadeValores;

console.log(`\nSomatório dos valores: ${somatorio}`);
console.log(`\nMenor valor digitado: ${menorValor}`);
console.log(`\nMédia dos valores: ${media.toFixed(2)}`);
console.log(`\nQuantidade de valores pares: ${quantidadePares}`);
