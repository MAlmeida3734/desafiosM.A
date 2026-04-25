function salvarNoHistorico(codigo) {
    let historico = JSON.parse(localStorage.getItem('rastreios')) || [];

    if (!historico.includes(codigo)) {
        historico.push(codigo);
        localStorage.setItem('rastreios', JSON.stringify(historico));
    }
}

function exibirHistorico() {
    const lista = document.getElementById('listaHistorico');
    const secao = document.getElementById('historicoSection');
    let historico = JSON.parse(localStorage.getItem('rastreios')) || [];

    if (historico.length > 0) {
        secao.style.display = 'block';
        lista.innerHTML = historico.map(cod => `
            <li>
                <span>${cod}</span>
                <button onclick="removerItem('${cod}')">x</button>
            </li>
        `).join('');

    } else {
        secao.style.display = 'none';
    }


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