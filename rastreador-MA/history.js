function salvarNoHistorico(codigo) {
    const getHistorico = () => JSON.parse(localStorage.getItem('rastreios')) || [];
    const el = (id) => document.getElementById(id);

    const historico = getHistorico();
    if (!historico.includes(codigo)) {
        historico.push(codigo);
        localStorage.setItem('rastreios', JSON.stringify(historico));
    }
}

function exibirHistorico() {
    const el = (id) => document.getElementById(id);
    const getHistorico = () => JSON.parse(localStorage.getItem('rastreios')) || [];
    const historico = getHistorico();
    const lista = el('listaHistorico').innerHTML = historico.map(cod => `
        <li>${cod} <button onclick="removerItem('${cod}')">x</button></li>
    `).join('');
    const secao = el('historicoSection').style.display = historico.length ? 'block' : 'none';
}

function limparHistoricoTodo() {
    Swal.fire({
        title: 'Tem certeza?',
        text: "Isso apagará todos os códigos salvos!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#00416b',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sim, limpar!',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            localStorage.removeItem('rastreios');
            exibirHistorico();

            Swal.fire(
                'Limpo!',
                'Seu histórico foi removido.',
                'success'
            );
        }
    });
}