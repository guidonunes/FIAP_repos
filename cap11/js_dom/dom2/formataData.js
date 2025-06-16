function formataData() {
    //pegando o Atributo na página HTML
    const dataAtualizacao = document.querySelector('[dataJS]');
    //pegando a data completa
    const dataAtual = new Date();
    //formatando a data
    const formatarData = Intl.DateTimeFormat('pt-BR', {
        dateStyle: "long",
    });
    dataAtualizacao.textContent += formatarData.format(dataAtual);
}
