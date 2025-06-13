const calcularValorHospedagem = (diarias, valorDiaria, taxaLimpeza) => {
  return diarias * valorDiaria + taxaLimpeza;
}


const valorHospedagem = calcularValorHospedagem(9, 500, 300);
console.log(`Valor total da hospedagem: R$ ${valorHospedagem.toFixed(2)}`);


//Validar um login

const validarLogin = (usuario, senha) => {
  const usuarioRegistrado = "admin";
  const senhaRegistrada = "123456";

  if (usuario === usuarioRegistrado && senha === senhaRegistrada) {
    console.log("Login realizado com sucesso!");
    return true;
  } else {
    console.log("Usuário ou senha inválidos.");
    return false;
  }

}

const user1 = validarLogin("admin", "123456"); // Output: Login realizado com sucesso!


// password generator

const gerarSenha = () => {
const caracteres =  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
  let senha = "";
  const tamanhoSenha = 12;

  for (let i = 0; i < tamanhoSenha; i++) {
    const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
    senha += caracteres[indiceAleatorio];
  }

  return senha;
}

const senhaGerada = gerarSenha();

console.log(`Senha gerada: ${senhaGerada}`); // Output: Senha gerada aleatoriamente de 12 caracteres
