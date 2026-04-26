function rastrear() {
    const codigoInput = document.getElementById('codigoRastreio');
    const codigo = codigoInput.value.trim().toUpperCase();

    const formatoCorreios = /^[A-Z]{2}[0-9]{9}[A-Z]{2}$/;

    if (codigo === "") {
        Swal.fire({ title: 'Campo Vazio', icon: 'error' });
        return;
    }

    codigoInput.classList.remove('classe-erro');

    if (!formatoCorreios.test(codigo)) {

        codigoInput.classList.add('classe-erro');

        Swal.fire({
            title: 'Formato Inválido',
            text: 'O código deve seguir o padrão: 2 letras, 9 números e 2 letras (Ex: AA123456789BR)',
            icon: 'warning',
            confirmButtonColor: '#00416b'
        });
        return;
    }


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
        void codigoInput.offsetWidth;


        Swal.fire({
            title: 'Código Inválido',
            text: 'Um código padrão tem 13 caracteres (Ex: AA123456789BR).',
            icon: 'warning',
            confirmButtonColor: '#00416b'
        });
        return;
    }

    salvarNoHistorico(codigo);
    const url = `https://correios.com.br{codigo}`;
    window.open(url, '_blank');

    codigoInput.value = "";
    exibirHistorico();
}

document.getElementById('codigoRastreio').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') rastrear();
});
