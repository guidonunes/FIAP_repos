(function () {
  let carrinho = "";

  function adicionarAoCarrinho(item) {
    carrinho += item + " ";
    console.log(`Item adicionado: ${item}`);
  }

  function obterCarrinho() {
    return carrinho;
  }

  adicionarAoCarrinho("Maçã");
  adicionarAoCarrinho("Banana");
  adicionarAoCarrinho("Laranja");

  console.log(`Itens no carrinho: ${obterCarrinho()}`);

})();


// more examples
console.log("--------------------------------------------------")

let calcularPrecoLocacao = (function() {
  let precoPorDia = 250; // Preço por dia de locação
  let precoKm = 2.25;

  function calcularPreco(dias, distancia) {
    return (precoPorDia * dias) + (precoKm * distancia);
  }

  return calcularPreco
})();


console.log("Preço da locação: R$ " + calcularPrecoLocacao(5, 100));

console.log("--------------------------------------------------")

const calcularValores = (valor1, valor2) => {
  console.log(`Soma: ${valor1 + valor2}`);
  console.log(`Subtração: ${valor1 - valor2}`);
}

calcularValores(10, 5); // Output: Soma: 15, Subtração: 5
