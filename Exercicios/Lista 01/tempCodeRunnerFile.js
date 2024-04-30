let n = Array();

for (let cont = 1; cont <= 5; cont++){
     n[cont] = Number(prompt(`\n Insira o ${cont}º valor: `));
}

for (let index = 1; index <= n.length; index++) {
     console.log(`\n Tabuada ${n[index]}`);
     for (let i = 0; i <= n[index-1]; i++) {
          let resultado = n[index] * i;
          console.log(` ${i} x ${n[index]} = ${resultado}`);
     }
}
