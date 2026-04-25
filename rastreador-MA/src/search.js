function rastrear() {
    const codigoInput = document.getElementById('codigoRastreio');
    const codigo = codigoInput.value.trim().toUpperCase();

    if (codigo === "") {
        if (typeof Swal !== 'undefined') {
            Swal.fire({
                title: 'Atenção!',
                text: 'Digite um código de rastreio.',
                icon: 'warning',
                confirmButtonColor: '#00416b'
            });
        } else {
            alert("Por favor, digite um código."); 
        }
        return;
    }

     if (codigo.length !== 13) {
        Swal.fire({
            title: 'Código Inválido',
            text: 'Um código padrão tem 13 caracteres (Ex: AA123456789BR).',
            icon: 'warning',
            confirmButtonColor: '#00416b'
        });
        return;
    }
    
    
    document.getElementById('codigoRastreio').addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            rastrear();
        }
    })

    salvarNoHistorico(codigo);
    const url = `https://correios.com.br{codigo}`;
    window.open(url, '_blank');
    
    codigoInput.value = "";
    exibirHistorico();
}

function salvarNoHistorico(codigo) {
    let historico = JSON.parse(localStorage.getItem('rastreios')) || [];
    
    if (!historico.includes(codigo)) {
        historico.push(codigo);
        localStorage.setItem('rastreios', JSON.stringify(historico));
    }
}

function exibirHistorico() {
    const lista = document.getElementById('listaHistorico');
    let historico = JSON.parse(localStorage.getItem('rastreios')) || [];
    
    lista.innerHTML = historico.map(cod => `
        <li>
            <span>${cod}</span>
            <button onclick="removerItem('${cod}')">x</button>
        </li>
    `).join('');
}

function removerItem(codigo) {
    let historico = JSON.parse(localStorage.getItem('rastreios')) || [];
    historico = historico.filter(item => item !== codigo);
    localStorage.setItem('rastreios', JSON.stringify(historico));
    exibirHistorico();
}

document.getElementById('codigoRastreio').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') rastrear();
});
