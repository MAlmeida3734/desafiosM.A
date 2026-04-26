function removerItem(codigo) {
const historico = getHistorico();
    let hist = JSON.parse(localStorage.getItem('rastreios')) || [];
    hist = historico.filter(item => item !== codigo);
    localStorage.setItem('rastreios', JSON.stringify(historico));
    exibirHistorico();
}
