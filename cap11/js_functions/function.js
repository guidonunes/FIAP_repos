function sum(a, b) {
  return a + b;
}


function multiply(a, b) {
  return a * b;
}


console.log(sum(5, 3)); // Output: 8
console.log(multiply(5, 3)); // Output: 15


console.log("--------------------------------------------------")

function subtract(a, b) {
  return a - b;
}

console.log(subtract(10, 4)); // Output: 6


//More examples

function encontrarMaiorMenor() {
  let maior = 0;
  let menor = 100;

  for(let i = 0; i < 10; i++) {
    let num = Math.floor(Math.random()*100) + 1;
    console.log("Número gerado: " + num);


    if (num > maior) {
      maior = num
    }

    if (num < menor) {
      menor = num
    }
  }

  console.log("Maior número: " + maior)
  console.log("Menor número: " + menor)
}


console.log(encontrarMaiorMenor()) // Output: Maior e menor números gerados aleatoriamente


//More examples
console.log("--------------------------------------------------")

function calcularRendimento (valor, taxaJuros, tempo) {
  for (let i = 1; i <= tempo; i++) {
    valor += valor * taxaJuros;
    console.log(`Ano ${i}: Rendimento = ${valor.toFixed(2)}`);
  }
}

calcularRendimento(1000, 0.05, 5); // Output: Rendimento anual de um investimento de 1000 com taxa de juros de 5% ao ano por 5 anos

console.log("--------------------------------------------------")

function calcularPrecoUber(distancia, tempo) {
  const valorBase = 2.5;
  const valorKm = 1.3;
  const valorMin = 0.26;

  const precoDistancia = distancia * valorKm;
  const precoTempo = tempo * valorMin;
  const precoTotal = valorBase + precoDistancia + precoTempo;

  return `O preço da corrida é R$ ${precoTotal.toFixed(2)}`;
}

console.log(calcularPrecoUber(10, 15)); // Output: Preço da corrida de Uber para 10 km e 15 minutos
