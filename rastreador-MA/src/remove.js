function removerItem(codigo) {
    let historico = JSON.parse(localStorage.getItem('rastreios')) || [];
    historico = historico.filter(item => item !== codigo);
    localStorage.setItem('rastreios', JSON.stringify(historico));
    exibirHistorico();
}
