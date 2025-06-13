const simularValorPassagem = function(qtdAdultos, qtdCriancas, idaVolta) {
  const PRECO_PASSAGEM = 1000;

  const valorAdulto = PRECO_PASSAGEM * qtdAdultos;
  const valorCrianca = (PRECO_PASSAGEM * 0.5) * qtdCriancas;


  if(idaVolta) {
    return (valorAdulto + valorCrianca) * 2;
  }
  else {
    return valorAdulto + valorCrianca;
  }
}


let valorPassagem = simularValorPassagem(2, 3, false);
console.log(`Valor total da passagem: R$ ${valorPassagem.toFixed(2)}`);

valorPassagem = simularValorPassagem(3, 0, true);
console.log(`Valor total da passagem: R$ ${valorPassagem.toFixed(2)}`);
