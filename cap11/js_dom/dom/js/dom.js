// const getId = document.getElementById("vingadores");
// console.log(getId);



// const getClass = document.getElementsByClassName("nome");

// console.log(getClass);

const getTag = document.getElementsByTagName("td");
const dataAtualizacao = document.querySelector("[data-JS]");


getTag[5].textContent = "Homem Aranha";

const dataAtual = new Date();

const formatarData = Intl.DateTimeFormat("pt-BR", {
  dateStyle: "long"
})

dataAtualizacao.textContent += formatarData.format(dataAtual);


const btnCalcular = document.querySelector("#calcular");

btnCalcular.addEventListener("click", () => {
  const vingadores = document.querySelectorAll(".vingador");
  console.log(vingadores);

  vingadores.forEach(vingador => {
    const forca = Number(vingador.querySelector(".forca").textContent);
    const agilidade = Number(vingador.querySelector(".agilidade").textContent);
    const velocidade = Number(vingador.querySelector(".velocidade").textContent);

    const resultadoXP =(forca + agilidade + velocidade) / 3;

    vingador.querySelector(".xp-Final").textContent = resultadoXP.toFixed(1);

    if(resultadoXP <= 91) {
      vingador.classList.add("bg-danger", "text-light")
    }
  })
})
