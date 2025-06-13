function calcularDesconto(preco, porcentagemDesconto ) {
  const desconto = preco * (porcentagemDesconto / 100);
  return preco - desconto;
}


function calcularPrecoFinal(preco, porcentagemDesconto, callback) {
  const precoFinal = callback(preco, porcentagemDesconto);
  console.log(`Preço final após desconto: R$ ${precoFinal.toFixed(2)}`);
  return precoFinal;
}


calcularPrecoFinal(100, 10, calcularDesconto)

//More examples
// function exibirHoraAtual(callback) {
//   setInterval(() => {
//     const agora = new Date();
//     const hora = agora.getHours();
//     const minutos = agora.getMinutes();
//     const segundos = agora.getSeconds();

//     const horaAtual = `${hora}:${minutos}:${segundos}`;
//     callback(horaAtual);
//   }, 1000);
// }

// function exibirHora(horaAtual) {
//   console.log(`Hora atual: ${horaAtual}`);
// }


// exibirHoraAtual(exibirHora);


// More examples
console.log("--------------------------------------------------")

function msg1() {
  console.log("Mensagem 1: Olá, mundo!");
}
function msg2() {
  console.log("Mensagem 2: Bem-vindo ao JavaScript!");
}
function msg3() {
  console.log("Mensagem 3: Programação é divertida!");
}

console.log("---Fluxo de mensagens---");

msg1();
msg2();
msg3();

console.log("");

msg1();
setTimeout(msg2, 2000);
msg3();

//More examples
console.log("--------------------------------------------------")

const somar = (x, y, z) => {
  return x + y + z;
}

const media = (x, y, z) => {
  return (x + y + z) / 3;
}

const calcular = (x, y, z, callback) => {
  return callback(x, y, z)
}

console.log("Chamando a callback")

console.log(`Soma: ${calcular(10, 20, 30, somar)}`); // Output: Soma: 60
