function removerItem(codigo) {
    const getHistorico = () => JSON.parse(localStorage.getItem('rastreios')) || [];
    const historico = getHistorico();
    let hist = JSON.parse(localStorage.getItem('rastreios')) || [];
    hist = historico.filter(item => item !== codigo);
    localStorage.setItem('rastreios', JSON.stringify(historico));
    exibirHistorico();
}
